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

  // Scope is deliberate: website development and Google Business Profile only,
  // framed for Tamil Nadu. Figures below track the packages rendered by
  // <PricingAndContact> on this same page — if a plan's price or support
  // window changes there, change it here too or the page contradicts itself.
  // Answers lead with the direct response so Google's AI Overviews and voice
  // assistants can lift sentence one cleanly.
  const defaultFaqItems = [
    {
      q: "How much does a website cost in Tamil Nadu?",
      a: "A business website from Wepzite starts at \u20b92,999 for a five-page Starter Essential build, and most businesses choose the \u20b96,999 Growth plan. Business Pro is \u20b99,999 and online stores start at \u20b914,999. Every price is one-time and fixed before work begins \u2014 it covers design, development, hosting deployment, SSL and a free first-year domain, with no monthly platform fee and no per-page charges."
    },
    {
      q: "How long does it take to build a website?",
      a: "Core builds are engineered and deployed in 7 to 14 working days. It starts with a short WhatsApp conversation about what your business does and who buys from you, then design, then development, then launch. E-commerce stores with cart logic, payment gateways and custom dashboards take longer depending on the operational logic involved."
    },
    {
      q: "Do you set up and optimise Google Business Profile?",
      a: "Yes \u2014 GMB Setup & Optimization is \u20b91,499 as a standalone service. It covers creating or claiming the profile, category and business-info optimisation, logo and cover photos, your service and product listings, business hours and location mapping, Q&A seeding, and Google Maps pin verification support. We also run a NAP consistency check so the name, address and phone on your profile match your website exactly."
    },
    {
      q: "Will my website show up for \u201cnear me\u201d searches in Tamil Nadu?",
      a: "The website and the Google Business Profile do two different jobs, and you need both. Every site ships with on-page SEO, Schema.org structured data, an XML sitemap and robots.txt so Google can index it from day one \u2014 but it is the Business Profile that puts you in the local map pack for \u201cnear me\u201d searches. Reaching page one typically takes four to twelve weeks depending on how competitive your town and industry are."
    },
{
      q: "What is the  cost of AMC?",
      a: "The website maintanance cost is starting from \u20b95,000. Domain , Hosting and other ThirdParty Services Costs Not Included"
    },
    {
      q: "What happens after the site goes live?",
      a: "Every package includes a dedicated support window \u2014 30 days on Starter Essential, and 365 days on the Growth, Product-Based and Business Pro builds as well as E-Commerce Essential. Beyond that the serverless Next.js architecture runs maintenance-free, and optional monthly retainers cover ongoing feature or layout work. GMB maintenance is available separately as weekly posts plus review and Q&A replies."
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
            Straight answers on website builds and Google Business Profile
            setup across Tamil Nadu. Anything else, just ask.
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
