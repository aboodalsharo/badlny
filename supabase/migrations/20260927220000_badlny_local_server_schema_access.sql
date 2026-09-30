-- Keep the app-only database account able to invoke the private rate-limit routine.
grant usage on schema badlny_private to badlny_server;
grant usage on schema extensions to badlny_server;
