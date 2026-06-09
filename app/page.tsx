"use client";

import { useEffect, useState } from "react";

import IntroSplash from "@/components/IntroSplash";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAAndFooter from "@/components/CTAAndFooter";
import GallerySection from "@/components/Gallery";
import BookingModal from "@/components/BookingModal";
import ScrollReveal from "@/components/ScrollReveal";


export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 2200);
    const t2 = setTimeout(() => setLogoVisible(true), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <IntroSplash loaded={loaded} />
      <NavBar
        logoVisible={logoVisible}
        onBookNow={() => setShowBooking(true)}
      />

      <HeroSection onBookNow={() => setShowBooking(true)} />

      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal>
        <GallerySection />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhySection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal>
        <CTAAndFooter  onBookNow={() => setShowBooking(true)}/>
      </ScrollReveal>

      <BookingModal
        open={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </>
  );
}