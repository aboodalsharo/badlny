# Local development

Use Node.js 22.13+ and pnpm 11.22.0. Install from the committed lockfile:

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm preview
```

The preview runs at http://127.0.0.1:4173/ and starts empty. Requests live only in process memory. An optional `node scripts/seed-design-preview.mjs` adds clearly labeled synthetic samples to this local, empty preview; it refuses an existing populated preview and does not read credentials or connect to a database.

## Persistent local PostgreSQL

Requires Docker installed and running. Do not change the script's loopback checks or point it at production:

```sh
pnpm build
pnpm preview:db
```

The script starts `postgres:17-alpine` on **127.0.0.1:55522**, creates a dedicated local server role, and runs the local schema files only on this database. It generates local passwords under `supabase/.temp/`, which Git ignores and the repository guard prohibits.

The named Docker volume preserves local requests across restarts. Stopping the preview does not delete this volume. Do not commit its contents, credentials, or data exports.

## Academic catalog

`coursesData.js` contains public course names/codes, colleges/departments, line numbers, and available section numbers. The importer deliberately excludes instructor, room, capacity, registration, and student data. Run `python scripts/import-schedule-catalog.py --help` for the reviewed extraction options; it defaults to a dry run. The original saved schedule pages are not included.

The Civil Engineering extraction was a duplicate of the Chemical Engineering source page. Its department remains visible but empty rather than publishing mislabeled courses. Obtain the correct source before adding it.

## Checks

```sh
pnpm build
pnpm test
pnpm check:repository
```

Run the build before tests because it generates the function's ignored catalog JSON. The exposure guard inspects tracked/staged files and, with `--history`, committed historical blobs. No production secrets are needed.
