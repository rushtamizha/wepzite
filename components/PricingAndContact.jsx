"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  MessageCircle,
  X,
  Sparkles,
  Plus,
  Calculator,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { agencyPackages } from "@/data/packages";
import { BUSINESS_WHATSAPP } from "@/utils/site";

export default function PricingAndCalculator({ tone = "tint" }) {
  const [activeModalPlan, setActiveModalPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Add-on registry — the one place an add-on's name and price are defined.
  // WHICH packages offer WHICH of these is declared in `addOnsByPackage`
  // below, so changing a price here never has to be repeated per package.
  const optionalAddOns = [
    {
      id: "gmb_maintenance",
      name: "GMB Weekly Posts + Review/SEO Replies — Monthly",
      cost: 1000,
    },
    {
      id: "google_ads_maintenance",
      name: "Google Ads Monitoring & Optimization — Monthly",
      cost: 1000,
    },
    { id: "logo_design", name: "Logo Design", cost: 1500 },
    { id: "content_writing", name: "Content Writing (per page)", cost: 500 },
    {
      id: "priority_speed",
      name: "Ultra-Performance CDN Optimization (100/100 Score)",
      cost: 2000,
    },
    {
      id: "premium_branding",
      name: "Premium Branding Kit (AI Logo + 3 Marketing Banners)",
      cost: 2500,
    },
    {
      id: "advanced_whatsapp",
      name: "Advanced WhatsApp Business Lead Categorization Automation",
      cost: 3000,
    },
  ];

  // Which add-ons each package offers, keyed by package id. Kept as one block
  // rather than a field on each package so the whole matrix is readable at a
  // glance — the packages genuinely differ, and that difference is the point.
  //
  // A package id missing from this map gets no add-ons, and the add-on section
  // is then hidden rather than rendered empty. If you add a package above,
  // add it here too or its calculator will show base price only.
  const addOnsByPackage = {
    // Service packages: only their own retainer, plus branding and lead routing.
    // No content writing or CDN work — there are no pages in scope to apply it to.
    gmb_setup: [
      "gmb_maintenance",
      "logo_design",
      "premium_branding",
      "advanced_whatsapp",
    ],
    google_ads_setup: [
      "google_ads_maintenance",
      "logo_design",
      "premium_branding",
      "advanced_whatsapp",
    ],

    // Website builds: everything except the monthly retainers.
    starter: [
      "logo_design",
      "premium_branding",
      "content_writing",
      "priority_speed",
      "advanced_whatsapp",
    ],
    growth: [
      "logo_design",
      "premium_branding",
      "content_writing",
      "priority_speed",
      "advanced_whatsapp",
    ],
    pro: [
      "logo_design",
      "premium_branding",
      "content_writing",
      "priority_speed",
      "advanced_whatsapp",
    ],

    // Product & e-commerce tiers offer no add-ons — their feature lists already
    // cover SEO, performance and WhatsApp ordering.
    Product: [],
    ecom_starter: [],
    ecom_pro: [],
  };

  // Add-ons offered by the package currently open in the calculator. Filtering
  // the registry (rather than mapping the id list) keeps add-on order identical
  // across every package, and silently drops an id with no registry entry.
  const activeAddOnIds = addOnsByPackage[activeModalPlan?.id] ?? [];
  const activeAddOns = optionalAddOns.filter((addon) =>
    activeAddOnIds.includes(addon.id),
  );

  const handleOpenCalculatorModal = (plan) => {
    setActiveModalPlan(plan);
    setSelectedAddOns([]); // Reset modifiers array on fresh selection
  };

  const handleToggleAddOn = (addonId) => {
    if (selectedAddOns.includes(addonId)) {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addonId));
    } else {
      setSelectedAddOns([...selectedAddOns, addonId]);
    }
  };

  const calculateTotalCost = () => {
    if (!activeModalPlan) return 0;
    const base = activeModalPlan.price;
    const addOnTotal = activeAddOns
      .filter((addon) => selectedAddOns.includes(addon.id))
      .reduce((sum, current) => sum + current.cost, 0);
    return base + addOnTotal;
  };

  const handleForwardToWhatsApp = () => {
    if (!activeModalPlan) return;

    const basePrice = activeModalPlan.price;
    const total = calculateTotalCost();
    const appliedAddOns = activeAddOns.filter((addon) =>
      selectedAddOns.includes(addon.id),
    );

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }

    // Generate an itemized, highly authoritative invoice summary string for your chat routing
    let invoiceMessage = `*NEW WEBSITE PROJECT CONFIGURATION - WEPZITE*\n`;
    invoiceMessage += `------------------------------------------\n`;
    invoiceMessage += `*Selected Package:* ${activeModalPlan.name}\n`;
    invoiceMessage += `*Base Investment:* ₹${basePrice.toLocaleString("en-IN")}\n\n`;

    if (appliedAddOns.length > 0) {
      invoiceMessage += `*Applied Add-Ons Customizations:*\n`;
      appliedAddOns.forEach((addon) => {
        invoiceMessage += `• ${addon.name} (+₹${addon.cost})\n`;
      });
      invoiceMessage += `\n`;
    }

    invoiceMessage += `------------------------------------------\n`;
    invoiceMessage += `*FINAL ESTIMATED PRICE:* ₹${total.toLocaleString("en-IN")}\n`;
    invoiceMessage += `------------------------------------------\n`;
    invoiceMessage += `Hi! I configuemerald this package configuration using your builder layout and want to align on deploy initialization.`;

    const encodedText = encodeURIComponent(invoiceMessage);
    window.open(
      `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedText}`,
      "_blank",
    );
  };

  return (
    <>
      <Section id="pricing">
        <SectionHeader
          badge="Transparent Pricing"
          badgeIcon={Sparkles}
          title="Simple packages,"
          accent="no surprises"
          subtitle="Fixed-rate packages with everything listed up front. Pick a base package, add only what you need, and see your total before you ever talk to us."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 pt-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {agencyPackages.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (idx % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.popular
                  ? "border-2 border-brand-500 bg-white shadow-xl shadow-brand-600/10"
                  : plan.super
                    ? "border-2 border-purple-500 bg-white shadow-xl shadow-purple-600/10"
                    : "border border-slate-200/80 bg-white shadow-sm hover:border-slate-300 hover:shadow-lg"
              }`}
            >
              {(plan.popular || plan.super) && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[9px] font-black uppercase tracking-wide text-white shadow-md ${
                    plan.popular
                      ? "bg-brand-600 shadow-brand-600/25"
                      : "bg-purple-500 shadow-purple-600/25"
                  }`}
                >
                  {plan.popular ? "Most Popular" : "Super Plan"}
                </span>
              )}

              <div>
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900 ">
                  {plan.name}
                </h3>

                <div className="my-4 flex items-baseline gap-1.5">
                  <span
                    className={`text-3xl font-bold tracking-tight ${
                      plan.popular ? "text-brand-600" : plan.super ?"text-purple-600": "text-slate-900"
                    }`}
                  >
                    ₹{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    one-time
                  </span>
                </div>

                <p className="mb-6 text-xs font-medium leading-relaxed text-slate-500">
                  {plan.tagline}
                </p>

                <div className="no-scrollbar max-h-64 space-y-2.5 overflow-y-auto border-t border-slate-100 pr-1 pt-5">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className={`mt-0.5 flex-shrink-0 ${plan.popular?" text-brand-600":plan.super?"text-purple-600":"text-brand-600"}`}
                      />
                      <span className="text-xs font-semibold leading-snug text-slate-600">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => handleOpenCalculatorModal(plan)}
                  className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700" : plan.super ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20 hover:bg-purple-700" 
                      : "bg-slate-900 text-white hover:bg-brand-600"
                  }`}
                >
                  <Calculator size={14} />
                  <span>Configure &amp; get price</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INTERACTIVE COMPUTE MODAL DRAWER OVERLAY */}
      <AnimatePresence>
        {activeModalPlan && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Modal Backdrop Blur Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalPlan(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />

            {/* Core Calculation UI Panel Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 z-10 max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col justify-between"
            >
              {/* Close Button Anchor */}
              <button
                onClick={() => setActiveModalPlan(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={15} />
              </button>

              {/* Top Summary Banner */}
              <div>
                <span className="text-[9px] font-black uppercase st text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                  Live Price Matrix Compiler
                </span>
                <h3 className="text-lg font-black text-slate-800 uppercase  mt-3">
                  Customize: {activeModalPlan.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium normal-case mt-1">
                  {activeAddOns.length > 0
                    ? "Select target deployment enhancements down below to calculate real-time architecture costs dynamically."
                    : "This package ships complete — send it through and we'll confirm scope and timeline on WhatsApp."}
                </p>

                {/* Base Price Readout */}
                <div className="my-5 p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 normal-case">
                    Core Package Base Rate:
                  </span>
                  <span className="text-sm font-black text-slate-800">
                    Available from ₹
                    {activeModalPlan.price.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* ==================== VALUE ADD-ONS SELECTION STACK ==================== */}
                {/* Hidden entirely when this package offers none, rather than
                    rendering a heading with nothing under it. */}
                {activeAddOns.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase st text-slate-400 border-b border-slate-100 pb-1.5 mb-3">
                      Available Scalability Add-Ons
                    </h4>
                    {activeAddOns.map((addon) => {
                      const isSelected = selectedAddOns.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          onClick={() => handleToggleAddOn(addon.id)}
                          className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all group ${
                            isSelected
                              ? "bg-emerald-50/50 border-emerald-400 shadow-2xs"
                              : "bg-white border-slate-200/80 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-slate-300 group-hover:border-emerald-400"
                              }`}
                            >
                              {isSelected && (
                                <Check size={10} className="stroke-[4px]" />
                              )}
                            </div>
                            <span
                              className={`text-xs font-bold transition-colors normal-case ${
                                isSelected
                                  ? "text-emerald-700"
                                  : "text-slate-600"
                              }`}
                            >
                              {addon.name}
                            </span>
                          </div>
                          <span
                            className={`text-xs font-mono font-black ${isSelected ? "text-emerald-600" : "text-slate-400"}`}
                          >
                            +₹{addon.cost.toLocaleString("en-IN")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bottom Real-Time Computed Drawer Summary */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-black text-slate-800 uppercase ">
                    Total Computed Balance:
                  </span>
                  <span className="text-2xl font-black text-emerald-600">
                    ₹{calculateTotalCost().toLocaleString("en-IN")}
                  </span>
                </div>

                {/* WhatsApp Dynamic Forward Button */}
                <button
                  onClick={handleForwardToWhatsApp}
                  className="w-full py-3 rounded-full text-xs font-black uppercase st text-center flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-md shadow-emerald-500/10 active:ring-2 active:ring-emerald-400/40 transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  <span>Initialize Project Via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
