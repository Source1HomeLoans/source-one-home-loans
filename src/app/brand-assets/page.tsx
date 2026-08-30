import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Assets Preview",
  description: "Preview approved Source One Home Loans circular and horizontal brand assets.",
  robots: {
    index: false,
    follow: false,
  },
};

type BrandAsset = {
  name: string;
  path: string;
  type: "PNG" | "ICO" | "SVG";
  dimensions: string;
  width: number;
  height: number;
  deprecated?: boolean;
};

const approvedMaster: BrandAsset = {
  name: "Approved Master Logo",
  path: "/branding/logo/source-one-approved-logo.png",
  type: "PNG",
  dimensions: "Original approved raster source, 1254x1254",
  width: 420,
  height: 420,
};

const approvedAssets: BrandAsset[] = [
  {
    name: "Approved Horizontal Logo",
    path: "/branding/logo/source-one-approved-horizontal.svg",
    type: "SVG",
    dimensions: "1200x360 transparent horizontal layout",
    width: 520,
    height: 156,
  },
  {
    name: "Approved Logo 1200",
    path: "/branding/logo/source-one-approved-logo-1200.png",
    type: "PNG",
    dimensions: "1200x1200",
    width: 360,
    height: 360,
  },
  {
    name: "Approved Logo 800",
    path: "/branding/logo/source-one-approved-logo-800.png",
    type: "PNG",
    dimensions: "800x800",
    width: 320,
    height: 320,
  },
  {
    name: "Approved Logo 400",
    path: "/branding/logo/source-one-approved-logo-400.png",
    type: "PNG",
    dimensions: "400x400",
    width: 220,
    height: 220,
  },
  {
    name: "Approved Logo 200",
    path: "/branding/logo/source-one-approved-logo-200.png",
    type: "PNG",
    dimensions: "200x200",
    width: 160,
    height: 160,
  },
  {
    name: "Approved Icon 512",
    path: "/branding/logo/source-one-approved-icon-512.png",
    type: "PNG",
    dimensions: "512x512",
    width: 180,
    height: 180,
  },
  {
    name: "Approved Icon 192",
    path: "/branding/logo/source-one-approved-icon-192.png",
    type: "PNG",
    dimensions: "192x192",
    width: 120,
    height: 120,
  },
  {
    name: "Approved Apple Touch Icon",
    path: "/branding/logo/source-one-approved-apple-touch-icon.png",
    type: "PNG",
    dimensions: "180x180",
    width: 120,
    height: 120,
  },
  {
    name: "Approved Favicon",
    path: "/branding/logo/source-one-approved-favicon.ico",
    type: "ICO",
    dimensions: "16x16, 32x32, 48x48, 192x192",
    width: 80,
    height: 80,
  },
];

const deprecatedVectorAssets: BrandAsset[] = [
  {
    name: "Deprecated Horizontal Dark SVG",
    path: "/branding/logo/source-one-horizontal-dark.svg",
    type: "SVG",
    dimensions: "Vector recreation, not approved",
    width: 420,
    height: 140,
    deprecated: true,
  },
  {
    name: "Deprecated Horizontal Light SVG",
    path: "/branding/logo/source-one-horizontal-light.svg",
    type: "SVG",
    dimensions: "Vector recreation, not approved",
    width: 420,
    height: 140,
    deprecated: true,
  },
  {
    name: "Deprecated Icon SVG",
    path: "/branding/logo/source-one-icon.svg",
    type: "SVG",
    dimensions: "Vector recreation, not approved",
    width: 180,
    height: 180,
    deprecated: true,
  },
  {
    name: "Deprecated Stacked Dark SVG",
    path: "/branding/logo/source-one-stacked-dark.svg",
    type: "SVG",
    dimensions: "Vector recreation, not approved",
    width: 220,
    height: 220,
    deprecated: true,
  },
  {
    name: "Deprecated Stacked Light SVG",
    path: "/branding/logo/source-one-stacked-light.svg",
    type: "SVG",
    dimensions: "Vector recreation, not approved",
    width: 220,
    height: 220,
    deprecated: true,
  },
];

const legacyAssets: BrandAsset[] = [
  {
    name: "Legacy Horizontal Dark PNG",
    path: "/branding/logo/source-one-horizontal-dark-1800.png",
    type: "PNG",
    dimensions: "1800x600 recreation",
    width: 420,
    height: 140,
  },
  {
    name: "Legacy Horizontal Light PNG",
    path: "/branding/logo/source-one-horizontal-light-1800.png",
    type: "PNG",
    dimensions: "1800x600 recreation",
    width: 420,
    height: 140,
  },
  {
    name: "Legacy Stacked Dark PNG",
    path: "/branding/logo/source-one-stacked-dark-1600.png",
    type: "PNG",
    dimensions: "1600x1600 recreation",
    width: 220,
    height: 220,
  },
  {
    name: "Legacy Stacked Light PNG",
    path: "/branding/logo/source-one-stacked-light-1600.png",
    type: "PNG",
    dimensions: "1600x1600 recreation",
    width: 220,
    height: 220,
  },
  {
    name: "Legacy Transparent Icon SVG",
    path: "/branding/logo/source-one-icon-transparent.svg",
    type: "SVG",
    dimensions: "Vector recreation, not approved",
    width: 180,
    height: 180,
  },
  {
    name: "Legacy Icon PNG",
    path: "/branding/logo/source-one-icon-1024.png",
    type: "PNG",
    dimensions: "1024x1024 recreation",
    width: 180,
    height: 180,
  },
  {
    name: "Legacy Transparent Icon PNG",
    path: "/branding/logo/source-one-icon-transparent-1024.png",
    type: "PNG",
    dimensions: "1024x1024 recreation",
    width: 180,
    height: 180,
  },
  {
    name: "Legacy Favicon",
    path: "/branding/logo/favicon.ico",
    type: "ICO",
    dimensions: "Recreation, not approved",
    width: 80,
    height: 80,
  },
  {
    name: "Legacy Apple Touch Icon",
    path: "/branding/logo/apple-touch-icon.png",
    type: "PNG",
    dimensions: "180x180 recreation",
    width: 120,
    height: 120,
  },
  {
    name: "Legacy App Icon 192",
    path: "/branding/logo/icon-192.png",
    type: "PNG",
    dimensions: "192x192 recreation",
    width: 120,
    height: 120,
  },
  {
    name: "Legacy App Icon 512",
    path: "/branding/logo/icon-512.png",
    type: "PNG",
    dimensions: "512x512 recreation",
    width: 160,
    height: 160,
  },
];

