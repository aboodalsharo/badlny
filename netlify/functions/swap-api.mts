import type { Context, Config } from '@netlify/functions';
import catalog from './_shared/catalog.json' with { type: 'json' };
import { digest, equal, signSession, readSession, csrfFor, normalizePhone, validPin, safeRequestId, validSections, limitedJson } from './_shared/security.mts';

function json(data: unknown, status = 200, additional: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status, headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'no-referrer',
      'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
      ...additional
    }
  });
}

function failure(status: number, message: string): Response { return json({ message }, status); }

async function database(base: string, key: string, path: string, payload?: unknown) {
  const response = await fetch(`${base}/rest/v1/${path}`, {
    method: payload === undefined ? 'GET' : 'POST',
    headers: { apikey: key, 'User-Agent': 'badlny-server/1.0', 'Content-Type': 'application/json', ...(key.startsWith('eyJ') ? { Authorization: `Bearer ${key}` } : {}) },
    body: payload === undefined ? undefined : JSON.stringify(payload),
    signal: AbortSignal.timeout(12000)
  });
  if (!response.ok) throw new Error(`Database request failed (${response.status})`);
  return response.json();
}

async function allow(base: string, key: string, scope: string, seconds: number, hits: number): Promise<boolean> {
  return await database(base, key, 'rpc/badlny_rate_limit', { limit_scope: scope, window_seconds: seconds, max_hits: hits }) === true;
}

function text(value: unknown, max: number): string | null {
  return typeof value === 'string' && value.length <= max && !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value) ? value.trim() : null;
}

function publicRow(row: Record<string, unknown>) {
  // An explicit allowlist keeps future private columns out of responses too.
  const fields = ['id','courseid','coursecode','coursecodeen','coursenamear','facultyid','facultyname','departmentid','departmentname','line','currentsection','desiredsections','studentname','notes','createdat'];
  return Object.fromEntries(fields.map(field => [field, row[field]]));
}

