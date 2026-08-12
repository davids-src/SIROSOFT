import { MetadataRoute } from "next";
import { SERVICE_PAGES } from "@/data/services-detail";
import { getAllPosts } from "@/lib/blog";

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
      url: `${base}/rolunk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/folyamat`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
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

  // ── Blog cikkek (csak a már megjelent bejegyzések) ───────────────────────────
  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...servicePages, ...blogPosts, ...legalPages];
}
