import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export function digest(secret: string, value: string): string {
  return createHmac('sha256', secret).update(value).digest('base64url');
}

export function equal(a: string, b: string): boolean {
  const aa = Buffer.from(a), bb = Buffer.from(b);
  return aa.length === bb.length && timingSafeEqual(aa, bb);
}

export function signSession(secret: string, now = Date.now()): string {
  const payload = `${randomBytes(24).toString('base64url')}.${Math.floor(now / 1000) + 43200}`;
  return `${payload}.${digest(secret, `session:${payload}`)}`;
}

export function readSession(cookie: string, secret: string, now = Date.now()): string | null {
  const value = cookie.split(';').map(s => s.trim()).find(s => s.startsWith('__Host-badlny='))?.slice(14);
  if (!value || value.length > 200) return null;
  const parts = value.split('.');
  if (parts.length !== 3 || !/^[A-Za-z0-9_-]{32}$/.test(parts[0]) || !/^\d{10}$/.test(parts[1])) return null;
  const expiry = Number(parts[1]);
  if (expiry <= Math.floor(now / 1000) || expiry > Math.floor(now / 1000) + 43260) return null;
  const payload = `${parts[0]}.${parts[1]}`;
  return equal(parts[2], digest(secret, `session:${payload}`)) ? value : null;
}

export function csrfFor(session: string, secret: string): string {
  return digest(secret, `csrf:${session}`);
}

export function normalizePhone(value: unknown): string | null {
  if (typeof value !== 'string' || value.length > 32) return null;
  const phone = value.replace(/[\s()+-]/g, '');
  const normalized = phone.startsWith('07') ? `962${phone.slice(1)}` : phone;
  return /^9627[789]\d{7}$/.test(normalized) ? normalized : null;
}

export function validPin(pin: unknown): pin is string {
  return typeof pin === 'string' && pin.trim().length >= 4 && pin.length <= 64 && Buffer.byteLength(pin, 'utf8') <= 72;
}

export function safeRequestId(id: unknown): id is string {
  return typeof id === 'string' && /^[A-Za-z0-9_-]{1,100}$/.test(id);
}

export function validSections(current: unknown, desired: unknown): desired is string[] {
  return typeof current === 'string' && /^[1-9]\d?$/.test(current)
    && Array.isArray(desired) && desired.length > 0 && desired.length <= 8
    && desired.every(s => typeof s === 'string' && /^[1-9]\d?$/.test(s))
    && new Set(desired).size === desired.length && !desired.includes(current);
}

export async function limitedJson(request: Request): Promise<Record<string, unknown>> {
  const type = request.headers.get('content-type')?.split(';')[0].trim().toLowerCase();
  if (type !== 'application/json' || Number(request.headers.get('content-length') || 0) > 8192) throw new Error('Invalid body');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('Empty body');
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 8192) { await reader.cancel(); throw new Error('Body too large'); }
    chunks.push(value);
  }
  const data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid JSON object');
  return data;
}
