"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Smartphone, 
  ShoppingBag, 
  MessageSquareCode, 
  SearchCode, 
  Palette,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function Services() {
  const serviceItems = [
    {
      icon: <Laptop className="w-4 h-4 text-sky-500 group-hover:text-white" />,
      title: "Custom Web Development",
      badge: "Framework Elite",
      description: "From lightweight, semantic semantic structures to enterprise-grade Next.js architectures. We engineer lighting-fast, highly responsive web systems tailored strictly to your operational goals.",
      tech: ["Next.js", "React", "Tailwind CSS", "HTML5/CSS3 Core"]
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-600 group-hover:text-white" />,
      title: "Native App Development",
      badge: "Multi-Platform",
      description: "Fluid, high-performance mobile applications engineered with pristine state management. Expand your brand footprint natively onto your clients' personal screens.",
      tech: ["React Native", "Cross-Platform", "App Store Optimization"]
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-sky-600 group-hover:text-white" />,
      title: "High-Converting E-Commerce",
      badge: "Revenue Engine",
      description: "Frictionless checkout paths, highly reliable modern cart logic, and robust global payment gateway system integrations. Built to handle heavy user traffic without breaking a sweat.",
      tech: ["Secure Cart Logic", "Custom CMS", "Payment APIs", "Analytics"]
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-sky-600 group-hover:text-white" />,
      title: "Smart WhatsApp Automation",
      badge: "Instant Connect",
      description: "Bridge the gap between your platforms and customer retention. We build intelligent WhatsApp Business automation funnels to categorize leads and handle instant booking routes.",
      tech: ["Lead Categorization", "Frictionless Booking", "API Routing"]
    },
    {
      icon: <SearchCode className="w-6 h-6 text-sky-600 group-hover:text-white" />,
      title: "High-Level SEO Optimization",
      badge: "Rank Max",
      description: "Advanced data structuring, complete meta-tag configurations, and automated Google Search Console index maps. On-page SEO strategies that get your business discovered organically.",
      tech: ["Schema Markup", "Search Console Mapping", "Core Web Vitals"]
    },
    {
      icon: <Palette className="w-6 h-6 text-sky-600 group-hover:text-white" />,
      title: "AI Branding & Digital Assets",
      badge: "Premium Design",
      description: "Establishing your pristine visual identity. Utilizing specialized design tools to render high-clarity premium logos, marketing banners, and social assets that instantly command authority.",
      tech: ["AI-Assisted Identity", "Vector Logos", "Marketing Graphics"]
    }
  ];

  return (
    <section id="services" className="relative w-full bg-white py-10 px-4 overflow-hidden">
      {/* Decorative subtle gradient background blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
            <Sparkles size={12} className="text-sky-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Capabilities Matrix</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold text-slate-900 uppercase">
            Our Enterprise <span className="text-sky-600">Service</span>
          </h2>
          <p className="mt-2 text-slate-500 font-medium text-xs sm:text-sm normal-case leading-relaxed  max-w-xl mx-auto  ">
            We eliminate technical overhead by consolidating your entire branding, engineering, and growth funnel into one world-class workflow.
          </p>
        </div>

        {/* HIGH-LEVEL SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-sky-100 rounded-3xl p-6 shadow-xs hover:shadow-sm hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header Content */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center transition-colors bg-gradient-to-r group-hover:from-sky-500 group-hover:to-sky-700 ">
                    <div className="transition-colors group-hover:text-white">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 group-hover:border-sky-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
                
                <p className="mt-1.5 text-slate-500 text-xs leading-relaxed font-normal ">
                  {service.description}
                </p>
              </div>

              {/* Bottom Tech Pills Stack */}
              <div className="mt-1 pt-2 border-t border-slate-50">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tech.map((techName, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100/90"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
                
                {/* Micro CTA Link */}
                <div className="flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:gap-2 transition-all cursor-pointer">
                  <span>Inquire Strategy</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}