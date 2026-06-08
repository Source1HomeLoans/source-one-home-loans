const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:3210";

const routes = [
  "/blog",
  "/blog/how-texas-buyers-can-prepare-for-pre-qualification",
  "/blog/texas-va-loan-benefits-for-veterans",
  "/blog/va-loans-vs-conventional-loans",
  "/blog/texas-jumbo-loan-guide",
  "/blog/texas-conventional-loan-requirements",
];

let failed = false;

for (const route of routes) {
  const url = new URL(route, baseUrl);
  const response = await fetch(url, { redirect: "manual" });
  console.log(`${route} ${response.status}`);

  if (response.status !== 200) {
    failed = true;
  }
}

if (failed) {
  throw new Error("One or more blog QA routes failed.");
}
