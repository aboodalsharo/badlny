import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { createHmac, randomBytes, randomUUID } from 'node:crypto';
import { Pool } from 'pg';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(projectRoot, 'public');
const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/availability.js', ['availability.js', 'text/javascript; charset=utf-8']],
  ['/coursesData.js', ['coursesData.js', 'text/javascript; charset=utf-8']],
  ['/style.css', ['style.css', 'text/css; charset=utf-8']],
  ['/redesign.css', ['redesign.css', 'text/css; charset=utf-8']]
]);
const localCsrfToken = randomBytes(32).toString('base64url');
const previewRequests = new Map();
const localDatabaseUrl = process.env.BADLNY_LOCAL_DATABASE_URL || '';
const localSessionSecret = process.env.BADLNY_LOCAL_SESSION_SECRET || '';
const useLocalDatabase = Boolean(localDatabaseUrl || localSessionSecret);
let localDatabasePool;

if (useLocalDatabase) {
  let localUrl;
  try { localUrl = new URL(localDatabaseUrl); } catch { throw new Error('Local database URL is missing or invalid.'); }
  if (!['postgres:', 'postgresql:'].includes(localUrl.protocol) || localUrl.hostname !== '127.0.0.1'
    || localUrl.port !== '55522' || localUrl.username !== 'badlny_server'
    || localUrl.pathname !== '/postgres' || !localUrl.password || localSessionSecret.length < 40) {
    throw new Error('Local database mode requires a loopback-only PostgreSQL account.');
  }
  localDatabasePool = new Pool({ connectionString: localDatabaseUrl, max: 5, connectionTimeoutMillis: 5000, idleTimeoutMillis: 30000 });
}

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(await readFile(path.join(projectRoot, 'coursesData.js'), 'utf8'), sandbox, { timeout: 1000 });
const coursesById = new Map(sandbox.JUST_COURSES.map(course => [course.id, course]));

function setSecurityHeaders(response) {
  response.setHeader('X-Frame-Options', 'DENY');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; script-src-attr 'none'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; frame-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
  response.setHeader('Cache-Control', 'no-store');
}

function sendJson(response, status, value) {
  setSecurityHeaders(response);
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(value));
}

async function readJson(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 10_000) throw new Error('حجم الطلب أكبر من المسموح للمعاينة المحلية.');
    chunks.push(chunk);
  }
  try {
    const value = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error();
    return value;
  } catch {
    throw new Error('تعذر قراءة بيانات الطلب التجريبي.');
  }
}

function digest(value) {
  return createHmac('sha256', localSessionSecret).update(value).digest('base64url');
}

function normalizePhone(value) {
  if (typeof value !== 'string' || value.length > 32) return null;
  const phone = value.replace(/[\s()+-]/g, '');
  const normalized = phone.startsWith('07') ? `962${phone.slice(1)}` : phone;
  return /^9627[789]\d{7}$/.test(normalized) ? normalized : null;
}

function validPin(pin) {
  return typeof pin === 'string' && pin.trim().length >= 4 && pin.length <= 64
    && Buffer.byteLength(pin, 'utf8') <= 72;
}

function validRequestId(id) {
  return typeof id === 'string' && /^[A-Za-z0-9_-]{1,100}$/.test(id);
}

function validSections(current, desired) {
  return typeof current === 'string' && /^[1-9]\d?$/.test(current)
    && Array.isArray(desired) && desired.length > 0 && desired.length <= 8
    && desired.every(section => typeof section === 'string' && /^[1-9]\d?$/.test(section))
    && new Set(desired).size === desired.length && !desired.includes(current);
}

function boundedText(value, max) {
  return typeof value === 'string' && value.length <= max
    && !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value) ? value.trim() : null;
}

async function allow(request, scope, seconds, hits) {
  if (!useLocalDatabase) return true;
  const ip = request.socket.remoteAddress || '127.0.0.1';
  const result = await localDatabasePool.query(
    'select public.badlny_rate_limit($1, $2, $3) as allowed',
    [scope(ip), seconds, hits]
  );
  return result.rows[0]?.allowed === true;
}

