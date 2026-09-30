# Security policy

## Report privately

Use this repository's **Security → Report a vulnerability** option when available. Do not post credentials, student contact details, password hashes, or exploitable private data in public issues or pull requests. If private reporting is unavailable, contact the maintainers through their GitHub profiles and request a private channel before sharing sensitive details.

Please include the affected component, impact, and minimal reproduction steps using synthetic data. Do not test destructive operations on real student requests, scrape contact details, or brute-force passwords.

## Current access model

- The browser calls same-origin Netlify Functions; server credentials are not shipped to the browser.
- Production Supabase browser-facing roles have no direct request-table or management-RPC access. RLS remains enabled.
- Public listing responses use a field allowlist that excludes phone numbers, password hashes, and internal flags.
- Contact-on-demand intentionally shares a request's number with an interested visitor. This is not private from site visitors.
- Deletion checks the request's bcrypt-hashed password on the server. It does not rely on browser-local ownership markers.
- Signed Secure/HttpOnly/SameSite cookies, CSRF/origin checks, payload limits, server-side validation, and database-backed rate limits protect API operations.
- The static build publishes only an explicit asset allowlist.

## Known limitations

Request passwords may be as short as four characters, including common values. Rate limits make guessing harder, but do not make weak passwords strong. There is no verified student identity or password recovery. Public listings and contact-on-demand are part of the product's design.

The original pre-hardening application exposed request passwords. Hashing them later cannot revoke copies that someone obtained earlier. A copied password may still authorize deletion of its matching old request. It does not grant access to other private database columns or unrelated requests.

The registration badge is display-only, based on the device clock; it is not server-side request authorization.

## Never commit these

- Supabase secret/service-role keys, Netlify tokens, or signing secrets.
- `.env` files, local credential files, `.netlify/`, `.temp/`, and database dumps.
- Student records, phone exports, password/hash exports, logs, or unreviewed screenshots of real listings.

Production secrets remain in the hosting platform's private environment. CI needs none of them. If a real secret is exposed, revoke/rotate it; deleting a file or commit is not enough.

`pnpm check:repository` checks tracked content and Git history for common secret patterns and prohibited artifacts. It reports file/rule names, never matched values. It is a heuristic guard; manual review and GitHub's security features remain necessary.

## Local database safety

The included SQL starts an empty **local-only** database. Do not run it against a hosted Supabase project. `pnpm preview:db` binds PostgreSQL to loopback, generates local credentials in an ignored directory, and preserves its local Docker volume. It never imports production data.
