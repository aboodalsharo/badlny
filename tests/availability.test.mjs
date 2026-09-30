import test from 'node:test';
import assert from 'node:assert/strict';
import { REGISTRATION_CLOSES_AT, registrationIsOpen, watchRegistrationStatus, OPEN_LABEL, CLOSED_LABEL } from '../availability.js';

test('deadline is exactly 17 October 2026 at 23:59 Amman, inclusive', () => {
  assert.equal(REGISTRATION_CLOSES_AT, Date.parse('2026-10-17T20:59:00Z'));
  assert.equal(registrationIsOpen(REGISTRATION_CLOSES_AT - 1), true);
  assert.equal(registrationIsOpen(REGISTRATION_CLOSES_AT), false);
  assert.equal(registrationIsOpen(REGISTRATION_CLOSES_AT + 1), false);
  assert.equal(registrationIsOpen(Date.parse('2026-09-27T12:00:00+03:00')), true);
});

test('an open page changes text/state at deadline and resumes correctly', () => {
  const badge = { dataset: {} };
  const label = { textContent: '' };
  const listeners = new Map();
  let currentTime = REGISTRATION_CLOSES_AT - 10;
  let scheduled;
  const root = {
    hidden: false,
    getElementById: id => id === 'registrationStatus' ? badge : label,
    addEventListener: (name, handler) => listeners.set(name, handler),
    removeEventListener: name => listeners.delete(name)
  };
  const browser = {
    setTimeout: (handler, delay) => { scheduled = { handler, delay }; return 1; },
    clearTimeout: () => { scheduled = undefined; },
    addEventListener: (name, handler) => listeners.set(name, handler),
    removeEventListener: name => listeners.delete(name)
  };
  const stop = watchRegistrationStatus(root, browser, () => currentTime);
  assert.equal(badge.dataset.state, 'open');
  assert.equal(label.textContent, OPEN_LABEL);
  assert.equal(scheduled.delay, 10);
  const transition = scheduled.handler;
  currentTime = REGISTRATION_CLOSES_AT;
  transition();
  assert.equal(badge.dataset.state, 'closed');
  assert.equal(label.textContent, CLOSED_LABEL);
  assert.equal(scheduled, undefined);
  currentTime = REGISTRATION_CLOSES_AT - 120_000;
  listeners.get('focus')();
  assert.equal(scheduled.delay, 60_000);
  currentTime = REGISTRATION_CLOSES_AT + 120_000;
  listeners.get('visibilitychange')();
  assert.equal(badge.dataset.state, 'closed');
  stop();
  assert.equal(listeners.size, 0);
});
