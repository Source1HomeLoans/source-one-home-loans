# Source One Relationship Hub Migration Report

## Summary

The current repository did not include an existing CRM route or legacy CRM screens. This update adds a new internal-facing Relationship Hub at `/relationship-hub` and introduces an additive Supabase migration for the unified contact model.

The public mortgage website remains intact.

## New Relationship Hub Route

- Route: `/relationship-hub`
- Metadata: `noindex, nofollow`
- Navigation inside the hub: Home, Contacts, Tasks, Files, Settings
- Primary model: all people and organizations live in one Contacts system
- Legacy-style modules are de-emphasized into Settings -> Legacy Tools

## Database Migration

Migration file:

- `supabase/migrations/20260802000000_create_relationship_hub.sql`

Tables added safely:

- `public.contacts`
- `public.tags`
- `public.contact_tags`
- `public.timeline_events`
- `public.tasks`
- `public.contact_files`
- `public.recently_viewed_contacts`
- `public.relationship_scoring_settings`

Storage added safely:

- Private Supabase Storage bucket: `contact-files`
- Authenticated policies for read, upload, update, and delete against the `contact-files` bucket

Safety approach:

- Uses `create table if not exists`
- Uses `add column if not exists`
- Uses explicit `public.` schema names
- Uses `drop policy if exists` before policy creation to avoid duplicate-policy failures
- Does not recreate `app_role`
- Does not rerun old full-schema initialization
- Does not delete legacy/source tables
- Ends with `notify pgrst, 'reload schema';`

## Existing Data Preservation

Existing public website leads are preserved and mapped into the new relationship model:

- `public.leads` -> `public.contacts`
- Category: `Prospect`
- Source tracking: `source_table = 'leads'`, `source_record_id = leads.id`
- Preserved fields: first name, last name, email, phone, created date
- Follow-up defaults: next follow-up one day after lead creation, status `Due Today`
- Relationship defaults: score `20`, tier `Needs Attention`
- Timeline event added: `Website lead imported`

Duplicate prevention:

- Existing `source_table/source_record_id` matches are skipped
- Existing matching email records are skipped
- Existing matching normalized phone records are skipped

## Removed Or Deprecated Modules

No physical legacy CRM modules existed in this repository, so no CRM routes were deleted.

The new hub explicitly de-emphasizes these future or legacy concepts from primary navigation:

- Kanban boards
- Loan pipeline boards
- Shark Tank as a standalone system
- Separate borrower modules
- Separate partner modules
- Duplicate contact screens
- Complex opportunity workflows
- Marketing automation clutter
- Large multi-step contact forms

If these are added or discovered later, they should move under:

- Settings -> Legacy Tools

## Production QA Checklist

1. Open `/relationship-hub`.
2. Confirm no full-page horizontal scrolling on desktop.
3. Confirm mobile layout shows contact list first and opens detail view after tap.
4. Add a contact using only first name, last name, phone/email, and category.
5. Search by name, such as `David`.
6. Search by company, such as `PennyMac`.
7. Search by category, such as `Realtor`.
8. Search by tag, such as `DSCR`.
9. Search combined keywords, such as `Dallas Realtor`.
10. Confirm one-click call, text, and email actions use `tel:`, `sms:`, and `mailto:`.
11. Confirm contact detail shows timeline, notes, tasks, files, relationship details, and optional mortgage details.
12. Confirm follow-ups due appear on Home.
13. Confirm birthdays appear on Home.
14. Confirm recently viewed contacts appear on Home.
15. Confirm task views show Today, Upcoming, Overdue, and Completed.
16. Confirm Files section shows contact file metadata and planned Supabase Storage behavior.
17. Confirm Settings shows editable scoring formula inputs.
18. Confirm Legacy Tools messaging is under Settings only.
19. Apply Supabase migration in a staging database before production.
20. Verify imported leads against `public.contacts`.
21. Verify RLS behavior with authenticated CRM users.
22. Run `npm.cmd run build`.

## Follow-Up Implementation Notes

- Wire the UI to Supabase authenticated reads/writes.
- Add user profile/role tables or connect to the existing auth model before tightening RLS.
- Tighten Supabase Storage policies to role, ownership, and assigned-contact rules.
- Add server actions for notes, tasks, contact assignment, archive/restore, and recently viewed tracking.
- Add ARIVE API-backed sync actions once credentials and API contract are confirmed.
- Add confirmation dialogs before archive/delete actions.
