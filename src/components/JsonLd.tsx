import Script from "next/script";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
    alternateName: "SIROSOFT",
    url: "https://sirosoft.hu",
    logo: "https://sirosoft.hu/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+36 70 273 5532",
      contactType: "customer service",
      email: "hello@sironic.hu",
      availableLanguage: ["Hungarian"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lövölde utca 24. 4/15.",
      addressLocality: "Székesfehérvár",
      postalCode: "8000",
      addressCountry: "HU",
    },
    vatID: "33056151-2-07",
    identifier: "07-09-037603",
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "SIROSOFT",
      url: "https://sirosoft.hu",
    },
  };

  return (
    <Script
      id={`service-jsonld-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
