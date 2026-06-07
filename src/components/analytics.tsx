"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics-event], a[href^='tel:'], a[href^='mailto:']") : null;

      if (!target) {
        return;
      }

      const href = target instanceof HTMLAnchorElement ? target.href : "";
      const eventName =
        target.dataset.analyticsEvent ??
        (href.startsWith("tel:") ? "phone_call_click" : href.startsWith("mailto:") ? "email_click" : undefined);

      if (!eventName) {
        return;
      }

      window.gtag?.("event", eventName, {
        link_url: href || target.dataset.analyticsUrl || "unknown",
        link_text: target.textContent?.trim() || "unknown",
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
