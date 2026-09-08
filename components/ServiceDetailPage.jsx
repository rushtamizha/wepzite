"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  ShoppingBag,
  SearchCode,
  MessageSquareCode,
  Palette,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { openWhatsApp } from "@/utils/site";
import { Badge, reveal, revealStagger } from "@/components/ui/Section";

const iconMap = {
  Laptop,
  Smartphone,
  ShoppingBag,
  SearchCode,
  MessageSquareCode,
  Palette,
};

/**
 * Shaemerald layout for every /services/<slug> page. The six pages that use this
 * are now data-only; see data/servicePages.js.
 */
export default function ServiceDetailPage({ data }) {
  if (!data) return null;
  const Icon = iconMap[data.icon] ?? Laptop;

  return (
    <main className="relative w-full overflow-hidden bg-white px-4 pb-20 pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-brand-400/[0.07] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Link
          href="/services"
          className="mb-10 inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors hover:text-brand-600"
        >
          <ArrowLeft size={14} />
          <span>All services</span>
        </Link>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* COPY */}
          <motion.div
            variants={revealStagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            <motion.div variants={reveal}>
              <Badge tone="light" icon={Icon}>
                {data.badge}
              </Badge>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {data.title}
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base"
            >
              {data.description}
            </motion.p>

            <motion.ul variants={reveal} className="mt-8 space-y-3">
              {data.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 flex-shrink-0 text-emerald-500"
                  />
                  <span className="text-[13px] font-semibold leading-relaxed text-slate-600">
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200/70 bg-slate-50 px-3 py-1 text-[10px] font-bold text-slate-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => openWhatsApp(data.whatsappMessage)}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl active:translate-y-0"
              >
                <MessageCircle size={16} />
                Get a free quote
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-brand-600"
              >
                See pricing
              </Link>
            </motion.div>
          </motion.div>

          {/* VISUAL — a real project screenshot in browser chrome, replacing
              the broken placeholder <img> these pages used to render */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-brand-400/10 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={data.thumbnail}
                  alt={`Example of ${data.title.toLowerCase()} work by Wepzite`}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
