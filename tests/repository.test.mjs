import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectText } from '../scripts/check-repository.mjs';

test('repository guard rejects credential files and reports no secret values', () => {
  const synthetic = 'sb_' + 'secret_' + 'x'.repeat(40);
  const findings = inspectText('supabase/.temp/credentials.json', synthetic);
  assert.ok(findings.includes('prohibited-private-artifact'));
  assert.ok(findings.includes('supabase-secret'));
  assert.ok(!JSON.stringify(findings).includes(synthetic));
});

test('repository guard accepts fake test keys and environment placeholders', () => {
  assert.deepEqual(inspectText('tests/fixture.mjs', 'sb_secret_TEST_ONLY'), []);
  assert.deepEqual(inspectText('.env.example', 'BADLNY_SUPABASE_KEY='), []);
  assert.deepEqual(inspectText('scripts/local.mjs', 'postgresql://postgres:${localPassword}@127.0.0.1:55522/postgres'), []);
});

test('repository guard rejects privileged JWTs and literal database passwords', () => {
  const header = Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url');
  const payload = Buffer.from(JSON.stringify({role:'service_role'})).toString('base64url');
  assert.ok(inspectText('leak.mjs', `${header}.${payload}.syntheticSignature`).includes('privileged-jwt'));
  const syntheticDatabaseUrl = 'postgresql:' + '//user:syntheticPassword@db.example/test';
  assert.ok(inspectText('leak.mjs', syntheticDatabaseUrl).includes('database-password-url'));
});
