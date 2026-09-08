"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle, X, Sparkles, Plus, Calculator } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BUSINESS_WHATSAPP } from "@/utils/site";

export default function PricingAndCalculator({ tone = "tint" }) {
  const [activeModalPlan, setActiveModalPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Comprehensive matrix mapped directly to your 5 precise packages
  const agencyPackages = [
     {
      id: "gmb_setup",
      name: "GMB Setup & Optimization",
      price: 1499,
      recurringNote: "+ ₹500/month maintenance (weekly 3 posts + review/SEO replies)",
      tagline: "Get found on Google Maps and local search with a fully optimized Business Profile.",
      features: [
        "Google Business Profile Creation / Claim",
        "Category & Business Info Optimization",
        "Logo & Cover Photo Upload",
        "Service / Product Listing Setup",
        "Business Hours & Location Mapping",
        "Q&A Section Seeding",
        "NAP Consistency Check (Website Match)",
        "Google Maps Pin Verification Support",
      ]
    },{
      id: "starter",
      name: "Starter Essential",
      price: 2999,
      tagline: "Perfect for lightweight portfolios and clean local digital business cards.",
      features: [
        "Free Domain (under 1k)","Up to 5 Pages Structure", "Fully Responsive Design", "Standard Contact Form",
        "WhatsApp Integration", "Google Maps Location API", "Social Links Connectivity",
        "Basic On-Page SEO Foundations", "XML Sitemap Rendering", "Fast Loading Physics",
        "SSL Security Configuration", "Hosting Deployment Setup", "30 Days Dedicated Support"
      ]
    }, {
      id: "google_ads_setup",
      name: "Google Ads Setup & Management",
      price: 3000,
      recurringNote: "+ ₹1,000/month maintenance (campaign monitoring & optimization)",
      tagline: "Get your business showing up on Google Search for the people already searching for you.",
      features: [
        "Google Ads Account Setup",
        "Conversion Tracking Configuration",
        "Keyword Research & Targeting",
        "Ad Copywriting (Search Ads)",
        "Campaign Structure & Budget Setup",
        "Location & Audience Targeting",
        "Google Ads ↔ Website/WhatsApp Linking",
      ]
    },
    {
      id: "growth",
      name: " Growth",
      price: 6999,
      tagline: "Bleeding-edge framework performance paiemerald with beautiful custom interactive layouts.",
      features: [
        "Free Domain (under 1k)","Premium UI/UX Design System", "Next.js App Router Architecture", "Framer Motion Animations",
        "Up to 7 Pages Layout", "Fully Responsive Layout Grid", "Premium Component Structures",
        "WhatsApp Live Integration", "Advanced Contact Forms", "Google Maps Integration",
        "Social Media Connectivity", "Standard On-Page SEO Routing", "XML Sitemap & Robots.txt Generation",
        "Basic Schema Data Markup", "Vercel Performance Optimization", "Hosting Deployment Automation",
        "90 Days Dedicated Support"
      ],
      popular: true
    },
    {
      id: "pro",
      name: "Enterprise Pro",
      price: 9999, // Placed as mid-tier proxy between Growth and E-Com
      tagline: "The ultimate corporate choice for high-ranking visibility and custom architecture.",
      features: [
        "Up to 10 Pages Depth", "Premium Tailoemerald UI/UX Canvas", "Next.js Development Framework",
        "Tailwind CSS Layout Engine", "Framer Motion Micro-Animations", "Fully Responsive Structural Design",
        "Advanced On-Page SEO Engineering", "Full Schema Structuemerald Markup", "XML Sitemap & Robots.txt Optimization",
        "WhatsApp Direct Lead Routing", "Contextual Contact Forms", "Google Maps Location Matrix",
        "Social Media System Integration", "Production Performance Tuning",
        "365 Days Extended Support"
      ]
    },
    {
      id: "ecom_starter",
      name: "E-Commerce Essential",
      price: 12000,
      tagline: "Launch your store instantly with robust cart logic and streamlined ordering.",
      features: [
        "Premium E-Commerce Framework", "Up to 50 Products Showcase Capability", "Intuitive Product Categories",
        "Instant Product Search Index", "Fluid Shopping Cart System", "Frictionless Checkout Pages",
        "Cash on Delivery Configuration", "Direct WhatsApp Ordering Routing", "Standard Contact Form Mapping",
        "Google Maps API Connectivity", "Social Media Asset Links", "Standard On-Page SEO Mapping", "365 Days Store Maintenance Support"
      ]
    },
    {
      id: "ecom_pro",
      name: "E-Commerce Enterprise",
      price: 20000,
      tagline: "The absolute gold standard for massive online operations needing bulletproof automation.",
      features: [
        "Premium E-Commerce Platform Build", "Unlimited Products System Scaling", "Comprehensive Admin Control Dashboard",
        "Customer Secure Login & Signups", "Advanced Order Management Matrices", "Live Real-Time Inventory Tracking",
        "Razorpay Payment Gateway API Integration", "Dynamic Shopping Carts & Wishlists", "Convertive Coupon Engine & Systems",
        "Personalized Customer Dashboards", "Faceted Product Search & Smart Filters", "Advanced On-Page SEO Structures",
         "45 Days Priority Maintenance Support"
      ]
    }
  ];

  // Optional Add-on modifiers user can toggle inside the calculator model overlay
  const optionalAddOns = [
    { id: "gmb_maintenance", name: "GMB Weekly Posts + Review/SEO Replies — Monthly", cost: 1000 },
    { id: "google_ads_maintenance", name: "Google Ads Monitoring & Optimization — Monthly", cost: 1000 },
    { id: "logo_design", name: "Logo Design", cost: 1500 },
    { id: "content_writing", name: "Content Writing (per page)", cost: 500 },
    { id: "priority_speed", name: "Ultra-Performance CDN Optimization (100/100 Score)", cost: 2000 },
    { id: "premium_branding", name: "Premium Branding Kit (AI Logo + 3 Marketing Banners)", cost: 2500 },
    { id: "advanced_whatsapp", name: "Advanced WhatsApp Business Lead Categorization Automation", cost: 3000 }
  ];

  const handleOpenCalculatorModal = (plan) => {
    setActiveModalPlan(plan);
    setSelectedAddOns([]); // Reset modifiers array on fresh selection
  };

  const handleToggleAddOn = (addonId) => {
    if (selectedAddOns.includes(addonId)) {
      setSelectedAddOns(selectedAddOns.filter(id => id !== addonId));
    } else {
      setSelectedAddOns([...selectedAddOns, addonId]);
    }
  };

  const calculateTotalCost = () => {
    if (!activeModalPlan) return 0;
    const base = activeModalPlan.price;
    const addOnTotal = optionalAddOns
      .filter(addon => selectedAddOns.includes(addon.id))
      .reduce((sum, current) => sum + current.cost, 0);
    return base + addOnTotal;
  };

  const handleForwardToWhatsApp = () => {
    if (!activeModalPlan) return;
    
    const basePrice = activeModalPlan.price;
    const total = calculateTotalCost();
    const appliedAddOns = optionalAddOns.filter(addon => selectedAddOns.includes(addon.id));

     if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
      }
    
    // Generate an itemized, highly authoritative invoice summary string for your chat routing
    let invoiceMessage = `*NEW WEBSITE PROJECT CONFIGURATION - WEPZITE*\n`;
    invoiceMessage += `------------------------------------------\n`;
    invoiceMessage += `*Selected Package:* ${activeModalPlan.name}\n`;
    invoiceMessage += `*Base Investment:* ₹${basePrice.toLocaleString('en-IN')}\n\n`;
    
    if (appliedAddOns.length > 0) {
      invoiceMessage += `*Applied Add-Ons Customizations:*\n`;
      appliedAddOns.forEach(addon => {
        invoiceMessage += `• ${addon.name} (+₹${addon.cost})\n`;
      });
      invoiceMessage += `\n`;
    }
    
    invoiceMessage += `------------------------------------------\n`;
    invoiceMessage += `*FINAL ESTIMATED PRICE:* ₹${total.toLocaleString('en-IN')}\n`;
    invoiceMessage += `------------------------------------------\n`;
    invoiceMessage += `Hi! I configuemerald this package configuration using your builder layout and want to align on deploy initialization.`;

    const encodedText = encodeURIComponent(invoiceMessage);
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedText}`, "_blank");
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

        <div className="grid grid-cols-1 items-stretch gap-6 pt-3 md:grid-cols-2 lg:grid-cols-3">
          {agencyPackages.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.popular
                  ? "border-2 border-brand-500 bg-white shadow-xl shadow-brand-600/10"
                  : "border border-slate-200/80 bg-white shadow-sm hover:border-slate-300 hover:shadow-lg"
              }`}
            >
              
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 text-[9px] font-black uppercase tracking-wide text-white shadow-md shadow-brand-600/25">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900 ">
                  {plan.name}
                  
                </h3>

                <div className="my-4 flex items-baseline gap-1.5">
                  <span
                    className={`text-3xl font-bold tracking-tight ${
                      plan.popular ? "text-brand-600" : "text-slate-900"
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
                        className="mt-0.5 flex-shrink-0 text-brand-600"
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
                      ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700"
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
                  Select target deployment enhancements down below to calculate real-time architecture costs dynamically.
                </p>

                {/* Base Price Readout */}
                <div className="my-5 p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 normal-case">Core Package Base Rate:</span>
                  <span className="text-sm font-black text-slate-800">Available from ₹{activeModalPlan.price.toLocaleString('en-IN')}</span>
                </div>

                {/* ==================== VALUE ADD-ONS SELECTION STACK ==================== */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase st text-slate-400 border-b border-slate-100 pb-1.5 mb-3">
                    Available Scalability Add-Ons
                  </h4>
                  {optionalAddOns.map((addon) => {
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
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                            isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 group-hover:border-emerald-400"
                          }`}>
                            {isSelected && <Check size={10} className="stroke-[4px]" />}
                          </div>
                          <span className={`text-xs font-bold transition-colors normal-case ${
                            isSelected ? "text-emerald-700" : "text-slate-600"
                          }`}>
                            {addon.name}
                          </span>
                        </div>
                        <span className={`text-xs font-mono font-black ${isSelected ? "text-emerald-600" : "text-slate-400"}`}>
                          +₹{addon.cost.toLocaleString('en-IN')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Real-Time Computed Drawer Summary */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-black text-slate-800 uppercase ">Total Computed Balance:</span>
                  <span className="text-2xl font-black text-emerald-600">₹{calculateTotalCost().toLocaleString('en-IN')}</span>
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