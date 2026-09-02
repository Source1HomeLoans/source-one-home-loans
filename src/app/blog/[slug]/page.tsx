import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { getAnyBlogPostBySlug, getBlogPostBySlug } from "@/lib/blogPosts";
import { company } from "@/lib/site-data";
import { isVaSlug } from "@/lib/va-visibility";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    if (isVaSlug(slug) && getAnyBlogPostBySlug(slug)) {
      return {
        title: "Blog | Source One Home Loans",
        description: "Explore current Source One Home Loans mortgage education articles.",
        robots: {
          index: false,
          follow: true,
        },
      };
    }

    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `${company.siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${company.siteUrl}/blog/${post.slug}`,
      siteName: company.name,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    if (isVaSlug(slug) && getAnyBlogPostBySlug(slug)) {
      redirect("/blog");
    }

    notFound();
  }

  return <BlogArticle post={post} />;
}
