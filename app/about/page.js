"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowLeft,
  Gauge,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Badge, reveal, revealStagger } from "@/components/ui/Section";

export default function AboutPage() {
  const agencyValues = [
    {
      icon: Gauge,
      title: "Speed is a feature",
      desc: "Every build is measuemerald against Google's Core Web Vitals before it ships. A site that takes five seconds to load has already lost most of the people who clicked.",
    },
    {
      icon: ShieldCheck,
      title: "You own what we build",
      desc: "SSL, sensible security defaults, and no lock-in. The code and the artwork are yours — if you ever want to move, nothing is held hostage.",
    },
    {
      icon: HeartHandshake,
      title: "We answer the phone",
      desc: "Small changes after launch don't turn into invoices and week-long waits. Most of our work comes from clients who tell someone else about us.",
    },
  ];

  // NOTE: replace these with the real dates and details before launch.
  const milestones = [
    {
      year: "2024",
      title: "Started building websites",
      desc: "Began taking on web design work for local businesses, focused on fast, mobile-first builds rather than page-builder templates.",
    },
    {
      year: "2025",
      title: "Added SEO and automation",
      desc: "Extended into Google Business Profile optimization and WhatsApp enquiry routing, so sites bring in enquiries instead of just existing.",
    },
    {
      year: "2026",
      title: "Serving businesses across Tamil Nadu",
      desc: "Now working with travel operators, clinics, photographers and retailers in Theni, Madurai, Coimbatore and Chennai.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-white px-4 pb-20 pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[560px] w-[560px] rounded-full bg-brand-400/[0.07] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors hover:text-brand-600"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Back to home</span>
        </Link>

        {/* HEADER */}
        <motion.div
          variants={revealStagger}
          initial="hidden"
          animate="show"
          className="mb-16 max-w-3xl border-b border-slate-200/70 pb-12"
        >
          <motion.div variants={reveal}>
            <Badge tone="light" icon={Sparkles}>
              About Us
            </Badge>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            About{" "}
            <span className="text-brand-600">Wepzite</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-5 text-sm font-medium leading-relaxed text-slate-500 sm:text-base"
          >
            Wepzite designs and builds websites, apps and local SEO for
            businesses across Tamil Nadu. We are not a large agency, and that is
            deliberate — you deal directly with the people writing the code.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500"
          >
            <MapPin size={14} className="text-brand-500" />
            Based in Theni, working across Tamil Nadu
          </motion.div>
        </motion.div>

        {/* PHILOSOPHY + TIMELINE */}
        <div className="mb-20 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:sticky lg:top-28 lg:col-span-5">
            <span className="block border-b border-slate-200/70 pb-2 text-[10px] font-black uppercase tracking-wide text-slate-400">
              How we work
            </span>
            <h2 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
              We&rsquo;d rather show you numbers than adjectives.
            </h2>
            <p className="text-[13px] font-medium leading-relaxed text-slate-500">
              Before a site goes live we check how fast it loads on a mid-range
              phone, whether Google can read its structure, and whether the path
              to contacting you is obvious. Those three things decide whether a
              website earns its cost.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <span className="block border-b border-slate-200/70 pb-2 text-[10px] font-black uppercase tracking-wide text-slate-400">
              How we got here
            </span>

            <div className="relative space-y-4 before:absolute before:inset-y-3 before:left-4 before:w-px before:bg-slate-200">
              {milestones.map((ms, idx) => (
                <motion.div
                  key={ms.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative rounded-2xl border border-slate-200/80 bg-white p-5 pl-8 shadow-sm transition-colors duration-300 hover:border-slate-300"
                >
                  <span className="absolute left-[13px] top-7 z-10 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500 ring-4 ring-brand-50" />
                  <span className="rounded-md border border-brand-100 bg-brand-50 px-2 py-0.5 text-xs font-black text-brand-600">
                    {ms.year}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {ms.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-500">
                    {ms.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="border-t border-slate-200/80 pt-14">
          <div className="mb-10">
            <span className="mb-1 block text-[10px] font-black uppercase tracking-wide text-slate-400">
              What we hold to
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Three things we don&rsquo;t compromise on
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {agencyValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{val.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-500">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CLOSING CTA */}
        <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-slate-200/80 bg-slate-50 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Want to see what we&rsquo;d do for your business?
            </h2>
            <p className="mt-1.5 text-sm font-medium text-slate-500">
              Tell us what you do and we&rsquo;ll come back with a plan and a price.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0"
          >
            Get in touch
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
