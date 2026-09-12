"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { openWhatsApp } from "@/utils/site";
import {
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Star,
  TrendingUp,
  Gauge,
  Check,
} from "lucide-react";
import Image from "next/image";

// Screenshots pulled from the live portfolio set in /public/Portfolio
const showcase =
  "https://res.cloudinary.com/deamsuypj/image/upload/v1789117890/valparaiholidaytours.com_lsfzva.png";
const proofThumbs = [
  "https://res.cloudinary.com/deamsuypj/image/upload/v1789117379/sbttours.com_rkjpfb.png",
  "https://res.cloudinary.com/deamsuypj/image/upload/v1789117381/www.ortusaudios.in_oztd2p.png",
  "https://res.cloudinary.com/deamsuypj/image/upload/v1789118281/chennaitopondicherryonewaytaxi.com_eqvu2y.png",
  "https://res.cloudinary.com/deamsuypj/image/upload/v1789118287/mktravelscoimbatore.com_wi1axm.png",
];


const stats = [
  { value: "30+", label: "Websites Built" },
  { value: "7 Days", label: "Avg. Launch" },
  { value: "98/100", label: "Speed Score" },
];

const highlights = [
  "Mobile-first build",
  "SEO configuemerald",
  "Free 1-year support",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ titlePrefix, titleSuffix, description }) {
  // NOTE: this used to be `const openWhatsApp`, which shadowed the import
  // above and recursed into itself on click. Renamed so it calls the util.
  const handleQuoteClick = () => {
    openWhatsApp(
      "Hi Wepzite, I'd like a free quote for a new website for my business.",
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pt-30 pb-15 ">
      {/* BACKGROUND — faint grid, masked so it fades toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(241 245 249) 1px, transparent 1px), linear-gradient(to bottom, rgb(241 245 249) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"
      >
        {/* ---------------- LEFT: COPY + CTA ---------------- */}
        <div className="lg:col-span-6">
          {/* ANNOUNCEMENT PILL */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1">
              <Sparkles size={12} className="animate-pulse text-emerald-600" />
              <span className="text-[10px] font-black uppercase text-emerald-700">
                Trusted by 30+ businesses in Tamil Nadu
              </span>
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            variants={item}
            className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {titlePrefix}{" "}
            <span className="relative inline-block text-emerald-600">
              {titleSuffix}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2 w-full text-emerald-500/40"
              >
                <path
                  d="M2 8C40 3 90 2 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base"
          >
            {description}
          </motion.p>

          {/* CTA ROW */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={handleQuoteClick}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 active:translate-y-0"
            >
              <MessageCircle size={16} />
              Get a Free Quote
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-emerald-600 hover:shadow-sm"
            >
              View Our Work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* HIGHLIGHT CHIPS */}
          <motion.ul
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {highlights.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600"
              >
                <Check size={13} className="text-emerald-600" strokeWidth={3} />
                {point}
              </li>
            ))}
          </motion.ul>

          {/* SOCIAL PROOF */}
          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6"
          >
            <div className="flex shrink-0 -space-x-2.5">
              {proofThumbs.map((thumb, idx) => (
                // eslint-disable-next-line @next/next/no-img-element
                <Image
                  alt="websites developed by Wepzite"
                  key={thumb}
                  src={thumb}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100dvw, 50dvw"
                  quality={85}
                  aria-hidden="true"
                  loading="lazy"
                  className="h-9 w-12 rounded-md border-2 border-white bg-white object-cover  shadow-sm ring-1 ring-slate-100"
                  style={{ zIndex: proofThumbs.length - idx }}
                />
              ))}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={12}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1.5 text-[11px] font-bold text-slate-800">
                  5.0
                </span>
              </div>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                Rated by business owners across Tamil Nadu
              </p>
            </div>
          </motion.div>

          {/* STATS STRIP */}
          <motion.dl
            variants={item}
            className="mt-6 grid max-w-lg grid-cols-3 divide-x divide-slate-100 rounded-2xl border border-slate-100 bg-white/70 py-4 backdrop-blur-sm"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 text-center sm:px-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-lg font-bold text-slate-900 sm:text-xl">
                  {stat.value}
                </dd>
                <p className="mt-0.5 text-[10px] font-semibold uppercase leading-tight text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ---------------- RIGHT: PRODUCT VISUAL ---------------- */}
        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none"
        >
          {/* GLOW BEHIND THE MOCKUP */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-6 rounded-[2rem] bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent blur-2xl"
          />

          {/* BROWSER MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ rotate: 0, y: -6 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
          >
            {/* CHROME BAR */}
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="ml-3 flex-1 truncate rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-slate-400 ring-1 ring-slate-100">
                wepzite.in
              </div>
            </div>

            {/* SITE SCREENSHOT */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src={showcase}
              alt="Example of a business website designed and developed by Wepzite"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100dvw, 50dvw"
              quality={85}
              aria-hidden="true"
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </motion.div>

          {/* FLOATING CARD — RANKING */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-2 top-16 hidden items-center gap-2.5 rounded-xl border border-slate-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-sm sm:flex lg:-left-6"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
              <TrendingUp size={15} className="text-emerald-600" />
            </span>
            <div>
              <p className="text-xs font-bold leading-none text-slate-900">
                Ranking #1 locally
              </p>
              <p className="mt-1 text-[10px] font-medium text-slate-500">
                Google Business Profile
              </p>
            </div>
          </motion.div>

          {/* FLOATING CARD — PERFORMANCE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="absolute -bottom-5 right-2 hidden items-center gap-2.5 rounded-xl border border-slate-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-sm sm:flex lg:right-0"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
              <Gauge size={15} className="text-emerald-600" />
            </span>
            <div>
              <p className="text-xs font-bold leading-none text-slate-900">
                98 / 100 PageSpeed
              </p>
              <p className="mt-1 text-[10px] font-medium text-slate-500">
                Loads fast on 4G
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
