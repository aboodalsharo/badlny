-- Local-only schema for Badlny. It starts empty and is never linked to the
-- hosted Supabase project. The server API uses the local service_role key;
-- browser-facing roles receive no access to phone numbers or password hashes.
create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

do $$
begin
  if not exists (select 1 from pg_catalog.pg_roles where rolname = 'anon') then create role anon nologin; end if;
  if not exists (select 1 from pg_catalog.pg_roles where rolname = 'authenticated') then create role authenticated nologin; end if;
  if not exists (select 1 from pg_catalog.pg_roles where rolname = 'service_role') then create role service_role nologin; end if;
  if not exists (select 1 from pg_catalog.pg_roles where rolname = 'badlny_server') then create role badlny_server nologin; end if;
end;
$$;
grant usage on schema extensions to badlny_server;

create table public.requests (
  id text primary key,
  courseid text not null,
  coursecode text not null,
  coursecodeen text not null default '',
  coursenamear text not null,
  facultyid text not null,
  facultyname text not null,
  departmentid text not null,
  departmentname text not null,
  line text not null,
  currentsection text not null check (currentsection ~ '^[1-9][0-9]?$'),
  desiredsections jsonb not null check (
    jsonb_typeof(desiredsections) = 'array'
    and jsonb_array_length(desiredsections) between 1 and 8
  ),
  studentname text not null check (char_length(studentname) between 1 and 60),
  phone text not null check (phone ~ '^9627[789][0-9]{7}$'),
  notes text not null default '' check (char_length(notes) <= 600),
  pin text not null,
  createdat timestamptz not null default now(),
  pin_reset_required boolean not null default false
);

create index requests_createdat_idx on public.requests (createdat desc);
alter table public.requests enable row level security;
revoke all on public.requests from public, anon, authenticated;
grant select, insert, update, delete on public.requests to service_role;
grant select, insert, update, delete on public.requests to badlny_server;
create policy badlny_local_server_requests on public.requests
  for all to badlny_server using (true) with check (true);

create schema badlny_private;
revoke all on schema badlny_private from public, anon, authenticated;
grant usage on schema badlny_private to service_role, badlny_server;

create table badlny_private.api_limits (
  scope text not null,
  bucket bigint not null,
  hits integer not null check (hits > 0),
  primary key (scope, bucket)
);
create index badlny_limits_bucket_idx on badlny_private.api_limits (bucket);
alter table badlny_private.api_limits enable row level security;
revoke all on badlny_private.api_limits from public, anon, authenticated;
grant select, insert, update, delete on badlny_private.api_limits to service_role;
grant select, insert, update, delete on badlny_private.api_limits to badlny_server;
create policy badlny_local_server_rate_limits on badlny_private.api_limits
  for all to badlny_server using (true) with check (true);

create function public.badlny_rate_limit(limit_scope text, window_seconds integer, max_hits integer)
returns boolean
language plpgsql security invoker set search_path = '' as $$
declare
  n integer;
  bucket_id bigint;
begin
  if current_user not in ('service_role', 'badlny_server', 'postgres') then raise insufficient_privilege; end if;
  if length(limit_scope) not between 1 and 200
    or window_seconds not between 1 and 86400
    or max_hits not between 1 and 10000 then
    raise exception 'Invalid rate limit';
  end if;
  bucket_id := floor(extract(epoch from clock_timestamp()) / window_seconds)::bigint * window_seconds;
  insert into badlny_private.api_limits(scope, bucket, hits) values (limit_scope, bucket_id, 1)
    on conflict (scope, bucket) do update
      set hits = least(badlny_private.api_limits.hits + 1, max_hits + 1)
    returning hits into n;
  delete from badlny_private.api_limits
    where bucket < extract(epoch from now() - interval '2 days')::bigint;
  return n <= max_hits;
end;
$$;
revoke all on function public.badlny_rate_limit(text, integer, integer) from public, anon, authenticated;
grant execute on function public.badlny_rate_limit(text, integer, integer) to service_role, badlny_server;

create function public.badlny_create_request(request_data jsonb, request_pin text)
returns jsonb
language plpgsql security invoker set search_path = '' as $$
declare
  request_id text := 'req_' || gen_random_uuid()::text;
  created_at timestamptz := clock_timestamp();
  sections jsonb := request_data->'desiredsections';
begin
  if current_user not in ('service_role', 'badlny_server', 'postgres') then raise insufficient_privilege; end if;
  if request_pin is null or char_length(request_pin) not between 4 and 64 or octet_length(request_pin) > 72
    or request_data->>'phone' !~ '^9627[789][0-9]{7}$'
    or request_data->>'currentsection' !~ '^[1-9][0-9]?$'
    or char_length(coalesce(request_data->>'notes', '')) > 600
    or char_length(coalesce(request_data->>'studentname', '')) not between 1 and 60
    or char_length(coalesce(request_data->>'courseid', '')) not between 1 and 100 then
    raise exception 'Invalid request';
  end if;
  if jsonb_typeof(sections) is distinct from 'array' then raise exception 'Invalid sections'; end if;
  if jsonb_array_length(sections) not between 1 and 8 then raise exception 'Invalid sections'; end if;
  if exists (
    select 1 from jsonb_array_elements_text(sections) as section(value)
    where value !~ '^[1-9][0-9]?$'
  ) then raise exception 'Invalid sections'; end if;

  insert into public.requests (
    id, courseid, coursecode, coursecodeen, coursenamear, facultyid, facultyname,
    departmentid, departmentname, line, currentsection, desiredsections,
    studentname, phone, notes, pin, createdat, pin_reset_required
  ) values (
    request_id, request_data->>'courseid', request_data->>'coursecode',
    request_data->>'coursecodeen', request_data->>'coursenamear',
    request_data->>'facultyid', request_data->>'facultyname',
    request_data->>'departmentid', request_data->>'departmentname', request_data->>'line',
    request_data->>'currentsection', sections, request_data->>'studentname',
    request_data->>'phone', request_data->>'notes',
    extensions.crypt(request_pin, extensions.gen_salt('bf', 10)), created_at, false
  );
  return jsonb_build_object('id', request_id, 'createdAt', created_at);
end;
$$;
revoke all on function public.badlny_create_request(jsonb, text) from public, anon, authenticated;
grant execute on function public.badlny_create_request(jsonb, text) to service_role, badlny_server;

create function public.delete_swap_request(target_id text, target_pin text)
returns json
language plpgsql security invoker set search_path = '' as $$
declare
  stored_hash text;
  deleted_id text;
begin
  if current_user not in ('service_role', 'badlny_server', 'postgres') then raise insufficient_privilege; end if;
  if target_id is null or char_length(target_id) > 100
    or target_pin is null or octet_length(target_pin) > 72 then
    return json_build_object('success', false, 'message', 'تعذر التحقق من بيانات الطلب.');
  end if;

  select pin into stored_hash from public.requests where id = target_id for update;
  if not found or stored_hash is null or stored_hash !~ '^\$2[aby]\$' then
    return json_build_object('success', false, 'message', 'تعذر التحقق من بيانات الطلب.');
  end if;
  if extensions.crypt(target_pin, stored_hash) <> stored_hash then
    return json_build_object('success', false, 'message', 'تعذر التحقق من بيانات الطلب.');
  end if;

  delete from public.requests where id = target_id returning id into deleted_id;
  return json_build_object('success', deleted_id is not null);
end;
$$;
revoke all on function public.delete_swap_request(text, text) from public, anon, authenticated;
grant execute on function public.delete_swap_request(text, text) to service_role, badlny_server;

notify pgrst, 'reload schema';
