/**
 * The package catalogue — ONE source of truth for what Wepzite sells and what
 * it costs.
 *
 * This used to live inside components/PricingAndContact.jsx as a local const.
 * It moved out because a second surface now needs it: the client agreement at
 * /agreement puts the same packages in a dropdown and pre-fills the project
 * value from the price. Two copies of a price list drift within a week, and a
 * signed agreement quoting a stale figure is a real problem rather than a
 * cosmetic one.
 *
 * Anything that shows a price to a visitor should import from here.
 *
 * Each entry:
 *   id            stable key — also used by `addOnsByPackage` in
 *                 PricingAndContact and stored on a generated agreement
 *   name          display name
 *   price         one-time rupee figure, integer
 *   recurringNote optional monthly commitment shown under the price
 *   tagline       one-line positioning
 *   features      published inclusions; these ARE the contractual scope the
 *                 agreement's clause 01 refers to, so keep them accurate
 */
export const agencyPackages = [
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
    price: 2999,
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
      "Up to 10 Pages Layout", "Fully Responsive Layout Grid", "Premium Component Structures",
      "WhatsApp Live Integration", "Advanced Contact Forms", "Google Maps Integration",
      "Social Media Connectivity", "Standard On-Page SEO Routing", "XML Sitemap & Robots.txt Generation",
      "Basic Schema Data Markup", "Vercel Performance Optimization", "Hosting Deployment Automation",
      "365 Days Dedicated Support"
    ],
    popular: true
  }, {
    id: "Product",
    name: " Product-Based Website ",
    price: 8999,
    tagline: "Bleeding-edge framework performance paiemerald with beautiful custom interactive layouts.",
    features: [
      "Free Domain (under 1k)"," Up to 50 Products","Premium UI/UX Design System", "Next.js App Router Architecture", "Framer Motion Animations",
       "Fully Responsive Layout Grid", "Premium Component Structures",
      "WhatsApp Live Integration", "Advanced Contact Forms", "Google Maps Integration",
      "Social Media Connectivity", "Standard On-Page SEO Routing", "XML Sitemap & Robots.txt Generation",
      "Basic Schema Data Markup", "Vercel Performance Optimization", "Hosting Deployment Automation",
      "365 Days Dedicated Support"
    ],
    popular: false
  },
  {
    id: "pro",
    name: "Business Pro",
    price: 9999, // Placed as mid-tier proxy between Growth and E-Com
    tagline: "The ultimate corporate choice for high-ranking visibility and custom architecture.",
    features: [
      "Up to 25 Pages Depth", "Premium Tailoemerald UI/UX Canvas", "Next.js Development Framework",
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
    price: 14999,
     super: true,
    tagline: "Launch your store instantly with robust cart logic and streamlined ordering.",
    features: [
      "Premium E-Commerce Framework", "Admin Panel","Product Management","Up to 50 Products Showcase Capability", "Intuitive Product Categories",
      "Instant Product Search Index", "Fluid Shopping Cart System", "Frictionless Checkout Pages",
     "Direct WhatsApp Ordering Routing", "Standard Contact Form Mapping",
      "Google Maps API Connectivity", "Social Media Asset Links", "Standard On-Page SEO Mapping", "365 Days Store Maintenance Support"
    ]
  },
  {
    id: "ecom_pro",
    name: "E-Commerce Enterprise",
    price: 29999,
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

/** Look up a package by id. Returns undefined for an unknown id. */
export function getPackageById(id) {
  return agencyPackages.find((pkg) => pkg.id === id);
}
