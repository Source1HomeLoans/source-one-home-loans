import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoProgramPage } from "@/components/seo-page-template";
import { getProgramBySlug, mortgageProgramPages } from "@/lib/seo-content";

export function generateStaticParams() {
  return mortgageProgramPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getProgramBySlug(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  };
}

export default function MortgageProgramPage({ params }: { params: { slug: string } }) {
  const page = getProgramBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return <SeoProgramPage page={page} />;
}
