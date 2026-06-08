import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";
import { company } from "@/lib/site-data";
import { locationPages, mortgageProgramPages } from "@/lib/seo-content";

const routes = [
  "",
  "/loan-programs",
  "/mortgage-calculator",
  "/mortgage-programs",
  "/locations",
  "/learning-center",
  "/learning-center/blog",
  "/blog",
  "/google-business-profile",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/licensing-disclosures",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = [
    ...mortgageProgramPages.map((page) => `/mortgage-programs/${page.slug}`),
    ...locationPages.map((page) => `/locations/${page.slug}`),
    ...blogPosts.map((post) => `/learning-center/blog/${post.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return [...routes, ...dynamicRoutes].map((route) => ({
    url: `${company.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
