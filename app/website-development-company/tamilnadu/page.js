import {
  STATE,
  getAllDistricts,
  getCounts,
  statePath,
  districtPath,
} from '@/data/tamilnaduData';
import { buildStateMeta, buildStateFaq } from '@/utils/locationCopy';
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
 * /tamilnadu — the state hub
 * ===========================================================================
 * The root of the location tree and the single most important page in it for
 * crawling: it links all 38 district hubs, each of which links its own towns,
 * so every one of the deep pages is two hops from here. Without this page the
 * town pages would only ever be discoverable through the sitemap.
 */

const counts = getCounts();

const trail = [
  { name: 'Home', href: '/' },
  { name: STATE.name, href: statePath() },
];

export function generateMetadata() {
  const { title, description, keywords } = buildStateMeta(counts);

  return buildLocationMetadata({
    title,
    description,
    keywords,
    path: statePath(),
    placeName: STATE.name,
    geo: { lat: 11.1271, lng: 78.6569 }, // geographic centre of Tamil Nadu
  });
}

export const viewport = locationViewport;

export default function Page() {
  const districts = getAllDistricts();
  const faqItems = buildStateFaq(counts);
  const { title, description } = buildStateMeta(counts);

  const jsonLd = buildLocationJsonLd({
    path: statePath(),
    placeName: STATE.name,
    title,
    description,
    geo: { lat: 11.1271, lng: 78.6569 },
    trail,
    faq: faqItems,
    areaServed: districts.slice(0, 15).map((d) => d.name),
    placeType: 'State',
    containedIn: 'India',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />


      <Hero
        titlePrefix="Website Development Company"
        titleSuffix={`in ${STATE.name}`}
        description={`We build fast, mobile-first websites for businesses across all ${counts.districts} districts of Tamil Nadu and ${counts.towns} towns within them. Every location gets its own page, its own Google Business Profile work and schema naming that specific place — because a customer in Sivakasi does not search the same way as one in Ooty.`}
      />

      {/* The directory. Every district hub is one click from here. */}
      <AreaLinks
        title={`All ${counts.districts} districts of ${STATE.name}`}
        subtitle={`Pick your district to see the towns we cover inside it. Between them these pages cover ${counts.towns} towns and localities across the state.`}
        links={districts.map((d) => ({
          href: districtPath(d.slug),
          label: d.name,
          description: `${d.towns.length} towns · ${d.economy.slice(0, 2).join(', ')}`,
        }))}
      />

      <BlogWepzite location={STATE.name} />
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
      <Faq items={faqItems} />
      <FinalCta />
    </>
  );
}
