import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { SonnerToaster } from "@/components/SonnerToaster";
import { SEO_KEYWORDS } from "@/data/keywords";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieBanner } from "@/components/CookieBanner";
import { OrganizationJsonLd } from "@/components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sirosoft.hu"),
  title: "SIROSOFT – Egyedi szoftverfejlesztés | CRM, ERP, weboldal, mobilapp",
  keywords: SEO_KEYWORDS,
  description:
    "SIROSOFT – Egyedi szoftverfejlesztés: CRM, ERP, weboldal, belső rendszerek és mobilalkalmazás kkv-knak és nagyvállalatoknak.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SIROSOFT – Egyedi szoftverfejlesztés",
    description:
      "Weboldaltól ERP rendszerig, mobilapptól belső ügyviteli platformig — minden megoldást az ügyfél folyamataira szabunk.",
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg font-body text-ink">
        <MotionConfig reducedMotion="user">
          {children}
          <SonnerToaster />
          <CookieBanner />
        </MotionConfig>
        <GoogleAnalytics />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
