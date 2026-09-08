"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Quote,
  Building2,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import { Section, SectionHeader, Badge, reveal, revealStagger } from "@/components/ui/Section";

/**
 * Content sections for the slug landing pages.
 *
 * Both slug data sources carry hand-written, location-specific copy:
 *   data/theniServicesData.js  -> intro, services, whyUs, faq
 *   data/districtsData.js      -> the above plus portfolio, testimonials,
 *                                 economyFocus, landmarks, nearbyAreas
 *
 * Every block below renders only when its data exists, so one component
 * serves both families. Sections that a slug has no data for are skipped
 * rather than filled with generic copy — the point of these pages is that
 * they are genuinely different from each other, not the same page with a
 * town name swapped in.
 */
export default function SlugContent({ data, place = "Theni", pageTitle }) {
  const title = pageTitle || data?.pageTitle;
  if (!data) return null;

  return (
    <>
      {data.intro?.length > 0 && <SlugIntro intro={data.intro} place={place} />}
      {data.services?.length > 0 && (
        <SlugServices services={data.services} title={title} place={place} />
      )}
      {data.portfolio?.length > 0 && <SlugCaseStudies items={data.portfolio} place={place} />}
      {data.whyUs?.length > 0 && <SlugWhyUs points={data.whyUs} place={place} />}
      {data.testimonials?.length > 0 && <SlugTestimonials items={data.testimonials} />}
      {(data.nearbyAreas?.length > 0 || data.economyFocus?.length > 0) && (
        <SlugAreas
          areas={data.nearbyAreas}
          landmarks={data.landmarks}
          economy={data.economyFocus}
          place={place}
        />
      )}
      {data.faq?.length > 0 && <SlugFaq faq={data.faq} title={title || place} />}
    </>
  );
}

/**
 * Page titles read like "SEO Company in Theni", which turns into the awkward
 * "Our SEO Company in Theni" if used verbatim as a heading. Strip the trailing
 * place and the company/agency noun to recover the service itself, and only
 * append "services" when the title doesn't already say it.
 */
function serviceNoun(title, place) {
  if (!title) return "services";
  let t = title.replace(new RegExp(`\\s+in\\s+${place}.*$`, "i"), "").trim();
  t = t.replace(/\s+(company|agency)$/i, "").trim();
  if (/services?$/i.test(t)) return t;
  return `${t} services`;
}

