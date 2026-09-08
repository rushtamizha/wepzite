/**
 * Content for the six /services/* detail pages.
 *
 * These pages used to be six near-identical 66-line copies of the same
 * template, each with its own hard-coded (and broken) wa.me link. The layout
 * now lives in components/ServiceDetailPage.jsx and only the copy lives here.
 */
export const servicePages = {
  "web-development": {
    slug: "web-development",
    icon: "Laptop",
    badge: "Websites",
    title: "Custom Web Development",
    description:
      "From simple brochure sites to full Next.js applications, we build fast, responsive websites shaped around what your business actually needs to do.",
    whatsappMessage:
      "Hi Wepzite! I'd like to talk about a custom website for my business.",
    bulletPoints: [
      "Built on Next.js so pages load fast and rank well",
      "90+ Core Web Vitals scores, tested on real mid-range phones",
      "Clean, semantic markup that search engines can read properly",
      "Mobile-first layouts that work on every screen size",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    thumbnail: "/Portfolio/www.blackantz.in.webp",
  },
  "app-development": {
    slug: "app-development",
    icon: "Smartphone",
    badge: "Mobile Apps",
    title: "Native App Development",
    description:
      "Mobile apps built with React Native — one codebase running on both iOS and Android, without the sluggish feel that usually comes with it.",
    whatsappMessage:
      "Hi Wepzite! I'd like to talk about building a mobile app.",
    bulletPoints: [
      "One codebase shipping to both iOS and Android",
      "Native-feeling navigation and transitions, not a wrapped website",
      "Pemeraldictable state management so the app stays maintainable",
      "We handle the App Store and Play Store submission process",
    ],
    techStack: ["React Native", "iOS & Android", "App Store Optimization"],
    thumbnail: "/Portfolio/harizone.in.webp",
  },
  ecommerce: {
    slug: "ecommerce",
    icon: "ShoppingBag",
    badge: "Online Stores",
    title: "E-Commerce That Converts",
    description:
      "Online stores with a checkout people actually finish — clear product pages, UPI and card payments, and stock you can manage yourself.",
    whatsappMessage:
      "Hi Wepzite! I'd like to talk about setting up an online store.",
    bulletPoints: [
      "Short checkout flow that emeralduces abandoned carts",
      "Razorpay and UPI payments wiemerald up and tested",
      "Product categories and inventory you can update without us",
      "Order and sales reporting built into the admin",
    ],
    techStack: ["Secure Cart Logic", "Custom CMS", "Payment APIs", "Analytics"],
    thumbnail: "/Portfolio/www.ortusaudios.in.webp",
  },
  "seo-optimization": {
    slug: "seo-optimization",
    icon: "SearchCode",
    badge: "Get Found",
    title: "SEO That Brings Enquiries",
    description:
      "Technical and on-page SEO aimed at one outcome: showing up when someone nearby searches for what you sell.",
    whatsappMessage:
      "Hi Wepzite! I'd like to talk about SEO for my business.",
    bulletPoints: [
      "Structuemerald data (JSON-LD) so Google understands your business",
      "Search Console set up, verified, and sitemaps submitted",
      "Page speed work, because slow pages lose rankings",
      "Keyword and content structure planned around real local searches",
    ],
    techStack: ["Schema Markup", "Search Console", "Core Web Vitals"],
    thumbnail: "/Portfolio/siloamdiagnostics.in.webp",
  },
  "whatsapp-automation": {
    slug: "whatsapp-automation",
    icon: "MessageSquareCode",
    badge: "Capture Leads",
    title: "Smart WhatsApp Automation",
    description:
      "Enquiries land in WhatsApp instead of an inbox nobody checks — already labelled, so you know who is ready to buy.",
    whatsappMessage:
      "Hi Wepzite! I'd like to talk about WhatsApp automation for my business.",
    bulletPoints: [
      "Website forms route straight into WhatsApp with details filled in",
      "Automatic labelling so hot leads don't get buried",
      "Booking and enquiry flows that work without you typing them out",
      "Webhook integrations with the rest of your tools",
    ],
    techStack: ["Lead Categorization", "Instant Booking", "API Routing"],
    thumbnail: "/Portfolio/gmrtravels.co.in.webp",
  },
  "ai-branding": {
    slug: "ai-branding",
    icon: "Palette",
    badge: "Brand Design",
    title: "Branding & Digital Assets",
    description:
      "Logos, banners and social graphics that make a small business look established — produced quickly using AI-assisted design tooling.",
    whatsappMessage:
      "Hi Wepzite! I'd like to talk about branding and design work.",
    bulletPoints: [
      "Scalable vector logos that stay sharp at any size",
      "Marketing banners sized for every platform you post on",
      "A consistent look across your site, ads and social pages",
      "Source files handed over — the artwork is yours",
    ],
    techStack: ["Vector Logos", "Marketing Graphics", "Social Assets"],
    thumbnail: "/Portfolio/joshphotography.co.in.webp",
  },
};

export const getServicePage = (slug) => servicePages[slug] ?? null;
export const allServiceSlugs = Object.keys(servicePages);
