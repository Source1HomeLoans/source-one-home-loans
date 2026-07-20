alter table public.leads
  add column if not exists consent_submitted_at timestamptz,
  add column if not exists consent_disclosure_version text,
  add column if not exists consent_phone_number text,
  add column if not exists form_source text;

drop policy if exists "Public can submit website leads" on public.leads;
create policy "Public can submit website leads"
on public.leads
for insert
to anon, authenticated
with check (
  lead_status in ('new', 'New')
  and coalesce(lead_source, 'Website Contact Form') = 'Website Contact Form'
  and coalesce(trim(first_name), '') <> ''
  and coalesce(trim(last_name), '') <> ''
  and coalesce(trim(email), '') <> ''
  and coalesce(trim(phone), '') <> ''
);

comment on column public.leads.consent_to_contact is 'Optional telephone/text consent checkbox status submitted with the public website form.';
comment on column public.leads.consent_submitted_at is 'Timestamp when the public website form and displayed consent choice were submitted.';
comment on column public.leads.consent_disclosure_version is 'Version identifier for the telephone/text consent disclosure displayed with the submitted form.';
comment on column public.leads.consent_phone_number is 'Telephone number submitted with the consent choice for internal consent-evidence records.';
comment on column public.leads.form_source is 'Public form route or section where the lead was submitted.';
