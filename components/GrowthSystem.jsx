"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  MapPin,
  Megaphone,
  ArrowRight,
  Workflow,
  MessageCircle,
} from "lucide-react";
import { openWhatsApp } from "@/utils/site";

const pillars = [
  {
    icon: Globe,
    step: "01",
    title: "Website",
    role: "The place they land",
    body: "A fast, cemeraldible site that answers the question they searched for and makes contacting you a single tap. Without this, everything else sends traffic nowhere.",
  },
  {
    icon: Search,
    step: "02",
    title: "SEO",
    role: "The free traffic",
    body: "Structuemerald pages targeting what your customers actually type. Slower to build than ads, but it keeps working after you stop paying.",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Google Business",
    role: "The local shortcut",
    body: "For 'near me' searches, the map pack sits above every website. A complete, active profile is often the cheapest customer you'll ever get.",
  },
  {
    icon: Megaphone,
    step: "04",
    title: "Ads",
    role: "The accelerator",
    body: "Once the first three convert reliably, paid search buys more of the same visitor on demand. Run it before that and you're paying to lose people.",
  },
];

export default function GrowthSystem() {
  return (
    <section
      id="growth-system"
      className="relative w-full overflow-hidden bg-slate-950 px-4 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(30 41 59) 1px, transparent 1px), linear-gradient(to bottom, rgb(30 41 59) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 35%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
            <Workflow size={12} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-wide text-emerald-300">
              The Full System
            </span>
          </div>
          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            A website alone won&apos;t bring customers.{" "}
            <span className="text-emerald-400">Four things together will.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-slate-400 sm:text-base">
            Most businesses buy one piece and wonder why the phone stays quiet.
            These four feed each other — and they only work in this order.
          </p>
        </div>

        {/* PILLARS */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {pillars.map(({ icon: Icon, step, title, role, body }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/30 hover:bg-white/[0.06] lg:mx-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20">
                    <Icon size={18} className="text-emerald-400" />
                  </span>
                  <span className="text-2xl font-bold text-white/10 transition-colors duration-500 group-hover:text-white/20">
                    {step}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-white">{title}</h3>
                <p className="mt-0.5 text-[10px] font-black uppercase tracking-wide text-emerald-400">
                  {role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                  {body}
                </p>
              </div>

              {/* CONNECTOR */}
              {idx < pillars.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-1 top-1/2 hidden -translate-y-1/2 lg:block"
                >
                  <ArrowRight size={16} className="text-white/15" />
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* OUTCOME BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-600/15 via-white/[0.04] to-transparent p-6 sm:flex-row sm:justify-between sm:p-7"
        >
          <div>
            <p className="text-base font-bold text-white">
              We build all four, or we start with the one you&apos;re missing.
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Tell us what you already have and we&apos;ll tell you honestly what
              you actually need next.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hi Wepzite, I'd like to know which part of the website + SEO + Google Business + Ads system my business needs first.",
              )
            }
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white active:translate-y-0"
          >
            <MessageCircle size={15} />
            Get a free audit
          </button>
        </motion.div>
      </div>
    </section>
  );
}