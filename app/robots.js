import { siteConfig } from '@/data/districtsData';
import { cityShardCount } from '@/utils/sitemapShards';

/**
 * app/robots.js — served at /robots.txt. Points crawlers at every sitemap.
 *
 * Next.js does not emit a <sitemapindex>, so the shards produced by
 * app/cities/sitemap.js would otherwise be undiscoverable. Multiple `Sitemap:`
 * lines in robots.txt are the standard alternative, and the shard count is
 * read from the same helper that generates them — so a city list that grows
 * past a shard boundary is advertised without this file being touched.
 */
export default function robots() {
  const base = siteConfig.domain.replace(/\/$/, '');

  const citySitemaps = Array.from(
    { length: cityShardCount() },
    (_, id) => `${base}/cities/sitemap/${id}.xml`,
  );

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: [`${base}/sitemap.xml`, ...citySitemaps],
    host: base,
  };
}
