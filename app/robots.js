import { siteConfig } from '@/data/districtsData';

/** app/robots.js — served at /robots.txt. Points crawlers at the sitemap. */
export default function robots() {
  const base = siteConfig.domain.replace(/\/$/, '');

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
