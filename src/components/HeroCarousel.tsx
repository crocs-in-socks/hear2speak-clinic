
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Updated images with the user's uploaded images
const carouselImages = [
  {
    url: "/lovable-uploads/4c333741-29fd-46d7-8cc0-3307f8584d9f.png",
    alt: "Complete range of hearing aids from BTE to CIC models",
    title: "Advanced Hearing Solutions",
    description: "Complete range of hearing aids including BTE, RIC, ITC, and CIC models for every hearing need."
  },
  {
    url: "/lovable-uploads/3ad9d88e-6c90-4175-b159-0421c15b334f.png",
    alt: "Speech therapy session with children using therapeutic tools",
    title: "Pediatric Speech & Language Therapy",
    description: "Specialized therapy sessions for children to improve communication and language development."
  },
  {
    url: "/lovable-uploads/2826f35f-ae9a-413a-9045-28959b6301a1.png",
    alt: "Child receiving hearing assessment with audiometry equipment",
    title: "Professional Hearing Assessment",
    description: "Comprehensive hearing evaluations using state-of-the-art audiometric equipment for all ages."
  },
  {
    url: "/lovable-uploads/59d0cf33-a037-419b-aa3f-cc4446423e9b.png",
    alt: "Modern audiometry equipment and testing station",
    title: "Advanced Diagnostic Equipment",
    description: "Modern audiometry and vestibular testing equipment for accurate diagnosis and treatment planning."
  },
  {
    url: "/lovable-uploads/90afb042-97dd-4113-94b3-e79c3cad5bf7.png",
    alt: "Comfortable clinic consultation room with patient",
    title: "Comfortable Treatment Environment",
    description: "Welcoming and comfortable consultation rooms designed for optimal patient care and communication."
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
              {image.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-10 max-w-2xl">
              {image.description}
            </p>
          </div>
        ))}
        <div className="mt-6">
          <button 
            onClick={scrollToContact}
            className="bg-clinic-teal hover:bg-clinic-teal-dark text-white text-xl md:text-2xl px-8 py-8 rounded transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
