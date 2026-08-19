import { faqs, services } from "@/config/content";
import { siteConfig } from "@/config/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organizacao`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: `+${siteConfig.whatsapp.number}`,
      areaServed: "BR",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        addressCountry: siteConfig.country,
      },
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soluções digitais",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#site`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: siteConfig.locale,
      publisher: { "@id": `${siteConfig.url}/#organizacao` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};
