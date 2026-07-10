import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getDistrictBySlug, siteConfig } from '@/data/districtsData';

// Core Application Component Ecosystem Matrix
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import PricingAndContact from '@/components/PricingAndContact';
import WhyUsAndTech from '@/components/WhyUsAndTech';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/FAQ';

// Explicitly anchoring page variables to target territory search queries
const SLUG = 'theni';
const data = getDistrictBySlug(SLUG);

// Fallback runtime safety condition to prevent client frame crashes
if (!data) {
  notFound();
}

// =========================================================================
// 1. ABSOLUTE 100/100 PRODUCTION METADATA ENGINE (EVERY TAG INTEGRATED)
// =========================================================================
export const metadata = {
  metadataBase: new URL(siteConfig.domain || 'https://wepzite.in'),
  title: `Website Design Company in Theni | Web designer in theni `,
  description: `Engineered web systems for Theni enterprises. Premium Next.js apps, fluid WhatsApp automation, custom branding, and localized conversion optimization maps.`,
  keywords: `website design company in theni, web development company theni, digital marketing agency theni, gmb optimization theni, app developers theni, meta ads expert theni`,
  
  // Strict Index Tracking Directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical Link Layer Architecture
  alternates: {
    canonical: `/website-design-company-in-${SLUG}`,
    languages: {
      'en-IN': `/website-design-company-in-${SLUG}`,
    },
  },

  // Author & Provenance Signatures
  authors: [{ name: 'Wepzite Digital Labs', url: 'https://wepzite.in' }],
  creator: 'Wepzite Software Architects',
  publisher: 'Wepzite Digital Holdings',
  category: 'Technology & Web Engineering Services',
  applicationName: 'Wepzite Operational Platform',
  generator: 'Next.js Serverless Framework Engine',
  classification: 'Enterprise Software & Search Systems Engineering',
  referrer: 'origin-when-cross-origin',

  // Verification Key Bridges
  verification: {
    google: 'google-site-verification-token-placeholder',
    yandex: 'yandex-verification-token-placeholder',
    yahoo: 'yahoo-verification-token-placeholder',
    other: {
      me: ['contact@wepzite.in'],
      'facebook-domain-verification': ['fb-domain-verification-token-placeholder'],
    },
  },

  // Icon Sub-System Manifest Keys
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json',

  // Mobile Web Application Runtime Adaptations
  appleWebApp: {
    title: 'Wepzite Engine',
    statusBarStyle: 'black-translucent',
    startupImage: ['/assets/splash-screen.png'],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#020617', // Slate 950 Matching
  colorScheme: 'dark light',

  // OpenGraph Distribution Parameters
  openGraph: {
    title: `Website Design Company in Theni | Next.js Engineering Group`,
    description: `Engineered web systems for Theni enterprises. Premium Next.js apps, fluid WhatsApp automation, custom branding, and localized conversion optimization maps.`,
    url: `/website-design-company-in-${SLUG}`,
    siteName: siteConfig.companyName || 'Wepzite',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: data.seo?.ogImage || '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wepzite NextJS Enterprise System Framework Layout',
      },
    ],
  },

  // Twitter Product Card Layer Mappings
  twitter: {
    card: 'summary_large_image',
    title: `Website Design Company in Theni | Next.js Engineering Group`,
    description: `Engineered web systems for Theni enterprises. Premium Next.js apps, fluid WhatsApp automation, custom branding, and localized conversion optimization maps.`,
    site: '@wepzitedigital',
    creator: '@wepzitedigital',
    images: [data.seo?.ogImage || '/og/theni-web-blueprint.jpg'],
  },

  // Regional Geolocational Precision Tags
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Theni',
    'geo.position': '10.0101;77.4754', // Exact Theni center coordinates
    ICBM: '10.0101, 77.4754',
  },
};

