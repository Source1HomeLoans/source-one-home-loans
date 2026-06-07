alter table public.leads
  add column if not exists lead_source text default 'Website Contact Form',
  add column if not exists ip_address text,
  add column if not exists user_agent text;

alter table public.leads
  alter column lead_status set default 'New';

update public.leads
set lead_status = 'New'
where lead_status = 'new';

drop policy if exists "Public can submit website leads" on public.leads;
create policy "Public can submit website leads"
on public.leads
for insert
to anon, authenticated
with check (
  consent_to_contact is true
  and lead_status in ('new', 'New')
  and coalesce(lead_source, 'Website Contact Form') = 'Website Contact Form'
  and coalesce(trim(first_name), '') <> ''
  and coalesce(trim(last_name), '') <> ''
  and coalesce(trim(email), '') <> ''
  and coalesce(trim(phone), '') <> ''
);

comment on column public.leads.lead_source is 'Internal lead source label for CRM reporting.';
comment on column public.leads.ip_address is 'Internal-only IP address captured from request headers for fraud/spam review.';
comment on column public.leads.user_agent is 'Internal-only user agent captured from request headers for fraud/spam review.';