function AssetPreview({ asset, theme }: { asset: BrandAsset; theme: "light" | "dark" }) {
  const isDark = theme === "dark";

  return (
    <div className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${asset.deprecated ? "border-red-200" : "border-slate-200"}`}>
      <div className={isDark ? "bg-[#071B35] p-6" : "bg-[#F2F4F7] p-6"}>
        <div className="flex min-h-56 items-center justify-center rounded-xl border border-white/20 bg-white/5 p-6">
          <Image
            src={asset.path}
            alt={`${asset.name} on ${theme} background`}
            width={asset.width}
            height={asset.height}
            className="h-auto max-h-56 w-auto max-w-full object-contain"
            unoptimized={asset.type === "SVG" || asset.type === "ICO"}
          />
        </div>
      </div>
      <div className="space-y-2 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-[#071B35]">{asset.name}</h3>
          <span className="rounded-full bg-[#D4A017]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#071B35]">
            {asset.type}
          </span>
          {asset.deprecated ? (
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              Deprecated
            </span>
          ) : null}
        </div>
        <p className="text-sm text-slate-600">{asset.dimensions}</p>
        <a className="break-all text-sm font-semibold text-[#071B35] underline decoration-[#D4A017] decoration-2 underline-offset-4" href={asset.path}>
          {asset.path}
        </a>
      </div>
    </div>
  );
}

function AssetGrid({ assets }: { assets: BrandAsset[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {assets.map((asset) => (
        <div className="grid gap-6" key={asset.path}>
          <AssetPreview asset={asset} theme="light" />
          <AssetPreview asset={asset} theme="dark" />
        </div>
      ))}
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
            Review the approved circular master logo, approved horizontal companion logo, and derived PNG/ICO assets.
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-[#D4A017]/30 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#071B35]">Approved Usage Paths</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <p><strong className="text-[#071B35]">Approved horizontal logo:</strong> /branding/logo/source-one-approved-horizontal.svg</p>
            <p><strong className="text-[#071B35]">Approved circular website logo:</strong> /branding/logo/source-one-approved-logo-800.png</p>
            <p><strong className="text-[#071B35]">Master raster logo:</strong> /branding/logo/source-one-approved-logo.png</p>
            <p><strong className="text-[#071B35]">Favicon:</strong> /branding/logo/source-one-approved-favicon.ico</p>
            <p><strong className="text-[#071B35]">Apple touch icon:</strong> /branding/logo/source-one-approved-apple-touch-icon.png</p>
            <p><strong className="text-[#071B35]">App icons:</strong> /branding/logo/source-one-approved-icon-192.png and /branding/logo/source-one-approved-icon-512.png</p>
            <p><strong className="text-[#071B35]">Note:</strong> The horizontal asset preserves the approved circular raster seal without auto-tracing it.</p>
          </div>
        </div>

        <div className="space-y-14">
          <section aria-labelledby="approved-master-logo">
            <h2 id="approved-master-logo" className="mb-5 text-2xl font-semibold text-[#071B35]">Approved Master Logo</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <AssetPreview asset={approvedMaster} theme="light" />
              <AssetPreview asset={approvedMaster} theme="dark" />
            </div>
          </section>

          <section aria-labelledby="approved-derived-assets">
            <h2 id="approved-derived-assets" className="mb-5 text-2xl font-semibold text-[#071B35]">Approved Horizontal, PNG, and Icon Assets</h2>
            <AssetGrid assets={approvedAssets} />
          </section>

          <section aria-labelledby="deprecated-vector-assets">
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
              <h2 id="deprecated-vector-assets" className="text-2xl font-semibold">Deprecated Recreated SVG Assets</h2>
              <p className="mt-2 text-sm font-semibold">These vector recreations are not approved for production use.</p>
              <p className="mt-2 text-sm">They remain available only for review/history and should not replace the approved circular raster logo.</p>
            </div>
            <AssetGrid assets={deprecatedVectorAssets} />
          </section>

          <section aria-labelledby="legacy-generated-assets">
            <h2 id="legacy-generated-assets" className="mb-5 text-2xl font-semibold text-[#071B35]">Legacy Generated Assets</h2>
            <AssetGrid assets={legacyAssets} />
          </section>
        </div>
      </div>
    </section>
  );
}
