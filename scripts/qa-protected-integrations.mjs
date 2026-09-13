import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const failures = [];
function check(condition, message) {
  if (!condition) failures.push(message);
}
function filesIn(directory) {
  return fs.readdirSync(path.join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const file = `${directory}/${entry.name}`;
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}
const inquiryUrl = "https://sourceone.my1003app.com/inquiry";
const portalUrl = "https://sourceone.my1003app.com/2038179/register";
const siteData = read("src/lib/site-data.ts");
const configString = (key) => siteData.match(new RegExp(`${key}:\\s*["']([^"']+)["']`))?.[1];
check(configString("borrowerInquiryUrl") === inquiryUrl, "ARIVE inquiry URL must remain the approved native inquiry URL.");
for (const key of ["borrowerLoginUrl", "borrowerRegisterUrl"]) {
  check(configString(key) === portalUrl, `${key} must remain the approved Borrower Login configuration.`);
}

// Negative regression guards only: none of these may be required at runtime.
const retiredTokens = /\b(?:submitLead|LeadForm|ZAPIER_LEAD_WEBHOOK_URL|NEXT_PUBLIC_SUPABASE_URL|NEXT_PUBLIC_SUPABASE_ANON_KEY|RESEND_API_KEY|TURNSTILE_SECRET_KEY|NEXT_PUBLIC_TURNSTILE_SITE_KEY)\b|hooks\.zapier\.com|\/rest\/v1\/leads|public\.leads|@supabase\/|\bfrom\s*["']resend["']|challenges\.cloudflare\.com\/turnstile|@\/lib\/(?:lead-actions|lead-notifications|email-templates|public-form-copy|public-loan-program-options)/;
const oldAnchors = /#(?:lead-form|free-consultation)/;
const inquiryCounts = new Map();
const portalCounts = new Map();
for (const file of [...filesIn("src"), ...filesIn("lib")].filter((file) => /\.[cm]?[jt]sx?$/.test(file))) {
  const source = read(file);
  check(!oldAnchors.test(source), `${file}: obsolete mortgage form anchor.`);
  // The dormant hub has no intake role; historical schema is outside these runtime folders.
  check(!retiredTokens.test(source), `${file}: retired website intake dependency.`);
  if (!file.endsWith("site-data.ts")) {
    check(!source.includes("my1003app.com"), `${file}: use shared ARIVE configuration rather than a hard-coded URL.`);
  }
  const syntax = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  function visit(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName.getText(syntax);
      if (!file.includes("relationship-hub")) {
        check(tag !== "form", `${file}: public website intake must link to ARIVE, not render a form.`);
      }
      const attrs = new Map(node.attributes.properties.filter(ts.isJsxAttribute).map((attr) => [attr.name.getText(syntax), attr.initializer]));
      const href = attrs.get("href");
      const expression = href && ts.isJsxExpression(href) ? href.expression?.getText(syntax) : undefined;
      if (expression === "company.borrowerInquiryUrl") inquiryCounts.set(file, (inquiryCounts.get(file) ?? 0) + 1);
      if (expression === "company.borrowerLoginUrl") portalCounts.set(file, (portalCounts.get(file) ?? 0) + 1);
      const event = attrs.get("data-analytics-event");
      if (event && ts.isStringLiteral(event) && ["get_prequalified_click", "schedule_consultation_click"].includes(event.text)) {
        check(expression === "company.borrowerInquiryUrl", `${file}: borrower conversion CTA must use the shared ARIVE inquiry URL.`);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(syntax);
}
// Protect every current borrower conversion placement, including untagged links.
for (const [file, minimum] of Object.entries({
  "src/app/page.tsx": 7,
  "src/app/contact/page.tsx": 1,
  "src/app/loan-programs/[slug]/page.tsx": 2,
  "src/app/google-business-profile/page.tsx": 1,
  "src/components/site-header.tsx": 2,
  "src/components/contact-cta.tsx": 1,
  "src/components/blog-article.tsx": 2,
  "src/components/seo-page-template.tsx": 2,
  "src/components/location-page-template.tsx": 1,
  "src/components/mortgage-calculator.tsx": 2,
})) {
  check((inquiryCounts.get(file) ?? 0) >= minimum, `${file}: borrower inquiry CTA missing or redirected away from shared ARIVE configuration.`);
}
check(portalCounts.get("src/components/site-header.tsx") === 2, "Desktop and mobile Borrower Login must use company.borrowerLoginUrl.");
check(portalCounts.get("src/components/site-footer.tsx") === 1, "Footer Borrower Login must use company.borrowerLoginUrl.");
for (const file of ["src/components/site-header.tsx", "src/components/site-footer.tsx"]) {
  check(read(file).includes("Borrower Login"), `${file}: preserve Borrower Login label.`);
}
for (const file of filesIn("public").filter((file) => /\.(?:html|txt)$/.test(file))) {
  const source = read(file);
  check(!/<form\b/i.test(source) && !retiredTokens.test(source) && !oldAnchors.test(source), `${file}: retired public intake content.`);
}
for (const file of [".env.example", "next.config.ts", "vercel.json"]) {
  check(!retiredTokens.test(read(file)), `${file}: retired lead service configuration.`);
}
const manifest = JSON.parse(read("package.json"));
check(![...Object.keys(manifest.dependencies ?? {}), ...Object.keys(manifest.devDependencies ?? {})].some((name) => /resend|supabase|turnstile|zapier/i.test(name)), "Retired intake packages must not remain application dependencies.");
if (failures.length) {
  console.error(failures.map((failure) => `Protected integration QA failed: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("Protected integration QA passed: ARIVE inquiry, Borrower Login, borrower CTAs, and retired intake checks.");
