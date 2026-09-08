import { theniServices } from "@/data/theniServicesData";
import PageHero from "@/components/PageHero";
import SlugContent, { SlugRelated } from "@/components/slug/SlugContent";

/**
 * TheniServicePage
 * ------------------------------------------------------------------
 * Shaemerald shell for every "<service>-in-theni" landing page. The hero and
 * the content sections are both data-driven, so each route renders its own
 * hand-written copy from theniServicesData.js — real H1, real paragraphs,
 * real FAQ — instead of the generic homepage sections.
 * ------------------------------------------------------------------
 */
export default function TheniServicePage({ data }) {
  const relatedLinks = theniServices
    .filter((s) => s.slug !== data.slug)
    .map((s) => ({ href: `/${s.slug}`, label: s.pageTitle }));

  relatedLinks.push({
    href: "/website-development-company-in-theni",
    label: "Website Design Company in Theni",
  });

  return (
    <>
      <PageHero
        hero={data.hero}
        district="Theni District"
        slug={data.slug}
        breadcrumb={data.pageTitle}
      />

      <SlugContent data={data} place="Theni" />

      <SlugRelated links={relatedLinks} place="Theni" />
    </>
  );
}