async function handleDatabaseApi(request, response, pathname) {
  const origin = `http://${request.headers.host || '127.0.0.1'}`;
  const clientKey = digest('client:local-preview-session');

  if (request.method === 'GET' && pathname === '/api/session') {
    if (!await allow(request, ip => `session:${digest(`ip:${ip}`)}`, 3600, 100)) {
      return sendJson(response, 429, { message: 'طلبات كثيرة. يرجى الانتظار والمحاولة لاحقًا.' });
    }
    return sendJson(response, 200, { csrfToken: localCsrfToken });
  }

  if (request.method === 'GET' && pathname === '/api/requests') {
    if (!await allow(request, ip => `list:${digest(`ip:${ip}`)}`, 300, 200)) {
      return sendJson(response, 429, { message: 'طلبات كثيرة. يرجى الانتظار.' });
    }
    const { rows } = await localDatabasePool.query(
      'select id, courseid, coursecode, coursecodeen, coursenamear, facultyid, facultyname, departmentid, departmentname, line, currentsection, desiredsections, studentname, notes, createdat from public.requests order by createdat desc limit 500'
    );
    return sendJson(response, 200, rows);
  }

  if (request.method !== 'POST') return sendJson(response, 405, { message: 'طريقة غير مسموحة.' });
  let requestUrl;
  try { requestUrl = new URL(request.url, origin); } catch { return sendJson(response, 400, { message: 'طلب غير صالح.' }); }
  if (requestUrl.origin !== origin || request.headers.origin !== origin
    || (request.headers['sec-fetch-site'] && request.headers['sec-fetch-site'] !== 'same-origin')
    || request.headers['x-csrf-token'] !== localCsrfToken) {
    return sendJson(response, 403, { message: 'طلب غير مسموح. حدّث الصفحة وحاول مجددًا.' });
  }

  let body;
  try { body = await readJson(request); } catch { return sendJson(response, 400, { message: 'بيانات الطلب غير صالحة.' }); }
  const action = pathname === '/api/contact' ? 'contact' : pathname === '/api/delete' ? 'delete' : 'create';
  if (pathname !== '/api/contact' && pathname !== '/api/delete' && pathname !== '/api/requests') {
    return sendJson(response, 404, { message: 'غير موجود.' });
  }
  const hourly = action === 'contact' ? 30 : action === 'delete' ? 15 : 6;
  if (!await allow(request, ip => `${action}:ip:${digest(`ip:${ip}`)}`, 3600, hourly * 5)
    || !await allow(request, () => `${action}:client:${clientKey}`, 3600, hourly)) {
    return sendJson(response, 429, { message: 'وصلت إلى حد الطلبات. يرجى الانتظار قبل المحاولة مجددًا.' });
  }

  if (pathname === '/api/contact') {
    if (!validRequestId(body.id)) return sendJson(response, 400, { message: 'طلب غير صالح.' });
    const { rows } = await localDatabasePool.query('select phone from public.requests where id = $1 limit 1', [body.id]);
    const phone = normalizePhone(rows[0]?.phone);
    return phone
      ? sendJson(response, 200, { phone })
      : sendJson(response, 404, { message: 'الطلب غير موجود أو رقم التواصل غير صالح.' });
  }

  if (pathname === '/api/delete') {
    if (!validRequestId(body.id) || !validPin(body.pin)) {
      return sendJson(response, 400, { message: 'بيانات الطلب غير صالحة.' });
    }
    if (!await allow(request, () => `delete:request:${digest(body.id)}`, 3600, 5)) {
      return sendJson(response, 429, { message: 'وصل الطلب إلى حد المحاولات. يرجى المحاولة بعد ساعة.' });
    }
    const { rows } = await localDatabasePool.query('select public.delete_swap_request($1, $2) as result', [body.id, body.pin]);
    const result = rows[0]?.result;
    return sendJson(response, 200, {
      success: result?.success === true,
      ...(result?.success === true ? {} : { message: 'تعذر التحقق من كلمة السر، أو أن الطلب لم يعد متاحًا.' })
    });
  }

  const courseId = boundedText(body.courseId, 100);
  const course = coursesById.get(courseId);
  const name = boundedText(body.studentName, 60);
  const notes = boundedText(body.notes, 600);
  const phone = normalizePhone(body.phone);
  if (!course || name === null || notes === null || !phone || !validPin(body.pin) || body.consent !== true
    || !validSections(body.currentSection, body.desiredSections)) {
    return sendJson(response, 400, { message: 'راجع المادة والشعب ورقم الهاتف وكلمة السر والموافقة على مشاركة التواصل.' });
  }
  if (/\b(?:0?7[789]\d{7}|9627[789]\d{7})\b/.test(notes)) {
    return sendJson(response, 400, { message: 'لا تكتب رقم هاتف في الملاحظات العامة.' });
  }

  const faculty = sandbox.JUST_FACULTIES.find(item => item.id === course.facultyId);
  const department = faculty?.departments.find(item => item.id === course.departmentId);
  const requestData = {
    courseid: course.id, coursecode: course.code, coursecodeen: course.codeEn || '', coursenamear: course.nameAr,
    facultyid: course.facultyId, facultyname: faculty?.nameAr || '', departmentid: course.departmentId,
    departmentname: department?.nameAr || course.departmentName || '', line: String(course.line || ''),
    currentsection: body.currentSection, desiredsections: body.desiredSections,
    studentname: name || 'طالب مجهول', phone, notes
  };
  const availableSections = new Set(course.sections.map(String));
  if (!availableSections.has(body.currentSection)
    || body.desiredSections.some(section => !availableSections.has(section))) {
    return sendJson(response, 400, { message: 'راجع الشعب المتاحة لهذه المادة.' });
  }
  const { rows } = await localDatabasePool.query(
    'select public.badlny_create_request($1::jsonb, $2::text) as result', [JSON.stringify(requestData), body.pin]
  );
  const result = rows[0]?.result;
  return sendJson(response, 201, { id: result.id, createdAt: result.createdAt });
}

