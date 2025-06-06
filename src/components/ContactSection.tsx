
import React from 'react';
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-clinic-blue-dark">Contact Us</h2>
          <p className="text-xl md:text-2xl text-clinic-grey mb-8 max-w-3xl mx-auto">
            We're here to help with your hearing, speech, and vestibular needs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-clinic-blue-dark text-white p-10 rounded-lg">
            <h3 className="text-3xl md:text-4xl font-semibold mb-8">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-3 mr-6 mt-1">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-2xl text-clinic-teal mb-2">Address</h4>
                  <p className="text-lg">2nd and 3rd floor TMR Towers,<br />Thubarahalli, Above Kotak Mahindra Bank</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-3 mr-6 mt-1">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-2xl text-clinic-teal mb-2">Phone</h4>
                  <p className="text-lg">+91 9620700649<br />+91 8884550923</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-3 mr-6 mt-1">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-2xl text-clinic-teal mb-2">Email</h4>
                  <p className="text-lg">hear2speakbalance@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-3 mr-6 mt-1">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-2xl text-clinic-teal mb-2">Working Hours</h4>
                  <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
