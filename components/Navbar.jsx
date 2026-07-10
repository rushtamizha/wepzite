"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { company, navData } from "@/utils/data";

export default function Navbar() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSection = (sectionName) => {
    setActiveMobileSection(activeMobileSection === sectionName ? null : sectionName);
  };

  // Safe accessor to handle both direct strings/objects or array-formatted configurations gracefully
  const companyLogo = typeof company === 'object' && !Array.isArray(company) ? company.logo : (company?.[1]?.logo || company?.[0]?.logo || "/logo.webp");
  const companyName = typeof company === 'object' && !Array.isArray(company) ? company.name : (company?.[0]?.name || "Wepzite");

  return (
    <nav className="fixed top-5 capitalize w-full flex flex-col items-center px-4 z-[999]">
      {/* HEADER BAR */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-7xl rounded-full p-2.5 flex items-center justify-between transition-all duration-500   bg-white border border-sky-200 shadow-xs ${
          scrolled ? "shadow-sm border-sky-400 border backdrop-blur-md" : ""
        }`}
      >
        {/* LOGO SECTION */}
        <Link
          href="/"
          className="flex items-center gap-3 pr-4 cursor-pointer group"
        >
          <motion.div 
            whileHover={{ scale: 1.06, rotate: 8 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center border-sky-500 group-active:ring-2 group-active:ring-sky-500 shadow-xs "
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={companyLogo} 
              alt={`${companyName} Logo`} 
              className="rounded-full object-cover w-full h-full border border-white "  
            />
          </motion.div>
          <div className="flex flex-col justify-center leading-tight">
            <motion.p 
              className={`text-sm font-bold ${scrolled ?" text-slate-800":"text-sky-600"}  transition-colors group-hover:text-sky-600 flex items-center uppercase`}
            >
              <span>{companyName}</span>
              <span className={`text-sky-600 hover:text-sky-600 font ${scrolled ?"  text-sky-600":"text-slate-800"}`}>.</span>
            </motion.p>
            <p className={`text-[10px] font-medium uppercase group-hover:text-gray-800  ${scrolled ? "text-sky-600":"text-gray-800"} `}>
              Premium Websites
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV (GitHub-Style Dropdown Anchors) */}
        <div className="items-center hidden px-4 space-x-1 lg:flex" onMouseLeave={() => setActiveMenu(null)}>
          {navData.map((menu) => (
            <div
              key={menu.name}
              className="relative px-3 py-1.5 transition-all rounded-full cursor-pointer group"
              onMouseEnter={() => {
                if (menu.dropdown) setActiveMenu(menu.name);
              }}
            >
              <Link href={menu.link || "#"}>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 group-hover:text-sky-600 transition-colors">
                  <span>{menu.name}</span>
                  {menu.dropdown && (
                    activeMenu === menu.name ? (
                      <ChevronUp size={14} className="text-sky-600" />
                    ) : (
                      <ChevronDown size={14} className="text-slate-400 group-hover:text-sky-500/80" />
                    )
                  )}
                </span>
              </Link>

              {/* GitHub-Style Mega Dropdown Sub-Menu */}
              <AnimatePresence>
                {menu.dropdown && activeMenu === menu.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[65vw] max-w-2xl bg-white rounded-2xl shadow-sm p-6 z-50 grid grid-cols-2 gap-6 cursor-default"
                  >
                    {Object.entries(menu.dropdown).map(([categoryName, subItems]) => (
                      <div key={categoryName}>
                        <h4 className="text-sky-600 font-bold text-[10px] uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">
                          {categoryName}
                        </h4>
                        <div className="space-y-1">
                          {subItems.map((item) => {
                            const SubIcon = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href || "#"}
                                className="group/item flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 border border-transparent transition-all duration-200"
                              >
                                {SubIcon && (
                                  <div className="p-1.5 bg-sky-50 text-sky-600 rounded-lg group-hover/item:bg-sky-600 group-hover/item:text-white transition-colors mt-0.5">
                                    <SubIcon size={14} />
                                  </div>
                                )}
                                <div>
                                  <div className="font-semibold text-slate-800 text-xs group-hover/item:text-sky-600 transition-colors">
                                    {item.title}
                                  </div>
                                  {item.description && (
                                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal font-normal normal-case">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT CTA */}
        <div className="items-center hidden gap-3 rounded-full lg:flex">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/contact")}
            className="py-2 px-4 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-500 hover:to-sky-600  text-white rounded-full text-xs font-bold uppercase  text-center tracking-wider flex items-center justify-center gap-2 shadow-md shadow-sky-500/10 active:ring-2 active:ring-sky-400/40 transition-all duration-300 cursor-pointer"
          >
            <MessageCircle size={14} /> Book Now
          </motion.button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center justify-center w-9 h-9 transition-all rounded-full lg:hidden  text-slate-700 border border-slate-200/60 active:ring-1 active:ring-sky-600"
        >
          {isMobileOpen ? <X size={18} className="text-sky-600" /> : <Menu size={18} />}
        </motion.button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden absolute top-[72px] left-4 right-4 max-w-7xl bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-50 origin-top no-scrollbar max-h-[75vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navData.map((menu, idx) => (
                <div key={idx} className="border-b border-slate-50 pb-1 last:border-b-0 last:pb-0">
                  {menu.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSection(menu.name)}
                        className="flex items-center justify-between w-full text-slate-700 font-semibold py-2 text-sm hover:text-sky-600 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sky-500">{menu.icon}</span>
                          <span>{menu.name}</span>
                        </div>
                        {activeMobileSection === menu.name ? (
                          <ChevronUp size={16} className="text-sky-600" />
                        ) : (
                          <ChevronDown size={16} className="text-slate-400" />
                        )}
                      </button>

                      {/* Expandable Accordion */}
                      <AnimatePresence initial={false}>
                        {activeMobileSection === menu.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18 }}
                            className="pl-4 space-y-4 overflow-hidden border-l border-slate-100 mt-1 pb-2"
                          >
                            {Object.entries(menu.dropdown).map(([categoryName, subItems]) => (
                              <div key={categoryName}>
                                <div className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-1.5">
                                  {categoryName}
                                </div>
                                <div className="space-y-1">
                                  {subItems.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href || "#"}
                                      onClick={() => setIsMobileOpen(false)}
                                      className="block p-2 rounded-xl hover:bg-slate-50 transition-colors"
                                    >
                                      <div className="font-semibold text-slate-800 text-xs">
                                        {item.title}
                                      </div>
                                      {item.description && (
                                        <p className="text-[11px] text-slate-400 mt-0.5 font-normal normal-case">
                                          {item.description}
                                        </p>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={menu.link || "#"}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                    >
                      <span className="text-sky-500">{menu.icon}</span>
                      <span>{menu.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    router.push("/contact");
                    setIsMobileOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-sky-600 to-sky-600 text-white py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle size={14} /> BOOK NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}