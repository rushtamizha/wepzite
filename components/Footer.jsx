"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MessageCircle, MapPin, Globe } from "lucide-react";
import { company } from "@/utils/data";
import { BUSINESS_EMAIL, BUSINESS_WHATSAPP, openWhatsApp } from "@/utils/site";

export default function Footer() {
  const companyLogo =
    typeof company === "object" && !Array.isArray(company)
      ? company.logo
      : company?.[1]?.logo || company?.[0]?.logo || "/logo.png";
  const companyName =
    typeof company === "object" && !Array.isArray(company)
      ? company.name
      : company?.[0]?.name || "Wepzite";

  const columns = [
    {
      heading: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Our work", href: "/portfolio" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Web development", href: "/services/web-development" },
        { label: "App development", href: "/services/app-development" },
        { label: "E-commerce", href: "/services/ecommerce" },
        { label: "SEO optimization", href: "/services/seo-optimization" },
        { label: "WhatsApp automation", href: "/services/whatsapp-automation" },
        { label: "AI branding", href: "/services/ai-branding" },
      ],
    },
    {
      // These four used to point at /seo-company-in-theni and friends, which
      // were never built — so every page on the site carried four 404s in its
      // footer. They now point into the Tamil Nadu location tree, which is
      // also how crawlers reach the district and town pages from anywhere on
      // the site rather than only through the sitemap.
      heading: "Areas we serve",
      links: [
        { label: "All Tamil Nadu districts", href: "/tamilnadu" },
        { label: "Website development in Theni", href: "/website-development-company-in-theni" },
        { label: "Web design in Chennai", href: "/tamilnadu/chennai" },
        { label: "Web design in Coimbatore", href: "/tamilnadu/coimbatore" },
        { label: "Web design in Madurai", href: "/tamilnadu/madurai" },
      ],
    },
  ];

  const legalLinks = [
    { label: "Terms & conditions", href: "/terms" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Payment & refund policy", href: "/payment-and-refund-policy" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-slate-950 px-4 pb-8 pt-20 text-left">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* BRAND + CONTACT */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3">
              <motion.span
                whileHover={{ scale: 1.05, rotate: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={companyLogo}
                  alt={`${companyName} logo`}
                  className="h-full w-full rounded-full object-cover"
                />
              </motion.span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-black uppercase text-white">
                  {companyName}
                  <span className="text-brand-500">.</span>
                </span>
                <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-500">
                  Premium Websites
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-[13px] font-medium leading-relaxed text-slate-400">
              We design and build fast, search-friendly websites for businesses
              across Tamil Nadu — and stay around after launch to keep them
              working.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="group flex items-center gap-3 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-500">
                  <Mail size={14} />
                </span>
                {BUSINESS_EMAIL}
              </a>

              <button
                type="button"
                onClick={() =>
                  openWhatsApp("Hi Wepzite! I'd like to know more about your services.")
                }
                className="group flex items-center gap-3 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-400">
                  <MessageCircle size={14} />
                </span>
                +{BUSINESS_WHATSAPP.replace(/^(\d{2})(\d{5})(\d{5})$/, "$1 $2 $3")}
              </button>

              <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-500">
                  <MapPin size={14} />
                </span>
                Theni, Tamil Nadu
              </div>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="mb-4 border-b border-white/10 pb-2 text-[10px] font-black uppercase tracking-wide text-slate-500">
                  {col.heading}
                </h2>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block py-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-brand-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="order-2 text-center text-[11px] font-semibold text-slate-500 sm:order-1 sm:text-left">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>

          <ul className="order-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:order-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-1.5 text-[11px] font-semibold text-slate-500 transition-colors hover:text-slate-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={handleScrollToTop}
                aria-label="Back to top"
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <ArrowUp size={12} />
                Top
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
