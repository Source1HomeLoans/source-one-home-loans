create extension if not exists pgcrypto with schema extensions;

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  company text,
  job_title text,
  email text,
  phone text,
  alternate_phone text,
  address text,
  city text,
  state text,
  zip text,
  birthday date,
  category text default 'Prospect',
  photo_url text,
  preferred_contact_method text,
  assigned_to uuid,
  referred_by_contact_id uuid references public.contacts(id) on delete set null,
  last_contacted_at timestamptz,
  next_follow_up_at timestamptz,
  follow_up_frequency text,
  follow_up_status text,
  relationship_score integer default 0,
  relationship_tier text default 'Needs Attention',
  source_table text,
  source_record_id uuid,
  archived_at timestamptz,
  deleted_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.contacts
  add column if not exists alternate_phone text,
  add column if not exists address text,
  add column if not exists city text,
  add column if not exists state text,
  add column if not exists zip text,
  add column if not exists birthday date,
  add column if not exists photo_url text,
  add column if not exists preferred_contact_method text,
  add column if not exists assigned_to uuid,
  add column if not exists referred_by_contact_id uuid references public.contacts(id) on delete set null,
  add column if not exists last_contacted_at timestamptz,
  add column if not exists next_follow_up_at timestamptz,
  add column if not exists follow_up_frequency text,
  add column if not exists follow_up_status text,
  add column if not exists relationship_score integer default 0,
  add column if not exists relationship_tier text default 'Needs Attention',
  add column if not exists source_table text,
  add column if not exists source_record_id uuid,
  add column if not exists archived_at timestamptz,
  add column if not exists deleted_at timestamptz,
  add column if not exists updated_at timestamptz default now();

create unique index if not exists contacts_source_record_unique
on public.contacts(source_table, source_record_id)
where source_table is not null and source_record_id is not null;

create index if not exists contacts_email_idx on public.contacts(lower(email));
create index if not exists contacts_phone_idx on public.contacts(phone);
create index if not exists contacts_category_idx on public.contacts(category);
create index if not exists contacts_next_follow_up_idx on public.contacts(next_follow_up_at);

create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  color text default '#C8A44D',
  created_at timestamptz default now()
);

create table if not exists public.contact_tags (
  contact_id uuid not null references public.contacts(id) on delete cascade,
  tag_id uuid not null references public.tags(id) on delete cascade,
  primary key (contact_id, tag_id)
);

create table if not exists public.timeline_events (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.contacts(id) on delete cascade,
  event_type text not null,
  title text not null,
  description text,
  created_by uuid,
  created_at timestamptz default now()
);

create index if not exists timeline_events_contact_created_idx on public.timeline_events(contact_id, created_at desc);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references public.contacts(id) on delete set null,
  title text not null,
  description text,
  assigned_to uuid,
  due_at timestamptz,
  priority text default 'Normal',
  status text default 'Upcoming',
  completed_at timestamptz,
  created_at timestamptz default now()
);

create index if not exists tasks_contact_idx on public.tasks(contact_id);
create index if not exists tasks_due_status_idx on public.tasks(due_at, status);

create table if not exists public.contact_files (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.contacts(id) on delete cascade,
  file_name text not null,
  file_path text not null,
  file_type text,
  uploaded_by uuid,
  created_at timestamptz default now()
);

create index if not exists contact_files_contact_idx on public.contact_files(contact_id);

insert into storage.buckets (id, name, public, file_size_limit)
values ('contact-files', 'contact-files', false, 26214400)
on conflict (id) do nothing;

drop policy if exists "Relationship Hub users can read contact storage files" on storage.objects;
create policy "Relationship Hub users can read contact storage files"
on storage.objects
for select
to authenticated
using (bucket_id = 'contact-files');

drop policy if exists "Relationship Hub users can upload contact storage files" on storage.objects;
create policy "Relationship Hub users can upload contact storage files"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'contact-files');

