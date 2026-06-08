import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/site-data";
import { getFounderSchema, getMortgageBrokerSchema, getWebsiteSchema } from "@/lib/structured-data";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Source One Home Loans | Texas Mortgage Solutions",
    template: "%s | Source One Home Loans",
  },
  description:
    "Source One Home Loans provides personalized mortgage solutions for Texas homebuyers, homeowners, and real estate investors. Company NMLS #2812359.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
    },
  },
  openGraph: {
    title: "Source One Home Loans | Texas Mortgage Solutions",
    description: "Personalized conventional, jumbo, VA, and investor property loan guidance for Texas borrowers.",
    url: company.siteUrl,
    siteName: "Source One Home Loans",
    images: [
      {
        url: "/brand/source-one-hero.png",
        width: 1200,
        height: 630,
        alt: "Source One Home Loans modern home at sunset",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Source One Home Loans | Texas Mortgage Solutions",
    description: "Personalized conventional, jumbo, VA, and investor property loan guidance for Texas borrowers.",
    images: ["/brand/source-one-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <Analytics />
        <JsonLd data={getMortgageBrokerSchema()} />
        <JsonLd data={getFounderSchema()} />
        <JsonLd data={getWebsiteSchema()} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
