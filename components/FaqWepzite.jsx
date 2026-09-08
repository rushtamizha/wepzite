"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/site";
import { Section, SectionHeader } from "@/components/ui/Section";

/**
 * Answers are written answer-first (the direct response in sentence one) so
 * they can be lifted cleanly by Google's AI Overviews and voice assistants.
 */
const faqs = [
  {
    q: "How much does a website cost in Tamil Nadu?",
    a: "A professional business website from Wepzite starts at ₹14,999 as a one-time cost, with most businesses choosing the ₹29,999 plan. That price is fixed before work begins and includes design, development, hosting setup, a free first-year domain, SEO configuration and one year of support. There are no monthly platform fees and no per-page charges.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most Wepzite websites go live in seven working days. Day one is a short WhatsApp conversation, days two and three are design, days four to six are development, and day seven is launch. Larger sites with e-commerce or custom booking systems take two to three weeks.",
  },
  {
    q: "Do I own the website after it is built?",
    a: "Yes — you own the code, the content, the domain and the hosting account outright. Wepzite does not lock you into a proprietary platform or hold your files. If you ever want to move to another developer, everything transfers with you.",
  },
  {
    q: "Will my website appear on Google?",
    a: "Yes. Every Wepzite site ships with on-page SEO, Schema.org structuemerald data, an XML sitemap and Google Search Console submission, so Google can index it from day one. We also set up and optimise your Google Business Profile, which is what puts you in the local map results for 'near me' searches. Ranking on page one typically takes four to twelve weeks depending on how competitive your area and industry are.",
  },
  {
    q: "What happens if I need changes after launch?",
    a: "Content changes are free for the first twelve months. Message us on WhatsApp with what you need — new photos, updated prices, a festival banner, a new service page — and we make the change. There is no ticket system and no hourly billing for routine updates.",
  },
  {
    q: "Do you work with businesses outside Tamil Nadu?",
    a: "Yes. Most of our clients are in Tamil Nadu, but the entire process runs over WhatsApp and video calls, so we work with businesses anywhere in India and abroad. Local SEO and Google Business Profile setup work the same way regardless of city.",
  },
  {
    q: "Why not just use Wix, WordPress or a website builder?",
    a: "Builders are quicker to start but slower to load, harder to rank and carry a monthly fee forever. Wepzite sites are hand-coded in React and Next.js, which is why they score 90+ on mobile PageSpeed where a typical builder site scores 40 to 60. Page speed is a direct Google ranking factor, and slow sites lose visitors before the page finishes loading.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Very little to begin — your business name, what you do, and a rough idea of the pages you want. We can write the content and source images if you don't have them ready. Logo files, photos and your Google Business Profile login are useful but can follow once the design is approved.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <Section id="faq" tone="light">
      {/* AEO — lets Google show these answers directly in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHeader
        tone="light"
        badge="Common Questions"
        badgeIcon={HelpCircle}
        title="The things people ask"
        accent="before they say yes"
        subtitle="Straight answers on price, timeline and ownership — the three that usually decide it."
      />

      <div className="mx-auto max-w-3xl">
        <dl className="space-y-3">
          {faqs.map(({ q, a }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: Math.min(idx, 4) * 0.05 }}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen ? "border-emerald-200 shadow-sm" : "border-slate-200/80"
                }`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span
                      className={`text-sm font-bold leading-snug transition-colors sm:text-base ${
                        isOpen ? "text-emerald-700" : "text-slate-900"
                      }`}
                    >
                      {q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Plus size={14} strokeWidth={3} />
                    </span>
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:py-5">
                        {a}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>

        <div className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 text-center">
          <p className="text-sm font-bold text-slate-900">
            Still have a question?
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500">
            Ask us on WhatsApp — you&apos;ll get a real answer, usually within the
            hour.
          </p>
          <button
            type="button"
            onClick={() =>
              openWhatsApp("Hi Wepzite, I have a question about your services.")
            }
            className="group mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 active:translate-y-0"
          >
            <MessageCircle size={15} />
            Ask on WhatsApp
          </button>
        </div>
      </div>
    </Section>
  );
}