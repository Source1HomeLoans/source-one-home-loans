create extension if not exists pgcrypto with schema extensions;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  email text,
  phone text,
  loan_program_interest text,
  message text,
  consent_to_contact boolean,
  source_page text,
  lead_status text default 'new',
  created_at timestamptz default now()
);

alter table public.leads enable row level security;

grant usage on schema public to anon, authenticated;
grant insert on public.leads to anon, authenticated;
grant select, update on public.leads to authenticated;

drop policy if exists "Public can submit website leads" on public.leads;
create policy "Public can submit website leads"
on public.leads
for insert
to anon, authenticated
with check (
  consent_to_contact is true
  and lead_status = 'new'
  and coalesce(trim(first_name), '') <> ''
  and coalesce(trim(last_name), '') <> ''
  and coalesce(trim(email), '') <> ''
  and coalesce(trim(phone), '') <> ''
);

drop policy if exists "CRM users can read leads" on public.leads;
create policy "CRM users can read leads"
on public.leads
for select
to authenticated
using (true);

drop policy if exists "CRM users can update leads" on public.leads;
create policy "CRM users can update leads"
on public.leads
for update
to authenticated
using (true)
with check (true);

comment on table public.leads is 'Shared lead capture table for Source One Home Loans public website submissions and CRM lead management.';
comment on column public.leads.lead_status is 'Defaults to new for public website submissions; future CRM assignment logic can update this status.';

-- TODO: Tighten CRM policies to role-based access before adding multiple dashboard users.
-- TODO: Add spam protection/rate limiting before high-volume paid traffic campaigns.
