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
  // Day 1 — Kickoff & Coding Begins
  { time: '09:00 AM', event: 'Check-in & Registration', description: 'Team verification and ID distribution' },
  { time: '09:30 AM', event: 'Opening Ceremony & Theme Reveal', description: 'Welcome note, rules overview, and theme announcement' },
  { time: '10:00 AM', event: 'Hackathon Begins', description: 'Code Forge officially kicks off — start building!' },
  { time: '10:00 AM – 01:00 PM', event: 'Phase 1: Planning & Setup', description: 'Brainstorm ideas and set up your development environment' },
  { time: '01:00 PM', event: 'Lunch Break', description: 'Take a break and refuel for the afternoon' },
  { time: '02:00 PM – 07:00 PM', event: 'Phase 2: Hacking Continues', description: 'Collaborate and build — focus on your MVP' },
  { time: '07:00 PM', event: 'Dinner Break', description: 'Relax and network with fellow participants' },
  { time: '08:00 PM – 12:00 AM', event: 'Phase 3: Late Night Coding', description: 'Quiet hours — deep work and debugging' },

  // Day 2 — Mentorship, Review & Final Judging
  { time: '12:00 AM – 07:00 AM', event: 'Early Morning Coding', description: 'Push through the night — refine your prototype' },
  { time: '07:00 AM', event: 'Breakfast Break', description: 'Light meal to kickstart the day' },
  { time: '08:00 AM – 01:00 PM', event: 'Mentorship & Mid-Point Check', description: 'Get guidance from mentors and fine-tune your project' },
  { time: '01:00 PM', event: 'Lunch Break', description: 'Recharge before the final sprint' },
  { time: '06:00 PM – 08:30 PM', event: 'Final Presentations & Judging', description: 'Present your project to the judging panel' },
  { time: '08:30 PM', event: 'Judges Deliberation', description: 'Final evaluation and decision-making' },
  { time: '09:00 PM', event: 'Awards & Closing Ceremony', description: 'Celebrate innovation and announce the winners' },
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
            A carefully crafted 36-hour journey designed to maximize creativity, learning, and innovation.
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
              Don't miss out on this incredible 36-hour journey of innovation and creativity.
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
