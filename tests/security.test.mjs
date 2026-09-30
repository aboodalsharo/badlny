import test from 'node:test';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import handler from '../netlify/functions/swap-api.mts';
import catalog from '../netlify/functions/_shared/catalog.json' with { type: 'json' };
import { signSession, readSession, csrfFor, normalizePhone, validPin, safeRequestId, validSections, limitedJson } from '../netlify/functions/_shared/security.mts';

const secret = randomBytes(48).toString('base64');
const session = signSession(secret);
const origin = 'https://badlny.netlify.app';
const context = { ip: '192.0.2.1' };
globalThis.Netlify = { env: { get: name => ({ BADLNY_SUPABASE_URL: 'https://khgxmsvaaxqwgvdlybfa.supabase.co', BADLNY_SUPABASE_KEY: 'sb_secret_TEST_ONLY', BADLNY_SESSION_SECRET: secret })[name] } };

function request(path, body, overrides = {}) {
  return new Request(`${origin}${path}`, { method: 'POST', headers: {
    origin, cookie: `__Host-badlny=${session}`, 'content-type': 'application/json',
    'x-csrf-token': csrfFor(session, secret), ...overrides
  }, body: JSON.stringify(body) });
}

function mockDatabase(t, callbacks = {}) {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    const path = String(url).split('/rest/v1/')[1];
    const body = options?.body ? JSON.parse(options.body) : undefined;
    calls.push({ path, body });
    const result = path === 'rpc/badlny_rate_limit' ? (callbacks.rate?.(body) ?? true)
      : callbacks.result?.(path, body) ?? [];
    return new Response(JSON.stringify(result), { status: 200 });
  });
  return calls;
}

test('session signatures reject tampering, expiry and wrong signing key', () => {
  assert.equal(readSession(`__Host-badlny=${session}`, secret), session);
  assert.equal(readSession(`__Host-badlny=${session}x`, secret), null);
  assert.equal(readSession(`__Host-badlny=${session}`, 'wrong'), null);
  assert.equal(readSession(`__Host-badlny=${session}`, secret, Date.now()+43300000), null);
});

test('input boundaries allow simple four-character PINs and reject invalid inputs', () => {
  assert.equal(normalizePhone('0790000000'), '962790000000');
  assert.equal(normalizePhone('1234567890'), null);
  assert.equal(normalizePhone('0790000000<script>'), null);
  assert.equal(validPin('1234'), true);
  assert.equal(validPin('1111'), true);
  assert.equal(validPin('عادي'), true);
  assert.equal(validPin('123456789012'), true);
  assert.equal(validPin('123'), false);
  assert.equal(validPin('    '), false);
  assert.equal(validPin('أ'.repeat(50)), false);
  assert.equal(safeRequestId('x&select=pin'), false);
  assert.equal(validSections('1',['2','3']), true);
  assert.equal(validSections('1',['1']), false);
  assert.equal(validSections('1',['<script>']), false);
});

test('simple password is accepted by both create and delete API paths', async t => {
  const calls = mockDatabase(t, { result: (path) => path === 'rpc/delete_swap_request' ? {success:true} : {id:'req_test',createdAt:'server-time'} });
  const body = {courseId:catalog.courses[0].id,currentSection:'1',desiredSections:['2'],studentName:'اختبار',phone:'0790000000',notes:'',pin:'1234',consent:true};
  assert.equal((await handler(request('/api/requests',body),context)).status,201);
  assert.equal(calls.find(c=>c.path==='rpc/badlny_create_request').body.request_pin,'1234');
  const deletion = await handler(request('/api/delete',{id:'req_test',pin:'1234'}),context);
  assert.equal(deletion.status,200);
  assert.equal((await deletion.json()).success,true);
  assert.equal(calls.find(c=>c.path==='rpc/delete_swap_request').body.target_pin,'1234');
});

test('body limits apply to actual payload bytes without trusting Content-Length', async () => {
  await assert.rejects(limitedJson(new Request(origin,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({notes:'x'.repeat(9000)})})));
  await assert.rejects(limitedJson(new Request(origin,{method:'POST',headers:{'content-type':'text/plain'},body:'{}'})));
});

test('writes require a signed session, same-site Origin and CSRF token', async t => {
  const calls = mockDatabase(t);
  assert.equal((await handler(request('/api/delete',{id:'req_x',pin:'correct-length-password'},{cookie:''}), context)).status,401);
  assert.equal((await handler(request('/api/delete',{id:'req_x',pin:'correct-length-password'},{origin:'https://evil.example'}),context)).status,403);
  assert.equal((await handler(request('/api/delete',{id:'req_x',pin:'correct-length-password'},{'x-csrf-token':'wrong'}),context)).status,403);
  assert.equal(calls.length,0);
});

test('public list excludes phone and PIN even if database returns extra columns', async t => {
  const calls = mockDatabase(t, { result: () => [{id:'req_x',notes:'safe',phone:'private',pin:'private',pin_reset_required:true}] });
  const response = await handler(new Request(`${origin}/api/requests`), context);
  assert.equal(response.status,200);
  const [row] = await response.json();
  assert.equal('phone' in row,false);
  assert.equal('pin' in row,false);
  assert.equal('pin_reset_required' in row,false);
  assert.ok(!calls[1].path.includes('phone'));
  assert.ok(!calls[1].path.includes('pin_reset_required'));
});

test('per-listing deletion attempts are globally capped for old and new requests', async t => {
  const calls = mockDatabase(t, { rate: body => !body.limit_scope.startsWith('delete:request:') });
  const response = await handler(request('/api/delete',{id:'req_legacy',pin:'1234'}),context);
  assert.equal(response.status,429);
  const perListing = calls.find(call => call.body?.limit_scope?.startsWith('delete:request:'));
  assert.equal(perListing.body.max_hits,5);
  assert.ok(!calls.some(call => call.path==='rpc/delete_swap_request'));
});

test('rate limits stop requests before contact lookup or write', async t => {
  const calls = mockDatabase(t, { rate: () => false });
  assert.equal((await handler(request('/api/contact',{id:'req_x'}),context)).status,429);
  assert.equal(calls.length,1);
});

test('creation resolves course metadata on the server and ignores forged IDs and timestamps', async t => {
  const calls = mockDatabase(t, { result: () => ({id:'req_server_generated',createdAt:'server-time'}) });
  const body = { courseId:catalog.courses[0].id,currentSection:'1',desiredSections:['2'],studentName:'اختبار',phone:'0790000000',notes:'',pin:'Strong-test-password',consent:true,id:'forged',createdAt:'fake',facultyname:'forged' };
  const response = await handler(request('/api/requests',body),context);
  assert.equal(response.status,201);
  const creation = calls.find(c=>c.path==='rpc/badlny_create_request');
  assert.equal(creation.body.request_data.courseid,catalog.courses[0].id);
  assert.notEqual(creation.body.request_data.facultyname,'forged');
  assert.equal('id' in creation.body.request_data,false);
  assert.equal('pin' in creation.body.request_data,false);
  assert.equal(creation.body.request_data.phone,'962790000000');
});

test('consent, course existence and section validation cannot be bypassed', async t => {
  const calls = mockDatabase(t);
  const body = { courseId:'unknown',currentSection:'1',desiredSections:['2'],studentName:'test',phone:'0790000000',notes:'',pin:'Strong-test-password',consent:true };
  assert.equal((await handler(request('/api/requests',body),context)).status,400);
  assert.ok(calls.every(c=>c.path==='rpc/badlny_rate_limit'));
});
