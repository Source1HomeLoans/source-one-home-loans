# Source One Home Loans

Next.js App Router website for Source One Home Loans.

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
