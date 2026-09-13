# Source One Home Loans

Next.js App Router website for Source One Home Loans.

## Borrower Intake

The approved flow is website → ARIVE native inquiry → ARIVE Lead / ARIVE CRM.
Borrower CTAs use `company.borrowerInquiryUrl` in `src/lib/site-data.ts`.
The existing Borrower Login configuration is separate and must remain unchanged.
The public website has no local mortgage intake form or lead-service credential requirement.

Historical database migrations are retained for recordkeeping; do not apply or delete them as part of this retirement. The Relationship Hub and its migration report are dormant historical work, not the active CRM or a development plan.

`npm run qa:protected-integrations` guards the inquiry URL, Borrower Login, borrower CTA destinations, and absence of the retired intake dependencies. It also runs before every production build.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification And Analytics

Set these environment variables in Vercel for Production, Preview, and Development as needed:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google-search-console-token
NEXT_PUBLIC_BING_SITE_VERIFICATION=bing-webmaster-tools-token
```

Google Analytics 4 loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present.

Google Search Console and Bing Webmaster Tools verification meta tags render only when their verification tokens are present.

After deployment:

1. Open Google Search Console and add `https://www.sourceonehomeloans.com`.
2. Choose HTML tag verification and copy only the `content` token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
3. Open Bing Webmaster Tools and add `https://www.sourceonehomeloans.com`.
4. Choose HTML meta tag verification and copy only the `content` token into `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
5. Add the GA4 Measurement ID to `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
6. Redeploy Vercel.
7. Submit `https://www.sourceonehomeloans.com/sitemap.xml` to both Google Search Console and Bing Webmaster Tools.

## Production Checks

```bash
npm run lint
npm run build
```
