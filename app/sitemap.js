import { getAllCityPaths, siteConfig } from '@/data/districtsData';
import {
  getAllDistricts,
  statePath,
  districtPath,
  townPath,
} from '@/data/tamilnaduData';

/**
 * app/sitemap.js — served at /sitemap.xml.
 *
 * Everything is derived, so a district or town added to data/tamilnaduData.js
 * (or a city added to districtsData.js) appears here without this file being
 * touched. Submit https://your-domain/sitemap.xml once in Search Console and
 * it stays current.
 *
 * Priorities encode the hierarchy rather than being decoration: the state hub
 * and the flat district pages are the pages we most want crawled, district
 * hubs sit below them, and town pages below that.
 */

// Static routes that exist as folders under app/.
const staticRoutes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/web-development', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/app-development', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/ecommerce', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/seo-optimization', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/whatsapp-automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/ai-branding', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/payment-and-refund-policy', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();
  const base = siteConfig.domain.replace(/\/$/, '');
  const entry = (path, priority, changeFrequency) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) =>
    entry(path, priority, changeFrequency),
  );

  // Flat, hand-written district pages: /website-design-company-in-{city}
  const cityEntries = getAllCityPaths().map((citySlug) =>
    entry(`/${citySlug}`, 0.9, 'monthly'),
  );

  // The Tamil Nadu tree: state hub -> district hubs -> town pages.
  const stateEntry = entry(statePath(), 0.9, 'weekly');

  const districts = getAllDistricts();
  const districtEntries = districts.map((d) =>
    entry(districtPath(d.slug), 0.8, 'monthly'),
  );
  const townEntries = districts.flatMap((d) =>
    d.towns.map((t) => entry(townPath(d.slug, t.slug), 0.7, 'monthly')),
  );

  return [
    ...staticEntries,
    ...cityEntries,
    stateEntry,
    ...districtEntries,
    ...townEntries,
  ];
}
