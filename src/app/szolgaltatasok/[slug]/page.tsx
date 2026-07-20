import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServicePage, SERVICE_PAGES } from "@/data/services-detail";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicePageHero } from "@/components/ServicePageHero";
import {
  ServiceWhatIs,
  ServiceUseCases,
  ServiceFeatures,
  ServiceProcess,
  ServiceTech,
  ServiceROI,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/ServicePageSections";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getServicePage(params.slug);
  if (!page) return {};
  
  // Imporoljuk a kulcsszavakat a data/keywords-ből (dinamikusan, de itt is beimportálhatjuk, 
  // vagy fájl szinten, de a Next.js generateMetadata-ban is hivatkozhatunk rá)
  const { SERVICE_KEYWORDS } = await import("@/data/keywords");

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: SERVICE_KEYWORDS[params.slug] || [],
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      locale: "hu_HU",
      type: "website",
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const page = getServicePage(params.slug);
  if (!page) notFound();

  return (
    <div className="bg-siro-bg font-body text-siro-text">
      <Navbar />
      <main>
        <ServicePageHero page={page} />
        <ServiceWhatIs page={page} />
        <ServiceUseCases page={page} />
        <ServiceFeatures page={page} />
        <ServiceProcess page={page} />
        <ServiceTech page={page} />
        <ServiceROI page={page} />
        <ServiceFAQ page={page} />
        <ServiceCTA page={page} />
      </main>
      <Footer />
    </div>
  );
}
