"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { company, navData } from "@/utils/data";
import { lockSmoothScroll } from "@/utils/lenis";

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile sheet whenever the route changes
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMobileSection(null);
  }, [pathname]);

  // Don't let the page scroll behind an open mobile sheet. Smooth scrolling
  // drives the window directly, so the overflow lock alone doesn't hold it —
  // Lenis has to be paused too.
  useEffect(() => {
    if (!isMobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const releaseSmoothScroll = lockSmoothScroll();
    return () => {
      document.body.style.overflow = previous;
      releaseSmoothScroll();
    };
  }, [isMobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileOpen]);

  const toggleMobileSection = (sectionName) =>
    setActiveMobileSection(activeMobileSection === sectionName ? null : sectionName);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const companyLogo =
    typeof company === "object" && !Array.isArray(company)
      ? company.logo
      : company?.[1]?.logo || company?.[0]?.logo || "/logo.png";
  const companyName =
    typeof company === "object" && !Array.isArray(company)
      ? company.name
      : company?.[0]?.name || "Wepzite";

  return (
    <nav className="fixed top-4 z-[999] flex w-full flex-col items-center px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/90 p-2.5 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-slate-900/5" : "shadow-sm"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3 pr-4">
          <motion.span
            whileHover={{ scale: 1.06, rotate: 8 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className="h-full w-full rounded-full border border-white object-cover"
            />
          </motion.span>
          <span className="flex flex-col justify-center leading-tight">
            <span className="flex items-center font-bold uppercase text-slate-800 transition-colors group-hover:text-brand-600">
              {companyName}
              <span className="text-slate-800">.</span>
            </span>
            <span className="text-[10px] font-semibold uppercase text-slate-500">
              Premium Websites
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div
          className="hidden items-center gap-1 px-4 lg:flex"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {navData.map((menu) => {
            const active = isActive(menu.link || "#");
            return (
              <div
                key={menu.name}
                className="group relative"
                onMouseEnter={() => menu.dropdown && setActiveMenu(menu.name)}
              >
                <Link
                  href={menu.link || "#"}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{menu.name}</span>
                  {menu.dropdown &&
                    (activeMenu === menu.name ? (
                      <ChevronUp size={14} className="text-brand-600" />
                    ) : (
                      <ChevronDown size={14} className="text-slate-400" />
                    ))}
                </Link>

                <AnimatePresence>
                  {menu.dropdown && activeMenu === menu.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-1/2 top-full z-50 mt-4 grid w-[65vw] max-w-2xl -translate-x-1/2 cursor-default grid-cols-2 gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/10"
                    >
                      {Object.entries(menu.dropdown).map(([categoryName, subItems]) => (
                        <div key={categoryName}>
                          <h3 className="mb-3 border-b border-slate-100 pb-2 text-[10px] font-black uppercase tracking-wide text-brand-700">
                            {categoryName}
                          </h3>
                          <div className="space-y-1">
                            {subItems.map((item) => {
                              const SubIcon = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href || "#"}
                                  className="group/item flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50"
                                >
                                  {SubIcon && (
                                    <span className="mt-0.5 rounded-lg bg-brand-50 p-1.5 text-brand-600 transition-colors group-hover/item:bg-brand-600 group-hover/item:text-white">
                                      <SubIcon size={14} />
                                    </span>
                                  )}
                                  <span>
                                    <span className="block text-xs font-semibold text-slate-800 transition-colors group-hover/item:text-brand-600">
                                      {item.title}
                                    </span>
                                    {item.description && (
                                      <span className="mt-0.5 block text-[11px] font-normal leading-normal text-slate-400">
                                        {item.description}
                                      </span>
                                    )}
                                  </span>
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
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl active:translate-y-0"
          >
            <MessageCircle size={15} />
            Get a quote
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* MOBILE SHEET */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="no-scrollbar absolute left-4 right-4 top-[76px] z-50 max-h-[75vh] origin-top overflow-y-auto rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/10 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navData.map((menu, idx) => (
                <div
                  key={idx}
                  className="border-b border-slate-100 pb-1 last:border-b-0 last:pb-0"
                >
                  {menu.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMobileSection(menu.name)}
                        aria-expanded={activeMobileSection === menu.name}
                        className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-slate-700"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-brand-500">{menu.icon}</span>
                          {menu.name}
                        </span>
                        {activeMobileSection === menu.name ? (
                          <ChevronUp size={16} className="text-brand-600" />
                        ) : (
                          <ChevronDown size={16} className="text-slate-400" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {activeMobileSection === menu.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 space-y-4 overflow-hidden border-l border-slate-100 pb-2 pl-4"
                          >
                            {Object.entries(menu.dropdown).map(
                              ([categoryName, subItems]) => (
                                <div key={categoryName}>
                                  <div className="mb-1.5 text-[10px] font-black uppercase tracking-wide text-brand-600">
                                    {categoryName}
                                  </div>
                                  <div className="space-y-1">
                                    {subItems.map((item) => (
                                      <Link
                                        key={item.title}
                                        href={item.href || "#"}
                                        className="block rounded-xl p-2 transition-colors hover:bg-slate-50"
                                      >
                                        <span className="block text-xs font-semibold text-slate-800">
                                          {item.title}
                                        </span>
                                        {item.description && (
                                          <span className="mt-0.5 block text-[11px] font-normal text-slate-400">
                                            {item.description}
                                          </span>
                                        )}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ),
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={menu.link || "#"}
                      aria-current={isActive(menu.link || "#") ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-semibold transition-colors ${
                        isActive(menu.link || "#")
                          ? "bg-brand-50 text-brand-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-brand-500">{menu.icon}</span>
                      {menu.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="border-t border-slate-100 pt-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700"
                >
                  <MessageCircle size={15} />
                  Get a quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
