import { siteConfig } from "@/data/districtsData";

/**
 * locationSeo.js
 * ---------------------------------------------------------------------------
 * Metadata and JSON-LD for the three Tamil Nadu location route levels:
 *
 *   /tamilnadu                     state hub
 *   /tamilnadu/[district]          district hub
 *   /tamilnadu/[district]/[city]   town page
 *
 * All three need the same ~150 lines of metadata and the same schema graph
 * shape, so they live here once instead of three times. A change to how the
 * site describes itself to Google happens in one file.
 * ---------------------------------------------------------------------------
 */

const SOCIAL_CHANNELS = [
  "https://facebook.com/wepzite",
  "https://instagram.com/wepzite",
  "https://linkedin.com/company/wepzite",
  "https://youtube.com/wepzite",
  "https://x.com/wepzitedigital",
];

export const SERVICE_CATALOG = [
  {
    name: "Core Next.js & React System Web Development",
    description:
      "Zero-bloat, high-converting semantic serverless layouts targeting 99+ Core Web Vitals.",
  },
  {
    name: "Native Cross-Platform Mobile Applications",
    description:
      "React Native engineering with clean global state management for mobile screens.",
  },
  {
    name: "AI Branding Frameworks & Identity Generation",
    description: "High-clarity vector logos, structural banners, and brand asset systems.",
  },
  {
    name: "Premium Marketing Graphic Layout Design",
    description: "Professional marketing collateral and promotional assets.",
  },
  {
    name: "Google Business Profile & Local Search Optimization",
    description:
      "GMB optimization sequences built to drive high-intent regional traffic.",
  },
  {
    name: "Google Search Network Advertising Pipelines",
    description: "High-ROI pay-per-click setups that turn search intent into enquiries.",
  },
  {
    name: "Meta Ad Network Conversion Funnel Configuration",
    description: "Optimized social demographic targeting tuned to acquisition cost.",
  },
];

const base = () => siteConfig.domain.replace(/\/$/, "");

// ===========================================================================
// METADATA
// ===========================================================================

/**
 * `title` is passed through `absolute` because app/layout.js sets a
 * "%s | Wepzite" template. Without it these titles render with the brand name
 * twice and run past the ~60 characters Google actually shows.
 */
export function buildLocationMetadata({
  title,
  description,
  keywords,
  path,
  placeName,
  geo,
  ogImage = "/og/og-image.png",
}) {
  return {
    metadataBase: new URL(siteConfig.domain),
    title: { absolute: title },
    description,
    keywords,

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
      languages: { "en-IN": path },
    },

    authors: [{ name: "Wepzite Digital Labs", url: siteConfig.domain }],
    creator: "Wepzite Software Architects",
    publisher: "Wepzite Digital Holdings",
    category: "Technology & Web Engineering Services",
    applicationName: "Wepzite Operational Platform",
    classification: "Enterprise Software & Search Systems Engineering",
    referrer: "origin-when-cross-origin",

    verification: {
      google: "google-site-verification-token-placeholder",
      yandex: "yandex-verification-token-placeholder",
      yahoo: "yahoo-verification-token-placeholder",
      other: {
        me: [siteConfig.email],
        "facebook-domain-verification": ["fb-domain-verification-token-placeholder"],
      },
    },

    // No `icons` or `manifest` here on purpose. A page-level icons block
    // REPLACES the layout's, and app/layout.js already points at the icon
    // files that actually exist in /public. Declaring them again here (as the
    // original Theni page did) pointed 330 pages at /shortcut-icon.png,
    // /apple-icon.png and /manifest.json — none of which exist.
    appleWebApp: {
      title: "Wepzite Engine",
      statusBarStyle: "black-translucent",
    },
    formatDetection: { email: false, address: false, telephone: false },

    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName: siteConfig.companyName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Website design company in ${placeName} — ${siteConfig.companyName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@wepzitedigital",
      creator: "@wepzitedigital",
      images: [ogImage],
    },

    // Coordinates are only emitted where we actually have them. A town with
    // no known centre renders without geo.position rather than borrowing the
    // district's — wrong coordinates are worse than none.
    other: {
      "geo.region": "IN-TN",
      "geo.placename": placeName,
      ...(geo
        ? { "geo.position": `${geo.lat};${geo.lng}`, ICBM: `${geo.lat}, ${geo.lng}` }
        : {}),
    },
  };
}

export const locationViewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
  colorScheme: "light",
};

// ===========================================================================
// STRUCTURED DATA
// ===========================================================================

/**
 * One @graph rather than several loose scripts: the nodes reference each
 * other by @id, and only a single graph lets Google resolve those references
 * instead of reading unrelated fragments.
 *
 * `trail` is the same array the visible <Breadcrumbs> renders, so the
 * BreadcrumbList schema and the page can never disagree.
 * `faq` likewise feeds both this graph and the rendered accordion.
 */
export function buildLocationJsonLd({
  path,
  placeName,
  description,
  title,
  geo,
  trail = [],
  faq = [],
  areaServed = [],
  ogImage = "/og/og-image.png",
  placeType = "AdministrativeArea",
  containedIn,
}) {
  const domain = base();
  const pageUrl = `${domain}${path}`;
  const logoUrl = `${domain}/logo.png`;
  const image = ogImage.startsWith("http") ? ogImage : `${domain}${ogImage}`;

  const nodes = [
    {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      name: siteConfig.companyName,
      url: domain,
      logo: logoUrl,
      sameAs: SOCIAL_CHANNELS,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "customer service",
        availableLanguage: ["en", "ta"],
      },
    },

    {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      url: domain,
      name: siteConfig.companyName,
      publisher: { "@id": `${domain}/#organization` },
    },

    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${pageUrl}/#local-agency`,
      name: `${siteConfig.companyName} — Website Design Company in ${placeName}`,
      url: pageUrl,
      logo: logoUrl,
      image,
      description,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: "₹15000-₹150000",
      parentOrganization: { "@id": `${domain}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: placeName,
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      ...(geo
        ? { geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } }
        : {}),
      areaServed: [
        {
          "@type": placeType,
          name: placeName,
          ...(containedIn
            ? {
                containedInPlace: {
                  "@type": "AdministrativeArea",
                  name: containedIn,
                },
              }
            : {}),
        },
        ...areaServed.map((name) => ({ "@type": "Place", name })),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Web & digital services in ${placeName}`,
        itemListElement: SERVICE_CATALOG.map((svc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: svc.name,
            description: svc.description,
            provider: { "@id": `${pageUrl}/#local-agency` },
            areaServed: { "@type": placeType, name: placeName },
          },
        })),
      },
    },

    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { "@id": `${domain}/#website` },
      about: { "@id": `${pageUrl}/#local-agency` },
      primaryImageOfPage: { "@type": "ImageObject", url: image },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: `${domain}${crumb.href === "/" ? "" : crumb.href}`,
      })),
    },
  ];

  if (faq.length) {
    nodes.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Serialise a graph for a <script type="application/ld+json"> tag. */
export function jsonLdScript(graph) {
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