function publicRequest(row) {
  const fields = ['id', 'courseid', 'coursecode', 'coursecodeen', 'coursenamear', 'facultyid', 'facultyname',
    'departmentid', 'departmentname', 'line', 'currentsection', 'desiredsections', 'studentname', 'notes', 'createdat'];
  return Object.fromEntries(fields.map(field => [field, row[field]]));
}

async function handleApi(request, response, pathname) {
  if (useLocalDatabase) return handleDatabaseApi(request, response, pathname);
  if (request.method === 'GET' && pathname === '/api/session') {
    return sendJson(response, 200, { csrfToken: localCsrfToken });
  }
  if (request.method === 'GET' && pathname === '/api/requests') {
    return sendJson(response, 200, [...previewRequests.values()].map(publicRequest));
  }
  if (!['POST'].includes(request.method)) {
    return sendJson(response, 405, { message: 'هذه العملية غير مدعومة في المعاينة المحلية.' });
  }
  if (request.headers['x-csrf-token'] !== localCsrfToken) {
    return sendJson(response, 403, { message: 'انتهت جلسة المعاينة المحلية. حدّث الصفحة وحاول مجددًا.' });
  }

  let body;
  try {
    body = await readJson(request);
  } catch (error) {
    return sendJson(response, 400, { message: error.message });
  }

  if (pathname === '/api/requests') {
    const course = coursesById.get(String(body.courseId || ''));
    const phone = String(body.phone || '').replace(/[\s()+-]/g, '');
    const pin = String(body.pin || '');
    const studentName = String(body.studentName || 'طالب مجهول').trim();
    const notes = String(body.notes || '').trim();
    const currentSection = String(body.currentSection || '');
    const desiredSections = Array.isArray(body.desiredSections) ? body.desiredSections.map(String) : [];
    if (!course || body.consent !== true || !/^07[789]\d{7}$/.test(phone)
      || pin.length < 4 || Buffer.byteLength(pin, 'utf8') > 72
      || !currentSection || !desiredSections.length
      || !course.sections.map(String).includes(currentSection)
      || desiredSections.some(section => !course.sections.map(String).includes(section))
      || studentName.length > 80 || notes.length > 500) {
      return sendJson(response, 400, { message: 'راجع المادة والشعبة ورقم الهاتف وكلمة السر والموافقة.' });
    }

    const id = `local_${randomUUID()}`;
    const faculty = sandbox.JUST_FACULTIES.find(item => item.id === course.facultyId);
    previewRequests.set(id, {
      id,
      courseid: course.id,
      coursecode: course.code,
      coursecodeen: course.codeEn || '',
      coursenamear: course.nameAr,
      facultyid: course.facultyId,
      facultyname: faculty?.nameAr || course.facultyName,
      departmentid: course.departmentId,
      departmentname: course.departmentName,
      line: course.line,
      currentsection: currentSection,
      desiredsections: desiredSections,
      studentname: studentName || 'طالب مجهول',
      notes,
      createdat: new Date().toISOString(),
      phone,
      pin
    });
    return sendJson(response, 201, { id });
  }

  if (pathname === '/api/contact') {
    const row = previewRequests.get(String(body.id || ''));
    return row
      ? sendJson(response, 200, { phone: row.phone })
      : sendJson(response, 404, { message: 'الطلب التجريبي غير موجود.' });
  }

  if (pathname === '/api/delete') {
    const row = previewRequests.get(String(body.id || ''));
    if (!row) return sendJson(response, 404, { message: 'الطلب التجريبي غير موجود.' });
    if (row.pin !== String(body.pin || '')) {
      return sendJson(response, 200, { success: false, message: 'كلمة السر غير صحيحة.' });
    }
    previewRequests.delete(row.id);
    return sendJson(response, 200, { success: true, message: 'حُذف الطلب التجريبي من ذاكرة المعاينة.' });
  }

  return sendJson(response, 404, { message: 'مسار غير موجود في المعاينة المحلية.' });
}

