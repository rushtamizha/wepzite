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
    title: "SBT Tours",
    category: " Travel Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117379/sbttours.com_rkjpfb.png",
    link: "https://sbttours.com",
    tech: ["Next.js", "Tailwind CSS"],
  },{
    title: "Chennai to Pondicherry One Way Taxi",
    category: "Taxi & Travel Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789118281/chennaitopondicherryonewaytaxi.com_eqvu2y.png",
    link: "https://chennaitopondicherryonewaytaxi.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Valparai Holiday Tours",
    category: "Tour & Travel Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117890/valparaiholidaytours.com_lsfzva.png",
    link: "https://valparaiholidaytours.com",
    tech: ["Next.js", "Tailwind CSS"],
  },{
    title: "MK Travels Coimbatore",
    category: "Tour & Travel Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789118287/mktravelscoimbatore.com_wi1axm.png",
    link: "https://mktravelscoimbatore.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Aventura Kerala Holidays",
    category: "Travel Agency Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117373/www.aventurakeralaholidays_nzoqbi.png",
    link: "https://keralaholidays.vercel.app/",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Black Antz",
    category: "Business Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117346/www.blackantz.in_luc1sb.png",
    link: "https://blackantz.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "DD Tours & Travel",
    category: "Travel Agency Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789118287/ddtoursandtravel.in_czbyru.png",
    link: "https://ddtoursandtravel.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "GGV Cabs",
    category: "Cab Booking Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117356/www.ggvcabs.co.in_xu0wht.png",
    link: "https://ggvcabs.co.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Go Trip Cabs",
    category: "Cab Booking Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789118282/gotripcabs.in_m4y3tp.png",
    link: "https://gotripcabs.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
   {
    title: "Green Tours & Travels",
    category: "Tous & Travels",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117356/greentoursandtravels.in_hc8plu.png",
    link: "https://greentoursandtravels.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Kadal Arasan",
    category: "Seafood Business Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117373/www.kadal-arasan.in_nvbbbn.png",
    link: "https://kadal-arasan.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Ortus Audios",
    category: "Audio Equipment Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117381/www.ortusaudios.in_oztd2p.png",
    link: "https://ortusaudios.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Nandha Groups",
    category: "Corporate Business Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117351/www.nandhagroups.in_gjpxo3.png",
    link: "https://nandhagroups.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Abu Holidays",
    category: "Taxi Booking Platform",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117357/www.abuholidays.com_eqilkj.png",
    link: "https://abuholidays.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Nellai Multiple Track",
    category: "Taxi Booking Platform",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117367/www.nellaimultipletrack.in_t9jt5k.png",
    link: "https://nellaimultipletrack.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
];

const datasetRow2 = [
  {
    title: "Ganapathy One Way Drop Taxi",
    category: "Taxi Booking Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117342/www.ganapathyonewaydroptaxi.com_kl4jpb.png",
    link: "https://ganapathyonewaydroptaxi.com",
    tech: ["Next.js", "Tailwind CSS"],
  },{
    title: "Golden One Way Drop Taxi",
    category: "Taxi Booking Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117347/www.goldenonewaytaxi.com_qwoda5.png",
    link: "https://www.goldenonewaytaxi.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "AK Travels",
    category: "Travel Agency Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117339/aktravels.in_jop3nf.png",
    link: "https://aktravels.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "DS Photography",
    category: "Photography Portfolio Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117343/dsphotography.co.in_ob9eti.png",
    link: "https://dsphotography.co.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "GMR Travels",
    category: "Travel Agency Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117363/gmrtravels.co.in_xbjrjs.png",
    link: "https://gmrtravels.co.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Harizone",
    category: "Business Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117342/harizone.in_rnw2eq.png",
    link: "https://harizone.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Josh Photography",
    category: "Photography Portfolio Website",
    image: "/Portfolio/joshphotography.co.in.webp",
    link: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117362/joshphotography.co.in_xlmbvi.png",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "RR Tours",
    category: "Tours & Travels Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117363/rr-tours.com_zpudpv.png",
    link: "https://rr-tours.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Siloam Diagnostics",
    category: "Healthcare & Diagnostics Website",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117377/siloamdiagnostics.in_zberhd.png",
    link: "https://siloamdiagnostics.in",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Social Dynamics",
    category: "Digital Marketing Platform",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117356/socialdynamics.cloud_efwevc.png",
    link: "https://socialdynamics.cloud",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "S Taxi",
    category: "Taxi Booking Platform",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117346/staxi.sonewaydroptaxi.in_lcjq4d.png",
    link: "https://staxi.sonewaydroptaxi.in",
    tech: ["Next.js", "Tailwind CSS"],
  },{
    title: "Sri Sai Tours & Travels",
    category: "Taxi Booking Platform",
    image: "https://res.cloudinary.com/deamsuypj/image/upload/v1789117364/www.sstonewaydroptaxi.com_rztps9.png",
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
