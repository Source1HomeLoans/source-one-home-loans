import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoProgramPage } from "@/components/seo-page-template";
import { getProgramBySlug } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProgramBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  };
}

export default async function MortgageProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProgramBySlug(slug);

  if (!page) {
    notFound();
  }

  return <SeoProgramPage page={page} />;
}
