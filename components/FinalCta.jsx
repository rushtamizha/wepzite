"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import { openWhatsApp } from "@/utils/site";

export default function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 px-4 py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wide text-white">
            Taking projects this month
          </span>
        </span>

        <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Your competitors are already on page one.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-emerald-50 sm:text-base">
          Send us a message and we&apos;ll tell you exactly what it would take to
          get your business there — and what it would cost. No obligation, no
          sales call.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hi Wepzite, I'd like a free quote for a new website for my business.",
              )
            }
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-emerald-700 shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0 sm:w-auto"
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 active:translate-y-0 sm:w-auto"
          >
            See our work first
          </Link>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-100">
          <Phone size={11} />
          Prefer to talk? Call us — we answer our own phone.
        </p>
      </motion.div>
    </section>
  );
}