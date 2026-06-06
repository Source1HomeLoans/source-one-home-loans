import type { MetadataRoute } from "next";
import { company } from "@/lib/site-data";

const routes = [
  "",
  "/loan-programs",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/licensing-disclosures",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${company.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
