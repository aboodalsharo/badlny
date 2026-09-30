-- The server-only account may invoke pgcrypto functions used for PIN hashes.
grant usage on schema extensions to badlny_server;