drop policy if exists "Relationship Hub users can update contact storage files" on storage.objects;
create policy "Relationship Hub users can update contact storage files"
on storage.objects
for update
to authenticated
using (bucket_id = 'contact-files')
with check (bucket_id = 'contact-files');

drop policy if exists "Relationship Hub users can delete contact storage files" on storage.objects;
create policy "Relationship Hub users can delete contact storage files"
on storage.objects
for delete
to authenticated
using (bucket_id = 'contact-files');

create table if not exists public.recently_viewed_contacts (
  user_id uuid not null,
  contact_id uuid not null references public.contacts(id) on delete cascade,
  viewed_at timestamptz default now(),
  primary key (user_id, contact_id)
);

create index if not exists recently_viewed_contacts_user_viewed_idx on public.recently_viewed_contacts(user_id, viewed_at desc);

create table if not exists public.relationship_scoring_settings (
  id text primary key default 'default',
  recency_weight integer default 25,
  frequency_weight integer default 15,
  referral_weight integer default 15,
  meeting_weight integer default 10,
  closed_loan_weight integer default 10,
  completed_task_weight integer default 10,
  upcoming_follow_up_weight integer default 10,
  overdue_follow_up_penalty integer default -20,
  updated_at timestamptz default now()
);

insert into public.relationship_scoring_settings (id)
values ('default')
on conflict (id) do nothing;

insert into public.tags (name, color)
values
  ('VA', '#C8A44D'),
  ('FHA', '#6B8AFD'),
  ('Conventional', '#0B1F3A'),
  ('DSCR', '#22A06B'),
  ('Non-QM', '#A855F7'),
  ('Investor', '#F97316'),
  ('Luxury', '#C8A44D'),
  ('Spanish', '#14B8A6'),
  ('Dallas', '#2563EB'),
  ('Austin', '#7C3AED'),
  ('Houston', '#0EA5E9'),
  ('San Antonio', '#EF4444'),
  ('Veteran', '#0B1F3A'),
  ('Repeat Client', '#22C55E'),
  ('Past Client', '#64748B'),
  ('Hot Lead', '#DC2626'),
  ('Referral Partner', '#C8A44D'),
  ('Top Partner', '#C8A44D'),
  ('Needs Follow-up', '#EA580C'),
  ('Birthday', '#EC4899'),
  ('Builder', '#475569'),
  ('First-Time Buyer', '#16A34A')
on conflict (name) do update set color = excluded.color;

alter table public.contacts enable row level security;
alter table public.tags enable row level security;
alter table public.contact_tags enable row level security;
alter table public.timeline_events enable row level security;
alter table public.tasks enable row level security;
alter table public.contact_files enable row level security;
alter table public.recently_viewed_contacts enable row level security;
alter table public.relationship_scoring_settings enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update on public.contacts to authenticated;
grant select, insert, update, delete on public.tags to authenticated;
grant select, insert, update, delete on public.contact_tags to authenticated;
grant select, insert, update, delete on public.timeline_events to authenticated;
grant select, insert, update, delete on public.tasks to authenticated;
grant select, insert, update, delete on public.contact_files to authenticated;
grant select, insert, update, delete on public.recently_viewed_contacts to authenticated;
grant select, update on public.relationship_scoring_settings to authenticated;

drop policy if exists "Relationship Hub users can manage contacts" on public.contacts;
create policy "Relationship Hub users can manage contacts"
on public.contacts
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Relationship Hub users can manage tags" on public.tags;
create policy "Relationship Hub users can manage tags"
on public.tags
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Relationship Hub users can manage contact tags" on public.contact_tags;
create policy "Relationship Hub users can manage contact tags"
on public.contact_tags
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Relationship Hub users can manage timeline" on public.timeline_events;
create policy "Relationship Hub users can manage timeline"
on public.timeline_events
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Relationship Hub users can manage tasks" on public.tasks;
create policy "Relationship Hub users can manage tasks"
on public.tasks
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Relationship Hub users can manage files" on public.contact_files;
create policy "Relationship Hub users can manage files"
on public.contact_files
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Relationship Hub users can manage recently viewed" on public.recently_viewed_contacts;
create policy "Relationship Hub users can manage recently viewed"
on public.recently_viewed_contacts
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Relationship Hub users can read scoring settings" on public.relationship_scoring_settings;
create policy "Relationship Hub users can read scoring settings"
on public.relationship_scoring_settings
for select
to authenticated
using (true);

