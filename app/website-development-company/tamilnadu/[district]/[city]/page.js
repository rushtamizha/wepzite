import { notFound } from 'next/navigation';
import {
  STATE,
  getTown,
  getAllTownParams,
  getSiblingTowns,
  statePath,
  districtPath,
  townPath,
} from '@/data/tamilnaduData';
import {
  buildTownMeta,
  buildTownHeroCopy,
  buildTownFaq,
} from '@/utils/locationCopy';
import {
  buildLocationMetadata,
  buildLocationJsonLd,
  jsonLdScript,
  locationViewport,
} from '@/utils/locationSeo';

import Hero from '@/components/PageHero';
import AreaLinks from '@/components/AreaLinks';
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
 * /tamilnadu/[district]/[city] — the town page
 * ===========================================================================
 * The deepest level of the location tree. One route file serves every town in
 * data/tamilnaduData.js; adding a town to that file is all it takes to publish
 * a new page, its schema, its sitemap entry and its neighbour links.
 *
 * What stops these being doorway pages: <LocalIntro> renders the town's own
 * note and its district's economic profile above the shared sales sections,
 * the FAQ is generated from those same local facts, and <AreaLinks> gives
 * each page a block of sibling links no other page has.
 */

// Only towns listed in the data exist. Any other URL under /tamilnadu 404s
// rather than rendering on demand, which is what keeps this from becoming an
// open page generator for any string someone appends to the path.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTownParams();
}

/** The trail feeds both <Breadcrumbs> and the BreadcrumbList schema. */
function buildTrail(district, town) {
  return [
    { name: 'Home', href: '/' },
    { name: STATE.name, href: statePath() },
    { name: district.name, href: districtPath(district.slug) },
    { name: town.name, href: townPath(district.slug, town.slug) },
  ];
}

export async function generateMetadata({ params }) {
  const { district: districtSlug, city: citySlug } = await params;
  const found = getTown(districtSlug, citySlug);
  if (!found) return {};

  const { district, town } = found;
  const { title, description, keywords } = buildTownMeta(town, district);

  return buildLocationMetadata({
    title,
    description,
    keywords,
    path: townPath(district.slug, town.slug),
    placeName: town.name,
    // Town-level coordinates are only used when the town IS the district
    // headquarters, where the district centre genuinely is the town centre.
    // Every other town renders without geo rather than claiming a location
    // that belongs to somewhere else in the district.
    geo: town.name === district.hq ? district.geo : null,
  });
}

export const viewport = locationViewport;

export default async function Page({ params }) {
  const { district: districtSlug, city: citySlug } = await params;
  const found = getTown(districtSlug, citySlug);

  if (!found) notFound();

  const { district, town } = found;
  const siblings = getSiblingTowns(district.slug, town.slug);
  const trail = buildTrail(district, town);
  const faqItems = buildTownFaq(town, district, siblings);
  const { title, description } = buildTownMeta(town, district);

  const jsonLd = buildLocationJsonLd({
    path: townPath(district.slug, town.slug),
    placeName: town.name,
    title,
    description,
    geo: town.name === district.hq ? district.geo : null,
    trail,
    faq: faqItems,
    areaServed: siblings.slice(0, 5).map((t) => t.name),
    placeType: 'City',
    containedIn: district.name,
  });

  return (
    <>
      {/*
        A plain <script>, not next/script with strategy="afterInteractive".
        JSON-LD is data, not executable code, and afterInteractive injects it
        from the client — so it can be missing from the HTML a crawler reads.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />

      <Hero
        titlePrefix="Website Development Company"
        titleSuffix={`in ${town.name}`}
        description={buildTownHeroCopy(town, district)}
      />


      <BlogWepzite location={town.name} />
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
