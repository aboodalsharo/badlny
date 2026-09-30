# Contributing

Thanks for helping students find a better timetable.

1. Open an issue for a focused feature or bug. Use synthetic examples, never student contact details.
2. Create a branch and keep changes small. Preserve Arabic RTL behavior, responsive layouts, and both themes.
3. Run `pnpm build`, `pnpm test`, and `pnpm check:repository` before opening a pull request.
4. Describe the change and its verification. Include screenshots only when they contain no sensitive data.

Do not add credentials, deployment tokens, real request exports, or browser-side privileged database access. Do not remove security checks to make a test pass. Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

CI does not deploy. Hosted database changes, new access grants, and production releases require maintainer review. Public credit does not imply write or deployment permissions.
