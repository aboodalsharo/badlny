import { spawn, spawnSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Pool } from 'pg';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const migrationDirectory = path.join(projectRoot, 'supabase', 'migrations');
const privateDirectory = path.join(projectRoot, 'supabase', '.temp');
const credentialsPath = path.join(privateDirectory, 'badlny-local-secrets.json');
const dockerEnvPath = path.join(privateDirectory, 'badlny-local-db.env');
const networkName = 'badlny-local-supabase';
const databaseContainer = 'badlny-local-postgres';
const databaseVolume = 'badlny-local-postgres-data';
const databasePort = 55522;
const databaseImage = 'postgres:17-alpine';
const previewPort = process.env.BADLNY_PREVIEW_PORT || '4173';

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: projectRoot,
    encoding: 'utf8',
    windowsHide: true,
    maxBuffer: 16 * 1024 * 1024
  });
  if (result.error) throw new Error(`تعذر تشغيل أداة قاعدة البيانات المحلية: ${result.error.message}`);
  return result;
}

function requireSuccess(result, message) {
  if (result.status !== 0) throw new Error(message);
}

function ensureLoopbackNetwork() {
  const inspect = run('docker', ['network', 'inspect', '--format', '{{json .}}', networkName]);
  if (inspect.status !== 0) {
    const create = run('docker', [
      'network', 'create', '--driver', 'bridge',
      '--opt', 'com.docker.network.bridge.host_binding_ipv4=127.0.0.1',
      '--opt', 'com.docker.network.enable_ipv6=false', networkName
    ]);
    requireSuccess(create, 'تعذر إنشاء شبكة Docker محلية.');
  }
  const verified = run('docker', ['network', 'inspect', '--format', '{{json .}}', networkName]);
  requireSuccess(verified, 'تعذر فحص شبكة Docker المحلية.');
  let network;
  try { network = JSON.parse(verified.stdout); } catch { throw new Error('تعذر قراءة إعداد الشبكة المحلية.'); }
  if (network.Driver !== 'bridge' || network.Options?.['com.docker.network.bridge.host_binding_ipv4'] !== '127.0.0.1'
    || network.Options?.['com.docker.network.enable_ipv6'] !== 'false') {
    throw new Error('شبكة قاعدة البيانات ليست معزولة كما ينبغي؛ أوقفت التشغيل.');
  }
}

