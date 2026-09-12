"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

const PLACEHOLDER = "/apple-touch-icon.png";

const clients = [
  { label: "Blackantz", sector: "Designing ", logo: "https://www.blackantz.in/favicon.ico" },
  { label: "harizone", sector: "Learning Platform", logo: "/clientLogo/hari.avif" },
  { label: "AventuraHolidays", sector: "Holidays & Tours", logo: "/clientLogo/aventura-logo.webp" },
  { label: "Valparai Mahesh", sector: "Holidays & Tours", logo: "/clientLogo/logo-1.jpg" },
  { label: "ChennaiPondicherryTaxi", sector: "Travels", logo: "/clientLogo/logo-1.png" },
  { label: "Abu Holidays", sector: "Travels", logo: "/clientLogo/logo-1.webp" },
  { label: "GGV CABS", sector: "Travels", logo: "/clientLogo/logo-2.jpg" },
  { label: "NellaiTrack", sector: "Travels", logo: "/clientLogo/logo-2.webp" },
  { label: "GoTripCabs", sector: "Travels", logo: "/clientLogo/logo-2.png" },
  { label: "Kadal Arasan", sector: "Andaman Holidays", logo: "/clientLogo/logo-3.jpg" },
  { label: "GreenTours", sector: "Travels", logo: "/clientLogo/logo-3.png" },
  { label: "RR Tours", sector: "Travels", logo: "/clientLogo/logo-3.webp" },
  { label: "OrtusAudios", sector: "Premium Home Theatre", logo: "/clientLogo/logo-4.jpg" },
  { label: "GMR Travels", sector: "Travels", logo: "/clientLogo/logo-4.png" },
  { label: "AK Travels", sector: "Travels", logo: "/clientLogo/logo-4.webp" },
  { label: "Siloam HealthCare", sector: "HealthCare", logo: "/clientLogo/logo-5.jpg" },
  { label: "Golden Taxi", sector: "Travels", logo: "/clientLogo/logo-5.webp" },
  { label: "Ganapathy Travels", sector: "Travels", logo: "/clientLogo/logo-6.jpg" },
  { label: "SST Travels", sector: "Travels", logo: "/clientLogo/logo-6.webp" },
  { label: "SocialDynamics", sector: "DigitalMarketing", logo: "/clientLogo/logo-7.jpg" },
  { label: "STAXI", sector: "Travels", logo: "/clientLogo/logo-7.webp" },
  { label: "SBT Tours", sector: "Travels", logo: "/clientLogo/logo.png" },
  { label: "MK Travels", sector: "Travels", logo: "/clientLogo/logo.jpg" },
  { label: "DD Tours", sector: "Travels", logo: "/clientLogo/logo.webp" },
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
      className="h-10 w-10 shrink-0 rounded-full object-cover"
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