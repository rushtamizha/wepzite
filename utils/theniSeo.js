import { siteConfig } from "@/data/districtsData";

/**
 * theniSeo.js
 * ------------------------------------------------------------------
 * Shaemerald metadata + JSON-LD builders for the "<service>-in-theni"
 * landing pages (data/theniServicesData.js). Mirrors the metadata
 * depth already used on /website-design-company-in-theni, just
 * factoemerald out so nine pages don't each carry ~150 duplicated lines.
 * ------------------------------------------------------------------
 */

export function buildTheniServiceMetadata(data) {
  const path = `/${data.slug}`;
  const ogImage = data.ogImage || "/og/og-image.png";

  return {
    metadataBase: new URL(siteConfig.domain || "https://www.wepzite.in"),
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: path,
      languages: {
        "en-IN": path,
      },
    },

    authors: [{ name: "Wepzite Digital Labs", url: siteConfig.domain }],
    creator: "Wepzite Software Architects",
    publisher: "Wepzite Digital Holdings",
    category: "Technology & Digital Marketing Services",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: path,
      siteName: siteConfig.companyName || "Wepzite",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${data.pageTitle} — Wepzite`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      site: "@wepzitedigital",
      creator: "@wepzitedigital",
      images: [ogImage],
    },

    other: {
      "geo.region": "IN-TN",
      "geo.placename": "Theni",
      "geo.position": "10.0101;77.4754",
      ICBM: "10.0101, 77.4754",
    },
  };
}

export function buildTheniServiceJsonLd(data) {
  const domain = siteConfig.domain || "https://www.wepzite.in";
  const pageUrl = `${domain}/${data.slug}`;
  const companyLogoUrl = `${domain}/logo.png`;

  const socialChannels = [
    "https://facebook.com/wepzite",
    "https://instagram.com/wepzite",
    "https://linkedin.com/company/wepzite",
    "https://youtube.com/wepzite",
    "https://x.com/wepzitedigital",
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${domain}/#organization`,
    name: siteConfig.companyName,
    url: domain,
    logo: companyLogoUrl,
    sameAs: socialChannels,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["en", "Tamil"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${pageUrl}/#local-agency`,
    name: `${siteConfig.companyName} - ${data.pageTitle}`,
    url: pageUrl,
    logo: companyLogoUrl,
    image: data.ogImage || companyLogoUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹1499-₹150000",
    parentOrganization: { "@id": `${domain}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Theni" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Theni",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: data.pageTitle,
    description: data.metaDescription,
    isPartOf: { "@id": `${domain}/#website` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: data.ogImage || companyLogoUrl,
    },
  };

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${data.pageTitle} Delivery Suite`,
    itemListElement: data.services.map((svc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: svc.title,
        description: svc.description,
        provider: { "@id": `${pageUrl}/#local-agency` },
      },
    })),
  };

  const specializedServiceRootSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.pageTitle,
    provider: { "@id": `${pageUrl}/#local-agency` },
    areaServed: { "@type": "AdministrativeArea", name: "Theni" },
    description: data.metaDescription,
    hasOfferCatalog: serviceCatalogSchema,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: domain },
      {
        "@type": "ListItem",
        position: 2,
        name: data.pageTitle,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (data.faq || []).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return [
    organizationSchema,
    localBusinessSchema,
    webPageSchema,
    specializedServiceRootSchema,
    breadcrumbSchema,
    faqSchema,
  ];
}
