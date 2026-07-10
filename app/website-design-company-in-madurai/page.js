import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getDistrictBySlug, siteConfig } from '@/data/districtsData';

import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import PricingAndContact from '@/components/PricingAndContact';
import WhyUsAndTech from '@/components/WhyUsAndTech';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/FAQ';

const SLUG = 'madurai';

const data = getDistrictBySlug(SLUG);

export const metadata = data
  ? {
      title: data.seo.title,
      description: data.seo.description,
      keywords: data.seo.keywords,
      alternates: {
        canonical: `${siteConfig.domain}/website-design-company-in-${data.slug}`,
      },
      openGraph: {
        title: data.seo.title,
        description: data.seo.description,
        url: `${siteConfig.domain}/website-design-company-in-${data.slug}`,
        siteName: siteConfig.companyName,
        images: [
          {
            url: data.seo.ogImage || '/og/default.jpg',
            width: 1200,
            height: 630,
            alt: data.seo.title,
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: data.seo.title,
        description: data.seo.description,
        images: [data.seo.ogImage || '/og/default.jpg'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      },
      other: {
        'geo.region': 'IN-TN',
        'geo.placename': data.district,
      },
    }
  : {};

function buildJsonLd(d) {
  const url = `${siteConfig.domain}/website-design-company-in-${d.slug}`;

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${siteConfig.companyName} - Website Design Company in ${d.district}`,
    url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      '@type': 'City',
      name: d.district,
      containedInPlace: { '@type': 'State', name: d.state },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: d.district,
      addressRegion: d.state,
      addressCountry: 'IN',
    },
    priceRange: '₹₹',
    description: d.seo.description,
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: `Website Design Company in ${d.district}`, item: url },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return [professionalService, breadcrumb, faqPage];
}

export default function Page() {
  if (!data) notFound();

  const jsonLdBlocks = buildJsonLd(data);

  return (
    <>
      {jsonLdBlocks.map((block, i) => (
        <Script
          key={i}
          id={`jsonld-${block['@type']}-${data.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

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