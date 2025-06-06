
import React from 'react';
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            We're here to help with your hearing, speech, and vestibular needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-clinic-blue-dark text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-2 mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-clinic-teal">Address</h4>
                  <p className="mt-1">2nd and 3rd floor TMR Towers,<br />Thubarahalli, Above Kotak Mahindra Bank</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-2 mr-4 mt-1">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-clinic-teal">Phone</h4>
                  <p className="mt-1">+91 9620700649<br />+91 8884550923</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-2 mr-4 mt-1">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-clinic-teal">Email</h4>
                  <p className="mt-1">hear2speakbalance@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-2 mr-4 mt-1">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-clinic-teal">Working Hours</h4>
                  <p className="mt-1">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="h-full w-full rounded-lg overflow-hidden">
              <iframe 
                title="Clinic Location"
                className="w-full h-[450px] border-0" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.239599183632!2d77.6986!3d12.9537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzEzLjMiTiA3N8KwNDEnNTUuMCJF!5e0!3m2!1sen!2sin!4v1621512345678!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
