
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Headphones, Menu, X } from "lucide-react";

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
          <Headphones className="w-8 h-8 text-clinic-teal mr-2" />
          <h1 className="text-xl md:text-2xl font-bold text-clinic-blue-dark">
            Hear<span className="text-clinic-teal">2</span>Speak
          </h1>
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
          <Button 
            onClick={() => scrollToSection('appointment')}
            className="bg-clinic-teal hover:bg-clinic-teal-dark text-white"
          >
            Book Appointment
          </Button>
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
            <Button 
              onClick={() => scrollToSection('appointment')}
              className="w-full bg-clinic-teal hover:bg-clinic-teal-dark text-white"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
