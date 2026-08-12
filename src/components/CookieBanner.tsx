"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_CONSENT_KEY } from "./GoogleAnalytics";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShow(true);
    }
  }, []);

  const updateConsent = (accepted: boolean) => {
    const value = accepted ? "accepted" : "declined";
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setShow(false);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: accepted ? "granted" : "denied",
        ad_storage: accepted ? "granted" : "denied",
        ad_user_data: accepted ? "granted" : "denied",
        ad_personalization: accepted ? "granted" : "denied",
      });
    }

    if (accepted && typeof window !== "undefined" && !window.fbq && process.env.NEXT_PUBLIC_FB_PIXEL_ID) {
      // Dynamically load FB pixel if accepted
      const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
      (function (f: Record<string, unknown>, b: Document, e: string, v: string, n?: unknown, t?: HTMLScriptElement, s?: Element | null) {
        if (f.fbq) return;
        const q: unknown[] = [];
        const fbqFn = function (...args: unknown[]) {
          if ((fbqFn as unknown as { callMethod?: { apply: (target: unknown, args: IArguments) => void } }).callMethod) {
            (fbqFn as unknown as { callMethod: { apply: (target: unknown, args: unknown) => void } }).callMethod.apply(fbqFn, args);
          } else {
            q.push(args);
          }
        };
        (fbqFn as unknown as { queue: unknown[] }).queue = q;
        f.fbq = fbqFn;
        if (!f._fbq) f._fbq = fbqFn;
        t = b.createElement(e) as HTMLScriptElement;
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s?.parentNode?.insertBefore(t, s);
      })(window as unknown as Record<string, unknown>, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      const fbqRunner = (window as unknown as Record<string, (...args: unknown[]) => void>).fbq;
      if (fbqRunner) {
        fbqRunner("init", fbPixelId);
        fbqRunner("track", "PageView");
      }
    }
  };

  if (!show) return null;

  return (
    <div
      data-testid="cookie-banner"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-xl border border-line bg-[#0D0D10]/95 p-5 shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted sm:max-w-xl">
          A weboldal Google Analytics-et használ a látogatói statisztikákhoz. Az adatok névtelenül
          kerülnek feldolgozásra. Részletek az{" "}
          <Link href="/adatkezelesi" className="text-[#1AE87B] underline underline-offset-4 hover:opacity-80">
            adatkezelési tájékoztatóban
          </Link>
          .
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={() => updateConsent(false)}
            className="rounded border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-muted transition-colors duration-150 hover:border-silver hover:text-ink"
          >
            Csak szükségesek
          </button>
          <button
            onClick={() => updateConsent(true)}
            className="rounded bg-[#1AE87B] px-5 py-2.5 text-xs font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
