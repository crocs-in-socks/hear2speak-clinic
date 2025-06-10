import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-clinic-blue-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/9791f334-85c5-43a9-87bc-79774db9bedc.png" 
                alt="Hear2Speak Clinic Logo" 
                className="w-12 h-12 mr-3"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Hear<span className="text-clinic-teal">2</span>Speak
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  Centre for Hearing, Speech, and Vestibular Rehabilitation
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-base md:text-lg">
              Dedicated to improving lives through better hearing, speech, and balance health. Our team of experts provides comprehensive care using the latest technology and techniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-clinic-teal transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-clinic-teal transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-clinic-teal transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg">
                  Hearing Aids
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg">
                  Speech and Language Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg">
                  Diagnostic Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg">
                  Vestibular Assessment
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors text-base md:text-lg">
                  Hearing Protection
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-clinic-teal mr-3 mt-1" />
                <span className="text-gray-300 text-base md:text-lg">
                  2nd and 3rd floor TMR Towers, Thubarahalli, Above Kotak Mahindra Bank
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 text-clinic-teal mr-3" />
                <div className="text-gray-300">
                  <a href="tel:+919620700649" className="hover:text-white transition-colors text-base md:text-lg block">
                    +91 9620700649
                  </a>
                  <a href="tel:+918884550923" className="hover:text-white transition-colors text-base md:text-lg">
                    +91 8884550923
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-clinic-teal mr-3" />
                <a href="mailto:hear2speakbalance@gmail.com" className="text-gray-300 hover:text-white transition-colors text-base md:text-lg">
                  hear2speakbalance@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-base">
          <p>
            © {currentYear} Hear2Speak Hearing, Speech and Vestibular Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
