
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/a9284387-e0fc-4021-870e-10316e783593.png" 
            alt="Hear2Speak Clinic Logo" 
            className="h-16 w-auto mr-4"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-clinic-blue-dark leading-tight">
              Hear<span className="text-clinic-teal">2</span>Speak Clinic
            </h1>
            <p className="text-base md:text-lg text-clinic-grey leading-tight">
              Centre for Hearing, Speech, and Vestibular Rehabilitation
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-clinic-grey hover:text-clinic-blue transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-clinic-grey hover:text-clinic-blue transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-clinic-grey hover:text-clinic-blue transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-clinic-grey hover:text-clinic-blue transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-clinic-grey hover:text-clinic-blue transition-colors"
          >
            FAQs
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-clinic-blue-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left py-2 text-clinic-grey hover:text-clinic-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-clinic-grey hover:text-clinic-blue transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-clinic-grey hover:text-clinic-blue transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-clinic-grey hover:text-clinic-blue transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 text-clinic-grey hover:text-clinic-blue transition-colors"
            >
              FAQs
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
