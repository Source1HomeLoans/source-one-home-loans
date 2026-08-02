import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Assets Preview",
  description: "Preview Source One Home Loans vector and app icon brand assets before production header use.",
  robots: {
    index: false,
    follow: false,
  },
};

type BrandAsset = {
  name: string;
  path: string;
  type: "SVG" | "PNG" | "ICO";
  dimensions: string;
  width: number;
  height: number;
};

const brandAssets: BrandAsset[] = [
  {
    name: "Horizontal Dark SVG",
    path: "/branding/logo/source-one-horizontal-dark.svg",
    type: "SVG",
    dimensions: "Vector",
    width: 420,
    height: 140,
  },
  {
    name: "Horizontal Light SVG",
    path: "/branding/logo/source-one-horizontal-light.svg",
    type: "SVG",
    dimensions: "Vector",
    width: 420,
    height: 140,
  },
  {
    name: "Stacked Dark SVG",
    path: "/branding/logo/source-one-stacked-dark.svg",
    type: "SVG",
    dimensions: "Vector",
    width: 220,
    height: 220,
  },
  {
    name: "Stacked Light SVG",
    path: "/branding/logo/source-one-stacked-light.svg",
    type: "SVG",
    dimensions: "Vector",
    width: 220,
    height: 220,
  },
  {
    name: "Icon SVG",
    path: "/branding/logo/source-one-icon.svg",
    type: "SVG",
    dimensions: "Vector",
    width: 180,
    height: 180,
  },
  {
    name: "Transparent Icon SVG",
    path: "/branding/logo/source-one-icon-transparent.svg",
    type: "SVG",
    dimensions: "Vector",
    width: 180,
    height: 180,
  },
  {
    name: "Horizontal Dark PNG",
    path: "/branding/logo/source-one-horizontal-dark-1800.png",
    type: "PNG",
    dimensions: "1800px variant",
    width: 420,
    height: 140,
  },
  {
    name: "Horizontal Light PNG",
    path: "/branding/logo/source-one-horizontal-light-1800.png",
    type: "PNG",
    dimensions: "1800px variant",
    width: 420,
    height: 140,
  },
  {
    name: "Stacked Dark PNG",
    path: "/branding/logo/source-one-stacked-dark-1600.png",
    type: "PNG",
    dimensions: "1600px variant",
    width: 220,
    height: 220,
  },
  {
    name: "Stacked Light PNG",
    path: "/branding/logo/source-one-stacked-light-1600.png",
    type: "PNG",
    dimensions: "1600px variant",
    width: 220,
    height: 220,
  },
  {
    name: "Icon PNG",
    path: "/branding/logo/source-one-icon-1024.png",
    type: "PNG",
    dimensions: "1024px variant",
    width: 180,
    height: 180,
  },
  {
    name: "Transparent Icon PNG",
    path: "/branding/logo/source-one-icon-transparent-1024.png",
    type: "PNG",
    dimensions: "1024px variant",
    width: 180,
    height: 180,
  },
  {
    name: "Favicon ICO",
    path: "/branding/logo/favicon.ico",
    type: "ICO",
    dimensions: "ICO",
    width: 64,
    height: 64,
  },
  {
    name: "Apple Touch Icon",
    path: "/branding/logo/apple-touch-icon.png",
    type: "PNG",
    dimensions: "180x180",
    width: 96,
    height: 96,
  },
  {
    name: "App Icon 192",
    path: "/branding/logo/icon-192.png",
    type: "PNG",
    dimensions: "192x192",
    width: 96,
    height: 96,
  },
  {
    name: "App Icon 512",
    path: "/branding/logo/icon-512.png",
    type: "PNG",
    dimensions: "512x512",
    width: 128,
    height: 128,
  },
];

function AssetPreview({ asset, theme }: { asset: BrandAsset; theme: "light" | "dark" }) {
  const isDark = theme === "dark";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={isDark ? "bg-[#071B35] p-6" : "bg-[#F2F4F7] p-6"}>
        <div className="flex min-h-56 items-center justify-center rounded-xl border border-white/20 bg-white/5 p-6">
          <Image
            src={asset.path}
            alt={`${asset.name} on ${theme} background`}
            width={asset.width}
            height={asset.height}
            className="h-auto max-h-44 w-auto max-w-full object-contain"
            unoptimized={asset.type === "SVG" || asset.type === "ICO"}
          />
        </div>
      </div>
      <div className="space-y-2 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-semibold text-[#071B35]">{asset.name}</h2>
          <span className="rounded-full bg-[#D4A017]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#071B35]">
            {asset.type}
          </span>
        </div>
        <p className="text-sm text-slate-600">{asset.dimensions}</p>
        <a className="break-all text-sm font-semibold text-[#071B35] underline decoration-[#D4A017] decoration-2 underline-offset-4" href={asset.path}>
          {asset.path}
        </a>
      </div>
    </div>
  );
}

export default function BrandAssetsPage() {
  return (
    <section className="bg-[#F2F4F7] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#D4A017]">Temporary Preview</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#071B35] sm:text-5xl">
            Source One Home Loans Brand Assets
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Review each uploaded SVG, PNG, favicon, and app icon on both light and dark backgrounds before the new logo is used in the production header.
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-[#D4A017]/30 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#071B35]">Primary Usage Paths</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <p><strong className="text-[#071B35]">Website header:</strong> /branding/logo/source-one-horizontal-dark.svg</p>
            <p><strong className="text-[#071B35]">Light-background documents:</strong> /branding/logo/source-one-horizontal-light.svg</p>
            <p><strong className="text-[#071B35]">Social/profile icon:</strong> /branding/logo/source-one-icon.svg</p>
            <p><strong className="text-[#071B35]">Favicon:</strong> /branding/logo/favicon.ico</p>
            <p><strong className="text-[#071B35]">Apple touch icon:</strong> /branding/logo/apple-touch-icon.png</p>
            <p><strong className="text-[#071B35]">App icons:</strong> /branding/logo/icon-192.png and /branding/logo/icon-512.png</p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="mb-5 text-2xl font-semibold text-[#071B35]">Light Background</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {brandAssets.map((asset) => (
                <AssetPreview key={`light-${asset.path}`} asset={asset} theme="light" />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-semibold text-[#071B35]">Dark Background</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {brandAssets.map((asset) => (
                <AssetPreview key={`dark-${asset.path}`} asset={asset} theme="dark" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
