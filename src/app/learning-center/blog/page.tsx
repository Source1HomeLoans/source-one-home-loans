import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";

export const metadata: Metadata = {
  title: "Mortgage Blog",
  description: "Source One Home Loans mortgage blog with education, home buying tips, real estate investing, self-employed borrower resources, market updates, and refinance strategies.",
};

export default function LearningCenterBlogPage() {
  return <BlogIndex basePath="/learning-center/blog" />;
}
