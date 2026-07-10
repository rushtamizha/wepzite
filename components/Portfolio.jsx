"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExternalLink, Sparkles } from "lucide-react";

// Import Swiper styles core
import "swiper/css";
import Image from "next/image";

export default function Portfolio() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Balanced split dataset to feed into opposite directions smoothly
  const datasetRow1 = [
    {
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.chennaitopondicherryonewaytaxi.com.webp",
      link: "https://chennaitopondicherryonewaytaxi.com",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/valparai-mahesh.webp",
      link: "https://valparaiholidaytours.com",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.aventurakeralaholidays.webp",
      link: "https://aventurakeralaholidays.com",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.blackantz.in.webp",
      link: "https://blackantz.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.ddtoursandtravel.in.webp",
      link: "https://ddtoursandtravel.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.ggvcabs.co.in.webp",
      link: "https://ggvcabs.co.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.gotripcabs.in.webp",
      link: "https://gotripcabs.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.kadal-arasan.in.webp",
      link: "https://kadal-arasan.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.ortusaudios.in.webp",
      link: "https://ortusaudios.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.nandhagroups.in.webp",
      link: "https://nandhagroups.in",
      tech: ["Next.js", "Tailwind CSS"],
    },
  ];
const handleGlobalMouseEnter = () => {
    row1Ref.current?.swiper?.autoplay?.stop();
    row2Ref.current?.swiper?.autoplay?.stop();
  };

    const datasetRow2 = [
    {
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.ganapathyonewaydroptaxi.com.webp",
      link: "https://ganapathyonewaydroptaxi.com",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/aktravels.in.webp",
      link: "https://aktravels.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/dsphotography.co.in.webp",
      link: "https://dsphotography.co.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/gmrtravels.co.in.webp",
      link: "https://gmrtravels.co.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/harizone.in.webp",
      link: "https://harizone.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/joshphotography.co.in.webp",
      link: "https://joshphotography.co.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/rr-tours.com.webp",
      link: "https://rr-tours.com",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/siloamdiagnostics.in.webp",
      link: "https://siloamdiagnostics.in",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/socialdynamics.cloud.webp",
      link: "https://socialdynamics.cloud",
      tech: ["Next.js", "Tailwind CSS"],
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/staxi.sonewaydroptaxi.in.webp",
      link: "https://staxi.sonewaydroptaxi.in",
      tech: ["Next.js", "Tailwind CSS"],
    },
  ];
  const handleGlobalMouseLeave = () => {
    row1Ref.current?.swiper?.autoplay?.start();
    row2Ref.current?.swiper?.autoplay?.start();
  };
  const ProjectCard = ({ project }) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative bg-white border border-sky-100 rounded-3xl p-3.5 overflow-hidden shadow-[0_4px_15px_rgba(14,165,233,0.01)] hover:shadow-[0_10px_25px_rgba(14,165,233,0.05)] hover:border-sky-300 transition-all duration-500"
    >
      <div className="w-full  aspect-[5/3] rounded-2xl overflow-hidden relative bg-slate-50 border border-slate-100 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={60}
          priority={false}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-sky-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs rounded-2xl">
          <div className="w-9 h-9 bg-white text-sky-600 rounded-full flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ExternalLink size={14} />
          </div>
        </div>
      </div>
      <div className="mt-2 text-left">
        <span className="text-[9px] font-semibold uppercase  text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
          {project.category}
        </span>
        <h3 className="text-xs font-bold text-slate-800 mt-2.5 group-hover:text-sky-600 transition-colors uppercase  truncate">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1 mt- pt-2.5 border-t border-slate-50">
          {project.tech.map((techName, idx) => (
            <span
              key={idx}
              className="text-[9px] font-normal text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100"
            >
              {techName}
            </span>
          ))}
        </div>
      </div>
    </a>
  );

  return (
    <section
      id="portfolio"
      className="relative w-full bg-white py-10 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
            <Sparkles size={12} className="text-sky-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">
              Enterprise Case Studies
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold text-slate-900 uppercase ">
            Our Portfolio <span className="text-sky-600">In Motion</span>
          </h2>
        </div>

        {/* RE-ENGINEERED DYNAMIC STAGGERED GRID CANVAS */}
        <div
          className="w-full flex flex-col gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
          onMouseEnter={handleGlobalMouseEnter}
          onMouseLeave={handleGlobalMouseLeave}
        >
          {/* ================== ROW 1 (Moves Right to Left) ================== */}
          {/* On mobile, this represents rows 1 and 3 because slidesPerView splits it to 1 card */}
          <Swiper
            ref={row1Ref}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={4500}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="portfolio-staggered-marquee w-full"
          >
            {datasetRow1.map((project, idx) => (
              <SwiperSlide key={`r1-${idx}`}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            ref={row2Ref}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={4500}
            autoplay={{ delay: 0, disableOnInteraction: false , reverseDirection: true }}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="portfolio-staggered-marquee w-full"
          >
            {datasetRow2.map((project, idx) => (
              <SwiperSlide key={`r1-${idx}`}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
    </section>
  );
}
