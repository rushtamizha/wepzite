"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Compass, 
  TrendingUp, 
  CheckCircle2,
  Terminal
} from "lucide-react";

export default function WhyUsAndTech() {
  
  // The Pillars of Why Clients Choose Your Agency
  const whyUsPillars = [
    {
      icon: <TrendingUp className="w-5 h-5 text-sky-600" />,
      title: "Viewers-to-Clients Transformation",
      desc: "We don't build digital paperweights. Every layout, button position, and micro-interaction is psychological armor engineered to turn traffic into active revenue."
    },
    {
      icon: <Zap className="w-5 h-5 text-sky-600" />,
      title: "Enterprise Performance Standards",
      desc: "Old, slow websites destroy your sales funnel. We optimize our products to hit immaculate 99+ Core Web Vitals on Google, maximizing immediate user retention."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
      title: "Pristine Custom Logic",
      desc: "No bloated, generic pre-made drag-and-drop templates. We build modern modular structures built precisely around your specific business logic and scaling plans."
    }
  ];

  // Moving Technology Ribbon List Dataset (Duplicates for seamless loop)
  const techStack = [
    "Next.js", "React.js", "Tailwind CSS", "Framer Motion", "HTML5 Core", 
    "JavaScript ES6+", "On-Page SEO Markups", "WhatsApp Business APIs", "Vercel Cloud",
    "Next.js", "React.js", "Tailwind CSS", "Framer Motion", "HTML5 Core", 
    "JavaScript ES6+", "On-Page SEO Markups", "WhatsApp Business APIs", "Vercel Cloud"
  ];

  return (
    <section id="why-us" className="relative w-full bg-white py-10 px-4 overflow-hidden">
      {/* Structural ambient light flare */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* CORE GRID: TEXT LAYOUT vs FEATURES INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
          
          {/* LEFT SIDE BLOCK: THE CORE VALUE STATEMENT */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
              <Sparkles size={12} className="text-sky-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">The Agency Standard</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold text-slate-900 uppercase ">
              Why <br className="hidden lg:block"/> Website With <span className="text-sky-600">Wepzite</span>
            </h2>
            
            <p className="mt-2 text-slate-500 font-medium text-xs sm:text-sm normal-case leading-relaxed">
              We dissolve technical anxiety. By unifying elite visual identity creative suites with production-grade engineering, we output assets that build instant brand authority.
            </p>

            {/* Quick trust checklist indicator badges */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              {["100% Custom Logic", "Premium Global UI/UX", "Zero Bloat Code"].map((text, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full  border border-slate-200/80 text-[10px] font-medium bg-blue-50/50  text-slate-600 normal-case">
                  <CheckCircle2 size={11} className="text-emerald-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE BLOCK: DYNAMIC STACKED CAPABILITY CARDS */}
          <div className="lg:col-span-7 space-y-4">
            {whyUsPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01, borderLeftColor: "#0ea5e9" }}
                className="bg-slate-50/50 backdrop-blur-md border-l-4 border-l-slate-200 border-y border-r border-slate-100 rounded-r-2xl p-5 flex flex-col sm:flex-row items-start gap-4 transition-all duration-300"
              >
                <div className="p-2.5 bg-white border border-slate-100 rounded-xl shadow-xs flex-shrink-0">
                  {pillar.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-slate-400 text-[11px] font-medium normal-case leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ==================== BOTTOM MARQUEE: TECH STACK MATRIX ENGINE ==================== */}
        <div className=" border border-sky-500/10 bg-slate-950 rounded-2xl p-4 md:p-6 shadow-xs relative overflow-hidden">
          
          {/* Top Panel Code Chrome */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 font-mono text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-800 block" />
              <span className="w-2 h-2 rounded-full bg-slate-800 block" />
              <span className="w-2 h-2 rounded-full bg-slate-800 block" />
            </div>
            <div className="text-slate-500 uppercase tracking-widest flex items-center gap-1">
              <Terminal size={10} className="text-sky-500" />
              framework-dependency-tree.json
            </div>
          </div>

          {/* INFINITE RUNNING HORIZONTAL TRANSITION TICKER */}
          <div className="w-full relative flex items-center overflow-hidden py-2 mask-gradient-horizontal">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity
              }}
              className="flex space-x-6 whitespace-nowrap"
            >
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm font-mono text-xs font-bold text-slate-300 transition-colors hover:border-sky-500/30 hover:text-white"
                >
                  <span className="w-1 h-1 bg-sky-400 rounded-full animate-pulse" />
                  <span>{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}