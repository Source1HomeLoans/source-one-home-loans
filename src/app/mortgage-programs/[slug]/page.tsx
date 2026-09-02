import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SeoProgramPage } from "@/components/seo-page-template";
import { getAnyProgramBySlug, getProgramBySlug } from "@/lib/seo-content";
import { isVaSlug } from "@/lib/va-visibility";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProgramBySlug(slug);

  if (!page) {
    if (isVaSlug(slug) && getAnyProgramBySlug(slug)) {
      return {
        title: "Mortgage Programs | Source One Home Loans",
        description: "Explore current Source One Home Loans mortgage program guides.",
        robots: {
          index: false,
          follow: true,
        },
      };
    }

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
    if (isVaSlug(slug) && getAnyProgramBySlug(slug)) {
      redirect("/mortgage-programs");
    }

    notFound();
  }

  return <SeoProgramPage page={page} />;
}
