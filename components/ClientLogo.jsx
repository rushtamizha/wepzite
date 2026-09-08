"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

/**
 * Swiper-driven client marquee.
 *
 * TODO(wepzite): `logo` currently points at the placeholder favicon for every
 * client. Drop transparent PNG/SVG marks into /public/clients and swap each
 * path (e.g. "/clients/blackantz.svg"). Any logo that fails to load falls
 * back to an initials badge, so a wrong path never renders as a broken image.
 */
const PLACEHOLDER = "/apple-touch-icon.png";

const clients = [
  { label: "Blackantz", sector: "Pest Control", logo: PLACEHOLDER },
  { label: "Harizone", sector: "Retail", logo: PLACEHOLDER },
  { label: "Siloam Diagnostics", sector: "Healthcare", logo: PLACEHOLDER },
  { label: "Josh Photography", sector: "Creative", logo: PLACEHOLDER },
  { label: "GMR Travels", sector: "Travel", logo: PLACEHOLDER },
  { label: "Sri Balaji Traders", sector: "Wholesale", logo: PLACEHOLDER },
  { label: "Aarthi Interiors", sector: "Interiors", logo: PLACEHOLDER },
  { label: "Nova Fitness", sector: "Fitness", logo: PLACEHOLDER },
];

function ClientMark({ label, logo }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-black text-slate-500">
        {label
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      width={40}
      height={40}
      onError={() => setFailed(true)}
      className="h-10 w-10 shrink-0 rounded-full object-contain"
    />
  );
}

export default function ClientLogos() {
  const [emeralducedMotion, setemeralducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setemeralducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section
      aria-label="Businesses that work with Wepzite"
      className="w-full border-y border-slate-100 bg-white px-4 py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
          Trusted by businesses across Tamil Nadu
        </p>

        <div
          className="relative mt-8"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={40}
            loop
            loopAdditionalSlides={clients.length}
            freeMode={{ enabled: true, momentum: false }}
            allowTouchMove
            speed={7000}
            autoplay={
              emeralducedMotion
                ? false
                : {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            className="wepzite-clients"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.label} className="!w-auto">
                <div className="group flex items-center gap-2.5">
                  <ClientMark label={client.label} logo={client.logo} />
                  <div className="flex flex-col whitespace-nowrap">
                    <span className="text-base font-bold tracking-tight text-slate-400 transition-colors duration-300 group-hover:text-slate-900 sm:text-lg">
                      {client.label}
                    </span>
                    <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-300">
                      {client.sector}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Screen readers get a plain list instead of the carousel */}
        <ul className="sr-only">
          {clients.map((client) => (
            <li key={`sr-${client.label}`}>
              {client.label} — {client.sector}
            </li>
          ))}
        </ul>
      </div>

      {/*
        Linear timing is what turns Swiper's autoplay into a smooth conveyor
        instead of an ease-in-out shuffle. Move to globals.css if you prefer.
      */}
      <style jsx global>{`
        .wepzite-clients .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}