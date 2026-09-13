import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const baseUrl = new URL(process.env.QA_BASE_URL ?? "http://127.0.0.1:3210");
// This suite targets a production build made with ENABLE_VA_LOANS=false.
// Its HTTP checks intentionally fail if the served build enables VA marketing.
const lendingReference = /\bVA\b|\bVeterans Affairs\b|\bveterans?\b|\bmilitary borrowers?\b|\bCertificate of Eligibility\b|\bactive-duty borrowers?\b/i;
const restoredSlugs = ["how-texas-buyers-can-prepare-for-pre-qualification", "first-time-homebuyer-guide-texas"];
function loadContent(flag) {
  const cache = new Map();
  function load(file) {
    file = path.resolve(root, file);
    if (cache.has(file)) return cache.get(file).exports;
    const loadedModule = { exports: {} };
    cache.set(file, loadedModule);
    const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    new Function("require", "module", "exports", "process", code)(
      (name) => name.startsWith("@/") ? load(`src/${name.slice(2)}.ts`) : require(name),
      loadedModule, loadedModule.exports, { env: { ENABLE_VA_LOANS: flag } },
    );
    return loadedModule.exports;
  }
  return load;
}
function noLendingReferences(value, context) {
  if (typeof value === "string") assert(!lendingReference.test(value), `${context}: public lending reference: ${value}`);
  else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) noLendingReferences(child, `${context}.${key}`);
  }
}
const disabled = loadContent("false");
const enabled = loadContent("true");
const blogs = disabled("src/lib/blogPosts.ts").blogPosts;
const programs = disabled("src/lib/seo-content.ts").mortgageProgramPages;
const loans = disabled("src/lib/loan-program-pages.ts").loanProgramPages;
const visibility = disabled("src/lib/va-visibility.ts");
assert.equal(visibility.isPublicWhenVaDisabled({ slug: "general-education", title: "Mortgage Education", keywords: ["Texas VA Loans"] }), true, "Incidental keywords must not hide general education.");
assert.equal(visibility.isPublicWhenVaDisabled({ slug: "va-loans", title: "VA Loans" }), false);
assert.equal(visibility.isPublicWhenVaDisabled({ slug: "military-relocation", title: "Relocation", category: "VA Loan Education" }), false);
assert.equal(enabled("src/lib/va-visibility.ts").isPublicWhenVaDisabled({ slug: "va-loans" }), true, "Preserve explicit feature-flag behavior.");
assert.equal(visibility.scrubVaText("Veteran-Owned Business"), "Veteran-Owned Business");
assert.equal(visibility.scrubVaText("U.S. Navy Reserve service"), "U.S. Navy Reserve service");
assert.equal(blogs.length, 8, "All eight general articles must remain available.");
for (const slug of restoredSlugs) {
  const post = blogs.find((post) => post.slug === slug);
  assert(post, `Restored article missing: ${slug}`);
  assert(post.content.length >= 4 && post.faq.length >= 2, `Restored article lost substantive education: ${slug}`);
}
noLendingReferences({ blogs, programs, loans, locations: disabled("src/lib/seo-content.ts").locationPages }, "public exports");
console.log("PASS: public content, restored articles, topic filtering, and preserved biography checks.");

async function get(route) {
  return fetch(new URL(route, baseUrl), { redirect: "manual", signal: AbortSignal.timeout(20000) });
}
function checkHtml(html, route) {
  // Inspect rendered body AND metadata, Open Graph, and serialized JSON-LD.
  const withoutIdentity = html.replaceAll("Veteran-Owned Business", "");
  assert(!lendingReference.test(withoutIdentity), `${route}: VA lending leaked into HTML/metadata/schema.`);
  assert(!/<form(?:\s|>)/i.test(html), `${route}: mortgage form reappeared.`);
  assert(!/#(?:lead-form|free-consultation)|hooks\.zapier\.com|\/rest\/v1\/leads/.test(html), `${route}: retired intake returned.`);
  assert(html.includes('href="https://sourceone.my1003app.com/inquiry"'), `${route}: inquiry link missing.`);
  assert(html.includes('href="https://sourceone.my1003app.com/2038179/register"'), `${route}: Borrower Login changed.`);
}
const sitemapResponse = await get("/sitemap.xml");
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const routes = [...new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname))];
assert(routes.length >= 65, "Unexpected loss of non-VA sitemap entries.");
assert(routes.every((route) => !/(^|[-/])va([-\/]|$)/i.test(route)), "Dedicated VA content in sitemap.");
for (const prefix of ["/blog", "/learning-center/blog"]) {
  for (const post of blogs) assert(routes.includes(`${prefix}/${post.slug}`), `General article missing from sitemap: ${prefix}/${post.slug}`);
}
// Include public utility pages and the learning-center alias; the dormant hub is not a borrower marketing page.
const publicRoutes = [...routes, "/mortgage-learning-center", "/brand-assets", "/email-signature"];
for (let index = 0; index < publicRoutes.length; index += 6) {
  await Promise.all(publicRoutes.slice(index, index + 6).map(async (route) => {
    const response = await get(route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    checkHtml(html, route);
    if (["/blog", "/learning-center/blog"].includes(route)) {
      for (const slug of restoredSlugs) assert(html.includes(`href="${route}/${slug}"`), `${route}: restored article not discoverable.`);
    }
    if (["/", "/about"].includes(route)) {
      assert(html.includes("Veteran-Owned Business") && html.includes("U.S. Navy Reserve"), `${route}: truthful identity/biography removed.`);
    }
  }));
}
const unavailable = [
  ["/loan-programs/va-loans", "/loan-programs"],
  ...["texas-va-loans", "va-loan-benefits-for-veterans", "va-loan-eligibility-guide", "va-loan-vs-conventional-loan", "va-loan-funding-fee-explained"].map((slug) => [`/mortgage-programs/${slug}`, "/mortgage-programs"]),
  ...["/blog", "/learning-center/blog"].flatMap((prefix) => ["texas-va-loan-benefits-for-veterans", "va-loans-vs-conventional-loans"].map((slug) => [`${prefix}/${slug}`, prefix])),
];
for (const [route, destination] of unavailable) {
  assert(!routes.includes(route), `${route}: disabled route in sitemap.`);
  const response = await get(route);
  assert.equal(response.status, 307, `${route}: preserve disabled-state redirect.`);
  assert.equal(response.headers.get("location"), destination, `${route}: incorrect fallback.`);
  assert(!/<article\b/i.test(await response.text()), `${route}: dedicated article rendered.`);
}
console.log(`PASS: ${routes.length} active sitemap URLs plus three public aliases/utilities return 200 without VA lending in body/metadata/schema; inquiry and portal preserved.`);
console.log(`PASS: ${unavailable.length} dedicated VA URLs stay unavailable via their existing hub redirects.`);