drop policy if exists "Relationship Hub users can update scoring settings" on public.relationship_scoring_settings;
create policy "Relationship Hub users can update scoring settings"
on public.relationship_scoring_settings
for update
to authenticated
using (true)
with check (true);

insert into public.contacts (
  first_name,
  last_name,
  email,
  phone,
  category,
  preferred_contact_method,
  last_contacted_at,
  next_follow_up_at,
  follow_up_frequency,
  follow_up_status,
  relationship_score,
  relationship_tier,
  source_table,
  source_record_id,
  created_at,
  updated_at
)
select
  leads.first_name,
  leads.last_name,
  leads.email,
  leads.phone,
  'Prospect',
  case
    when coalesce(leads.phone, '') <> '' then 'Call'
    when coalesce(leads.email, '') <> '' then 'Email'
    else null
  end,
  leads.created_at,
  leads.created_at + interval '1 day',
  'New lead follow-up',
  'Due Today',
  20,
  'Needs Attention',
  'leads',
  leads.id,
  leads.created_at,
  now()
from public.leads
where not exists (
  select 1
  from public.contacts existing
  where existing.source_table = 'leads'
    and existing.source_record_id = leads.id
)
and not exists (
  select 1
  from public.contacts existing
  where (
    leads.email is not null
    and existing.email is not null
    and lower(existing.email) = lower(leads.email)
  )
  or (
    leads.phone is not null
    and existing.phone is not null
    and regexp_replace(existing.phone, '\D', '', 'g') = regexp_replace(leads.phone, '\D', '', 'g')
  )
);

insert into public.timeline_events (contact_id, event_type, title, description, created_at)
select
  contacts.id,
  'Contact created',
  'Website lead imported',
  concat_ws(' ', 'Imported from public website lead capture.', nullif(leads.loan_program_interest, '')),
  leads.created_at
from public.contacts contacts
join public.leads leads
  on contacts.source_table = 'leads'
 and contacts.source_record_id = leads.id
where not exists (
  select 1
  from public.timeline_events existing
  where existing.contact_id = contacts.id
    and existing.event_type = 'Contact created'
    and existing.title = 'Website lead imported'
);

comment on table public.contacts is 'Source One Relationship Hub unified people and organizations table. Leads, borrowers, partners, and other relationships should map here without deleting legacy source tables.';
comment on table public.tags is 'Flexible Relationship Hub tags with colors for fast filtering and search.';
comment on table public.timeline_events is 'Running relationship timeline for calls, texts, emails, notes, tasks, files, referrals, ARIVE sync events, and lifecycle changes.';
comment on table public.tasks is 'Simple Relationship Hub tasks linked to contacts.';
comment on table public.contact_files is 'Metadata for files attached to contacts; file objects should live in Supabase Storage.';
comment on table public.recently_viewed_contacts is 'Per-user recently viewed contacts for the Relationship Hub home dashboard.';
comment on table public.relationship_scoring_settings is 'Editable relationship score formula weights.';

-- TODO: Tighten these broad authenticated policies to app_role-aware Admin, Loan Officer, Processor, and Marketing permissions when the authenticated CRM user model is available.
-- TODO: Tighten contact file storage policies to app_role-aware ownership and assignment rules.
-- TODO: Add optional ARIVE sync status columns or a dedicated sync table once the ARIVE API contract is finalized.

notify pgrst, 'reload schema';
