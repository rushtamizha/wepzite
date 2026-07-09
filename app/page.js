"use client"
import Contact from '@/components/Contact'
import Faq from '@/components/FAQ'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import PricingAndContact from '@/components/PricingAndContact'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhyUsAndTech from '@/components/WhyUsAndTech'
import React from 'react'
import { ReactLenis } from '@studio-freight/react-lenis';
const page = () => {
  return (
    <ReactLenis root >
      <Hero/>
      <Portfolio/>
      <Services/>
      <PricingAndContact/>
      <WhyUsAndTech/> 
      <Contact/> 
      <Testimonials/> 
      <Faq/> 
    </ReactLenis>
  )
}

export default page