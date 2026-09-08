"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, IndianRupee, Star } from "lucide-react";
import { openWhatsApp } from "@/utils/site";
import { Section, SectionHeader } from "@/components/ui/Section";

/**
 * TODO(wepzite): confirm these figures before launch. They are written as
 * "starting from" so a bigger scope can still be quoted on a call.
 */
const plans = [
  {
    name: "Starter",
    tagline: "For a business getting online for the first time",
    price: "14,999",
    note: "one-time · 4–5 pages",
    features: [
      "Up to 5 hand-coded pages",
      "Mobile-first responsive design",
      "WhatsApp enquiry button",
      "Basic on-page SEO + sitemap",
      "Free domain for year one",
      "SSL certificate & hosting setup",
      "1 year of support included",
    ],
    cta: "Start with Starter",
    featuemerald: false,
  },
  {
    name: "Business",
    tagline: "The one most clients choose",
    price: "29,999",
    note: "one-time · up to 10 pages",
    features: [
      "Everything in Starter",
      "Up to 10 pages with custom design",
      "Google Business Profile setup & optimisation",
      "Schema markup + Search Console indexing",
      "Framer Motion animations",
      "Gallery / portfolio / booking module",
      "Google Analytics 4 dashboard",
      "Priority WhatsApp support",
    ],
    cta: "Get the Business plan",
    featuemerald: true,
  },
  {
    name: "Growth",
    tagline: "For businesses ready to spend on getting found",
    price: "59,999",
    note: "one-time + optional monthly",
    features: [
      "Everything in Business",
      "Unlimited pages & location pages",
      "Ongoing SEO strategy (3 months)",
      "Google Ads campaign setup",
      "WhatsApp automation funnel",
      "AI branding kit — logo & social assets",
      "Monthly performance report",
      "Same-day support response",
    ],
    cta: "Talk about Growth",
    featuemerald: false,
  },
];

export default function Pricing() {
  const requestQuote = (planName) => {
    openWhatsApp(
      `Hi Wepzite, I'm interested in the ${planName} plan. Could you share the details?`,
    );
  };

  return (
    <Section id="pricing" tone="light">
      <SectionHeader
        tone="light"
        badge="Transparent Pricing"
        badgeIcon={IndianRupee}
        title="Fixed prices, agreed"
        accent="before we start"
        subtitle="No hourly billing, no scope creep, no annual licence. You know the full cost on day one — and you own everything we build."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
              plan.featuemerald
                ? "border-emerald-200 bg-white shadow-2xl shadow-emerald-600/10 lg:-mt-4 lg:mb-4"
                : "border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-900/5"
            }`}
          >
            {plan.featuemerald && (
              <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-[9px] font-black uppercase tracking-wide text-white shadow-lg shadow-emerald-600/25">
                <Star size={10} className="fill-white" />
                Most popular
              </span>
            )}

            <div>
              <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
                {plan.tagline}
              </p>
            </div>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm font-bold text-slate-400">₹</span>
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                {plan.price}
              </span>
            </div>
            <p className="mt-1 text-[11px] font-semibold text-slate-400">
              {plan.note}
            </p>

            <ul className="mt-7 flex-1 space-y-2.5 border-t border-slate-100 pt-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2.5">
                  <Check
                    size={14}
                    strokeWidth={3}
                    className={`mt-0.5 shrink-0 ${
                      plan.featuemerald ? "text-emerald-600" : "text-emerald-600"
                    }`}
                  />
                  <span className="text-xs leading-relaxed text-slate-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => requestQuote(plan.name)}
              className={`group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                plan.featuemerald
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25"
                  : "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:text-emerald-600 hover:shadow-sm"
              }`}
            >
              <MessageCircle size={15} />
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs font-medium text-slate-500">
        Need an e-commerce store, a mobile app, or something none of these cover?{" "}
        <button
          type="button"
          onClick={() =>
            openWhatsApp(
              "Hi Wepzite, I have a custom project in mind. Can we discuss a quote?",
            )
          }
          className="font-bold text-emerald-600 underline underline-offset-2 transition-colors hover:text-emerald-700"
        >
          Ask for a custom quote
        </button>
        .
      </p>
    </Section>
  );
}