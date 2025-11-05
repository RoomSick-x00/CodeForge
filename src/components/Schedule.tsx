"use client";

import { useEffect, useRef } from "react";

export default function Schedule() {
  const scheduleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
    // 🗓️ Day 1 — Ideation & Core Coding (UPDATED)
    {
      time: "09:00 AM – 09:30 AM",
      event: "Opening Ceremony & Workshop",
      description:
        "Welcome note, lamp lighting, and introduction session for first-time participants.",
    },
    {
      time: "09:30 AM – 10:00 AM",
      event: "Workshop by Industry Professional",
      description:
        "Specialized workshop delivered by an industry expert to inspire and share insights.",
    },
    {
      time: "10:00 AM – 10:30 AM",
      event: "Rules & Tech Briefing",
      description:
        "Explanation of hackathon rules, judging criteria, and overview of tech platforms (GitHub, LeetCode, etc.).",
    },
    {
      time: "10:30 AM – 11:00 AM",
      event: "Mentoring Session 1",
      description:
        "Teams meet mentors and judges to discuss initial problem statements and solution ideas.",
    },
    {
      time: "11:00 AM – 01:00 PM",
      event: "Phase 1: Coding Begins",
      description:
        "Teams start developing their initial solutions. Sub-sections are allocated.",
    },
    {
      time: "01:00 PM – 02:00 PM",
      event: "Lunch Break",
      description: "Relax and refuel before continuing your project.",
    },
    {
      time: "02:00 PM – 07:00 PM",
      event: "Phase 2: Continued Coding",
      description:
        "Main coding session with mentors available. No major idea changes after this phase.",
    },
    {
      time: "07:00 PM – 08:00 PM",
      event: "Dinner Break",
      description: "Refresh and relax before the evening check-in.",
    },
    {
      time: "08:00 PM – 08:30 PM",
      event: "Judgment Round (Initial Check-in)",
      description:
        "Quick desk-side evaluation by judges to ensure projects align with problem statements.",
    },
    {
      time: "08:30 PM – 12:00 AM",
      event: "Late Night Coding",
      description:
        "Free development phase for debugging and refining solutions. At least one or two members must stay until midnight.",
    },
  
    // 🌅 Day 2 — Development, Judgment & Finals (REVISED)
    {
      time: "12:00 AM – 05:00 AM",
      event: "Late Night/Early Morning Coding",
      description:
        "overnight coding and debugging session for night owls. At least one or two members must stay.",
    },
    {
      time: "05:00 AM – 07:00 AM",
      event: "Phase 3: PPT Preparation",
      description:
        "One team member finalizes the presentation while others wrap up coding. Include both completed and pending work.",
    },
    {
      time: "07:00 AM – 08:00 AM",
      event: "Breakfast",
      description: "Start the day fresh and ready for judging.",
    },
    {
      time: "08:00 AM – 09:00 AM",
      event: "Judging Round 2 (Progress Review)",
      description:
        "Formal judge review to assess morning progress and provide final guidance.",
    },
    {
      time: "09:00 AM – 01:00 PM",
      event: "Phase 4: Final Development",
      description:
        "Final coding push — complete features and polish your solution.",
    },
    {
      time: "01:00 PM – 02:00 PM",
      event: "Lunch Break",
      description: "Time to relax and recharge before the final stretch.",
    },
    {
      time: "02:00 PM – 05:00 PM",
      event: "Phase 5: Code Freeze & Final Submission",
      description:
        "Last phase of development. Submit and freeze all projects by 5:00 PM.",
    },
    {
      time: "05:00 PM – 09:00 PM",
      event: "Final Presentations & Judging",
      description:
        "PPT-based judging session for shortlisted teams. Present your solution and future plans to the jury panel.",
    },
    {
      time: "09:00 PM – 09:30 PM",
      event: "Closing & Winner Announcement",
      description:
        "Results declared and top 3 winners announced. Rewards and closing ceremony.",
    },
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
            A carefully crafted 36-hour journey designed to maximize creativity,
            learning, and innovation.
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
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyber-red rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-cyber-dark"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
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

        {/* <div className="text-center mt-16">
          <div className="bg-cyber-red/10 border border-cyber-red/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-3">
              Ready to Join?
            </h3>
            <p className="text-cyber-gray/90 mb-4">
              Don't miss out on this incredible 36-hour journey of innovation
              and creativity.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("preregister");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary"
            >
              Pre-Register Now
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
