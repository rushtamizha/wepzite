/**
 * The URL shapes for the Tamil Nadu location tree — and nothing else.
 *
 * This is deliberately a tiny module with no data in it. The builders used to
 * live in data/tamilnaduData.js, but components/Footer.jsx is a client
 * component: importing them from there would pull the whole 68 KB town dataset
 * into every page's browser bundle (it can't be tree-shaken — the module runs
 * duplicate-slug validation at load). Both sides import from here instead, so
 * the footer's links and the pages' own links cannot drift apart.
 */

// The section is mounted at app/website-development-company/, so every route in
// the tree carries that prefix. These builders once omitted it and returned a
// bare /tamilnadu/... — a path with no route behind it — which put a 404 in
// every breadcrumb, sibling link, canonical URL and sitemap entry in the tree.
export const SECTION_PREFIX = '/website-development-company';
export const STATE_SLUG = 'tamilnadu';

export const statePath = () => `${SECTION_PREFIX}/${STATE_SLUG}`;

export const districtPath = (districtSlug) =>
  `${SECTION_PREFIX}/${STATE_SLUG}/${districtSlug}`;

export const townPath = (districtSlug, townSlug) =>
  `${SECTION_PREFIX}/${STATE_SLUG}/${districtSlug}/${townSlug}`;
