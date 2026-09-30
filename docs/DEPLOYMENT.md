# Deployment boundaries

The existing live application is https://badlny.netlify.app/. Publishing this source repository does not change its hosting, database records, or secrets. GitHub Actions only builds/tests; it contains no deployment step.

## Maintainer deployment

- Build with `pnpm build` and publish **`public/`**, never the project root.
- Include `netlify/functions/`; this is not a static-only application.
- Keep `BADLNY_SUPABASE_URL`, `BADLNY_SUPABASE_KEY`, and `BADLNY_SESSION_SECRET` in Netlify's private server environment. Do not add real values to this repository or GitHub Actions.
- Verify a draft deploy and its API before promoting it. Keep the previous deploy available for rollback.
- Do not run local database setup/migrations against production or replace hosted rows with local samples.

The server function contains a deliberate project/hostname allowlist. Its project URL is public metadata, not a secret key. A fork must use a separately owned database and reviewed allowlist; merely setting an environment variable does not bypass that check.

For a new independent deployment, design and review its database access model first. The SQL provided here is **local-only**, not a one-click production provisioning script. Never restore public table/RPC grants just to make a fork work.

See [Netlify CLI documentation](https://docs.netlify.com/cli/get-started/) and [Supabase API key documentation](https://supabase.com/docs/guides/getting-started/api-keys) for current platform guidance.
