"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const COOKIE_CONSENT_KEY = "sirosoft_cookie_consent";

function RouteTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId || typeof window === "undefined" || !window.gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    window.gtag("config", gaId, {
      page_path: url,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  // Click tracking for tel: and mailto: links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target || !target.href) return;

      const href = target.href;
      if (href.startsWith("tel:")) {
        if (window.gtag && gaId) {
          window.gtag("event", "click_phone", {
            event_category: "contact",
            event_label: href.replace("tel:", ""),
          });
        }
      } else if (href.startsWith("mailto:")) {
        if (window.gtag && gaId) {
          window.gtag("event", "click_email", {
            event_category: "contact",
            event_label: href.replace("mailto:", ""),
          });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [gaId]);

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Suspense fallback={null}>
        <RouteTracker gaId={gaId} />
      </Suspense>

      {/* Consent mode initialization before GA script loads */}
      <Script
        id="google-consent-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            var consent = localStorage.getItem('${COOKIE_CONSENT_KEY}');
            var isAccepted = consent === 'accepted';

            gtag('consent', 'default', {
              'analytics_storage': isAccepted ? 'granted' : 'denied',
              'ad_storage': isAccepted ? 'granted' : 'denied',
              'ad_user_data': isAccepted ? 'granted' : 'denied',
              'ad_personalization': isAccepted ? 'granted' : 'denied'
            });
          `,
        }}
      />

      {/* GA4 Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              send_page_view: false
            });
          `,
        }}
      />

      {/* Facebook Pixel Script - loaded dynamically if env var & accepted */}
      {fbPixelId && (
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var consent = localStorage.getItem('${COOKIE_CONSENT_KEY}');
                if (consent !== 'accepted') return;
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${fbPixelId}');
                fbq('track', 'PageView');
              })();
            `,
          }}
        />
      )}
    </>
  );
}
