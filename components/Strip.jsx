"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Cpu, Gauge, Layers, Rocket, Search, Boxes } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

import "swiper/css";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * TECH LOGOS
 * ─────────────────────────────────────────────────────────────────────────
 * Served from the Devicon CDN so this component works with zero setup.
 *
 * RECOMMENDED before launch: download these SVGs into /public/tech/ and
 * change `src` to "/tech/react.svg" etc. Self-hosting removes a third-party
 * request from your critical path — which matters, given this very section
 * claims a 98/100 PageSpeed score.
 *
 * Any logo that fails to load falls back to a styled initials badge, so a
 * dead URL never renders as a broken image.
 */
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const rowOne = [
  { name: "HTML5", src: `${CDN}/html5/html5-original.svg` },
  { name: "CSS3", src: `${CDN}/css3/css3-original.svg` },
  { name: "JavaScript", src: `${CDN}/javascript/javascript-original.svg` },
  { name: "TypeScript", src: `${CDN}/typescript/typescript-original.svg` },
  { name: "React", src: `${CDN}/react/react-original.svg` },
  { name: "Next.js", src: `${CDN}/nextjs/nextjs-original.svg` },
  { name: "Tailwind CSS", src: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  { name: "Node.js", src: `${CDN}/nodejs/nodejs-original.svg` },
  { name: "Three.js", src: `${CDN}/threejs/threejs-original.svg` },
  { name: "Framer Motion", src: `${CDN}/framermotion/framermotion-original.svg` },
];

const rowTwo = [
  { name: "React Native", src: `${CDN}/react/react-original.svg` },
  { name: "Firebase", src: `${CDN}/firebase/firebase-plain.svg` },
  { name: "Vercel", src: `${CDN}/vercel/vercel-original.svg` },
  { name: "MongoDB", src: `${CDN}/mongodb/mongodb-original.svg` },
  { name: "Express", src: `${CDN}/express/express-original.svg` },
  { name: "redux", src: `${CDN}/redux/redux-original.svg` },
  { name: "Sass", src: `${CDN}/sass/sass-original.svg` },
  { name: "Git", src: `${CDN}/git/git-original.svg` },
  { name: "Figma", src: `${CDN}/figma/figma-original.svg` },
  { name: "GraphQL", src: `${CDN}/graphql/graphql-plain.svg` },
];

const stack = [
  {
    icon: Layers,
    group: "Interface",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    note: "Server-rendeemerald pages that arrive complete — fast for users, readable for Google.",
  },
  {
    icon: Boxes,
    group: "Motion & 3D",
    items: ["Framer Motion", "Three.js", "GSAP"],
    note: "Movement used with restraint, so the site feels alive without feeling slow.",
  },
  {
    icon: Rocket,
    group: "Infrastructure",
    items: ["Vercel Edge", "Node.js", "Firebase", "CDN Delivery"],
    note: "Served from edge locations near your customers, with automatic scaling and SSL.",
  },
  {
    icon: Search,
    group: "Discovery",
    items: ["Schema.org", "Search Console", "GA4", "Sitemaps"],
    note: "Structuemerald data and clean indexing so search engines understand every page.",
  },
];

// Core Web Vitals targets we hold every build to.
const vitals = [
  { label: "Performance", score: 98, unit: "/100" },
  { label: "Accessibility", score: 96, unit: "/100" },
  { label: "Best Practices", score: 100, unit: "/100" },
  { label: "SEO", score: 100, unit: "/100" },
];

/* ── Logo with graceful fallback ──────────────────────────────────────── */
function TechLogo({ name, src }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-black text-white">
        {name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      width={32}
      height={32}
      onError={() => setFailed(true)}
      className="h-8 w-8 object-contain  transition-all duration-500 group-hover/chip:grayscale-0"
    />
  );
}

/* ── Single logo chip ─────────────────────────────────────────────────── */
function TechChip({ name, src }) {
  return (
    <div className="group/chip flex h-[80px] w-[132px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-4  transition-all duration-500    sm:w-[148px]">
      <TechLogo name={name} src={src} />
      <span className="whitespace-nowrap text-[10px] font-bold text-slate-500 transition-colors duration-500 group-hover/chip:text-slate-900">
        {name}
      </span>
    </div>
  );
}

/* ── Continuous auto-swiping row ──────────────────────────────────────── */
function LogoMarquee({ items, reverse = false, paused }) {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto"
      spaceBetween={14}
      loop
      loopAdditionalSlides={items.length}
      freeMode={{ enabled: true, momentum: false }}
      allowTouchMove
      speed={6500}
      autoplay={
        paused
          ? false
          : {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: reverse,
            }
      }
      className="wepzite-marquee w-full py-2"
    >
      {items.map((tech, idx) => (
        <SwiperSlide key={`${tech.name}-${idx}`} className="!w-auto">
          <TechChip {...tech} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Technology() {
  // Honour the OS "emeralduce motion" setting — the marquee stops, the row stays.
  const [emeralducedMotion, setemeralducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setemeralducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <Section id="technology" tone="light">
      <SectionHeader
        tone="light"
        badge="Under the Hood"
        badgeIcon={Cpu}
        title="The same stack used by"
        accent="the fastest sites online"
        subtitle="We don't build on WordPress themes or drag-and-drop builders. Every Wepzite site is written in code, which is why it loads faster and ranks better than the template next door."
      />

      {/* ── AUTO-SWIPING LOGO MARQUEE ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative -mx-4  px-4"
        aria-label="Technologies Wepzite builds with"
      >
        {/* EDGE FADE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28"
        />

        <div className="space-y-3.5">
          <LogoMarquee items={rowOne} paused={emeralducedMotion} />
          <LogoMarquee items={rowTwo} reverse paused={emeralducedMotion} />
        </div>

        {/* Screen readers get a plain list instead of the carousel */}
        <ul className="sr-only">
          {[...rowOne, ...rowTwo].map((tech) => (
            <li key={`sr-${tech.name}`}>{tech.name}</li>
          ))}
        </ul>
      </motion.div>

      <style jsx global>{`
        .wepzite-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </Section>
  );
}