function compileComprehensiveJsonLdGraph(d) {
  const pageUrl = `${siteConfig.domain}/website-design-company-in-${d.slug}`;
  const companyLogoUrl = `${siteConfig.domain}/logo.png`;

  const socialChannels = [
    'https://facebook.com/wepzite',
    'https://instagram.com/wepzite',
    'https://linkedin.com/company/wepzite',
    'https://youtube.com/wepzite',
    'https://x.com/wepzitedigital'
  ];

  // 1. Base Corporate Identity Profile
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.domain}/#organization`,
    name: siteConfig.companyName,
    url: siteConfig.domain,
    logo: companyLogoUrl,
    sameAs: socialChannels,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      email: siteConfig.email,
      availableLanguage: ['en', 'Tamil']
    }
  };

  // 2. Regional Node Base Service Infrastructure Mapping
  const localBusinessAndProfessionalSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${pageUrl}/#local-agency`,
    name: `${siteConfig.companyName} - Website Design Company in ${d.district}`,
    url: pageUrl,
    logo: companyLogoUrl,
    image: d.seo?.ogImage || companyLogoUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '₹15000-₹150000',
    parentOrganization: { '@id': `${siteConfig.domain}/#organization` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: d.district },
      { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: d.district,
      addressRegion: d.state || 'Tamil Nadu',
      addressCountry: 'IN'
    }
  };

  // 3. Crawler Core Page Mappings
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.companyName,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.domain}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name: `Website Design Services in ${d.district}`,
    description: d.seo?.description,
    isPartOf: { '@id': `${siteConfig.domain}/#website` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: d.seo?.ogImage || companyLogoUrl
    }
  };

  // 4. Detailed Modular Capabilities Offering Matrix Indexing
  const servicesOfferedList = [
    { name: 'Core Next.js & React System Web Development', desc: 'Zero-bloat, high-converting semantic serverless layout design targeting 99+ Core Web Vitals.' },
    { name: 'Native Cross-Platform Mobile Applications', desc: 'React Native engineering layouts with pristine global state tracking for mobile screens.' },
    { name: 'AI Branding Frameworks & Identity Generation', desc: 'Rendering high-clarity pixel-perfect vector logos, structural banners, and asset vectors.' },
    { name: 'Premium Marketing Graphic Layout Design', desc: 'Engineering professional marketing collateral and promotional assets.' },
    { name: 'Google Business Profile Tracking & Local Optimization', desc: 'Dynamic GMB optimization sequences designed to drive high-intent regional traffic loops.' },
    { name: 'Google Search Network Advertising Pipelines', desc: 'High-ROI pay-per-click setups designed to turn search intents into actionable invoices.' },
    { name: 'Meta Ad Network Conversion Funnel Configuration', desc: 'Highly optimized social demographic rigging targeting target acquisition costs.' }
  ];

  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Magnivel Technologies Strategic Delivery Suite',
    itemListElement: servicesOfferedList.map((svc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: svc.name,
        description: svc.desc,
        provider: { '@id': `${pageUrl}/#local-agency` }
      }
    }))
  };

  // Attach Catalog Matrix to Service Root Definition
  const specializedServiceRootSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Web & Software Development Engineering',
    provider: { '@id': `${pageUrl}/#local-agency` },
    description: 'Custom platform designs starting from lightweight micro frameworks to full-scale automated payment pipelines.',
    hasOfferCatalog: serviceCatalogSchema
  };

  // 5. Breadcrumb Structural Tracking Loops
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home Hub', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: `Website Design Company in ${d.district}`, item: pageUrl }
    ]
  };

  // 6. Inline FAQ Page Graph Mappings
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (d.faq || []).map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return [
    organizationSchema,
    localBusinessAndProfessionalSchema,
    webSiteSchema,
    webPageSchema,
    specializedServiceRootSchema,
    breadcrumbSchema,
    faqSchema
  ];
}

// =========================================================================
// 3. EXECUTION RENDER PAGE EXPORT NODE
// =========================================================================
export default function Page() {
  const schemaDossierBlocks = compileComprehensiveJsonLdGraph(data);

  return (
    <>
      {/* Dynamic Content Schema Graph Script Injections */}
      {schemaDossierBlocks.map((block, idx) => (
        <Script
          key={idx}
          id={`jsonld-node-${block['@type'] || 'graph'}-${idx}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

      {/* Synchronized Regional Presentation Engine */}
      <Hero district={data.district} hero={data.hero} />
      <Services district={data.district} services={data.services} />
      <Portfolio district={data.district} portfolio={data.portfolio} />
      <WhyUsAndTech district={data.district} whyUs={data.whyUs} />
      <Testimonials district={data.district} testimonials={data.testimonials} />
      <PricingAndContact district={data.district} phone={siteConfig.phone} email={siteConfig.email} />
      <Faq district={data.district} faq={data.faq} />
      <Contact district={data.district} phone={siteConfig.phone} email={siteConfig.email} />
    </>
  );
}