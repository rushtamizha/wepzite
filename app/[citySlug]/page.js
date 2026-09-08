import { notFound } from 'next/navigation';
import {
  getAllCityPaths,
  getDistrictByCityPath,
  getDistrictGeo,
  siteConfig,
} from '@/data/districtsData';

import Hero from '@/components/PageHero';
import BlogWepzite from '@/components/BlogWepzite';
import WhyWepzite from '@/components/WhyWepzite';
import Technology from '@/components/Strip';
import WepziteVsOthers from '@/components/WepziteWithOthers';
import Process from '@/components/Process';
import ClientLogos from '@/components/ClientLogo';
import PricingAndCalculator from '@/components/PricingAndContact';
import GrowthSystem from '@/components/GrowthSystem';
import LeadForm from '@/components/LeadForm';
import FinalCta from '@/components/FinalCta';
import Services from '@/components/Services';
import Faq from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

/**
 * ===========================================================================
 * ONE ROUTE, EVERY CITY
 * ===========================================================================
 * Serves /website-design-company-in-{city} for every entry in the CITIES
 * array in data/districtsData.js. Adding a city is one line in that array —
 * this file never changes. The page structure is identical everywhere; only
 * the city name (and, for hand-written cities, the copy) differs.
 *
 * Why the folder is `[citySlug]` and not `website-design-company-in-[city]`:
 * Next.js only treats a segment as dynamic when the brackets are the WHOLE
 * segment (its own matcher is /\/\[[^/]+\](?=\/|$)/), so a partial name would
 * be read as a literal folder. Instead the whole path is the param, and
 * `getDistrictByCityPath` strips the prefix.
 *
 * Static routes (/about, /pricing, /services, /contact, ...) are unaffected:
 * Next matches static segments before dynamic ones.
 */

// Only the paths listed by generateStaticParams exist. Anything else 404s
// instead of being rendered on demand — which is what stops this route
// becoming an open doorway-page generator for any URL someone invents.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCityPaths().map((citySlug) => ({ citySlug }));
}

