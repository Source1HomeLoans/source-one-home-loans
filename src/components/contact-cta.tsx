import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section className="bg-gold">
      <div className="container-shell flex flex-col gap-7 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <p className="eyebrow text-navy/70">Ready To Get Started?</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Get pre-qualified with clear mortgage guidance.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={company.phoneHref} className="button-navy shrink-0">
            Call Now <Phone className="h-4 w-4" />
          </a>
          <Link href="/contact#lead-form" className="button-navy shrink-0" data-analytics-event="get_prequalified_click">
            Get Pre-Qualified <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
