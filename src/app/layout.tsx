import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Source One Home Loans | Mortgage Solutions Built Around You",
    template: "%s | Source One Home Loans",
  },
  description:
    "Source One Home Loans offers smart mortgage solutions for homebuyers, investors, and self-employed borrowers. Company NMLS #2812359.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Source One Home Loans | Your Home. Your Future. Our Focus.",
    description: "Smart mortgage solutions for homebuyers, investors, and self-employed borrowers.",
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
    title: "Source One Home Loans | Your Home. Your Future. Our Focus.",
    description: "Smart mortgage solutions for homebuyers, investors, and self-employed borrowers.",
    images: ["/brand/source-one-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