// ===========================================================================
// METADATA — built per city, same shape everywhere
// ===========================================================================
export async function generateMetadata({ params }) {
  const { citySlug } = await params;
  const d = getDistrictByCityPath(citySlug);

  // dynamicParams = false means this shouldn't happen, but a malformed entry
  // in CITIES would otherwise fail the build with a confusing stack.
  if (!d) return {};

  const city = d.district;
  const path = `/${citySlug}`;
  const geo = getDistrictGeo(d.slug);
  const title = d.seo.title;
  const description = d.seo.description;
  const ogImage = d.seo.ogImage || '/og/og-image.png';

  return {
    metadataBase: new URL(siteConfig.domain),

    // `absolute` because app/layout.js sets a "%s | Wepzite" title template.
    // Without it these titles render as "... in Theni | Web Designer in Theni
    // | Wepzite" — past the ~60 characters Google shows, with the brand name
    // twice. The template still applies everywhere else on the site.
    title: { absolute: title },
    description,
    keywords: d.seo.keywords,

    // Strict indexing directives
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

    // Canonical layer — one canonical URL per city, no cross-city duplicates
    alternates: {
      canonical: path,
      languages: { 'en-IN': path },
    },

    // Authorship & provenance
    authors: [{ name: 'Wepzite Digital Labs', url: siteConfig.domain }],
    creator: 'Wepzite Software Architects',
    publisher: 'Wepzite Digital Holdings',
    category: 'Technology & Web Engineering Services',
    applicationName: 'Wepzite Operational Platform',
    classification: 'Enterprise Software & Search Systems Engineering',
    referrer: 'origin-when-cross-origin',

    // Search-console verification tokens
    verification: {
      google: 'google-site-verification-token-placeholder',
      yandex: 'yandex-verification-token-placeholder',
      yahoo: 'yahoo-verification-token-placeholder',
      other: {
        me: [siteConfig.email],
        'facebook-domain-verification': ['fb-domain-verification-token-placeholder'],
      },
    },

    // No `icons`/`manifest` block: a page-level one REPLACES the layout's,
    // and app/layout.js already points at icon files that exist. The original
    // Theni page declared /shortcut-icon.png, /apple-icon.png and
    // /manifest.json here — none of which are in /public.
    appleWebApp: {
      title: 'Wepzite Engine',
      statusBarStyle: 'black-translucent',
    },
    formatDetection: { email: false, address: false, telephone: false },

    // OpenGraph
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: path,
      siteName: siteConfig.companyName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Website design company in ${city} — ${siteConfig.companyName}`,
        },
      ],
    },

    // Twitter card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@wepzitedigital',
      creator: '@wepzitedigital',
      images: [ogImage],
    },

    // Regional hints. Coordinates come from the city's own geo entry, so each
    // page gets its own — not Theni's copied everywhere. A city with no known
    // coordinates renders without these rather than borrowing another city's.
    other: {
      'geo.region': 'IN-TN',
      'geo.placename': city,
      ...(geo
        ? {
            'geo.position': `${geo.lat};${geo.lng}`,
            ICBM: `${geo.lat}, ${geo.lng}`,
          }
        : {}),
    },
  };
}

// Next.js 14+ takes these in their own export rather than inside `metadata`.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

// ===========================================================================
// STRUCTURED DATA
// ===========================================================================
// The service catalogue is the same on every city page because the company
// offers the same services everywhere — only `areaServed` changes.
const SERVICE_CATALOG = [
  {
    name: 'Core Next.js & React System Web Development',
    description:
      'Zero-bloat, high-converting semantic serverless layouts targeting 99+ Core Web Vitals.',
  },
  {
    name: 'Native Cross-Platform Mobile Applications',
    description:
      'React Native engineering with clean global state management for mobile screens.',
  },
  {
    name: 'AI Branding Frameworks & Identity Generation',
    description:
      'High-clarity vector logos, structural banners, and brand asset systems.',
  },
  {
    name: 'Premium Marketing Graphic Layout Design',
    description: 'Professional marketing collateral and promotional assets.',
  },
  {
    name: 'Google Business Profile Tracking & Local Optimization',
    description:
      'GMB optimization sequences built to drive high-intent regional traffic.',
  },
  {
    name: 'Google Search Network Advertising Pipelines',
    description:
      'High-ROI pay-per-click setups that turn search intent into enquiries.',
  },
  {
    name: 'Meta Ad Network Conversion Funnel Configuration',
    description:
      'Optimized social demographic targeting tuned to acquisition cost.',
  },
];

const SOCIAL_CHANNELS = [
  'https://facebook.com/wepzite',
  'https://instagram.com/wepzite',
  'https://linkedin.com/company/wepzite',
  'https://youtube.com/wepzite',
  'https://x.com/wepzitedigital',
];

/**
 * One @graph rather than seven separate scripts: the nodes cross-reference
 * each other by @id, and a single graph is what lets Google resolve those
 * references instead of reading seven unrelated fragments.
 */
function buildJsonLdGraph(d, citySlug, faqItems) {
  const city = d.district;
  const pageUrl = `${siteConfig.domain}/${citySlug}`;
  const logoUrl = `${siteConfig.domain}/logo.png`;
  const geo = getDistrictGeo(d.slug);
  const image = d.seo.ogImage || logoUrl;

  const nodes = [
    // 1. Corporate identity
    {
      '@type': 'Organization',
      '@id': `${siteConfig.domain}/#organization`,
      name: siteConfig.companyName,
      url: siteConfig.domain,
      logo: logoUrl,
      sameAs: SOCIAL_CHANNELS,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: 'customer service',
        availableLanguage: ['en', 'ta'],
      },
    },

    // 2. Site root
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.domain}/#website`,
      url: siteConfig.domain,
      name: siteConfig.companyName,
      publisher: { '@id': `${siteConfig.domain}/#organization` },
    },

    // 3. The local branch for this city — the node that actually competes in
    //    "website design company in {city}" searches.
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${pageUrl}/#local-agency`,
      name: `${siteConfig.companyName} — Website Design Company in ${city}`,
      url: pageUrl,
      logo: logoUrl,
      image,
      description: d.seo.description,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: '₹15000-₹150000',
      parentOrganization: { '@id': `${siteConfig.domain}/#organization` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressRegion: d.state || 'Tamil Nadu',
        addressCountry: 'IN',
      },
      ...(geo
        ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } }
        : {}),
      areaServed: [
        { '@type': 'AdministrativeArea', name: city },
        ...(d.nearbyAreas || []).map((area) => ({ '@type': 'Place', name: area })),
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Web & digital services in ${city}`,
        itemListElement: SERVICE_CATALOG.map((svc, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Service',
            name: svc.name,
            description: svc.description,
            provider: { '@id': `${pageUrl}/#local-agency` },
            areaServed: { '@type': 'AdministrativeArea', name: city },
          },
        })),
      },
    },

    // 4. This page
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}/#webpage`,
      url: pageUrl,
      name: d.seo.title,
      description: d.seo.description,
      isPartOf: { '@id': `${siteConfig.domain}/#website` },
      about: { '@id': `${pageUrl}/#local-agency` },
      primaryImageOfPage: { '@type': 'ImageObject', url: image },
      breadcrumb: { '@id': `${pageUrl}/#breadcrumb` },
    },

    // 5. Breadcrumbs
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
        {
          '@type': 'ListItem',
          position: 2,
          name: `Website Design Company in ${city}`,
          item: pageUrl,
        },
      ],
    },
  ];

  // 6. Only claim an FAQPage when those exact questions are rendered below —
  //    Google requires FAQ schema to match visible page content, and both this
  //    node and <Faq> are fed from the same array.
  if (faqItems?.length) {
    nodes.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': nodes };
}

// ===========================================================================
// PAGE
// ===========================================================================
export default async function Page({ params }) {
  const { citySlug } = await params;
  const d = getDistrictByCityPath(citySlug);

  if (!d) notFound();

  const city = d.district;
  const faqItems = d.faq;
  const jsonLd = buildJsonLdGraph(d, citySlug, faqItems);

  return (
    <>
      {/*
        A plain <script>, not next/script with strategy="afterInteractive".
        JSON-LD is data, not executable code, and afterInteractive injects it
        from the client — so it can be absent from the HTML a crawler reads.
        Escaping "<" stops markup breaking out of the JSON string.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <Hero
        titlePrefix="Website Design Company"
        titleSuffix={`in ${city}`}
        description={d.hero.subheadline}
      />
      <BlogWepzite location={city} />
      <Services />
      <WhyWepzite />
      <Technology />
      <WepziteVsOthers />
      <PricingAndCalculator />
      <Process />
      <ClientLogos />
      <GrowthSystem />
      <LeadForm />
      <Testimonials />
      {/* Same array that feeds the FAQPage schema above — they must match. */}
      <Faq items={faqItems} />
      <FinalCta />
    </>
  );
}
