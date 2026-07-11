
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, ArrowUpRight, FolderGit2, Compass, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { company, navData } from "@/utils/data";

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const companyLogo = typeof company === 'object' && !Array.isArray(company) ? company.logo : (company?.[1]?.logo || company?.[0]?.logo || "/logo.png");
  const companyName = typeof company === 'object' && !Array.isArray(company) ? company.name : (company?.[0]?.name || "Wepzite");

  const systemEndPoints = [
    { name: "terms-conditions", path: "/terms" },
    { name: "payment-refund-policy", path: "/payment-and-refund-policy" },
    { name: "privacy-policy", path: "/privacy-policy" }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 px-6 pt-20 pb-8 border-t border-slate-900 relative overflow-hidden text-left font-mono">
      
      {/* Dynamic Cyber Glare Tracking Element */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-sky-500/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-0 left-10 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-2xl opacity-30" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* ==================== UPPER BLOCK: DEVS DASHBOARD PANELS ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* TECHNICAL BRAND PROFILE BLOCK (Spans 5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 p-1 flex items-center justify-center flex-shrink-0 shadow-xs"
              >
                <img src={companyLogo} alt={`${companyName} Core`} className="w-full h-full object-cover rounded-full" />
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black tracking-widest text-white uppercase font-sans">
                  {companyName}<span className="text-sky-500">.</span>
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-500 tracking-widest uppercase mt-0.5">
                  root_system_architecture
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-sans font-medium normal-case">
              Engineering ultra-fast, high-converting React applications. We convert source directories into optimized production bundles that safely scale your business traffic pipelines.
            </p>

            {/* Live Environment Variable Telemetry */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[10px] text-slate-400 font-bold tracking-tight">
                <Cpu size={12} className="text-sky-400 animate-pulse" />
                <span>NEXT_PUBLIC_NODE_ENV="production"</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[10px] text-slate-400 font-bold tracking-tight">
                <Terminal size={12} className="text-emerald-400" />
                <span>BUILD="SUCCESS"</span>
              </div>
            </div>
          </div>

          {/* DYNAMIC DEVELOPMENT ARRAYS & MAPS EMBED (Spans 7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
            
            {/* Left Subsection: Core Routing Matrix Trees (Spans 5 Columns) */}
            <div className="md:col-span-5 space-y-6">
              
              {/* System Navigation Indices */}
              <div className="space-y-3">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-2 mb-2 flex items-center gap-1.5">
                  <Compass size={12} className="text-sky-500" />
                  <span>app-router-tree</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {navData.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.link || "#"} 
                      className="text-xs font-bold text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1.5 w-fit group"
                    >
                      <span className="text-slate-600 font-normal">/</span>
                      <span>{link.name.toLowerCase().replace(/ /g, "-")}</span>
                      <ArrowUpRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400/80" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Dynamic API Route Endpoints */}
              <div className="space-y-3">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-2 mb-2 flex items-center gap-1.5">
                  <FolderGit2 size={12} className="text-slate-500" />
                  <span>api-endpoints.json</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs font-bold text-slate-500">
                  {systemEndPoints.map((endpoint, i) => (
                    <Link href={endpoint.path} 
                      key={i}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="flex items-center justify-between cursor-pointer transition-colors hover:text-slate-300 group"
                    > <span className="text-slate-400">GET // {endpoint.name}</span>
                      <span className="text-[9px] text-slate-600 font-normal group-hover:text-emerald-400 transition-colors">
                        {hoveredIndex === i ? "200_OK" : "FETCH"}
                      </span>
                    </Link>
                  ))} 
                </div>
              </div>
              </div>


            {/* Right Subsection: Interactive Matrix Map HUD (Spans 7 Columns) */}
            <div className="md:col-span-7 space-y-3 hidden">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-2 mb-2 flex items-center gap-1.5">
                <MapPin size={12} className="text-sky-500" />
                <span>geolocational-coordinates</span>
              </div>
              
              {/* Premium Grayscale Canvas Map with Custom Glow Borders */}
              <motion.div 
                whileHover={{ borderColor: "rgba(14, 165, 233, 0.25)" }}
                transition={{ duration: 0.3 }}
                className="w-full h-48 rounded-2xl overflow-hidden border border-slate-900 bg-slate-950 shadow-2xl relative     transition-all duration-500"
              >
                {/* Embedded digital map iframe node */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.2073503305105!2d77.41265590962611!3d9.83294513767731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b071b20a8131595%3A0x4e8b339ac3b1c419!2sWepzite!5e0!3m2!1sen!2sin!4v1783671310084!5m2!1sen!2sin" 
                  className="w-full h-full border-0 absolute inset-0  transition-all"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wepzite Base Terminal Location Coordinate Engine"
                />
              </motion.div>
            </div>

          </div>

        </div>

        {/* ==================== LOWER BLOCK: METRIC SPLIT FOOTNOTE ==================== */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-bold text-slate-500 tracking-wide uppercase">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
            <span>© {new Date().getFullYear()} {companyName}.in</span>
            <span className="text-slate-700 font-normal normal-case tracking-normal">All bundles compiled cleanly.</span>
          </div>

          {/* Quick Dynamic Kinematics Scroll Trigger Top Node */}
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-900/80 text-slate-400 hover:text-sky-400 border border-slate-900 transition-colors cursor-pointer"
          >
            <Globe size={11} className="text-sky-400 animate-pulse" />
            <span>return_to_top()</span>
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
