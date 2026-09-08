"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import PricingAndContact from "@/components/PricingAndContact";
import WhyUsAndTech from "@/components/WhyUsAndTech";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Faq from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import WhyWepzite from "@/components/WhyWepzite";
import ClientLogos from "@/components/ClientLogo";
import Technology from "@/components/Strip";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  useEffect(() => {
    // Respect a reduced-motion preference rather than forcing smooth scroll
    const prefersemeralduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersemeralduced) return;

    const lenis = new Lenis({
      duration: 1,
      lerp: 0.05,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let frame;
    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  /**
   * Section order is deliberate: tones alternate light -> tint -> light -> tint
   * and then hand off to one continuous dark trust block (Why Us + Testimonials)
   * before returning to light for the form and FAQ, closing on the brand band.
   */
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <WhyWepzite />
      < Technology/>
      <PricingAndContact />
      <Testimonials />
      <ClientLogos />
      <Contact />
      <Faq />
      <FinalCta />
    </>
  );
}
