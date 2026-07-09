"use client"
import Contact from '@/components/Contact'
import Faq from '@/components/FAQ'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import PricingAndContact from '@/components/PricingAndContact'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhyUsAndTech from '@/components/WhyUsAndTech'
import React, { useEffect } from 'react'
import Lenis from "lenis";
const page = () => {
    useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div >
      <Hero/>
      <Portfolio/>
      <Services/>
      <PricingAndContact/>
      <WhyUsAndTech/> 
      <Contact/> 
      <Testimonials/> 
      <Faq/> 
    </div>
  )
}

export default page