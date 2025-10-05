'use client';

import { useEffect, useRef } from 'react';

export default function Prizes() {
  const prizesRef = useRef<HTMLElement>(null);

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

    if (prizesRef.current) {
      observer.observe(prizesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prizes = [
    {
      position: '1st Place',
      amount: '₹10,000',
      icon: '🥇',
      description: 'Grand Prize Winner',
      perks: ['Cash Prize', 'Medal', 'Certificates', 'Mentorship Opportunity']
    },
    {
      position: '2nd Place',
      amount: '₹5,000',
      icon: '🥈',
      description: 'Runner-up',
      perks: ['Cash Prize', 'Medal', 'Certificates']
    },
    {
      position: '3rd Place',
      amount: '₹2,500',
      icon: '🥉',
      description: 'Second Runner-up',
      perks: ['Cash Prize', 'Medal', 'Certificates']
    },
    {
      position: 'Best Innovation',
      amount: '₹500',
      icon: '💡',
      description: 'Most Creative Solution',
      perks: ['Cash Prize', 'Special Recognition', 'Certificates']
    },
    {
      position: 'Best Design',
      amount: '₹500',
      icon: '🎨',
      description: 'Outstanding UI/UX',
      perks: ['Cash Prize', 'Certificates']
    },
    {
      position: 'Best Pitch',
      amount: '₹500',
      icon: '🎤',
      description: 'Most Compelling Presentation',
      perks: ['Cash Prize', 'Recognition', 'Certificates']
    }
  ];

  return (
    <section
      id="prizes"
      ref={prizesRef}
      className="py-20 px-4 sm:px-6 lg:px-8 fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-cyber-red mb-6">
            Prizes & Awards
          </h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-4"></div>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Compete for amazing prizes and recognition. Every participant gets a certificate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/60 border border-cyber-red/20 rounded-xl p-6 hover:border-cyber-red/40 hover:shadow-lg hover:shadow-cyber-red/10 transition-all duration-300"
            >
              {/* Prize Icon */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {prize.icon}
              </div>

              {/* Position & Amount */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-2">
                  {prize.position}
                </h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {prize.amount}
                </div>
                <p className="text-cyber-gray/80 text-sm">
                  {prize.description}
                </p>
              </div>

              {/* Perks */}
              <div className="space-y-2">
                {prize.perks.map((perk, perkIndex) => (
                  <div key={perkIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-cyber-gray/90 text-sm">{perk}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyber-red/10 to-cyber-red/5 border border-cyber-red/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-4">
              Additional Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">For All Participants</h4>
                <ul className="space-y-2 text-cyber-gray/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mr-3"></div>
                    Participation Certificate
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mr-3"></div>
                    Networking Opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mr-3"></div>
                    Access to Workshops
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mr-3"></div>
                    Free Meals & Snacks
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">For Winners</h4>
                <ul className="space-y-2 text-cyber-gray/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mr-3"></div>
                    Industry Mentorship
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mr-3"></div>
                    Portfolio Showcase
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
