import { company, founder } from "@/lib/site-data";

export const organizationId = `${company.siteUrl}/#organization`;
export const founderId = `${company.siteUrl}/about#david-bates`;
export const websiteId = `${company.siteUrl}/#website`;

export function getFounderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: founder.name,
    jobTitle: founder.title,
    image: `${company.siteUrl}${founder.image}`,
    url: `${company.siteUrl}/about`,
    telephone: company.phoneDisplay,
    email: company.email,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Individual NMLS",
        value: company.individualNmls,
      },
    ],
    worksFor: {
      "@id": organizationId,
    },
  };
}

export function getMortgageBrokerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MortgageBroker"],
    "@id": organizationId,
    name: company.name,
    url: company.siteUrl,
    telephone: company.phoneDisplay,
    email: company.email,
    image: `${company.siteUrl}/brand/source-one-hero.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "City", name: "Dallas", addressRegion: "TX" },
      { "@type": "City", name: "Fort Worth", addressRegion: "TX" },
      { "@type": "City", name: "Houston", addressRegion: "TX" },
      { "@type": "City", name: "Austin", addressRegion: "TX" },
      { "@type": "City", name: "San Antonio", addressRegion: "TX" },
      { "@type": "City", name: "Plano", addressRegion: "TX" },
      { "@type": "City", name: "Frisco", addressRegion: "TX" },
      { "@type": "City", name: "McKinney", addressRegion: "TX" },
      { "@type": "City", name: "Arlington", addressRegion: "TX" },
    ],
    founder: {
      "@id": founderId,
    },
    employee: {
      "@id": founderId,
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Company NMLS",
        value: company.nmls,
      },
    ],
    sameAs: [company.nmlsConsumerAccessUrl],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: company.name,
    url: company.siteUrl,
    publisher: {
      "@id": organizationId,
    },
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
