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

comment on policy "Public can submit website leads" on public.leads is
  'Allows public website lead inserts from both base schema payloads and CRM-enriched payloads while migrations roll forward.';
