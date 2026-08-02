"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const isRelationshipHub = pathname?.startsWith("/relationship-hub");

  if (isRelationshipHub) {
    return <main>{children}</main>;
  }

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
