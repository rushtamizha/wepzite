import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getDistrictBySlug, siteConfig } from '@/data/districtsData';


import Hero from '@/components/PageHero';
import BlogWepzite from '@/components/BlogWepzite';
import WhyWepzite from '@/components/WhyWepzite';
import Technology from '@/components/Strip';
import WepziteVsOthers from '@/components/WepziteWithOthers';
import CaseStudy from '@/components/CaseStudy';
import Process from '@/components/Process';
import ClientLogos from '@/components/ClientLogo';
import PricingAndCalculator from '@/components/PricingAndContact';
import GrowthSystem from '@/components/GrowthSystem';
import LeadForm from '@/components/LeadForm';
import FinalCta from '@/components/FinalCta';
import Services from '@/components/Services';
import Faq from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

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
  description: `Engineeemerald web systems for Theni enterprises. Premium Next.js apps, fluid WhatsApp automation, custom branding, and localized conversion optimization maps.`,
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
    canonical: `/website-development-company-in-${SLUG}`,
    languages: {
      'en-IN': `/website-development-company-in-${SLUG}`,
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
      me: ['wepzitedev@gmailcom'],
      'facebook-domain-verification': ['fb-domain-verification-token-placeholder'],
    },
  },

  // No `icons`/`manifest` block here on purpose. A page-level one REPLACES the
  // layout's rather than merging with it, and this page's version pointed at
  // /shortcut-icon.png, /apple-icon.png, /apple-touch-icon-precomposed.png and
  // /manifest.json — none of which are in /public. app/layout.js already
  // declares favicon.ico, favicon-96x96.png, apple-touch-icon.png and
  // site.webmanifest, which do exist, so inheriting is what we want.
  //
  // `startupImage: ['/assets/splash-screen.png']` is gone for the same reason.
  appleWebApp: {
    title: 'Wepzite Engine',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // OpenGraph Distribution Parameters
  openGraph: {
    title: `Website Design Company in Theni | Next.js Engineering Group`,
    description: `Engineeemerald web systems for Theni enterprises. Premium Next.js apps, fluid WhatsApp automation, custom branding, and localized conversion optimization maps.`,
    url: `/website-development-company-in-${SLUG}`,
    siteName: siteConfig.companyName || 'Wepzite',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: data.seo?.ogImage || '/https://res.cloudinary.com/deamsuypj/image/upload/v1789117379/sbttours.com_rkjpfb.png',
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
    description: `Engineeemerald web systems for Theni enterprises. Premium Next.js apps, fluid WhatsApp automation, custom branding, and localized conversion optimization maps.`,
    site: '@wepzitedigital',
    creator: '@wepzitedigital',
    images: [data.seo?.ogImage || '/https://res.cloudinary.com/deamsuypj/image/upload/v1789117379/sbttours.com_rkjpfb.png'],
  },

  // Regional Geolocational Precision Tags
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Theni',
    'geo.position': '10.0101;77.4754', // Exact Theni center coordinates
    ICBM: '10.0101, 77.4754',
  },
};

// Next.js 15+ takes these in their own export rather than inside `metadata`.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

function compileComprehensiveJsonLdGraph(d) {
  const pageUrl = `${siteConfig.domain}/website-development-company-in-${d.slug}`;
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
  const servicesOffeemeraldList = [
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
    itemListElement: servicesOffeemeraldList.map((svc, i) => ({
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
     <Hero titlePrefix="Website Design Company" titleSuffix="in Theni" description="Boost your online reach with custom blog website development in Theni, engineeemerald for speed, reader retention, and top Google rankings. We build fast, mobile-first blogging platforms equipped with schema markup, clean URL architecture, and seamless content management—helping businesses, creators, and publishers turn organic search traffic into loyal audiences."/>
     <BlogWepzite/>
     <Services/>
     <WhyWepzite/>
      <Technology/>
     <WepziteVsOthers/>
     <PricingAndCalculator/>
     <Process/>
     <ClientLogos/>
     <GrowthSystem/>
     <LeadForm/>
     <Testimonials/>
     <Faq/>
     <FinalCta/>
    </>
  );
}