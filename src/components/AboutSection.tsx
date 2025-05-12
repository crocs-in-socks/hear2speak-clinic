
import React from 'react';
import { Headphones, FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">About Hear2Speak Clinic</h2>
          <p className="section-subtitle">Dedicated to Excellence in Hearing, Speech, and Vestibular Care</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <div className="bg-clinic-green-light p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-3 mr-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-blue-dark mb-2">Our Mission</h3>
                  <p className="text-clinic-grey">
                    At Hear2Speak, our mission is to improve the quality of life for individuals with hearing, 
                    speech, and balance disorders through comprehensive assessment, personalized treatment, 
                    and compassionate care. We strive to be a trusted resource for our patients and their families.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-clinic-green-light p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-clinic-teal rounded-full p-3 mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-blue-dark mb-2">Our Approach</h3>
                  <p className="text-clinic-grey">
                    We believe in a patient-centered approach, combining the latest diagnostic technology 
                    with personalized care plans. Our team of certified audiologists and speech-language 
                    pathologists work together to ensure comprehensive care for all our patients, from 
                    children to adults.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-clinic-blue-dark rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Why Choose Hear2Speak?</h3>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-clinic-teal rounded-full mr-3"></div>
                <span>State-of-the-art diagnostic equipment</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-clinic-teal rounded-full mr-3"></div>
                <span>Highly qualified and experienced professionals</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-clinic-teal rounded-full mr-3"></div>
                <span>Comprehensive hearing, speech, and balance assessments</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-clinic-teal rounded-full mr-3"></div>
                <span>Personalized treatment plans for each patient</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-clinic-teal rounded-full mr-3"></div>
                <span>Advanced hearing aid technology and fitting expertise</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-clinic-teal rounded-full mr-3"></div>
                <span>Ongoing support and counseling for patients and families</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-clinic-teal rounded-full mr-3"></div>
                <span>Comfortable and welcoming clinic environment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
