"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Terminal,
  Layers,
  Laptop,
  CloudLightning,
  Zap,
  Target,
  Rocket,
  Settings,
  Cog,
  MessageCircle,
  Computer,
  Bolt,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  // Fine-tuned animation variants for orchestrated text entry
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: custom * 0.15,
      },
    }),
  };

  // Code snippets for the looping terminal background element
  const loopCodeSnippets = [
    "const agency = WepziteEngine.init();",
    "await agency.transform({ traffic: 'viewers' });",
    "// Result: 100% Optimized Conversion Rate",
    "export default async function EnterpriseApp() {",
    "  return <PremiumUI UX='Elite' />",
    "}",
  ];

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center  pt-30 px-4">
      {/* 1. DYNAMIC CODING & MATRIX BACKGROUND LOOP */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Floating Code Stream Layer 1 */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-50%" }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="absolute left-4 top-0 w-64 opacity-[0.03] text-sky-950 font-mono text-xs leading-relaxed hidden md:block"
        >
          {Array(10)
            .fill(loopCodeSnippets)
            .flat()
            .map((line, idx) => (
              <div key={idx} className="mb-2 whitespace-nowrap">
                {line}
              </div>
            ))}
        </motion.div>

        {/* Floating Code Stream Layer 2 */}
        <motion.div
          initial={{ y: "-50%" }}
          animate={{ y: "0%" }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="absolute right-4 top-0 w-72 opacity-[0.03] text-indigo-950 font-mono text-xs leading-relaxed hidden lg:block"
        >
          {Array(10)
            .fill(loopCodeSnippets)
            .flat()
            .map((line, idx) => (
              <div key={idx} className="mb-2 whitespace-nowrap text-right">
                {line}
              </div>
            ))}
        </motion.div>

        {/* Cinematic Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400/10 to-indigo-400/10 rounded-full blur-3xl" />
      </div>

      {/* 2. CORE CONTENT ARCHITECTURE */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* LEFT COLUMN: HIGH-CONVERTING VALUE STATEMENT */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Elite Micro-Badge */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 w-fit mx-auto lg:mx-0 mb-6 shadow-2xs"
          >
            <Sparkles size={12} className="text-sky-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">
              Next-Gen Web Architecture
            </span>
          </motion.div>

          {/* The Hook Headline */}
          <motion.h1
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900  uppercase"
          >
            Still Having old,{" "}
            <span className="text-sky-500 line-through decoration-rose-500/80 decoration-4">
              boring websites
            </span>{" "}
            with zero conversions?
          </motion.h1>

          {/* The Power Core Statement */}
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-3 text-lg sm:text-xl font-semibold text-slate-700  max-w-2xl mx-auto lg:mx-0"
          >
            We transform passive viewers into highly profitable clients.
            Engineering enterprise-grade web applications utilizing
            bleeding-edge frameworks wrapped in pristine, premium UI/UX design.
          </motion.p>

          {/* Action Optimization Trigger Stack */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => router.push("/contact")}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 py-3.5 px-8 text-sm font-bold text-white tracking-wide uppercase rounded-full bg-gradient-to-r from-sky-500 to-sky-600   shadow-xs hover:shadow-sm active:ring-2 active:ring-sky-400/40 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => router.push("/portfolio")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 text-sm font-bold text-slate-600 rounded-full border border-slate-200 bg-white shadow-xs transition-all duration-300"
            >
              <Code2 size={15} className="text-sky-600" />
              <span>Explore Tech Stack</span>
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: HOLOGRAPHIC CODE MATRIX INTERACTIVE VISUAL */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.4,
            }}
            className="relative w-full max-w-[460px] aspect-square rounded-3xl bg-white border border-sky-100 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.04),0_0_1px_rgba(14,165,233,0.1)] overflow-hidden group perspective-1000"
          >
            {/* Dynamic Glass Window Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
              </div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Terminal size={10} className="text-sky-500" />
                wepzite-compiler.exe
              </div>
            </div>

            {/* Simulated Live UI Rendering Layer */}
            <div className="relative w-full h-[88%] bg-slate-900 rounded-2xl p-4 font-mono text-[11px] leading-relaxed text-slate-300 overflow-hidden shadow-inner flex flex-col justify-between">
              {/* Top Console Status Bar */}
              <div>
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-emerald-400 font-bold mb-2 flex items-center gap-1.5 text-[10px]"
                >
                  <span>● SYSTEM COMPILING SUCCESSFUL</span>
                  <span className="w-1.5 h-3 bg-emerald-400 inline-block animate-pulse" />
                </motion.div>

                <div className="space-y-1 text-white text-[10px]">
                  <p>
                    <span className="text-purple-400">import</span> Engine{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-sky-300">'@/wepzite'</span>;
                  </p>
                  <p>
                    <span className="text-purple-400">const</span> status ={" "}
                    <span className="text-amber-300">
                      "MAX_CONVERSION_MODE"
                    </span>
                    ;
                  </p>
                </div>
              </div>

              {/* LOOP MOTION 2: MULTI-CARD CAPABILITY TICKER */}
              <div className="relative h-70 overflow-hidden mt-3 rounded-xl border border-sky-500/10 bg-slate-900/60 p-2">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="space-y-2.5"
                >
                  {/* Double array ensures an infinite seamless scroll without jarring snaps */}
                  {[
                    {
                      title: "High Performance Engine",
                      subtitle: "Ultra-fast Next.js / React SSR execution",
                      badge: "99/100 Speed",
                      badgeColor:
                        "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                      icon: <Zap width={12} />,
                    },
                    {
                      title: "Conversion Focused",
                      subtitle: "Frictionless UI optimized for direct sales",
                      badge: "High ROI",
                      badgeColor:
                        "text-sky-400 bg-sky-500/10 border-sky-500/20",
                      icon: <Target width={12}/>,
                    },
                    {
                      title: "Advanced SEO Indexing",
                      subtitle: "Google Search Console & Schema automated",
                      badge: "Rank #1",
                      badgeColor:
                        "text-purple-400 bg-purple-500/10 border-purple-500/20",
                      icon: <Rocket width={12}/>,
                    },
                    {
                      title: "Premium Global UI/UX",
                      subtitle: "Enterprise design systems & animations",
                      badge: "Top 1%",
                      badgeColor:
                        "text-amber-400 bg-amber-500/10 border-amber-500/20",
                      icon: <Sparkles width={12}/>,
                    },
                    {
                      title: "Custom Logic & Web Apps",
                      subtitle:
                        "Tailored algorithms, APIs & backend integration",
                      badge: "Scalable",
                      badgeColor:
                        "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
                      icon: <Cog width={12}/>,
                    },
                    {
                      title: "Social Media Integration",
                      subtitle: "WhatsApp Business lead routing & share tools",
                      badge: "Instant Connect",
                      badgeColor:
                        "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                      icon: <MessageCircle width={12}/>,
                    },
                    {
                      title: "Clean Enterprise Code",
                      subtitle: "Modular, bug-free & scalable architecture",
                      badge: "A+ Quality",
                      badgeColor:
                        "text-sky-400 bg-sky-500/10 border-sky-500/20",
                      icon:<Computer width={12}/>,
                    },
                  ]
                    .concat([
                      {
                        title: "High Performance Engine",
                        subtitle: "Ultra-fast Next.js / React SSR execution",
                        badge: "99/100 Speed",
                        badgeColor:
                          "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                        icon:<Bolt width={12}/>,
                      },
                      {
                        title: "Conversion Focused",
                        subtitle: "Frictionless UI optimized for direct sales",
                        badge: "High ROI",
                        badgeColor:
                          "text-sky-400 bg-sky-500/10 border-sky-500/20",
                        icon: <Target width={12}/>,
                      },
                      {
                        title: "Advanced SEO Indexing",
                        subtitle: "Google Search Console & Schema automated",
                        badge: "Rank #1",
                        badgeColor:
                          "text-purple-400 bg-purple-500/10 border-purple-500/20",
                        icon:<Rocket width={12}/>,
                      },
                      {
                        title: "Premium Global UI/UX",
                        subtitle: "Enterprise design systems & animations",
                        badge: "Top 1%",
                        badgeColor:
                          "text-amber-400 bg-amber-500/10 border-amber-500/20",
                        icon: <Sparkles width={12}/>,
                      },
                      {
                        title: "Custom Logic & Web Apps",
                        subtitle:
                          "Tailored algorithms, APIs & backend integration",
                        badge: "Scalable",
                        badgeColor:
                          "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
                        icon: <Settings width={12}/>,
                      },
                      {
                        title: "Social Media Integration",
                        subtitle:
                          "WhatsApp Business lead routing & share tools",
                        badge: "Instant Connect",
                        badgeColor:
                          "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                        icon:<MessageCircle width={12}/>,
                      },
                      {
                        title: "Clean Enterprise Code",
                        subtitle: "Modular, bug-free & scalable architecture",
                        badge: "A+ Quality",
                        badgeColor:
                          "text-sky-400 bg-sky-500/10 border-sky-500/20",
                        icon: <Computer width={12}/>,
                      },
                    ])
                    .map((card, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-800 flex items-center justify-between transition-all group-hover:border-sky-500/30"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sm">
                            {card.icon}
                          </div>
                          <div className="text-left font-sans">
                            <div className="text-[11px] font-black text-white">
                              {card.title}
                            </div>
                            <div className="text-[9px] font-medium text-slate-400 normal-case">
                              {card.subtitle}
                            </div>
                          </div>
                        </div>
                        <span
                          className={`text-[8px] font-bold px-2 py-0.5 rounded-full border ${card.badgeColor}`}
                        >
                          {card.badge}
                        </span>
                      </div>
                    ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
