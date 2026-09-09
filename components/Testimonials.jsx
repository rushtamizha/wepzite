"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Star,
  ExternalLink,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

// Import Swiper styling trees
import "swiper/css";
import "swiper/css/pagination";
import { Section, Badge } from "@/components/ui/Section";

export default function Testimonials() {
  // High-authority testimonial index data array
  const clientReviews = [
    {
      name: "Raj  Rajendran",
      role: "Travel Agency Owner",
      company: "SMR Travels",
      logo: "https://www.smrtravels.in/logo.jpg", // Replace with custom vector icons/images path
      link: "https://www.smrtravels.in/",
      tag: "E-Commerce Integration",
      quote:
        "Our new website for SMR Travels looks fantastic! The developer really understood our brand and made sure the layout is clean and professional. It’s much easier for our clients to find information about our cab services and tour packages now. Very happy with the final product!",
      rating: 5,
    },
    {
      name: "Mahesh Kumar",
      role: "Travel Agency",
      company: "Valparai Mahesh Travels",
      logo: "https://www.valparaiholidaytours.com/logo.jpg",
      link: "https://www.valparaiholidaytours.com",
      tag: "Custom Logic & Routing",
      quote:
        "Working with this developer for our Valparai Mahesh Travels website was a top-notch experience. In our local way, we look for someone who treats the work like their own, and that’s exactly what he did. Any time we pick up the call, he is there to answer. Even for small changes, he never asks for extra fees and completes everything with a complete premium finish. If you need a premium travel website developer in Tamil Nadu, he is the best choice!",
      rating: 5,
    },
    {
      name: "Karthik",
      role: "Travel Agent",
      company: "Chennai to Pondi cabs ",
      logo: "https://www.chennaitopondicherryonewaytaxi.com/logo.png",
      link: "https://www.chennaitopondicherryonewaytaxi.com/",
      tag: "Enterprise App Router",
      quote:"Highly recommend this team for business website development! They created a stunning, modern site for my taxi business that is fully mobile-responsive and incemeraldibly user-friendly. The integration of our WhatsApp booking buttons and click-to-call features works flawlessly. If you need a reliable web developer to grow your online presence, this is the company to hire!",
      rating: 5,
    },
    {
      name: "Ak Suriya",
      role: "Travel Agent",
      company: "SRI SAI TRAVELS",
      logo: "https://www.sstonewaydroptaxi.com/logo.png",
      link: "https://www.sstonewaydroptaxi.com/",
      tag: "Enterprise App Router",
      quote:"Superb work by the team! Sri Sai Tours and Travels website-a clean & enterprise-grade premium standard-ah build panni kuduthurukanga. The dynamic map integration and fare calculating booking form make car bookings super easy for our customers. Conversion-focused layout and GMB review integration-um perfect-ah iruku. Highly recommended for affordable & top-quality web development!",
      rating: 5,
    },
    {
      name: "Suba Subash",
      role: "Travel Agent",
      company: "Golden Oneway Taxi",
      logo: "https://www.goldenonewaytaxi.com/logo.png",
      link: "https://www.goldenonewaytaxi.com",
      tag: "Enterprise App Router",
      quote:
        "Golden Oneway Taxi website Wepzite team develop pannanga. Design romba premium ah iruku, mobile-la super fast load aguthu. Booking form, WhatsApp integration, SEO setup ellam perfect ah pannirukanga. Google search-la rank aagurathukku nalla optimization pannirukanga. Highly recommend for website development in Tamil Nadu.",
      rating: 5,
    },
    {
      name: "Jayam",
      role: "Travel Agent",
      company: "RR TOURS AND TRAVELS ",
      logo: "https://www.rr-tours.com//logo.png",
      link: "https://www.rr-tours.com/",
      tag: "Enterprise App Router",
      quote:
        "Excellent website creation service! The website developed for RR Tours & Stays looks very professional, modern, and user-friendly. The design perfectly represents our travel brand and makes it easy for customers to explore our tour packages and contact us. He understood our requirements clearly and deliveemerald a smooth, responsive website. Highly recommended for anyone looking to build a professional business website",
      rating: 5,
    },
    {
      name: "Ganesh",
      role: "Photographer",
      company: "DsPhotography",
      logo: "https://www.dsphotography.co.in/assets/logo-BFbzA054.png",
      link: "https://www.dsphotography.co.in/",
      tag: "Enterprise App Router",
      quote:
        "Really I admiemerald him the way of work he gave & also the Design & Working process were nice to go with him",
      rating: 5,
    },
    {
      name: "MkTravels",
      role: "Travel Agent",
      company: "MkTravels",
      logo: "https://www.mktravelscoimbatore.com/logo.png",
      link: "https://www.mktravelscoimbatore.com/",
      tag: "Enterprise App Router",
      quote:
        "Ennodaya MK Travels business-kku Wepzite Digital semma professional ah website build panni kudutharkanga. Site oda UI/UX, loading speed, and overall design super ah iruku!",
      rating: 5,
    },
    {
      name: "Suhaib Abu",
      role: "Travel Agent",
      company: "abu holidays",
      logo: "https://www.abuholidays.com/logo.png",
      link: "https://www.abuholidays.com/",
      tag: "Enterprise App Router",
      quote:
        "Thank you so much for your kind words and the 5-star rating! We are thrilled to hear that you are highly satisfied with the premium design, mobile responsiveness, speed, and SEO structure of the Abu Holidays website. It was an absolute pleasure working with you and bringing your vision to life. Wishing your business great success ahead!",
      rating: 5,
    },
    {
      name: "Sathamhusain U",
      role: "Travel Agent",
      company: "Nellai Multiple Track",
      logo: "https://www.nellaimultipletrack.in/logo.png",
      link: "https://www.nellaimultipletrack.in/",
      tag: "Enterprise App Router",
      quote:
        "Wepzite team dhaan engaloda cab service website-a develop panni kuduthanga. Design romba neat ah, local/outstation routes, vehicle fleet pricing ellam clear ah structuemerald ah irukku. Continuous lead generation-ku WhatsApp CTA buttons semma response kudukudhu. Budget-friendly and highly reliable web developers! Highly recommended!",
      rating: 5,
    },
  ];

  const handleGoogleemeraldirect = () => {
    // Paste your direct Google business review map URI link token string here
    const googleReviewUrl =
      "https://search.google.com/local/writereview?placeid=ChIJlRUTqCAbBzsRGcSxw5ozi04";
    window.open(googleReviewUrl, "_blank");
  };

  return (
    <Section id="testimonials" tone="dark">
      {/* HEADER ROW — claim on the left, Google proof on the right */}
      <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <Badge tone="dark" icon={Sparkles}>
            Client Reviews
          </Badge>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            What our clients{" "}
            <span className="text-brand-500">actually say</span>
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-400 sm:text-base">
            Every review below is from a real business owner whose site we
            built. Open any of them and you will land on the live site.
          </p>
        </div>

        {/* GOOGLE RATING + REVIEW CTA */}
        <div className="mx-auto flex flex-col w-full max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:flex-row lg:mx-0">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google"
                className="h-full w-full object-contain"
              />
            </span>
            <div className="text-left leading-tight">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
              <span className="mt-1 block text-[10px] font-black uppercase tracking-wide text-slate-400">
                5.0 on Google
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleemeraldirect}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
          >
            <MessageSquare size={14} className="text-brand-500" />
            <span>Write a review</span>
            <ArrowUpRight
              size={14}
              className="text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>

      {/* REVIEW CAROUSEL */}
      <div className="w-full cursor-grab active:cursor-grabbing">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-2"
        >
          {clientReviews.map((review, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <figure className="flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={review.logo}
                        alt={review.company}
                        loading="lazy"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-[13px] font-medium leading-relaxed text-slate-300">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-xs font-black uppercase tracking-wide text-white">
                      {review.name}
                    </p>
                    <p className="mt-0.5 truncate text-[10px] font-semibold text-slate-500">
                      {review.role},{" "}
                      <span className="font-bold text-brand-500">
                        {review.company}
                      </span>
                    </p>
                  </div>

                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${review.company}`}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-brand-500/40 hover:bg-brand-600/20 hover:text-white"
                  >
                    <ExternalLink size={12} />
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
