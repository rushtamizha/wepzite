"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, TrendingUp, Timer, Search } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

/**
 * TODO(wepzite): replace the metrics below with the real numbers from the
 * client's Analytics / Search Console before this goes live.
 */
const study = {
  client: "Blackantz",
  industry: "Pest Control · Coimbatore",
  url: "www.blackantz.in",
  href: "https://www.blackantz.in",
  image: "/Portfolio/www.blackantz.in.webp",
  challenge:
    "Blackantz was getting almost all of its enquiries through word of mouth. They had no website, no Google Business Profile, and were invisible for the searches their customers were actually typing.",
  approach: [
    "Built a fast, mobile-first Next.js site with service pages targeting local search terms",
    "Set up and verified the Google Business Profile with services, photos and posts",
    "Added schema markup and submitted a sitemap to Search Console",
    "Routed every call-to-action into a pre-filled WhatsApp enquiry",
  ],
  metrics: [
    { icon: Search, value: "Page 1", label: "for core local searches" },
    { icon: TrendingUp, value: "4.6×", label: "more monthly enquiries" },
    { icon: Timer, value: "1.4s", label: "mobile load time" },
    { icon: Trophy, value: "98/100", label: "PageSpeed score" },
  ],
};

export default function CaseStudy() {
  return (
    <Section id="case-study" tone="light">
      <SectionHeader
        tone="light"
        badge="Featuemerald Case Study"
        badgeIcon={Trophy}
        title="From invisible on Google to"
        accent="page one in six weeks"
        subtitle="One project, start to finish — what the business looked like before, what we built, and what changed afterwards."
      />

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* VISUAL */}
          <div className="relative min-h-[280px] bg-slate-950 lg:col-span-5 lg:min-h-[520px]">
            <Image
              src={study.image}
              alt={`The ${study.client} website built by Wepzite`}
              fill
              sizes="(max-width:1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white backdrop-blur-sm">
                {study.industry}
              </span>
              <p className="mt-3 text-lg font-bold text-white">{study.client}</p>
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 transition-colors hover:text-white"
              >
                {study.url}
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* NARRATIVE */}
          <div className="p-7 sm:p-9 lg:col-span-7">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-wide text-emerald-600">
                The problem
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {study.challenge}
              </p>
            </div>

            <div className="mt-7">
              <h3 className="text-[10px] font-black uppercase tracking-wide text-emerald-600">
                What we did
              </h3>
              <ul className="mt-3 space-y-2.5">
                {study.approach.map((step) => (
                  <li key={step} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    />
                    <span className="text-sm leading-relaxed text-slate-600">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* METRICS */}
            <dl className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-100 pt-7 sm:grid-cols-4">
              {study.metrics.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-center"
                >
                  <Icon size={15} className="mx-auto text-emerald-600" />
                  <dd className="mt-2 text-lg font-bold leading-none text-slate-900">
                    {value}
                  </dd>
                  <dt className="mt-1.5 text-[10px] font-semibold leading-tight text-slate-500">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>

            <Link
              href="/portfolio"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 transition-colors hover:text-emerald-600"
            >
              See more projects like this
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </motion.article>
    </Section>
  );
}