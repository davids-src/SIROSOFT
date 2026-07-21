import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sirosoft.hu';

  const staticRoutes = [
    '',
    '/referenciak',
    '/folyamat',
    '/kapcsolat',
    '/adatkezelesi',
    '/aszf',
  ];

  const services = [
    'webfejlesztes',
    'belso-rendszerek',
    'crm-fejlesztes',
    'erp-fejlesztes',
    'mobilalkalmazas',
    'egyedi-szoftver',
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/szolgaltatasok/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
