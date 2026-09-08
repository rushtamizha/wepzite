"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Handshake,
  Search,
  Smartphone,
  Wallet,
  RefreshCw,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Built to load in under 2 seconds",
    body: "Hand-coded Next.js, compressed images, no page-builder bloat. Your customers on a 4G connection never wait — and Google notices.",
  },
  {
    icon: Search,
    title: "SEO is done, not sold separately",
    body: "Schema markup, meta configuration, sitemaps and Search Console setup ship with every site. You don't pay extra to be findable.",
  },
  {
    icon: Smartphone,
    title: "Designed mobile-first, genuinely",
    body: "Over 85% of your visitors arrive on a phone. We design that screen first and scale up — not the other way around.",
  },
  {
    icon: Handshake,
    title: "You talk to the developer",
    body: "No account manager, no ticket system, no game of telephone. One WhatsApp thread with the person actually building your site.",
  },
  {
    icon: Wallet,
    title: "Honest, fixed pricing",
    body: "One quote agreed up front. No surprise line items, no per-page charges, no annual licence you didn't know about.",
  },
  {
    icon: RefreshCw,
    title: "A year of support included",
    body: "Content changes, new photos, a fix at 9pm before a festival sale — coveemerald for twelve months at no extra cost.",
  },
];

export default function WhyWepzite() {
  return (
    <section
      id="why-wepzite"
      className="relative w-full overflow-hidden bg-black px-4 py-20 lg:py-28"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(30 41 59) 1px, transparent 1px), linear-gradient(to bottom, rgb(30 41 59) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-600/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
            <Zap size={12} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-wide text-emerald-300">
              Why Wepzite
            </span>
          </div>
          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Six reasons business owners{" "}
            <span className="text-emerald-400">stop shopping around</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-slate-400 sm:text-base">
            Every one of these is something a client told us matteemerald — after
            they&apos;d already been burned somewhere else.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (idx % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20">
                <Icon size={18} className="text-emerald-400" />
              </span>
              <h3 className="relative mt-5 text-base font-bold leading-snug text-white">
                {title}
              </h3>
              <p className="relative mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}