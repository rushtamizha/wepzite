"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Clock, ShieldCheck } from "lucide-react";

export default function Faq() {
  const [openFaqIdx, setOpenFaqIdx] = useState(0); // Default open the first one for premium interactive layout

  const faqItems = [
    {
      q: "What is your typical development timeline for a project?",
      a: "Our core structural Next.js platforms are engineered and deployed within 7 to 14 business days. For massive enterprise-grade platforms or unlimited product E-Commerce systems with complex custom dashboards, timelines scale to 21-45 days depending on exact operational logic."
    },
    {
      q: "Will my website be optimized for Google Search out of the box?",
      a: "Absolutely. We do not do basic metadata entry. We build high-level on-page SEO frameworks including automated XML sitemaps, robots.txt management, semantic HTML5 tags, and correct JSON-LD Schema markup so Google indexes your architecture perfectly from day one."
    },
    {
      q: "How does the WhatsApp automation integration help my business?",
      a: "Instead of letting incoming traffic get lost in an email inbox, we build direct WhatsApp routing triggers. This instantly moves your high-intent viewers directly into personal chat feeds where you can set up smart labels to categorize hot leads versus routine support traffic instantly."
    },
    {
      q: "What happens after the dedicated support period ends?",
      a: "Every package comes with 7 to 45 days of priority monitoring. After that, your site runs completely maintenance-free due to our serverless Next.js architecture. If you need ongoing feature expansions or layout additions, we offer flexible monthly maintenance retainer tiers."
    },
    {
      q: "Can I migrate my existing traditional website over to Next.js?",
      a: "Yes. We specialize in dismantling slow, legacy platforms (like WordPress or basic builders) and re-engineering their entire layout, content, and link architecture into blazing-fast Next.js apps without losing your established Google keyword rankings."
    }
  ];

  const handleSupportRedirect = () => {
    const message = encodeURIComponent("Hi! I am looking over your FAQ panel and want to discuss a custom web project layout configuration.");
    window.open(`https://wa.me/YOUR_NUMBER_HERE?text=${message}`, "_blank");
  };

  return (
    <section id="faq" className="relative w-full bg-white py-10 px-4 overflow-hidden">
      {/* Background visual depth element */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* ==================== TWO-COLUMN DASHBOARD CANVAS ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: STICKY METRIC BLOCK (The Authority Anchor) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
              <Sparkles size={12} className="text-sky-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Intellectual Clarity</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold text-slate-900 uppercase ">
              Frequently Asked <br className="hidden lg:block"/> <span className="text-sky-600">Questions</span>
            </h2>
            
            <p className="mt-2 text-slate-500 font-medium text-xs sm:text-sm normal-case leading-relaxed">
              Clear, transparent answers regarding our premium architecture, optimization engines, and development workflows.
            </p>

            {/* Premium Trust Cards Stack */}
            <div className="mt-4 space-y-3 hidden sm:block">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600">
                  <Clock size={14} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Response Speed</div>
                  <div className="text-xs font-bold text-slate-700 normal-case">Under 15 minutes via WhatsApp</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={14} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Contract Guarantee</div>
                  <div className="text-xs font-bold text-slate-700 normal-case">100% Risk-Free Refund Policy</div>
                </div>
              </div>
            </div>

            {/* Direct Instant Action Call */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSupportRedirect}
              className="mt-4 w-full lg:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-slate-950 hover:bg-sky-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-sm transition-colors duration-300"
            >
              <MessageCircle size={14} />
              <span>Ask a Custom Question</span>
            </motion.button>
          </div>

          {/* RIGHT COLUMN: ACCORDION MATRIX PLATFORM */}
          <div className="lg:col-span-8 space-y-3 w-full">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-sky-400 shadow-[0_10px_25px_rgba(14,165,233,0.03)]" 
                      : "border-slate-200/70 shadow-2xs hover:border-slate-300"
                  }`}
                >
                  {/* Accordion Trigger Node */}
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-800 text-sm transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors flex-shrink-0 ${
                        isOpen ? "bg-sky-50 text-sky-600 border-sky-200" : "bg-slate-50 text-slate-400 border-slate-100"
                      }`}>
                        <HelpCircle size={14} />
                      </div>
                      <span className={`normal-case tracking-tight transition-colors ${isOpen ? "text-sky-600" : "text-slate-800"}`}>
                        {item.q}
                      </span>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`flex-shrink-0 ${isOpen ? "text-sky-600" : "text-slate-400"}`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Accordion Smooth Height Expanding Container */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-50 text-xs text-slate-500 font-medium leading-relaxed normal-case pl-[52px]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}