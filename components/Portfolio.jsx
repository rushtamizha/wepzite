"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExternalLink, Sparkles } from "lucide-react";

// Import Swiper styles core
import "swiper/css";

export default function Portfolio() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Balanced split dataset to feed into opposite directions smoothly
  const datasetRow1 = [
    {
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "/Portfolio/www.chennaitopondicherryonewaytaxi.com.webp",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    }
  ];
  const datasetRow3 = [
    {
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    }
  ];
  const datasetRow4 = [
    {
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    },{
      title: "Wepzite Marketing Hub",
      category: "Enterprise Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://wepzite.in",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Elite Fleet Management",
      category: "Cab Automation",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["React", "WhatsApp API"]
    },
    {
      title: "Smart Logistics Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Firebase", "Next.js"]
    }
  ];

  const datasetRow2 = [
    {
      title: "Luxury Stay Showcase",
      category: "Hospitality UI",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Next.js", "On-Page SEO"]
    },
    {
      title: "Global E-Com Engine",
      category: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Secure Cart Logic", "APIs"]
    },
    {
      title: "AI Branding Studio",
      category: "Digital Assets",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      link: "#",
      tech: ["Vector Graphics", "UI System"]
    }
  ];

  // Manual hover triggers targeting all running loops simultaneously
  const handleGlobalMouseEnter = () => {
    row1Ref.current?.swiper?.autoplay?.stop();
    row2Ref.current?.swiper?.autoplay?.stop();
  };

  const handleGlobalMouseLeave = () => {
    row1Ref.current?.swiper?.autoplay?.start();
    row2Ref.current?.swiper?.autoplay?.start();
  };

  // Reusable card template layer
  const ProjectCard = ({ project }) => (
    <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative bg-white border border-sky-100 rounded-3xl p-3.5 overflow-hidden shadow-[0_4px_15px_rgba(14,165,233,0.01)] hover:shadow-[0_10px_25px_rgba(14,165,233,0.05)] hover:border-sky-300 transition-all duration-500"
    >
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-slate-50 border border-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-sky-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
          <div className="w-9 h-9 bg-white text-sky-600 rounded-full flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ExternalLink size={14} />
          </div>
        </div>
      </div>
      <div className="mt-4 text-left">
        <span className="text-[9px] font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
          {project.category}
        </span>
        <h3 className="text-sm font-bold text-slate-800 mt-2.5 group-hover:text-sky-600 transition-colors uppercase tracking-tight truncate">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-slate-50">
          {project.tech.map((techName, idx) => (
            <span key={idx} className="text-[9px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
              {techName}
            </span>
          ))}
        </div>
      </div>
    </a>
  );

  return (
    <section id="portfolio" className="relative w-full bg-white py-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
            <Sparkles size={12} className="text-sky-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Enterprise Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tight">
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
              1024: { slidesPerView:4 }
            }}
            className="portfolio-staggered-marquee w-full"
          >
            {datasetRow1.map((project, idx) => (
              <SwiperSlide key={`r1-${idx}`}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ================== ROW 2 (Moves Left to Right) ================== */}
          {/* On mobile, this represents rows 2 and 4, moving in inverse orientation */}
          <Swiper
            ref={row2Ref}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true // Inverts layout motion timeline perfectly
            }}
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
            className="portfolio-staggered-marquee w-full"
          >
            {datasetRow2.map((project, idx) => (
              <SwiperSlide key={`r2-${idx}`}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            ref={row1Ref}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            speed={4500}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
            className="portfolio-staggered-marquee w-full"
          >
            {datasetRow3.map((project, idx) => (
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