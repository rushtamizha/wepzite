"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Zap, TrendingUp, CheckCircle2, Terminal } from "lucide-react";
import { Section, Badge, reveal, revealStagger } from "@/components/ui/Section";

export default function WhyUsAndTech() {
  const whyUsPillars = [
    {
      icon: TrendingUp,
      title: "Built to convert, not just to look good",
      desc: "Layout, button placement and page flow are all decided around one question: what makes a visitor actually call you. A pretty site that nobody contacts is a failed site.",
    },
    {
      icon: Zap,
      title: "Fast on a mid-range phone",
      desc: "Most of your customers are on 4G, not fibre. We build for 90+ Core Web Vitals so pages load before people give up and go back to the search results.",
    },
    {
      icon: ShieldCheck,
      title: "Custom code, no page-builder bloat",
      desc: "No drag-and-drop templates carrying 3MB of unused scripts. You get a clean, modular build shaped around how your business actually works, and it stays yours.",
    },
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
    "Node.js", "PostgreSQL", "Prisma", "Supabase", "REST APIs",
    "Zod", "TanStack Query", "Schema Markup", "WhatsApp Business API",
    "Vercel", "Git", "CI/CD",
  ];

  return (
    <Section id="why-us" tone="dark">
      <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — THE CLAIM */}
        <motion.div
          variants={revealStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center lg:col-span-5 lg:text-left"
        >
          <motion.div variants={reveal}>
            <Badge tone="dark" icon={Sparkles}>
              Why Wepzite
            </Badge>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            The difference shows up in{" "}
            <span className="text-brand-500">your enquiries</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-4 text-sm font-medium leading-relaxed text-slate-400 sm:text-base"
          >
            Anyone can put a website online. We care about what happens after —
            whether it loads, whether it ranks, and whether the people who land
            on it pick up the phone.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start"
          >
            {["100% custom build", "Mobile-first", "You own the code"].map((text) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-slate-300"
              >
                <CheckCircle2 size={11} className="text-emerald-400" />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — THE PILLARS */}
        <div className="space-y-4 lg:col-span-7">
          {whyUsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:flex-row sm:p-6"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brand-600/15">
                  <Icon className="h-5 w-5 text-brand-500" />
                </span>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-white sm:text-base">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* TECH STACK TICKER */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="block h-2 w-2 rounded-full bg-emerald-500" />
            <span className="block h-2 w-2 rounded-full bg-amber-400" />
            <span className="block h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            <Terminal size={11} className="text-brand-500" />
            What we build with
          </div>
        </div>

        <div className="relative flex w-full items-center overflow-hidden py-1">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent"
          />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            className="flex shrink-0 gap-3 whitespace-nowrap pr-3"
          >
            {/* duplicated once so the loop seam is invisible at -50% */}
            {[...techStack, ...techStack].map((tech, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300 transition-colors hover:border-brand-500/40 hover:text-white"
              >
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
