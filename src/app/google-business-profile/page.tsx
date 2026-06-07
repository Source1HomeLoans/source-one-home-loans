import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site-data";

const serviceAreas = ["Texas", "Dallas", "Fort Worth", "Houston", "Austin", "San Antonio", "Plano", "Frisco", "McKinney", "Arlington"];

export const metadata: Metadata = {
  title: "Google Business Profile | Source One Home Loans",
  description: "Google Business Profile landing page for Source One Home Loans, serving Texas mortgage borrowers and real estate investors.",
};

export default function GoogleBusinessProfilePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MortgageBroker"],
    name: company.name,
    url: company.siteUrl,
    telephone: company.phoneDisplay,
    email: company.email,
    areaServed: serviceAreas,
    priceRange: "$$",
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Local Business Presence"
        title="Source One Home Loans in Texas"
        description="Google Business Profile-ready landing page with service areas, business hours, and map placement prepared for launch."
      />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-navy/10 bg-light-gray p-8">
            <MapPin className="h-8 w-8 text-gold" />
            <h2 className="mt-5 text-3xl font-semibold text-navy">Embedded Google Map Placeholder</h2>
            <div className="mt-6 flex min-h-72 items-center justify-center rounded-sm border border-dashed border-navy/30 bg-white text-center text-sm font-semibold text-slate-500">
              Google Map embed will be added after the Google Business Profile location is finalized.
            </div>
          </div>
          <div className="rounded-sm bg-navy p-8 text-white">
            <Clock className="h-8 w-8 text-gold" />
            <h2 className="mt-5 text-3xl font-semibold">Business Hours</h2>
            <div className="mt-6 grid gap-3 text-sm text-white/75">
              <p>Monday-Friday: 9:00 AM-6:00 PM</p>
              <p>Saturday: By appointment</p>
              <p>Sunday: Closed</p>
            </div>
            <h3 className="mt-9 text-xl font-semibold">Primary Service Area</h3>
            <p className="mt-3 text-white/75">Texas</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.slice(1).map((area) => (
                <span key={area} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                  {area}
                </span>
              ))}
            </div>
            <Link href="/contact#lead-form" className="button-gold mt-9">
              Get Pre-Qualified
            </Link>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
