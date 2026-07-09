"use client";
import React from "react";
import { motion } from "framer-motion";
import { Laptop, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WebDevelopmentPage() {
  const techStack = ["Next.js", "React", "Tailwind CSS", "HTML5/CSS3 Core"];
  const bulletPoints = [
    "Serverless App Router Optimization",
    "Production-Grade Core Web Vitals (99+ Speed Scores)",
    "Clean Semantic Layout Structures for Organic Indexing",
    "Flawless Mobile-First Fluid Grid Responsiveness"
  ];

  const triggerWhatsApp = () => {
    const msg = encodeURIComponent("Hi Wepzite! I want to inquire about a strategy for custom Next.js web development.");
    window.open(`https://wa.me/YOUR_NUMBER_HERE?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20 px-4 relative overflow-hidden text-left">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-sky-600 transition-colors uppercase tracking-widest mb-10">
          <ArrowLeft size={14} /> <span>Back to Engine Dashboard</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-black tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase border border-sky-100">Framework Elite</span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">Custom Web Development</h1>
            <p className="text-slate-500 text-sm sm:text-base font-medium normal-case leading-relaxed">
              From lightweight, semantic structures to enterprise-grade Next.js architectures. We engineer lightning-fast, highly responsive web systems tailored strictly to your operational goals.
            </p>
            
            <div className="space-y-3 pt-4">
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 normal-case">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-6">
              {techStack.map((tech, i) => (
                <span key={i} className="text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-200/60 px-3 py-1 rounded-md">{tech}</span>
              ))}
            </div>

            <button onClick={triggerWhatsApp} className="mt-8 inline-flex items-center gap-2 py-3 px-6 bg-slate-950 hover:bg-sky-600 text-white rounded-full text-xs font-black uppercase tracking-widest transition-colors">
              <MessageSquare size={14} /> <span>Inquire Strategy</span>
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border border-sky-100 bg-slate-50 p-4 shadow-sm">
              <img src="image_agent_tag_17038675738162256718" alt="NextJS Web Development Interface" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}