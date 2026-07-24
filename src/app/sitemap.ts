import { MetadataRoute } from "next";
import { SERVICE_PAGES } from "@/data/services-detail";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://sirosoft.hu").replace(/\/$/, "");
  const now = new Date();

  // ── Főoldalak ────────────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/referenciak`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/folyamat`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/kapcsolat`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // ── Jogi oldalak ─────────────────────────────────────────────────────────────
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/adatkezelesi`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/aszf`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // ── Szolgáltatás aloldalak – forrás: services-detail.ts ───────────────────────
  const servicePages: MetadataRoute.Sitemap = SERVICE_PAGES.map((page) => ({
    url: `${base}/szolgaltatasok/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...corePages, ...servicePages, ...legalPages];
}
