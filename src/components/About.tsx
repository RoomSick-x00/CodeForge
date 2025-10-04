'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-4 sm:px-6 lg:px-8 fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-cyber-red mb-6">
            About Code Forge
          </h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-cyber-gray/90 leading-relaxed">
              Code Forge is a 24-hour intensive hackathon that brings together the brightest minds 
              from colleges across the region. It's not just about coding—it's about innovation, 
              collaboration, and pushing the boundaries of what's possible.
            </p>
            <p className="text-lg text-cyber-gray/90 leading-relaxed">
              Whether you're a seasoned developer or just starting your coding journey, Code Forge 
              provides the perfect platform to showcase your skills, learn from peers, and build 
              something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-cyber-red/10 border border-cyber-red/20 rounded-lg px-4 py-2">
                <span className="text-cyber-red font-semibold">24 Hours</span>
                <p className="text-sm text-cyber-gray/70">Non-stop coding</p>
              </div>
              <div className="bg-cyber-red/10 border border-cyber-red/20 rounded-lg px-4 py-2">
                <span className="text-cyber-red font-semibold">Teams of 2-4</span>
                <p className="text-sm text-cyber-gray/70">Collaborate & build</p>
              </div>
              <div className="bg-cyber-red/10 border border-cyber-red/20 rounded-lg px-4 py-2">
                <span className="text-cyber-red font-semibold">All Levels</span>
                <p className="text-sm text-cyber-gray/70">Beginner to expert</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyber-red/10 to-cyber-red/5 rounded-2xl p-8 border border-cyber-red/20">
              <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-cyber-gray/90">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Intensive coding sessions with mentorship</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Networking with industry professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Workshops on cutting-edge technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Pitch your ideas to expert judges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Win amazing prizes and recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
