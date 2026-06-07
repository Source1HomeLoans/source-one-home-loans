import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";

export const metadata: Metadata = {
  title: "Mortgage Blog",
  description: "Mortgage education, home buying tips, real estate investing, self-employed borrower resources, market updates, and refinance strategies.",
};

export default function BlogPage() {
  return <BlogIndex />;
}
