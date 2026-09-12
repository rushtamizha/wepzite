import { notFound } from 'next/navigation';
import {
  STATE,
  getDistrict,
  getAllDistrictParams,
  statePath,
  districtPath,
  townPath,
} from '@/data/tamilnaduData';
import { getDistrictBySlug, slugToCityPath } from '@/data/districtsData';
import { buildDistrictMeta, buildDistrictFaq } from '@/utils/locationCopy';
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
import PricingAndCalculator from '@/components/PricingAndContact';
import GrowthSystem from '@/components/GrowthSystem';
import LeadForm from '@/components/LeadForm';
import FinalCta from '@/components/FinalCta';
import Services from '@/components/Services';
import Faq from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

/**
 * ===========================================================================
 * /tamilnadu/[district] — the district hub
 * ===========================================================================
 * This page exists to be an index, not a second sales page. Its job is to let
 * a crawler (and a reader) get from the state hub to any of the district's
 * towns in one hop, which is what keeps 291 town pages from sitting as
 * orphans that Google finds once and never revisits.
 *
 * Six districts also have a hand-written page at /website-design-company-in-
 * {slug} from the older flat route. Where one exists this page links to it
 * rather than competing with it.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDistrictParams();
}

function buildTrail(district) {
  return [
    { name: 'Home', href: '/' },
    { name: STATE.name, href: statePath() },
    { name: district.name, href: districtPath(district.slug) },
  ];
}

export async function generateMetadata({ params }) {
  const { district: districtSlug } = await params;
  const district = getDistrict(districtSlug);
  if (!district) return {};

  const { title, description, keywords } = buildDistrictMeta(district);

  return buildLocationMetadata({
    title,
    description,
    keywords,
    path: districtPath(district.slug),
    placeName: district.name,
    geo: district.geo,
  });
}

export const viewport = locationViewport;

export default async function Page({ params }) {
  const { district: districtSlug } = await params;
  const district = getDistrict(districtSlug);

  if (!district) notFound();

  const trail = buildTrail(district);
  const faqItems = buildDistrictFaq(district);
  const { title, description } = buildDistrictMeta(district);

  // The older flat route only covers a handful of districts.
  const flatPage = getDistrictBySlug(district.slug);

  const jsonLd = buildLocationJsonLd({
    path: districtPath(district.slug),
    placeName: district.name,
    title,
    description,
    geo: district.geo,
    trail,
    faq: faqItems,
    areaServed: district.towns.slice(0, 12).map((t) => t.name),
    placeType: 'AdministrativeArea',
    containedIn: STATE.name,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />


      <Hero
        titlePrefix="Website Development Company"
        titleSuffix={`in ${district.name}`}
        description={`${district.profile} We build websites for businesses across all ${district.towns.length} towns and localities we cover in ${district.name} district — each with its own page and its own local SEO.`}
      />




      <BlogWepzite location={district.name} />
      <Services />
      <WhyWepzite />
      <Technology />
      <WepziteVsOthers />
      <PricingAndCalculator />
      <Process />
      <GrowthSystem />
      <LeadForm />
      <Testimonials />

      <AreaLinks
        tone="dark"
        columns={3}
        title="Where to go next"
        subtitle={`Browse every district in ${STATE.name}, or read the detailed ${district.name} page.`}
        links={[
          {
            href: statePath(),
            label: `All districts in ${STATE.name}`,
            description: 'The full state directory — every district we cover.',
          },
          ...(flatPage
            ? [
                {
                  href: `/${slugToCityPath(district.slug)}`,
                  label: `Website design in ${district.name}`,
                  description: `Our detailed ${district.name} page, written for the district's own industries.`,
                },
              ]
            : []),
          {
            href: '/pricing',
            label: 'Pricing',
            description: 'Fixed packages, quoted upfront before any work starts.',
          },
        ]}
      />

      <Faq items={faqItems} />
      <FinalCta />
    </>
  );
}
