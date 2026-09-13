# Source One Home Loans Agent Notes

## PROTECTED PRODUCTION INTEGRATIONS

- Borrower Portal production URL is `https://sourceone.my1003app.com/2038179/register`.
- `borrowerLoginUrl` and `borrowerRegisterUrl` in `src/lib/site-data.ts` must not be changed during unrelated website work.
- Header, mobile menu, and footer Borrower Login links must continue using the shared company config instead of duplicated hard-coded URLs.
- Website borrower intake must use `company.borrowerInquiryUrl`: `https://sourceone.my1003app.com/inquiry`.
- ARIVE is the CRM/system of record. Do not reintroduce website mortgage intake forms or a separate website lead submission pipeline.
- Borrower-intent CTAs must use the shared inquiry configuration; educational links must remain internal.
- The public website must build without credentials for the retired lead services.
- Preserve historical database migrations and records. The Relationship Hub is dormant and is not the active CRM.
- These integrations may only be changed after explicit owner approval.
- Always run `npm run qa:protected-integrations` after touching site navigation, forms, lead logic, config, or integrations.
