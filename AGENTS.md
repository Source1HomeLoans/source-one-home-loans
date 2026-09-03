# Source One Home Loans Agent Notes

## PROTECTED PRODUCTION INTEGRATIONS

- Borrower Portal production URL is `https://sourceone.my1003app.com/2038179/register`.
- `borrowerLoginUrl` and `borrowerRegisterUrl` in `src/lib/site-data.ts` must not be changed during unrelated website work.
- Header, mobile menu, and footer Borrower Login links must continue using the shared company config instead of duplicated hard-coded URLs.
- Website forms must continue using `submitLead`.
- `submitLead` must continue saving leads to Supabase.
- `submitLead` must continue reading the server-side `ZAPIER_LEAD_WEBHOOK_URL`.
- The Zapier webhook must never become a `NEXT_PUBLIC_*` variable or be exposed to browser/client JavaScript.
- These integrations may only be changed after explicit owner approval.
- Always run `npm run qa:protected-integrations` after touching site navigation, forms, lead logic, config, or integrations.
