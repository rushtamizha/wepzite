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
