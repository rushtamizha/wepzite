import React from "react";
import Link from "next/link";
import { ArrowUpRight, Map } from "lucide-react";

/**
 * The internal link mesh.
 *
 * A location network only works if crawlers can actually reach the deep
 * pages and if each page passes some authority to its neighbours. Without
 * this block, 291 town pages sit as orphans that Google finds once in the
 * sitemap and never revisits. With it, every town links to its siblings and
 * up to its district, so the whole tree is reachable in a few hops and each
 * page carries a paragraph of link text no other page has.
 *
 * Server component — links must be in the HTML, and there is no interaction
 * here worth shipping JS for.
 */
export default function AreaLinks({
  title,
  subtitle,
  links = [],
  columns = 4,
  tone = "light",
}) {
  if (!links.length) return null;

  const isDark = tone === "dark";
  const gridCols =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <section
      className={`relative w-full px-4 py-14 ${isDark ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 ${
            isDark
              ? "border-white/15 bg-white/5 text-brand-200"
              : "border-brand-200/60 bg-brand-50 text-brand-700"
          }`}
        >
          <Map size={12} className={isDark ? "text-brand-500" : "text-brand-600"} />
          <span className="text-[10px] font-black uppercase tracking-wide">Areas we cover</span>
        </span>

        <h2
          className={`mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`mt-4 max-w-3xl text-sm leading-relaxed sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {subtitle}
          </p>
        )}

        <ul className={`mt-10 grid grid-cols-1 gap-3 ${gridCols}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group flex h-full items-start justify-between gap-3 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "border-white/10 bg-white/[0.04] hover:border-white/20"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <span className="min-w-0">
                  <span
                    className={`block truncate text-sm font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {link.label}
                  </span>
                  {link.description && (
                    <span
                      className={`mt-1 block text-xs leading-relaxed ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {link.description}
                    </span>
                  )}
                </span>
                <ArrowUpRight
                  size={15}
                  className={`mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isDark ? "text-brand-500" : "text-brand-600"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