/* ------------------------------------------------------------------ */
/* INTRO — the page's main prose, set at reading width                  */
/* ------------------------------------------------------------------ */
function SlugIntro({ intro, place }) {
  return (
    <Section tone="light" glow={false} className="!py-16 lg:!py-20">
      <motion.div
        variants={revealStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={reveal} className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-brand-500" />
          <span className="text-[10px] font-black uppercase tracking-wide text-brand-600">
            Working in {place}
          </span>
        </motion.div>

        {intro.map((para, idx) => (
          <motion.p
            key={idx}
            variants={reveal}
            className={`text-[15px] leading-[1.85] text-slate-600 ${idx > 0 ? "mt-5" : ""} ${
              idx === 0 ? "sm:text-base sm:leading-[1.9] sm:text-slate-700" : ""
            }`}
          >
            {para}
          </motion.p>
        ))}
      </motion.div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES — what this specific page covers                            */
/* ------------------------------------------------------------------ */
function SlugServices({ services, title, place }) {
  return (
    <Section tone="tint">
      <SectionHeader
        tone="tint"
        badge="What This Covers"
        badgeIcon={Sparkles}
        title={`Our ${serviceNoun(title, place)}`}
        accent={`in ${place}`}
        subtitle={`The work below is what we actually get asked for by businesses in ${place} — not a generic service list.`}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, idx) => (
          <motion.article
            key={svc.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
          >
            {/* index marker keeps a dense grid scannable */}
            <span className="text-[10px] font-black tabular-nums text-slate-300">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-600">
              {svc.title}
            </h3>
            <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
              {svc.description}
            </p>
            <span
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-brand-500/[0.06] transition-transform duration-500 group-hover:scale-150"
            />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* CASE STUDIES — anonymised local work                                 */
/* ------------------------------------------------------------------ */
function SlugCaseStudies({ items, place }) {
  return (
    <Section tone="light">
      <SectionHeader
        tone="light"
        badge="Local Work"
        badgeIcon={Briefcase}
        title="What we've built"
        accent={`around ${place}`}
        subtitle="A few recent projects and what changed for the business afterwards."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (idx % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Building2 size={17} />
              </span>
              {item.industry && (
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-slate-500">
                  {item.industry}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-sm font-bold leading-snug text-slate-900">
              {item.clientType}
            </h3>
            <p className="mt-2.5 border-t border-slate-100 pt-3.5 text-xs leading-relaxed text-slate-500">
              {item.result}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* WHY US — dark band, opens the trust block                            */
/* ------------------------------------------------------------------ */
function SlugWhyUs({ points, place }) {
  return (
    <Section tone="dark">
      <SectionHeader
        tone="dark"
        badge={`Why ${place} businesses choose us`}
        badgeIcon={Sparkles}
        title="Built for"
        accent="local context"
        subtitle={`The decisions below are specific to how business actually works in ${place}.`}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (idx % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]"
          >
            <CheckCircle2
              size={17}
              className="mt-0.5 flex-shrink-0 text-emerald-400"
            />
            <p className="text-[13px] leading-relaxed text-slate-300">{point}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* TESTIMONIALS — dark band, continues the trust block                  */
/* ------------------------------------------------------------------ */
function SlugTestimonials({ items }) {
  return (
    <Section tone="dark" glow={false} className="!pt-0">
      <SectionHeader
        tone="dark"
        badge="In Their Words"
        badgeIcon={Quote}
        title="What local owners"
        accent="told us"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((t, idx) => (
          <motion.figure
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/20"
          >
            <Quote size={20} className="text-brand-500/60" />
            <blockquote className="mt-4 flex-1 text-[13px] leading-relaxed text-slate-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-white/10 pt-4">
              <p className="text-xs font-black uppercase tracking-wide text-white">
                {t.name}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-slate-500">
                {t.business}
                {t.area && (
                  <>
                    {" · "}
                    <span className="text-brand-500">{t.area}</span>
                  </>
                )}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* AREAS SERVED — surfaces the towns/landmarks the data already holds   */
/* ------------------------------------------------------------------ */
function SlugAreas({ areas = [], landmarks = [], economy = [], place }) {
  return (
    <Section tone="tint">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Badge tone="tint" icon={MapPin}>
            Areas We Cover
          </Badge>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            Across <span className="text-brand-600">{place} district</span>
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
            We work with businesses throughout the district, and our local SEO
            targets these towns by name rather than the district alone.
          </p>
        </div>

        <div className="space-y-7 lg:col-span-7">
          {areas.length > 0 && (
            <div>
              <h3 className="mb-3 text-[10px] font-black uppercase tracking-wide text-slate-400">
                Towns we serve
              </h3>
              <ul className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {economy.length > 0 && (
            <div>
              <h3 className="mb-3 text-[10px] font-black uppercase tracking-wide text-slate-400">
                Industries we work with
              </h3>
              <ul className="flex flex-wrap gap-2">
                {economy.map((sector) => (
                  <li
                    key={sector}
                    className="rounded-full border border-brand-200/60 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold capitalize text-brand-700"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {landmarks.length > 0 && (
            <div>
              <h3 className="mb-3 text-[10px] font-black uppercase tracking-wide text-slate-400">
                Around
              </h3>
              <p className="text-xs font-semibold leading-relaxed text-slate-500">
                {landmarks.join(" · ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ — accordion, matching the homepage pattern                       */
/* ------------------------------------------------------------------ */
function SlugFaq({ faq, title }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Section tone="light">
      <SectionHeader
        tone="light"
        badge="Common Questions"
        title={title}
        accent="FAQ"
        subtitle="The questions we get asked most before starting a project."
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faq.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                isOpen
                  ? "border-slate-300 shadow-lg shadow-slate-900/5"
                  : "border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`slug-faq-${idx}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span
                    className={`text-sm font-bold transition-colors ${
                      isOpen ? "text-brand-600" : "text-slate-800"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-brand-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={15} />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`slug-faq-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-slate-100 px-5 py-5 text-[13px] font-medium leading-relaxed text-slate-500">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* RELATED — internal linking between the slug pages                    */
/* ------------------------------------------------------------------ */
export function SlugRelated({ links = [], place = "Theni" }) {
  if (links.length === 0) return null;
  return (
    <Section tone="tint" glow={false} className="!py-16">
      <h2 className="mb-8 text-center text-lg font-bold text-slate-900 sm:text-xl">
        More {place} <span className="text-brand-600">services</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-2.5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
          >
            {link.label}
            <ArrowUpRight
              size={12}
              className="opacity-0 transition-all duration-300 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
