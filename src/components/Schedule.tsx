'use client';

import { useEffect, useRef } from 'react';

export default function Schedule() {
  const scheduleRef = useRef<HTMLElement>(null);

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

    if (scheduleRef.current) {
      observer.observe(scheduleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const schedule = [
    { time: '09:00', event: 'Registration & Welcome', description: 'Check-in, team formation, and opening ceremony' },
    { time: '10:00', event: 'Hackathon Begins', description: '24-hour coding marathon starts now!' },
    { time: '12:00', event: 'Lunch Break', description: 'Fuel up for the afternoon session' },
    { time: '14:00', event: 'Workshop Session 1', description: 'Introduction to modern web technologies' },
    { time: '16:00', event: 'Mentorship Round', description: 'Get guidance from industry experts' },
    { time: '18:00', event: 'Dinner Break', description: 'Recharge and network with fellow hackers' },
    { time: '20:00', event: 'Workshop Session 2', description: 'Advanced development techniques' },
    { time: '22:00', event: 'Midnight Snacks', description: 'Late-night coding fuel' },
    { time: '02:00', event: 'Night Owl Session', description: 'Keep the momentum going!' },
    { time: '06:00', event: 'Sunrise Breakfast', description: 'Welcome the new day with energy' },
    { time: '08:00', event: 'Final Sprint', description: 'Last push to complete your projects' },
    { time: '09:30', event: 'Submission Deadline', description: 'All projects must be submitted' },
    { time: '10:00', event: 'Judging & Demos', description: 'Present your amazing creations' },
    { time: '12:00', event: 'Awards Ceremony', description: 'Celebrate the winners and achievements' },
  ];

  return (
    <section
      id="schedule"
      ref={scheduleRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyber-dark to-cyber-dark/95 fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-cyber-red mb-6">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-4"></div>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            A carefully crafted 24-hour journey designed to maximize creativity, learning, and innovation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-red/30 transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyber-red rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-cyber-dark"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-cyber-dark/50 border border-cyber-red/20 rounded-lg p-6 hover:border-cyber-red/40 transition-colors duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl font-orbitron font-bold text-cyber-red mr-4">
                        {item.time}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {item.event}
                      </h3>
                    </div>
                    <p className="text-cyber-gray/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-cyber-red/10 border border-cyber-red/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-3">
              Ready to Join?
            </h3>
            <p className="text-cyber-gray/90 mb-4">
              Don't miss out on this incredible 24-hour journey of innovation and creativity.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('register');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
