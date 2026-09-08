"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Route } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

import "swiper/css";

const steps = [
  {
    title: "Free consultation",
    tag: "Day 1",
    body: "A twenty-minute WhatsApp chat about your business. No forms, no fee.",
  },
  {
    title: "Design approval",
    tag: "Day 2",
    body: "You see the homepage design before we write a line of code.",
  },
  {
    title: "Content & photos",
    tag: "Day 3",
    body: "We write the copy and prepare images if you don't have them ready.",
  },
  {
    title: "Development",
    tag: "Day 4–6",
    body: "Hand-coded in Next.js and tested on real phones, not just a laptop.",
  },
  {
    title: "SEO & Google setup",
    tag: "Day 6",
    body: "Schema, sitemap, Search Console and your Google Business Profile.",
  },
  {
    title: "Launch",
    tag: "Day 7",
    body: "Domain, SSL and analytics connected. Your site goes live.",
  },
  {
    title: "Ongoing support",
    tag: "12 months",
    body: "Changes and fixes on WhatsApp. Included, not invoiced.",
  },
];

const AUTOPLAY_MS = 2600;

export default function Process() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <Section id="process" tone="light">
      <SectionHeader
        tone="light"
        badge="How It Works"
        badgeIcon={Route}
        title="Seven steps, and you're"
        accent="live in a week"
        subtitle="No vague timelines. Here is exactly what happens, and when."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-7xl"
      >
        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          slidesPerView={3}
          centeredSlides
          loop
          spaceBetween={0}
          speed={1000}
          /* Vertical drag would fight the page scroll on mobile, so the rail
             advances on its own and the page keeps its normal gestures. */
          allowTouchMove={false}
          autoplay={
            reducedMotion
              ? false
              : {
                  delay: AUTOPLAY_MS,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          className="wepzite-steps h-[318px] sm:h-[336px]"
        >
          {steps.map((step, idx) => (
            <SwiperSlide key={step.title}>
              <div className="flex h-full items-center gap-2.5 pr-1 sm:gap-3">
                {/* NUMBER */}
                <span className="step-num flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold sm:h-12 sm:w-12 sm:text-xl">
                  {idx + 1}
                </span>

                <span
                  aria-hidden="true"
                  className="step-dash h-px w-2.5 shrink-0 sm:w-3"
                />

                {/* SPINE + DOT */}
                <span className="relative flex h-full w-4 shrink-0 items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200"
                  />
                  <span className="step-dot relative z-10 h-3.5 w-3.5 rounded-full ring-4 ring-white" />
                </span>

                <span
                  aria-hidden="true"
                  className="step-dash h-px w-2.5 shrink-0 sm:w-3"
                />

                {/* CARD */}
                <div className="step-card min-w-0 flex-1 rounded-2xl border bg-white px-4 py-3 sm:px-5 sm:py-3.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="truncate text-sm font-bold text-slate-900 sm:text-[15px]">
                      {step.title}
                    </h3>
                    <span className="step-tag shrink-0 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wide">
                      {step.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    {step.body}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Screen readers get the full ordered list, not the carousel window */}
        <ol className="sr-only">
          {steps.map((step) => (
            <li key={`sr-${step.title}`}>
              {step.tag}: {step.title} — {step.body}
            </li>
          ))}
        </ol>
      </motion.div>

      {/*
        Focus states keyed off Swiper's own active class — the centred step is
        in full colour, the ones above and below recede. Pure CSS, no per-frame
        JS. Move to globals.css if you'd rather keep styles centralised.

        Accent palette: emerald (50 / 100 / 300 / 500 / 600).
      */}
      <style jsx global>{`
        .wepzite-steps .swiper-slide {
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          opacity: 0.45;
        }
        .wepzite-steps .swiper-slide-active {
          opacity: 1;
        }

        .wepzite-steps .step-num {
          background: rgb(248 250 252);
          color: rgb(148 163 184);
          transition:
            background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            color 0.6s,
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wepzite-steps .swiper-slide-active .step-num {
          background: rgb(236 253 245); /* emerald-50 */
          color: rgb(5 150 105); /* emerald-600 */
          transform: scale(1.06);
        }

        .wepzite-steps .step-dash {
          background: rgb(226 232 240);
          transition: background-color 0.6s;
        }
        .wepzite-steps .swiper-slide-active .step-dash {
          background: rgb(110 231 183); /* emerald-300 */
        }

        .wepzite-steps .step-dot {
          background: rgb(203 213 225);
          transition:
            background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.6s,
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wepzite-steps .swiper-slide-active .step-dot {
          background: rgb(5 150 105); /* emerald-600 */
          transform: scale(1.15);
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.16); /* emerald-500 */
        }

        .wepzite-steps .step-card {
          border-color: rgb(241 245 249);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
          transition:
            border-color 0.6s,
            box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wepzite-steps .swiper-slide-active .step-card {
          border-color: rgb(209 250 229); /* emerald-100 */
          box-shadow: 0 12px 28px -10px rgba(15, 23, 42, 0.14);
          transform: translateX(4px);
        }

        .wepzite-steps .step-tag {
          background: rgb(248 250 252);
          color: rgb(148 163 184);
          transition:
            background-color 0.6s,
            color 0.6s;
        }
        .wepzite-steps .swiper-slide-active .step-tag {
          background: rgb(236 253 245); /* emerald-50 */
          color: rgb(5 150 105); /* emerald-600 */
        }

        @media (prefers-reduced-motion: reduce) {
          .wepzite-steps .swiper-slide,
          .wepzite-steps .step-num,
          .wepzite-steps .step-dot,
          .wepzite-steps .step-card,
          .wepzite-steps .step-dash,
          .wepzite-steps .step-tag {
            transition: none;
          }
        }
      `}</style>
    </Section>
  );
}