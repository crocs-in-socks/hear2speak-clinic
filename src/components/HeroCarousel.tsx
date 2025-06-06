
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Updated images with the user's uploaded images
const carouselImages = [
  {
    url: "/lovable-uploads/0b89e2e4-a3f8-421a-81d3-0bed4b9d5d4e.png",
    alt: "Professional audiologist conducting hearing test",
    title: "Comprehensive Hearing Assessment",
    description: "Advanced diagnostic equipment for accurate hearing evaluations and personalized care."
  },
  {
    url: "/lovable-uploads/ba5d3b72-d2ab-4dd2-9a14-5c6fc8dcaf19.png",
    alt: "Speech therapy session with child and therapist",
    title: "Expert Speech & Language Therapy",
    description: "Specialized therapy sessions for all ages to improve communication skills."
  },
  {
    url: "/lovable-uploads/d1d87cbe-f70a-427a-b7e0-e2a5f4bb55ce.png",
    alt: "Modern hearing aids and assistive devices",
    title: "Latest Hearing Technology",
    description: "Wide range of hearing aids and assistive devices from leading manufacturers."
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