async function loadLocalCredentials() {
  await mkdir(privateDirectory, { recursive: true });
  let credentials;
  try {
    credentials = JSON.parse(await readFile(credentialsPath, 'utf8'));
    if (!/^[A-Za-z0-9_-]{40,}$/.test(credentials.postgresPassword || '')
      || !/^[A-Za-z0-9_-]{40,}$/.test(credentials.serverPassword || '')) {
      throw new Error('ملف بيانات قاعدة البيانات المحلية غير صالح.');
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    credentials = {
      postgresPassword: randomBytes(48).toString('base64url'),
      serverPassword: randomBytes(48).toString('base64url')
    };
    await writeFile(credentialsPath, `${JSON.stringify(credentials)}\n`, { encoding: 'utf8', mode: 0o600, flag: 'wx' });
  }
  await writeFile(dockerEnvPath, `POSTGRES_USER=postgres\nPOSTGRES_DB=postgres\nPOSTGRES_PASSWORD=${credentials.postgresPassword}\n`, {
    encoding: 'utf8', mode: 0o600, flag: 'w'
  });
  return credentials;
}

function inspectDatabaseContainer() {
  const result = run('docker', [
    'inspect', '--format', '{{json .HostConfig.PortBindings}}|{{json .NetworkSettings.Networks}}|{{.State.Running}}|{{.Config.Image}}',
    databaseContainer
  ]);
  if (result.status !== 0) return null;
  const [portsJson, networksJson, runningText, image] = result.stdout.trim().split('|');
  let ports;
  let networks;
  try {
    ports = JSON.parse(portsJson);
    networks = JSON.parse(networksJson);
  } catch { throw new Error('تعذر فحص حاوية PostgreSQL المحلية.'); }
  const bindings = ports?.['5432/tcp'] || [];
  if (!bindings.some(binding => binding.HostIp === '127.0.0.1' && binding.HostPort === String(databasePort))
    || !networks?.[networkName] || image !== databaseImage) {
    throw new Error('حاوية PostgreSQL الموجودة ليست مربوطة على localhost فقط؛ لم ألمسها.');
  }
  return { running: runningText === 'true' };
}

function ensureDatabaseContainer() {
  const existing = inspectDatabaseContainer();
  if (existing) {
    if (!existing.running) requireSuccess(run('docker', ['start', databaseContainer]), 'تعذر إعادة تشغيل قاعدة البيانات المحلية.');
    return;
  }
  requireSuccess(run('docker', ['volume', 'create', databaseVolume]), 'تعذر إنشاء وحدة حفظ بيانات PostgreSQL المحلية.');
  const created = run('docker', [
    'run', '--detach', '--name', databaseContainer,
    '--network', networkName,
    '--publish', `127.0.0.1:${databasePort}:5432`,
    '--mount', `type=volume,source=${databaseVolume},target=/var/lib/postgresql/data`,
    '--env-file', dockerEnvPath,
    '--health-cmd', 'pg_isready -U postgres -d postgres',
    '--health-interval', '2s', '--health-timeout', '3s', '--health-retries', '30',
    '--label', 'io.badlny.local-only=true', databaseImage
  ]);
  requireSuccess(created, 'تعذر إنشاء حاوية PostgreSQL المحلية على المنفذ 55522.');
}

async function waitForDatabase(postgresPassword) {
  const connectionString = `postgresql://postgres:${postgresPassword}@127.0.0.1:${databasePort}/postgres`;
  const adminPool = new Pool({ connectionString, max: 1, connectionTimeoutMillis: 1500, idleTimeoutMillis: 1000 });
  const deadline = Date.now() + 45000;
  while (Date.now() < deadline) {
    try {
      await adminPool.query('select 1');
      return { adminPool, connectionString };
    } catch {
      await new Promise(resolve => setTimeout(resolve, 750));
    }
  }
  await adminPool.end();
  throw new Error('بدأت حاوية PostgreSQL لكن قاعدة البيانات لم تصبح جاهزة خلال المهلة.');
}

function sqlLiteral(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

async function applyLocalMigrations(adminPool) {
  await adminPool.query('create schema if not exists badlny_local_meta');
  await adminPool.query('revoke all on schema badlny_local_meta from public');
  await adminPool.query('create table if not exists badlny_local_meta.migrations (version text primary key, applied_at timestamptz not null default now())');
  await adminPool.query('revoke all on badlny_local_meta.migrations from public');

  for (const role of ['anon', 'authenticated', 'service_role', 'badlny_server']) {
    const { rowCount } = await adminPool.query('select 1 from pg_catalog.pg_roles where rolname = $1', [role]);
    if (!rowCount) await adminPool.query(`create role ${role} nologin`);
  }

  const migrationFiles = (await readdir(migrationDirectory))
    .filter(file => file.endsWith('.sql')).sort();
  for (const file of migrationFiles) {
    const version = file.replace(/\.sql$/, '');
    const alreadyApplied = await adminPool.query('select 1 from badlny_local_meta.migrations where version = $1', [version]);
    if (alreadyApplied.rowCount) continue;
    const sql = await readFile(path.join(migrationDirectory, file), 'utf8');
    const client = await adminPool.connect();
    try {
      await client.query('begin');
      await client.query(sql);
      await client.query('insert into badlny_local_meta.migrations(version) values ($1)', [version]);
      await client.query('commit');
    } catch {
      await client.query('rollback').catch(() => {});
      throw new Error('فشل تطبيق مخطط قاعدة البيانات المحلية؛ لم تُحفظ هجرة جزئية.');
    } finally {
      client.release();
    }
  }
}

async function startPreview(serverPassword) {
  const databaseUrl = `postgresql://badlny_server:${serverPassword}@127.0.0.1:${databasePort}/postgres`;
  const child = spawn(process.execPath, [path.join(projectRoot, 'scripts', 'local-preview.mjs'), previewPort], {
    cwd: projectRoot,
    windowsHide: true,
    stdio: 'inherit',
    env: {
      ...process.env,
      BADLNY_LOCAL_DATABASE_URL: databaseUrl,
      BADLNY_LOCAL_SESSION_SECRET: randomBytes(48).toString('base64url')
    }
  });
  child.once('error', error => {
    console.error(`تعذر تشغيل واجهة المعاينة المحلية: ${error.message}`);
    process.exitCode = 1;
  });
  child.once('exit', code => { if (code && code !== 0) process.exitCode = code; });
  const stop = () => { if (child.exitCode === null && !child.killed) child.kill('SIGTERM'); };
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);
  child.once('exit', () => {
    process.removeListener('SIGINT', stop);
    process.removeListener('SIGTERM', stop);
  });
}

async function main() {
  if (process.env.NETLIFY || process.env.CONTEXT || process.env.DEPLOY_URL) {
    throw new Error('وضع قاعدة البيانات مخصص للتشغيل المحلي فقط.');
  }
  console.log('Building the local course catalog…');
  requireSuccess(run(process.execPath, [path.join(projectRoot, 'scripts', 'build.mjs')]), 'فشل تجهيز ملفات الموقع المحلية.');
  console.log('Preparing loopback-only Docker network and local credentials…');
  ensureLoopbackNetwork();
  const credentials = await loadLocalCredentials();
  ensureDatabaseContainer();
  console.log('Starting local PostgreSQL…');
  const { adminPool } = await waitForDatabase(credentials.postgresPassword);
  try {
    await applyLocalMigrations(adminPool);
    await adminPool.query(`alter role badlny_server login connection limit 5 password ${sqlLiteral(credentials.serverPassword)}`);
  } finally {
    await adminPool.end();
  }

  const checkPool = new Pool({
    connectionString: `postgresql://badlny_server:${credentials.serverPassword}@127.0.0.1:${databasePort}/postgres`,
    max: 1, connectionTimeoutMillis: 5000
  });
  try {
    const check = await checkPool.query('select current_user as role, (select count(*) from public.requests) as request_count');
    if (check.rows[0]?.role !== 'badlny_server') throw new Error('فشل التحقق من صلاحيات مستخدم التطبيق المحلي.');
  } finally {
    await checkPool.end();
  }

  console.log('Local database is ready and bound only to 127.0.0.1:55522. Starting Badlny…');
  await startPreview(credentials.serverPassword);
}

main().catch(error => {
  console.error(error.message || 'تعذر بدء قاعدة البيانات المحلية.');
  process.exitCode = 1;
});
