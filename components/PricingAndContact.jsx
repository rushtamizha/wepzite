"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle, X, Sparkles, Plus, Calculator } from "lucide-react";

export default function PricingAndCalculator() {
  const [activeModalPlan, setActiveModalPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Comprehensive matrix mapped directly to your 5 precise packages
  const agencyPackages = [
    {
      id: "starter",
      name: "Starter Essential",
      price: 2999,
      tagline: "Perfect for lightweight portfolios and clean local digital business cards.",
      features: [
        "Up to 5 Pages Structure", "Fully Responsive Design", "Standard Contact Form",
        "WhatsApp Integration", "Google Maps Location API", "Social Links Connectivity",
        "Basic On-Page SEO Foundations", "XML Sitemap Rendering", "Fast Loading Physics",
        "SSL Security Configuration", "Hosting Deployment Setup", "7 Days Dedicated Support"
      ]
    },
    {
      id: "growth",
      name: "Next.js Growth",
      price: 5999,
      tagline: "Bleeding-edge framework performance paired with beautiful custom interactive layouts.",
      features: [
        "Premium UI/UX Design System", "Next.js App Router Architecture", "Framer Motion Animations",
        "Up to 7 Pages Layout", "Fully Responsive Layout Grid", "Premium Component Structures",
        "WhatsApp Live Integration", "Advanced Contact Forms", "Google Maps Integration",
        "Social Media Connectivity", "Standard On-Page SEO Routing", "XML Sitemap & Robots.txt Generation",
        "Basic Schema Data Markup", "Vercel Performance Optimization", "Hosting Deployment Automation",
        "15 Days Dedicated Support"
      ],
      popular: true
    },
    {
      id: "pro",
      name: "Enterprise Pro",
      price: 9999, // Placed as mid-tier proxy between Growth and E-Com
      tagline: "The ultimate corporate choice for high-ranking visibility and custom architecture.",
      features: [
        "Up to 10 Pages Depth", "Premium Tailored UI/UX Canvas", "Next.js Development Framework",
        "Tailwind CSS Layout Engine", "Framer Motion Micro-Animations", "Fully Responsive Structural Design",
        "Advanced On-Page SEO Engineering", "Full Schema Structured Markup", "XML Sitemap & Robots.txt Optimization",
        "WhatsApp Direct Lead Routing", "Contextual Contact Forms", "Google Maps Location Matrix",
        "Social Media System Integration", "Production Performance Tuning", "Cloud Hosting Deployment",
        "30 Days Extended Support"
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
        "Google Maps API Connectivity", "Social Media Asset Links", "Standard On-Page SEO Mapping",
        "Cloud Hosting Deployment", "30 Days Store Maintenance Support"
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
        "High-Performance Cloud Deployment", "45 Days Priority Maintenance Support"
      ]
    }
  ];

  // Optional Add-on modifiers user can toggle inside the calculator model overlay
  const optionalAddOns = [
    { id: "extra_pages", name: "+5 Custom Pages Bundle", cost: 1500 },
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
    invoiceMessage += `Hi! I configured this package configuration using your builder layout and want to align on deploy initialization.`;

    const encodedText = encodeURIComponent(invoiceMessage);
    const destinationNumber = "919626850192"; // Enter your actual business WhatsApp string here
    window.open(`https://wa.me/${destinationNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="pricing" className="relative w-full bg-white py-10 px-4 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER CHROME */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
            <Sparkles size={12} className="text-sky-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Transparent Pricing Ecosystem</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold text-slate-900 uppercase">
            Packages
          </h2>
          <p className="mt-2 text-slate-500 font-medium text-xs sm:text-sm normal-case leading-relaxed   ">
            Select a core structural package below to initialize our interactive calculator configuration grid tool.
          </p>
        </div>

        {/* FIVE TIERS INTERACTIVE LAYOUT MAPPING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {agencyPackages.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`relative bg-white rounded-3xl p-6 flex flex-col justify-between border transition-all duration-300  ${
                plan.popular 
                  ? "border-sky-500 shadow-[0_12px_30px_rgba(14,165,233,0.06)]" 
                  : "border-slate-200/60 shadow-xs hover:border-sky-300"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-black text-[9px] uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Deployed
                </span>
              )}

              <div>
                <h3 className="text-md font-black text-slate-800 uppercase tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-2xl font-black text-sky-500">₹{plan.price.toLocaleString('en-IN')}</span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">/ Fixed Rate</span>
                </div>
                <p className="text-slate-400 text-xs font-medium leading-relaxed normal-case mb-6">
                  {plan.tagline}
                </p>

                {/* Micro List Elements Scroller Box */}
                <div className="space-y-2.5 pt-4 border-t border-slate-50 max-h-64 overflow-y-auto pr-1 no-scrollbar">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check size={12} className="text-sky-600 flex-shrink-0 font-bold" />
                      <span className="text-xs font-semibold text-slate-600 normal-case">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-50">
                <button
                  onClick={() => handleOpenCalculatorModal(plan)}
                  className={`w-full py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2   border border-slate-200 hover:border-sky-300 text-slate-700  transition-colors ${
                plan.popular 
                  ?  "bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white" 
                  : " hover:text-sky-500"
              }`}
                >
                  <Calculator size={13} />
                  <span>Configure Package</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
                <span className="text-[9px] font-black uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                  Live Price Matrix Compiler
                </span>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight mt-3">
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
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1.5 mb-3">
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
                            ? "bg-sky-50/50 border-sky-400 shadow-2xs" 
                            : "bg-white border-slate-200/80 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                            isSelected ? "bg-sky-600 border-sky-600 text-white" : "border-slate-300 group-hover:border-sky-400"
                          }`}>
                            {isSelected && <Check size={10} className="stroke-[4px]" />}
                          </div>
                          <span className={`text-xs font-bold transition-colors normal-case ${
                            isSelected ? "text-sky-700" : "text-slate-600"
                          }`}>
                            {addon.name}
                          </span>
                        </div>
                        <span className={`text-xs font-mono font-black ${isSelected ? "text-sky-600" : "text-slate-400"}`}>
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
                  <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Total Computed Balance:</span>
                  <span className="text-2xl font-black text-sky-600">₹{calculateTotalCost().toLocaleString('en-IN')}</span>
                </div>

                {/* WhatsApp Dynamic Forward Button */}
                <button
                  onClick={handleForwardToWhatsApp}
                  className="w-full py-3 rounded-full text-xs font-black uppercase tracking-widest text-center flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white shadow-md shadow-sky-500/10 active:ring-2 active:ring-sky-400/40 transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  <span>Initialize Project Via WhatsApp</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}