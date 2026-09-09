import { getAllCityPaths, siteConfig } from '@/data/districtsData';
import { URLS_PER_SITEMAP, cityShardCount } from '@/utils/sitemapShards';

/**
 * app/cities/sitemap.js — served at /cities/sitemap/0.xml, /cities/sitemap/1.xml, ...
 *
 * The city pages alone are tens of thousands of URLs, and a single sitemap
 * file may hold at most 50,000. So they live here, split into shards, while
 * app/sitemap.js keeps the pages a human would actually navigate to.
 *
 * Next.js does not emit a <sitemapindex> for these, so discovery happens
 * through robots.txt instead — app/robots.js lists every shard by name, using
 * the same cityShardCount() this file does.
 */

export async function generateSitemaps() {
  return Array.from({ length: cityShardCount() }, (_, id) => ({ id }));
}

export default async function sitemap(props) {
  // Next 16 passes `id` as a promise resolving to a string.
  const id = Number(await props.id);
  const base = siteConfig.domain.replace(/\/$/, '');
  const lastModified = new Date();

  const start = id * URLS_PER_SITEMAP;

  return getAllCityPaths()
    .slice(start, start + URLS_PER_SITEMAP)
    .map((citySlug) => ({
      url: `${base}/${citySlug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    }));
}
