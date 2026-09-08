"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader, Button } from "@/components/ui/Section";

// Import Swiper styles core
import "swiper/css";
import Image from "next/image";

export default function Portfolio({ tone = "tint" }) {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Balanced split dataset to feed into opposite directions smoothly
  const datasetRow1 = [
  {
    title: "Chennai to Pondicherry One Way Taxi",
    category: "Taxi & Travel Website",
    image: "/Portfolio/www.chennaitopondicherryonewaytaxi.com.webp",
    link: "https://chennaitopondicherryonewaytaxi.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Valparai Holiday Tours",
    category: "Tour & Travel Website",
    image: "/Portfolio/valparai-mahesh.webp",
    link: "https://valparaiholidaytours.com",
    tech: ["Next.js", "Tailwind CSS"],
  },{
    title: "MK Travels Coimbatore",
    category: "Tour & Travel Website",
    image: "/Portfolio/www.mktravelscoimbatore.com.webp",
    link: "https://mktravelscoimbatore.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Aventura Kerala Holidays",
    category: "Travel Agency Website",
    image: "/Portfolio/www.aventurakeralaholidays.webp",
    link: "https://aventurakeralaholidays.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Black Antz",
    category: "Business Website",
    image: "/Portfolio/www.blackantz.in.webp",
    link: "https://blackantz.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "DD Tours & Travel",
    category: "Travel Agency Website",
    image: "/Portfolio/www.ddtoursandtravel.in.webp",
    link: "https://ddtoursandtravel.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "GGV Cabs",
    category: "Cab Booking Website",
    image: "/Portfolio/www.ggvcabs.co.in.webp",
    link: "https://ggvcabs.co.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Go Trip Cabs",
    category: "Cab Booking Website",
    image: "/Portfolio/www.gotripcabs.in.webp",
    link: "https://gotripcabs.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Kadal Arasan",
    category: "Seafood Business Website",
    image: "/Portfolio/www.kadal-arasan.in.webp",
    link: "https://kadal-arasan.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Ortus Audios",
    category: "Audio Equipment Website",
    image: "/Portfolio/www.ortusaudios.in.webp",
    link: "https://ortusaudios.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Nandha Groups",
    category: "Corporate Business Website",
    image: "/Portfolio/www.nandhagroups.in.webp",
    link: "https://nandhagroups.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Abu Holidays",
    category: "Taxi Booking Platform",
    image: "/Portfolio/www.abuholidays.com.webp",
    link: "https://abuholidays.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Nellai Multiple Track",
    category: "Taxi Booking Platform",
    image: "/Portfolio/www.nellaimultipletrack.in.webp",
    link: "https://nellaimultipletrack.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
];

const datasetRow2 = [
  {
    title: "Ganapathy One Way Drop Taxi",
    category: "Taxi Booking Website",
    image: "/Portfolio/www.ganapathyonewaydroptaxi.com.webp",
    link: "https://ganapathyonewaydroptaxi.com",
    tech: ["Next.js", "Tailwind CSS"],
  },{
    title: "Golden One Way Drop Taxi",
    category: "Taxi Booking Website",
    image: "/Portfolio/www.goldenonewaytaxi.com.webp",
    link: "https://www.goldenonewaytaxi.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "AK Travels",
    category: "Travel Agency Website",
    image: "/Portfolio/aktravels.in.webp",
    link: "https://aktravels.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "DS Photography",
    category: "Photography Portfolio Website",
    image: "/Portfolio/dsphotography.co.in.webp",
    link: "https://dsphotography.co.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "GMR Travels",
    category: "Travel Agency Website",
    image: "/Portfolio/gmrtravels.co.in.webp",
    link: "https://gmrtravels.co.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Harizone",
    category: "Business Website",
    image: "/Portfolio/harizone.in.webp",
    link: "https://harizone.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Josh Photography",
    category: "Photography Portfolio Website",
    image: "/Portfolio/joshphotography.co.in.webp",
    link: "https://joshphotography.co.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "RR Tours",
    category: "Tours & Travels Website",
    image: "/Portfolio/rr-tours.com.webp",
    link: "https://rr-tours.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Siloam Diagnostics",
    category: "Healthcare & Diagnostics Website",
    image: "/Portfolio/siloamdiagnostics.in.webp",
    link: "https://siloamdiagnostics.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Social Dynamics",
    category: "Digital Marketing Platform",
    image: "/Portfolio/socialdynamics.cloud.webp",
    link: "https://socialdynamics.cloud",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "S Taxi",
    category: "Taxi Booking Platform",
    image: "/Portfolio/staxi.sonewaydroptaxi.in.webp",
    link: "https://staxi.sonewaydroptaxi.in",
    tech: ["Next.js", "Tailwind CSS"],
  },{
    title: "Sri Sai Tours & Travels",
    category: "Taxi Booking Platform",
    image: "/Portfolio/www.sstonewaydroptaxi.com.webp",
    link: "https://sstonewaydroptaxi.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
];
const handleGlobalMouseEnter = () => {
    row1Ref.current?.swiper?.autoplay?.stop();
    row2Ref.current?.swiper?.autoplay?.stop();
  };

  const handleGlobalMouseLeave = () => {
    row1Ref.current?.swiper?.autoplay?.start();
    row2Ref.current?.swiper?.autoplay?.start();
  };
  const ProjectCard = ({ project }) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm hover:shadow-slate-900/5"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-xl border border-slate-100 bg-white">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/25 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-brand-600 shadow-lg transition-transform duration-300 group-hover:translate-y-0">
            <ExternalLink size={15} />
          </span>
        </div>
      </div>

      <div className="px-1 pt-3 pb-1 text-left">
        <span className="text-[9px] font-black uppercase tracking-wide text-brand-600">
          {project.category}
        </span>
        <h3 className="mt-1.5 truncate text-sm font-bold text-slate-900 transition-colors group-hover:text-brand-600">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
          {project.tech.map((techName, idx) => (
            <span
              key={idx}
              className="rounded-md bg-slate-50 px-1.5 py-0.5 text-[9px] font-semibold text-slate-500"
            >
              {techName}
            </span>
          ))}
        </div>
      </div>
    </a>
  );

  const marqueeProps = {
    modules: [Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    speed: 4500,
    breakpoints: { 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
    className: "portfolio-staggeemerald-marquee w-full",
  };

  return (
    <Section id="portfolio">
      <SectionHeader
        badge="Selected Work"
        badgeIcon={Sparkles}
        title="Sites we've shipped"
        accent="for real businesses"
        subtitle="Every project below is live, built from scratch, and running for a paying client across Tamil Nadu. Tap any card to open the real site."
      />

      {/* MARQUEE CANVAS — two rows drifting in opposite directions */}
      <div
        className="relative flex cursor-grab flex-col gap-5 active:cursor-grabbing md:gap-6"
        onMouseEnter={handleGlobalMouseEnter}
        onMouseLeave={handleGlobalMouseLeave}
      >

        <Swiper
          ref={row1Ref}
          {...marqueeProps}
          autoplay={{ delay: 0, disableOnInteraction: false }}
        >
          {datasetRow1.map((project, idx) => (
            <SwiperSlide key={`r1-${idx}`} className="px-1 py-2">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          ref={row2Ref}
          {...marqueeProps}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
        >
          {datasetRow2.map((project, idx) => (
            <SwiperSlide key={`r2-${idx}`} className="px-1 py-2">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
