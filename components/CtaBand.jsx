"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import { openWhatsApp } from "@/utils/site";
import { reveal, revealStagger } from "@/components/ui/Section";

/**
 * Full-bleed brand band that closes the page. This is the last thing a
 * visitor sees before the footer, so it carries one job: start a conversation.
 */
export default function CtaBand() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-600 px-4 py-20 lg:py-24">
      {/* Depth: a soft light source top-left and a darker pool bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full bg-brand-700/40 blur-3xl"
      />

      <motion.div
        variants={revealStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
      >
        <motion.h2
          variants={reveal}
          className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
        >
          Ready to get your business online properly?
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-emerald-50/90 sm:text-base"
        >
          Tell us what you do and we&rsquo;ll tell you exactly what it costs and
          how long it takes. No obligation, no sales script.
        </motion.p>

        <motion.div
          variants={reveal}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hi Wepzite! I'd like to talk about a website for my business.",
              )
            }
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-700 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-xl active:translate-y-0 sm:w-auto"
          >
            <MessageCircle size={16} />
            Message us on WhatsApp
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 active:translate-y-0 sm:w-auto"
          >
            <Phone size={16} />
            Request a callback
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
