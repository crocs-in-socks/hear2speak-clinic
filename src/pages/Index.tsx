
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import AppointmentForm from '@/components/AppointmentForm';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Hear2Speak Hearing, Speech and Vestibular Clinic';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <AppointmentForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