export default async (request: Request, context: Context) => {
  const base = Netlify.env.get('BADLNY_SUPABASE_URL');
  const key = Netlify.env.get('BADLNY_SUPABASE_KEY');
  const secret = Netlify.env.get('BADLNY_SESSION_SECRET');
  if (base !== 'https://khgxmsvaaxqwgvdlybfa.supabase.co' || !key || !secret || secret.length < 40) {
    return json({ message: 'الخدمة غير متاحة مؤقتًا. يرجى المحاولة لاحقًا.', code: 'configuration_unavailable' }, 503);
  }
  const url = new URL(request.url);
  const allowedHost = url.hostname === 'badlny.netlify.app' || url.hostname.endsWith('--badlny.netlify.app');
  if (!allowedHost) return failure(403, 'طلب غير مسموح.');
  const path = url.pathname;
  if (url.search) return failure(400, 'طلب غير صالح.');
  const expectedMethod = ['/api/session','/api/requests'].includes(path) ? ['GET', ...(path === '/api/requests' ? ['POST'] : [])] : ['POST'];
  if (!expectedMethod.includes(request.method)) return failure(405, 'طريقة غير مسموحة.');
  if (!context.ip) return failure(503, 'الخدمة غير متاحة مؤقتًا.');
  const ipKey = digest(secret, `ip:${context.ip}`);
  const session = readSession(request.headers.get('cookie') || '', secret);

  try {
    if (path === '/api/session' && request.method === 'GET') {
      if (!session && !await allow(base, key, `session:${ipKey}`, 3600, 100)) {
        return failure(429, 'طلبات كثيرة. يرجى الانتظار والمحاولة لاحقًا.');
      }
      const signed = session || signSession(secret);
      return json({ csrfToken: csrfFor(signed, secret) }, 200, {
        'Set-Cookie': `__Host-badlny=${signed}; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=43200`
      });
    }
    if (path === '/api/requests' && request.method === 'GET') {
      if (!await allow(base, key, `list:${ipKey}`, 300, 200)) return failure(429, 'طلبات كثيرة. يرجى الانتظار.');
      const fields = 'id,courseid,coursecode,coursecodeen,coursenamear,facultyid,facultyname,departmentid,departmentname,line,currentsection,desiredsections,studentname,notes,createdat';
      const rows = await database(base, key, `requests?select=${fields}&order=createdat.desc&limit=500`);
      if (!Array.isArray(rows)) throw new Error('Invalid list');
      return json(rows.map(publicRow));
    }
    if (!session) return failure(401, 'انتهت الجلسة. يرجى المحاولة مجددًا.');
    if (request.headers.get('origin') !== url.origin || !equal(request.headers.get('x-csrf-token') || '', csrfFor(session, secret))) {
      return failure(403, 'طلب غير مسموح. يرجى إعادة تحميل الصفحة.');
    }
    const fetchSite = request.headers.get('sec-fetch-site');
    if (fetchSite && fetchSite !== 'same-origin') return failure(403, 'طلب غير مسموح.');
    const clientKey = digest(secret, `client:${session.split('.')[0]}`);
    const action = path === '/api/contact' ? 'contact' : path === '/api/delete' ? 'delete' : 'create';
    const hourly = action === 'contact' ? 30 : action === 'delete' ? 15 : 6;
    if (!await allow(base, key, `${action}:ip:${ipKey}`, 3600, hourly * 5)
      || !await allow(base, key, `${action}:client:${clientKey}`, 3600, hourly)) {
      return failure(429, 'وصلت إلى حد الطلبات. يرجى الانتظار قبل المحاولة مجددًا.');
    }
    let body: Record<string, unknown>;
    try { body = await limitedJson(request); } catch { return failure(400, 'بيانات الطلب غير صالحة أو أكبر من الحد المسموح.'); }

    if (path === '/api/contact') {
      if (!safeRequestId(body.id)) return failure(400, 'طلب غير صالح.');
      const rows = await database(base, key, `requests?select=phone&id=eq.${encodeURIComponent(body.id)}&limit=1`);
      const phone = normalizePhone(rows[0]?.phone);
      if (!phone) return failure(404, 'الطلب غير موجود أو رقم التواصل غير صالح.');
      return json({ phone });
    }
    if (path === '/api/delete') {
      if (!safeRequestId(body.id) || !validPin(body.pin)) {
        return failure(400, 'بيانات الطلب غير صالحة.');
      }
      // A per-listing cap also prevents guessing from many sessions or IPs.
      if (!await allow(base, key, `delete:request:${digest(secret, body.id)}`, 3600, 5)) return failure(429, 'وصل الطلب إلى حد المحاولات. يرجى المحاولة بعد ساعة.');
      const result = await database(base, key, 'rpc/delete_swap_request', { target_id: body.id, target_pin: body.pin });
      return json({ success: result?.success === true, ...(result?.success === true ? {} : { message: 'تعذر التحقق من كلمة السر، أو أن الطلب لم يعد متاحًا.' }) });
    }
    if (path === '/api/requests') {
      const courseId = text(body.courseId, 100);
      const course = catalog.courses.find(c => c.id === courseId);
      const name = text(body.studentName, 60), notes = text(body.notes, 600);
      const phone = normalizePhone(body.phone);
      if (!course || name === null || notes === null || !phone || !validPin(body.pin) || body.consent !== true
        || !validSections(body.currentSection, body.desiredSections)) {
        return failure(400, 'راجع المادة والشعب ورقم الهاتف وكلمة السر والموافقة على مشاركة التواصل.');
      }
      if (/\b(?:0?7[789]\d{7}|9627[789]\d{7})\b/.test(notes)) return failure(400, 'لا تكتب رقم هاتف في الملاحظات العامة.');
      const faculty = catalog.faculties.find(f => f.id === course.facultyId);
      const department = faculty?.departments.find(d => d.id === course.departmentId);
      const requestData = {
        courseid: course.id, coursecode: course.code, coursecodeen: course.codeEn || '', coursenamear: course.nameAr,
        facultyid: course.facultyId, facultyname: faculty?.nameAr || '', departmentid: course.departmentId,
        departmentname: department?.nameAr || course.departmentName || '', line: String(course.line || ''),
        currentsection: body.currentSection, desiredsections: body.desiredSections, studentname: name || 'طالب مجهول', phone, notes
      };
      const result = await database(base, key, 'rpc/badlny_create_request', { request_data: requestData, request_pin: body.pin });
      return json({ id: result.id, createdAt: result.createdAt }, 201);
    }
    return failure(404, 'غير موجود.');
  } catch (error) {
    // Credentials, request bodies, PINs, and database errors must never reach logs or responses.
    const status = error instanceof Error ? /^Database request failed \((\d{3})\)$/.exec(error.message)?.[1] : undefined;
    return json({ message: 'الخدمة غير متاحة مؤقتًا. يرجى المحاولة لاحقًا.', code: status ? `upstream_${status}` : 'upstream_unavailable' }, 503);
  }
};

export const config: Config = { path: ['/api/session','/api/requests','/api/contact','/api/delete'] };
