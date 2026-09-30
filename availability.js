// Display-only deadline: 17 October 2026, 23:59 in Asia/Amman (UTC+03).
// Request authorization and database access remain in the protected API.
export const REGISTRATION_CLOSES_AT = Date.parse('2026-10-17T23:59:00+03:00');
export const OPEN_LABEL = 'فترة السحب والإضافة والتسجيل · متاح الآن لجميع الكليات';
export const CLOSED_LABEL = 'فترة السحب والإضافة والتسجيل · غير متاحة الآن';

export function registrationIsOpen(now = Date.now()) {
  return now < REGISTRATION_CLOSES_AT;
}

export function updateRegistrationStatus(root, now = Date.now()) {
  const badge = root.getElementById('registrationStatus');
  const label = root.getElementById('registrationStatusText');
  if (!badge || !label) return;
  const open = registrationIsOpen(now);
  badge.dataset.state = open ? 'open' : 'closed';
  const text = open ? OPEN_LABEL : CLOSED_LABEL;
  if (label.textContent !== text) label.textContent = text;
}

export function watchRegistrationStatus(root, browser, now = Date.now) {
  let timer;
  const refresh = () => {
    browser.clearTimeout(timer);
    const currentTime = now();
    updateRegistrationStatus(root, currentTime);
    if (registrationIsOpen(currentTime)) {
      // Recheck clock changes regularly, and schedule the final boundary exactly.
      timer = browser.setTimeout(refresh, Math.min(REGISTRATION_CLOSES_AT - currentTime, 60_000));
    }
  };
  const onVisible = () => { if (!root.hidden) refresh(); };
  browser.addEventListener('focus', refresh);
  root.addEventListener('visibilitychange', onVisible);
  refresh();
  return () => {
    browser.clearTimeout(timer);
    browser.removeEventListener('focus', refresh);
    root.removeEventListener('visibilitychange', onVisible);
  };
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  watchRegistrationStatus(document, window);
}