async function handleRequest(request, response) {
  setSecurityHeaders(response);
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }

  if (pathname.startsWith('/api/')) {
    await handleApi(request, response, pathname);
    return;
  }

  const asset = assets.get(pathname);
  if (!asset || !['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }

  let content = await readFile(path.join(publicRoot, asset[0]));
  if (asset[0] === 'index.html') {
    const html = content.toString('utf8').replace(/<body([^>]*)>/i, (_, attributes) =>
      `<body${attributes}><div class="local-preview-banner" role="status"><span class="preview-dot"></span>معاينة محلية للتصميم<span class="preview-banner-detail">${useLocalDatabase ? ' · الطلبات محفوظة على جهازك للتجربة' : ' · الطلبات هنا للتجربة فقط'}</span></div>`
    );
    content = Buffer.from(html);
  }

  response.writeHead(200, { 'Content-Type': asset[1], 'Content-Length': content.length });
  response.end(request.method === 'HEAD' ? undefined : content);
}

const port = Number(process.argv[2] || 4173);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('Pass a valid local port, for example: node scripts/local-preview.mjs 4173');
}

const server = createServer((request, response) => {
  handleRequest(request, response).catch(() => {
    if (!response.headersSent) sendJson(response, 500, { message: 'تعذر تشغيل المعاينة المحلية.' });
    else response.destroy();
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Badlny local preview: http://127.0.0.1:${port}`);
  console.log(useLocalDatabase
    ? 'Local PostgreSQL database; loopback only; no production data.'
    : 'Local-only API; in-memory demo requests; no Supabase or production data.');
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.close(async () => {
    await localDatabasePool?.end();
    process.exit(0);
  }));
}
