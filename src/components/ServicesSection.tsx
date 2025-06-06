
import React from 'react';
import { Headphones, FileText, Image, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Hearing Aids",
      description: "Wide selection of modern hearing aids from leading manufacturers. We offer expert fitting, programming, and ongoing support.",
      icon: Headphones,
      details: [
        "Comprehensive hearing aid consultation",
        "Digital and analog hearing aids",
        "In-the-ear (ITE) and behind-the-ear (BTE) options",
        "Receiver-in-canal (RIC) hearing aids",
        "In-the-canal (ITC) hearing aids",
        "Completely-in-the-canal (CIC) hearing aids",
        "Invisible hearing aids",
        "Regular maintenance and adjustments"
      ]
    },
    {
      title: "Speech and Language Therapy",
      description: "Personalized therapy for speech, language, and communication disorders for children and adults.",
      icon: FileText,
      details: [
        "Speech and Language Assessments",
        "Pediatric Speech and Language Therapy",
        "Speech sound disorders treatment",
        "Language development therapy",
        "Articulation therapy",
        "Stuttering management",
        "Voice therapy",
        "Adult speech rehabilitation"
      ]
    },
    {
      title: "Diagnostic Services",
      description: "Comprehensive hearing and vestibular assessments using advanced diagnostic equipment.",
      icon: Image,
      details: [
        "Pure tone audiometry",
        "Speech audiometry",
        "Impedance audiometry",
        "Otoacoustic emissions (OAE)",
        "Auditory brainstem response (ABR)",
        "Vestibular function tests"
      ]
    },
    {
      title: "Rehabilitation Programs",
      description: "Specialized programs to improve hearing ability, speech clarity, and communication skills.",
      icon: Calendar,
      details: [
        "Auditory training",
        "Communication strategies",
        "Balance rehabilitation therapy",
        "Group therapy sessions",
        "Home practice programs"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-clinic-grey-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive hearing, speech, and vestibular care tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-clinic-teal">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="bg-clinic-teal/10 p-2 rounded-full mr-3">
                    <service.icon className="h-6 w-6 text-clinic-teal" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-clinic-teal rounded-full mt-2 mr-2"></div>
                      <span className="text-clinic-grey">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
