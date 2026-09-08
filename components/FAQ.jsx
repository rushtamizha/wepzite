"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Section, Badge } from "@/components/ui/Section";
import { BUSINESS_WHATSAPP } from "@/utils/site";

/**
 * `items` lets a page supply its own questions — the city pages pass their
 * district's `faq` array. This matters beyond variety: the FAQPage JSON-LD on
 * those pages is generated from the same array, and Google requires schema FAQ
 * content to be visible on the page. Passing nothing keeps the default set
 * below, so every existing page renders exactly as before.
 *
 * Each item is { q, a }.
 */
export default function Faq({ items }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0); // Default open the first one for premium interactive layout

  const defaultFaqItems = [
    {
      q: "What is your typical development timeline for a project?",
      a: "Our core structural Next.js platforms are engineered and deployed within 7 to 14 business days. For massive enterprise-grade platforms or unlimited product E-Commerce systems with complex custom dashboards, timelines scale to 21-45 days depending on exact operational logic."
    },
    {
      q: "Will my website be optimized for Google Search out of the box?",
      a: "Absolutely. We do not do basic metadata entry. We build high-level on-page SEO frameworks including automated XML sitemaps, robots.txt management, semantic HTML5 tags, and correct JSON-LD Schema markup so Google indexes your architecture perfectly from day one."
    },
    {
      q: "How does the WhatsApp automation integration help my business?",
      a: "Instead of letting incoming traffic get lost in an email inbox, we build direct WhatsApp routing triggers. This instantly moves your high-intent viewers directly into personal chat feeds where you can set up smart labels to categorize hot leads versus routine support traffic instantly."
    },
    {
      q: "What happens after the dedicated support period ends?",
      a: "Every package comes with 7 to 45 days of priority monitoring. After that, your site runs completely maintenance-free due to our serverless Next.js architecture. If you need ongoing feature expansions or layout additions, we offer flexible monthly maintenance retainer tiers."
    },
    {
      q: "Can I migrate my existing traditional website over to Next.js?",
      a: "Yes. We specialize in dismantling slow, legacy platforms (like WordPress or basic builders) and re-engineering their entire layout, content, and link architecture into blazing-fast Next.js apps without losing your established Google keyword rankings."
    }
  ];

  const faqItems =
    Array.isArray(items) && items.length > 0 ? items : defaultFaqItems;

  const handleSupportRedirect = () => {
    const message = encodeURIComponent("Hi Wepzite! I have a question that isn\u2019t covered in your FAQ.");
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`, "_blank");
  };

  return (
    <Section id="faq" tone="tint">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — STICKY ANCHOR */}
        <div className="text-center lg:sticky lg:top-28 lg:col-span-4 lg:text-left">
          <Badge tone="tint" icon={Sparkles}>
            Common Questions
          </Badge>

          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Frequently asked{" "}
            <span className="text-brand-600">questions</span>
          </h2>

          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
            Straight answers about timelines, SEO, and what happens after your
            site goes live. Anything else, just ask.
          </p>

          <div className="mt-8 hidden space-y-3 sm:block">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-600">
                <Clock size={15} />
              </span>
              <div className="text-left">
                <div className="text-[9px] font-black uppercase tracking-wide text-slate-400">
                  Reply speed
                </div>
                <div className="text-xs font-bold text-slate-700">
                  Usually within the hour
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-emerald-600">
                <ShieldCheck size={15} />
              </span>
              <div className="text-left">
                <div className="text-[9px] font-black uppercase tracking-wide text-slate-400">
                  Refund policy
                </div>
                <div className="text-xs font-bold text-slate-700">
                  Written into every contract
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSupportRedirect}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-brand-600 hover:shadow-sm lg:w-auto"
          >
            <MessageCircle size={15} />
            <span>Ask us anything</span>
          </button>
        </div>

        {/* RIGHT — ACCORDION */}
        <div className="w-full space-y-3 lg:col-span-8">
          {faqItems.map((item, idx) => {
            const isOpen = openFaqIdx === idx;
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
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
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
                        isOpen
                          ? "rotate-180 bg-brand-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown size={15} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
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
      </div>
    </Section>
  );
}
