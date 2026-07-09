"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, ExternalLink, Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";

// Import Swiper styling trees
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  
  // High-authority testimonial index data array
  const clientReviews = [
    {
      name: "Rajesh Kumar",
      role: "Managing Director",
      company: "Vedic Luxury Stays",
      logo: "🏨", // Replace with custom vector icons/images path
      link: "https://vedicstays.in",
      tag: "E-Commerce Integration",
      quote: "Wepzite completely transformed our digital infrastructure. Our bounce rate plummeted after moving to their Next.js architecture, and the integrated automated WhatsApp lead funnel has turned our cold website traffic into consistent bookings.",
      rating: 5
    },
    {
      name: "Ananya Sen",
      role: "Operations Head",
      company: "Pondy Tour & Fleet Services",
      logo: "🚖",
      link: "#",
      tag: "Custom Logic & Routing",
      quote: "Absolute masters of premium UI/UX design. They built a custom taxi dispatch interface that coordinates booking vectors cleanly. The system performance is blindingly fast, and our organic local SEO visibility skyrocketed within weeks of indexing.",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      role: "Founder",
      company: "Apex Logistics Group",
      logo: "📦",
      link: "#",
      tag: "Enterprise App Router",
      quote: "We spent months dealing with slow, bloated WordPress platforms before finding Wepzite. They re-engineered our platform into a lightweight, high-performance web application. Absolute 10-out-of-10 enterprise communication.",
      rating: 5
    }
  ];

  const handleGoogleRedirect = () => {
    // Paste your direct Google business review map URI link token string here
    const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJlRUTqCAbBzsRGcSxw5ozi04";
    window.open(googleReviewUrl, "_blank");
  };

  return (
    <section id="testimonials" className="relative w-full bg-white py-10 px-4 overflow-hidden">
      {/* Absolute radial tracking highlight decoration element */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* ==================== DYNAMIC HEADER METRIC GRID ROW ==================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-slate-100 pb-10">
          
          {/* Left Block Text */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-200/60 mb-4">
              <Sparkles size={12} className="text-sky-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Verified Client Authority</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase ">
              Enterprise <span className="text-sky-600">Client Reviews</span>
            </h2>
            <p className="mt-3 text-slate-500 font-medium text-xs sm:text-sm normal-case leading-relaxed">
              Real metrics from fast-growing businesses that trusted us to dismantle their technical overhead and optimize their web conversion funnels.
            </p>
          </div>

          {/* Right Block: High-Intent Google Link & Aggregate Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-50/80 border border-slate-200/50 p-4 rounded-3xl backdrop-blur-md shadow-2xs mx-auto lg:mx-0">
            {/* Google Vector Icon Core Badge Summary */}
            <div className="flex items-center gap-3 pr-4 border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-3 sm:pb-0">
              <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center text-md font-bold select-none">
                <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">G</span>
              </div>
              <div className="text-left leading-tight">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 mt-1 block">5.0 Star Rating</span>
              </div>
            </div>

            {/* Direct Map review routing push trigger node */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleRedirect}
              className="flex items-center gap-2 py-2.5 px-5 bg-white border border-slate-200 hover:border-sky-300 rounded-full text-xs font-black uppercase tracking-wider text-slate-700 hover:text-sky-600 shadow-3xs transition-colors"
            >
              <MessageSquare size={13} className="text-sky-500" />
              <span>Write Google Review</span>
              <ArrowUpRight size={13} className="text-slate-400" />
            </motion.button>
          </div>

        </div>

        {/* ==================== ACTIVE SWIPER CAROUSEL GRID PANELS ==================== */}
        <div className="w-full testimonial-swiper-custom pb-12 cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="w-full h-full"
          >
            {clientReviews.map((review, idx) => (
              <SwiperSlide key={idx} className="h-full flex">
                <div className="bg-white rounded-3xl border border-sky-100 p-6 shadow-[0_4px_20px_rgba(14,165,233,0.01)] hover:shadow-[0_12px_30px_rgba(14,165,233,0.05)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between items-stretch text-left w-full h-full">
                  
                  {/* Top Block Details */}
                  <div>
                    {/* Header: Logo + Star Cluster */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-50">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shadow-2xs">
                        {review.logo}
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    {/* Review Text Area */}
                    <blockquote className="text-xs text-slate-500 font-medium leading-relaxed normal-case min-h-[100px]">
                      "{review.quote}"
                    </blockquote>
                  </div>

                  {/* Bottom Corporate Footnote Area */}
                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between gap-4">
                    <div className="leading-tight">
                      <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">{review.name}</h4>
                      <p className="text-[10px] font-semibold text-slate-400 mt-0.5 normal-case">
                        {review.role}, <span className="text-sky-600 font-bold uppercase tracking-tight">{review.company}</span>
                      </p>
                    </div>

                    {/* Absolute outbound validation link tracking anchors */}
                    <a 
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 bg-slate-50 hover:bg-sky-50 text-slate-400 hover:text-sky-600 rounded-full border border-slate-200/60 hover:border-sky-200 flex items-center justify-center transition-all flex-shrink-0 shadow-3xs"
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
