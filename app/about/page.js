"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Terminal, Cpu, ShieldCheck, CheckCircle2, Globe, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  // Core Corporate Values Matrix
  const agencyValues = [
    {
      icon: <Cpu className="w-5 h-5 text-sky-600" />,
      title: "Clean Framework Logic",
      desc: "We completely reject slow, bloated legacy website templates. Every single asset we ship is compiled with raw, responsive, semantic component arrays to target zero technological friction."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
      title: "Bulletproof Security Defaults",
      desc: "Enterprise operations demand secure data management. All digital platforms deployed by our group bundle automated SSL encryption pipelines and strict non-disclosure protocol bounds."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-sky-600" />,
      title: "Conversion-Focused Retainers",
      desc: "We don't build digital paperweights. Every layout grid, button positioning, and micro-interaction is psychological armor engineered to turn your traffic into active revenue nodes."
    }
  ];

  // Timeline Matrix Milestones
  const milestones = [
    { year: "2024", title: "Foundation Layer Synced", desc: "Launched core web configuration services focusing on hyper-fast frontend engineering frameworks in regional sectors." },
    { year: "2025", title: "Automation Engine Scaling", desc: "Integrated advanced backend cloud hooks and automated WhatsApp Business categorization routing directly into active lead funnels." },
    { year: "2026", title: "wepzite Tech Rebrand", desc: "Expanded operations into comprehensive global corporate structures, serving enterprise entities across North America, Europe, UAE, and India." }
  ];

  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white pt-28 pb-20 px-4 relative overflow-hidden text-left font-sans">
      
      {/* Immersive Structural Background Accent Blurs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* ==================== BREADCRUMB ROUTING ROW ==================== */}
        <div className="mb-8">
          <button 
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-sky-600 transition-colors uppercase tracking-widest group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to Core Hub</span>
          </button>
        </div>

        {/* ==================== SECTION HEADER ==================== */}
        <div className="max-w-3xl border-b border-slate-200/60 pb-10 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
            <Sparkles size={12} className="text-sky-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Corporate Monograph</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Architecting Next-Gen <br /><span className="text-sky-600">Digital Infrastructure</span>
          </h1>
          <p className="mt-4 text-slate-500 font-medium text-xs sm:text-sm normal-case leading-relaxed">
            wepzite Technologies is a specialized software engineering collective. We dismantle traditional web design blockades to formulate performant Next.js, React Native, and automated customer retention funnels for fast-scaling enterprises worldwide.
          </p>
        </div>

        {/* ==================== DYNAMIC CONTENT GRID: VISION vs TIMELINE ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Block: The Execution Framework Statement (5 Columns) */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 block border-b border-slate-200/60 pb-2">
              operational_philosophy
            </span>
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">
              We replace technical guesswork with pure measurable performance.
            </h3>
            <p className="text-xs text-slate-500 font-medium normal-case leading-relaxed">
              Every system built by our labs is custom-rigged to satisfy Google's strict Core Web Vitals criteria and security guidelines. We prioritize clean semantic layout syntax, lightning-fast rendering metrics, and clear call-to-action flow mappings.
            </p>

            {/* Quick telemetry indicators */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-3xs flex items-center gap-2.5">
                <Terminal size={14} className="text-sky-500 flex-shrink-0" />
                <span className="text-[10px] font-mono font-bold text-slate-600">Zero Bloat Code</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-3xs flex items-center gap-2.5">
                <Globe size={14} className="text-emerald-500 flex-shrink-0" />
                <span className="text-[10px] font-mono font-bold text-slate-600">Global SLA Ready</span>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Milestones Matrix (7 Columns) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 block border-b border-slate-200/60 pb-2">
              evolutionary_milestones
            </span>
            
            <div className="space-y-4 relative before:absolute before:inset-y-2 before:left-4 before:w-[1px] before:bg-slate-200">
              {milestones.map((ms, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200/60 p-5 flex gap-4 items-start relative hover:border-sky-300 transition-colors duration-300 shadow-3xs pl-8 sm:pl-6"
                >
                  {/* Timeline bullet dot marker */}
                  <div className="absolute left-[13px] top-[26px] w-2 h-2 rounded-full bg-sky-500 ring-4 ring-sky-50 flex-shrink-0 z-10" />
                  
                  <div className="text-left">
                    <span className="text-xs font-mono font-black text-sky-600 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-md">
                      {ms.year}
                    </span>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight mt-2.5">
                      {ms.title}
                    </h4>
                    <p className="mt-1 text-slate-400 text-[11px] font-medium normal-case leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* ==================== LOWER BLOCK: CORE VALUES BENCHMARK ==================== */}
        <div className="pt-12 border-t border-slate-200/80">
          <div className="text-center sm:text-left mb-10">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">
              operational_foundations
            </span>
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">
              Our Non-Negotiable Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {agencyValues.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-sky-100 p-5 flex flex-col justify-between items-start shadow-3xs hover:shadow-2xs transition-shadow duration-300"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-3xs">
                    {val.icon}
                  </div>
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">
                    {val.title}
                  </h4>
                  <p className="text-slate-400 text-[11px] font-medium leading-relaxed normal-case">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}