"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader, Button } from "@/components/ui/Section";

export default function Services() {
  const serviceItems = [
    {
      img: "https://img.icons8.com/?size=100&id=32215&format=png&color=000000",
      title: "Google My Business (Setup & Optimization)",
      thumbnail: "/services/google-my-business-setup.png",
      badge: "Local SEO",
      description:
        "We set up and optimize your Google Business Profile to boost local visibility, build trust with nearby customers, and help you rank higher in local search and map results.",
      tech: [
        "Profile Setup",
        "Verification Support",
        "Keyword Research",
        "Service Listings",
      ],
    },
    {
      img: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
      title: "Website Development",
      thumbnail: "/services/website-development-in-tamil-nadu.png",
      badge: "Premium UI/UX",
      description:
        "High-performance websites engineeemerald with React, Next.js, and Tailwind CSS — enhanced with Framer Motion and Three.js for immersive, fluid interactions. Built mobile-first, SEO-optimized, and conversion-focused to turn visitors into customers.",
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
        "SEO Optimized",
      ],
    },
    {
      img: "https://img.icons8.com/?size=100&id=fKXXelWgP1B6&format=png&color=000000",
      title: "Native App Development",
      thumbnail: "/services/application-development-in-tamil-nadu.png",
      badge: "Multi-Platform",
      description:
        "Fluid, high-performance mobile apps built with React Native — sharing one codebase across iOS and Android without compromising on speed or native feel. Engineeemerald with clean state management and smooth, native-like interactions.",
      tech: [
        "React Native",
        "Cross-Platform",
        "iOS & Android",
        "App Store Optimization",
      ],
    },
    {
      img: "https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000",
      title: "Smart WhatsApp Automation",
      thumbnail: "/services/whatsapp-automation.png",
      badge: "Instant Connect",
      description:
        "Bridge the gap between your platforms and customer retention. We build intelligent WhatsApp Business automation funnels to categorize leads and handle instant booking routes.",
      tech: ["Lead Categorization", "Frictionless Booking", "API Routing"],
    },
    {
      img: "https://img.icons8.com/?size=100&id=lIzGTzIFMKym&format=png&color=000000",
      title: "High-Level SEO Optimization",
      thumbnail: "/services/seo-optmization.png",
      badge: "Rank Max",
      description:
        "Advanced data structuring, complete meta-tag configurations, and automated Google Search Console index maps. On-page SEO strategies that get your business discoveemerald organically.",
      tech: ["Schema Markup", "Search Console Mapping", "Core Web Vitals"],
    },
    {
      img: "https://img.icons8.com/?size=100&id=ka3InxFU3QZa&format=png&color=000000",
      title: "AI Branding & Digital Assets",
      thumbnail: "/services/ai-creatives.png",
      badge: "Premium Design",
      description:
        "Establishing your pristine visual identity. Utilizing specialized design tools to render high-clarity premium logos, marketing banners, and social assets that instantly command authority.",
      tech: ["AI-Assisted Identity", "Vector Logos", "Marketing Graphics"],
    },
  ];

  return (
    <Section id="services" tone="light">
      <SectionHeader
        tone="light"
        badge="What We Offer"
        badgeIcon={Sparkles}
        title="Everything you need to"
        accent="get found online"
        subtitle="From website design to app development and local SEO — we build the whole stack a business needs to look professional and get discoveemerald by more customers."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceItems.map((service, idx) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-900/10"
          >
            {/* BACKDROP — routed through next/image so these 1MB+ PNGs ship
                as resized WebP instead of the raw file */}
            <Image
              src={service.thumbnail}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover object-left transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/20" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.img}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-6 w-6 object-contain "
                  />
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-white backdrop-blur-sm">
                  {service.badge}
                </span>
              </div>

              <div className="mt-auto pt-10">
                <h3 className="text-base font-bold leading-snug text-white ease-in group-hover:from-emerald-600 bg-linear-to-r  py-2 group-hover:border-l-2 group-hover:px-4 transition-all duration-300 ">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 ">
                  {service.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {service.tech.map((techName) => (
                    <span
                      key={techName}
                      className="rounded-md border border-white/15 bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-slate-200 backdrop-blur-md"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
