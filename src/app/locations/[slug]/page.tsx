import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/location-page-template";
import { getLocationBySlug, locationPages } from "@/lib/seo-content";

export function generateStaticParams() {
  return locationPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getLocationBySlug(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const page = getLocationBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return <LocationPageTemplate page={page} />;
}
