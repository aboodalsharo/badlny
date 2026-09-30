// Reports rule/file identifiers only; never prints matched credentials.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export function inspectText(file, source) {
  const findings = [];
  const normalized = file.replaceAll('\\', '/');
  const base = path.posix.basename(normalized);
  if ((/^\.env(?:\.|$)/i.test(base) && base !== '.env.example')
    || /(?:^|\/)(?:\.temp|\.branches|\.netlify|backups|exports|logs|node_modules)(?:\/|$)/i.test(normalized)
    || /(?:secrets|credentials).*\.json$/i.test(base)
    || /\.(?:pem|key|p12|pfx|sqlite3?|db|dump|backup|bak)$/i.test(base)
    || normalized === 'scripts/configure-backend.ps1' || normalized.startsWith('security/')) {
    findings.push('prohibited-private-artifact');
  }
  const patterns = [
    ['supabase-secret', /\bsb_secret_[A-Za-z0-9_-]{20,}\b/],
    ['github-token', /\b(?:github_pat_[A-Za-z0-9_]{20,}|gh[pousr]_[A-Za-z0-9]{20,})\b/],
    ['netlify-token', /\bnfp_[A-Za-z0-9_-]{20,}\b/],
    ['private-key', /-----BEGIN (?:[A-Z]+ )?PRIVATE KEY-----/]
  ];
  for (const [rule, pattern] of patterns) if (pattern.test(source)) findings.push(rule);
  for (const match of source.matchAll(/\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g)) {
    try {
      const payload = JSON.parse(Buffer.from(match[0].split('.')[1], 'base64url').toString('utf8'));
      if (payload.role === 'service_role') findings.push('privileged-jwt');
    } catch { /* Not a parsable JWT. */ }
  }
  for (const match of source.matchAll(/postgres(?:ql)?:\/\/[^\s'"/]+:[^\s'"@]+@[^\s'"`]+/gi)) {
    if (!match[0].includes('${') && !match[0].includes('YOUR_')) findings.push('database-password-url');
  }
  return [...new Set(findings)];
}

function git(root, args) {
  const result = spawnSync('git', args, { cwd: root, encoding: 'utf8', windowsHide: true, maxBuffer: 32 * 1024 * 1024 });
  if (result.status !== 0) throw new Error('Unable to inspect Git content. Initialize/stage reviewed source first.');
  return result.stdout;
}

export function scanRepository(root, history = false) {
  const files = git(root, ['ls-files', '-z']).split('\0').filter(Boolean);
  if (!files.length) throw new Error('No tracked files to check. Stage the reviewed source first.');
  const findings = [];
  const inspect = (file, source, historical = false) => {
    for (const rule of inspectText(file, source)) findings.push({ file, rule, historical });
  };
  for (const file of files) {
    const binary = /\.(?:png|jpe?g|webp|gif|ico)$/i.test(file);
    inspect(file, binary ? '' : git(root, ['show', `:${file}`]));
  }
  if (history) {
    const objects = git(root, ['rev-list', '--objects', '--all']).split('\n');
    for (const line of objects) {
      const match = /^([a-f0-9]{40,64}) (.+)$/.exec(line);
      if (!match) continue;
      const [, object, file] = match;
      const type = git(root, ['cat-file', '-t', object]).trim();
      if (type !== 'blob') continue;
      inspect(file, /\.(?:png|jpe?g|webp|gif|ico)$/i.test(file) ? '' : git(root, ['cat-file', 'blob', object]), true);
    }
  }
  return { files: files.length, findings };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
    const result = scanRepository(root, process.argv.includes('--history'));
    if (result.findings.length) {
      for (const item of result.findings) console.error(`${item.historical ? 'history' : 'tracked'}: ${item.file} [${item.rule}]`);
      process.exitCode = 1;
    } else {
      console.log(`Repository guard passed: ${result.files} tracked files; no prohibited artifacts or supported secret patterns detected.`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
