
import React from 'react';
import { Headphones, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-clinic-blue-dark text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Headphones className="w-6 h-6 text-clinic-teal mr-2" />
              <h3 className="text-xl font-bold">
                Hear<span className="text-clinic-teal">2</span>Speak
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to improving lives through better hearing, speech, and balance health. Our team of experts provides comprehensive care using the latest technology and techniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-clinic-teal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-clinic-teal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-clinic-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors"
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
                  className="text-gray-300 hover:text-clinic-teal transition-colors"
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
                  className="text-gray-300 hover:text-clinic-teal transition-colors"
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
                  href="#appointment" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-300 hover:text-clinic-teal transition-colors"
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
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors">
                  Hearing Aids
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors">
                  Speech and Language Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors">
                  Diagnostic Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors">
                  Vestibular Assessment
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-clinic-teal transition-colors">
                  Hearing Protection
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-clinic-teal mr-2 mt-1" />
                <span className="text-gray-300">
                  2nd and 3rd floor TMR Towers, Thubarahalli, Above Kotak Mahindra Bank
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-clinic-teal mr-2" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 1234567890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-clinic-teal mr-2" />
                <a href="mailto:hear2speakbalance@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  hear2speakbalance@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Hear2Speak Hearing, Speech and Vestibular Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
