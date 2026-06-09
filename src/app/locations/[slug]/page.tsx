import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/location-page-template";
import { getLocationBySlug } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLocationBySlug(slug);

  if (!page) {
    notFound();
  }

  return <LocationPageTemplate page={page} />;
}
