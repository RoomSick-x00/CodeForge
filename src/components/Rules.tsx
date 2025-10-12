"use client";

import { useEffect, useRef } from "react";

export default function Rules() {
  const rulesRef = useRef<HTMLElement>(null);

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

    if (rulesRef.current) {
      observer.observe(rulesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ruleCategories = [
    {
      title: "General Rules",
      icon: "📋",
      rules: [
        "All participants must be registered college students with a valid student ID.",
        "Teams must consist of a minimum of 3 and a maximum of 5 members.",
        "Registration is mandatory before the event starts.",
        "All participants must adhere to the official Code of Conduct promoting respect, collaboration, and fair play.",
        "Any form of harassment, discrimination, or unfair practices will result in disqualification.",
        "Respect mentors, judges, organizers, and fellow participants at all times.",
      ],
    },
    {
      title: "Project Rules",
      icon: "💻",
      rules: [
        "All core code and assets must be created during the 36-hour hackathon period.",
        "Use of open-source libraries, frameworks, and APIs is allowed.",
        "Pre-built or personal/commercial code cannot form the main functionality of your submission.",
        "Projects must be original and not previously submitted to any other event.",
        "All team members should contribute meaningfully to the project.",
        "Hardware projects are permitted if they fit the event’s theme and constraints.",
      ],
    },
    {
      title: "Submission Rules",
      icon: "📤",
      rules: [
        "All submissions must be uploaded before the 36-hour deadline.",
        "Submissions should include a functional project demo or live site link.",
        "Include a brief project description and list of technologies used.",
        "Provide access to your project’s source code repository (e.g., GitHub).",
        "Ensure your project is well-documented and ready for judging.",
        "Late submissions will not be considered.",
      ],
    },
    {
      title: "Judging Criteria",
      icon: "⚖️",
      rules: [
        "Innovation & Creativity (30%) — Originality and uniqueness of the idea.",
        "Technical Complexity (25%) — Implementation depth and technology use.",
        "Completion & Functionality (25%) — Working prototype quality and stability.",
        "Presentation & UI/UX (20%) — Clarity, polish, and overall user experience.",
        "Projects will be evaluated by faculty and invited industry experts.",
      ],
    },
  ];

  return (
    <section
      id="rules"
      ref={rulesRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyber-dark/95 to-cyber-dark fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-cyber-red mb-6">
            Rules & Guidelines
          </h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-4"></div>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Please read and follow these rules to ensure a fair and enjoyable
            hackathon experience for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ruleCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyber-dark/60 to-cyber-dark/40 border border-cyber-red/20 rounded-xl p-6 hover:border-cyber-red/40 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{category.icon}</div>
                <h3 className="text-2xl font-orbitron font-bold text-cyber-red">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-cyber-gray/90 leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-cyber-red/10 to-cyber-red/5 border-l-4 border-cyber-red rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="text-2xl mr-4">⚠️</div>
            <div>
              <h3 className="text-xl font-bold text-cyber-red mb-2">
                Important Notice
              </h3>
              <p className="text-cyber-gray/90 leading-relaxed">
                Violation of any rules may result in disqualification. If you
                have any questions about the rules, please contact the
                organizers before the event starts. We're here to help ensure
                everyone has a great experience!
              </p>
            </div>
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/60 border border-cyber-red/20 rounded-xl p-8">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-3 text-center">
            Code of Conduct
          </h3>
          <div className="h-[2px] w-24 bg-cyber-red mx-auto mb-8 shadow-[0_0_10px_rgba(255,0,0,0.4)]"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ✅ Do’s */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">✅ Do's</h4>
              <ul className="space-y-2 text-cyber-gray/90">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>{" "}
                  Treat all participants, mentors, and organizers with respect
                  and professionalism.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>{" "}
                  Collaborate openly and help others when possible — teamwork is
                  encouraged.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>{" "}
                  Maintain integrity — write your own code and give proper
                  credit for any libraries or assets used.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>{" "}
                  Keep the workspace clean and follow all event safety and venue
                  guidelines.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>{" "}
                  Have fun, experiment, and make the most of this learning
                  experience!
                </li>
              </ul>
            </div>

            {/* ❌ Don’ts */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                ❌ Don'ts
              </h4>
              <ul className="space-y-2 text-cyber-gray/90">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>{" "}
                  Engage in harassment, discrimination, or disrespectful
                  behavior of any kind.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>{" "}
                  Copy or reuse pre-built code that violates the originality
                  rule.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>{" "}
                  Tamper with or disrupt other teams’ projects or setups.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>{" "}
                  Violate event guidelines, judging fairness, or submission
                  deadlines.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>{" "}
                  Misuse event resources, facilities, or internet access for
                  non-productive or malicious purposes.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-cyber-gray/80 mt-8 text-sm italic">
            All participants are expected to uphold these principles throughout
            the 36-hour event. Violations may result in disqualification or
            removal from the venue.
          </p>

          <p className="text-center text-cyber-gray/70 mt-2 text-sm">
            If you experience or observe misconduct, please contact any
            organizer or volunteer immediately.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-cyber-gray/80 mb-4">
            Questions about the rules? Contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:mail.priyanshu.79@gmail.com"
              className="text-cyber-red hover:text-red-400 transition-colors font-semibold"
            >
              mail.priyanshu.79@gmail.com
            </a>
            <span className="hidden sm:block text-cyber-gray/50">•</span>
            <a
              href="tel:+91-9805267720"
              className="text-cyber-red hover:text-red-400 transition-colors font-semibold"
            >
              +91-9805267720
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
