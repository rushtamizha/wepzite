import { getAllCityPaths } from '@/data/districtsData';

/**
 * Shared shard math for the city sitemap.
 *
 * This lives outside app/ on purpose. app/cities/sitemap.js is a metadata
 * route — Next compiles it through its own loader — so importing helpers back
 * out of it from app/robots.js would tie two routes to that loader's
 * behaviour. Both routes import from here instead, which is what keeps the
 * shards that get generated and the shards advertised in robots.txt from
 * drifting apart.
 */

// Google's hard limit is 50,000 URLs per sitemap file. The headroom means
// crossing a round number of cities doesn't quietly produce an invalid file.
export const URLS_PER_SITEMAP = 45000;

/** How many shards the current city list needs. */
export function cityShardCount() {
  return Math.max(1, Math.ceil(getAllCityPaths().length / URLS_PER_SITEMAP));
}
