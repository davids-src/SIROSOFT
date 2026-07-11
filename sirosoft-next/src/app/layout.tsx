import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SonnerToaster } from "@/components/SonnerToaster";

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
  metadataBase: new URL("https://sirosoft.hu"),
  title: "SIROSOFT – Egyedi szoftverfejlesztés | CRM, ERP, weboldal, mobilapp",
  description:
    "SIROSOFT – Egyedi szoftverfejlesztés: CRM, ERP, weboldal, belső rendszerek és mobilalkalmazás kkv-knak és nagyvállalatoknak.",
  openGraph: {
    title: "SIROSOFT – Egyedi szoftverfejlesztés",
    description:
      "Weboldaltól ERP rendszerig, mobilapptól belső ügyviteli platformig — minden megoldást az ügyfél folyamataira szabunk.",
    locale: "hu_HU",
    type: "website",
  },
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
      <body className="bg-siro-bg font-body text-siro-text">
        {children}
        <SonnerToaster />
      </body>
    </html>
  );
}
