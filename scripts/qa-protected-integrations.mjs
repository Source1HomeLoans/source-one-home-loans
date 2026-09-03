import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const expectedBorrowerPortalUrl = "https://sourceone.my1003app.com/2038179/register";
const obsoleteBorrowerPortalUrl = "https://sourceone.my1003app.com/2038179/login";

const failures = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function fail(message) {
  failures.push(`Protected integration QA failed: ${message}`);
}

function assert(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function matchConfigString(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*["']([^"']+)["']`));
  return match?.[1] ?? null;
}

function countMatches(source, pattern) {
  return source.match(pattern)?.length ?? 0;
}

const siteData = readProjectFile("src/lib/site-data.ts");
const siteHeader = readProjectFile("src/components/site-header.tsx");
const siteFooter = readProjectFile("src/components/site-footer.tsx");
const leadForm = readProjectFile("src/components/lead-form.tsx");
const leadActions = readProjectFile("src/lib/lead-actions.ts");

assert(
  matchConfigString(siteData, "borrowerLoginUrl") === expectedBorrowerPortalUrl,
  "borrowerLoginUrl must remain the approved ARIVE borrower portal register URL.",
);
assert(
  matchConfigString(siteData, "borrowerRegisterUrl") === expectedBorrowerPortalUrl,
  "borrowerRegisterUrl must remain the approved ARIVE borrower portal register URL.",
);
assert(!siteData.includes(obsoleteBorrowerPortalUrl), "obsolete ARIVE borrower portal login URL must not appear in site-data.");

assert(
  countMatches(siteHeader, /href=\{company\.borrowerLoginUrl\}/g) >= 2,
  "desktop and mobile header Borrower Login links must derive from company.borrowerLoginUrl.",
);
assert(!/my1003app\.com/.test(siteHeader), "site-header must not hard-code a borrower portal URL.");
assert(/Borrower Login/.test(siteHeader), "site-header must still render Borrower Login links.");

assert(
  countMatches(siteFooter, /href=\{company\.borrowerLoginUrl\}/g) >= 1,
  "footer Borrower Login link must derive from company.borrowerLoginUrl.",
);
assert(!/my1003app\.com/.test(siteFooter), "site-footer must not hard-code a borrower portal URL.");
assert(/Borrower Login/.test(siteFooter), "site-footer must still render the Borrower Login link.");

assert(
  /import\s*\{\s*submitLead\b[\s\S]*\}\s*from\s*["']@\/lib\/lead-actions["']/.test(leadForm),
  "LeadForm must import submitLead from @/lib/lead-actions.",
);
assert(
  /useActionState\s*\(\s*submitLead\s*,/.test(leadForm),
  "LeadForm submission state/action must continue using submitLead.",
);

assert(
  /process\.env\.ZAPIER_LEAD_WEBHOOK_URL/.test(leadActions),
  "submitLead must read the server-side ZAPIER_LEAD_WEBHOOK_URL environment variable.",
);
assert(
  !/NEXT_PUBLIC_ZAPIER_LEAD_WEBHOOK_URL/.test(leadActions),
  "Zapier lead webhook must not be exposed as NEXT_PUBLIC_ZAPIER_LEAD_WEBHOOK_URL.",
);
assert(
  /\/rest\/v1\/leads/.test(leadActions),
  "submitLead must continue writing website leads to the Supabase /rest/v1/leads endpoint.",
);
assert(
  /fetch\s*\(\s*zapierWebhookUrl\s*,[\s\S]*?method:\s*["']POST["']/.test(leadActions),
  "Zapier lead delivery must continue performing a server-side POST using zapierWebhookUrl.",
);
assert(
  /zapierDelivery[\s\S]*Promise\.allSettled[\s\S]*zapierDelivery/.test(leadActions),
  "protected Zapier delivery code must remain wired into the lead submission flow.",
);

if (process.env.VERCEL_ENV === "production") {
  const zapierWebhookUrl = process.env.ZAPIER_LEAD_WEBHOOK_URL;

  try {
    const parsedUrl = new URL(zapierWebhookUrl ?? "");
    assert(parsedUrl.protocol === "https:", "production Zapier lead webhook must use HTTPS.");
    assert(parsedUrl.hostname === "hooks.zapier.com", "production Zapier lead webhook hostname must be hooks.zapier.com.");
  } catch {
    fail("production Zapier lead webhook is missing or invalid.");
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Protected integration QA passed.");
