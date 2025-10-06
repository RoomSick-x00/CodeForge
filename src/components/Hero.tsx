'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden fade-in"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 via-cyber-dark/90 to-cyber-dark z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-40">
        {/* Subheading */}
        <div className="mb-4">
          <p className="text-lg sm:text-xl text-cyber-gray/80 font-light tracking-wider">
            Chaitanya 1.0 Presents
          </p>
        </div>

        {/* Main Title with Glitch Effect */}
        <div className="mb-8">
          <h1
            className="glitch text-4xl sm:text-6xl lg:text-8xl font-orbitron font-black leading-tight"
            data-text="CODE FORGE"
          >
            CODE FORGE
          </h1>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl lg:text-2xl text-cyber-gray/90 leading-relaxed">
            A 36-hour college hackathon — ideate, build, and pitch.
          </p>
          <p className="text-lg sm:text-xl text-cyber-red font-semibold mt-2">
            November, 2025
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('register')}
            className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
          >
            Register Now
          </button>
          <button
            onClick={() => scrollToSection('schedule')}
            className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
          >
            View Schedule
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-red/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-red/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
