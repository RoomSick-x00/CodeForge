"use client";

import { useEffect, useRef } from "react";

interface Question {
  question: string;
  domain: string;
  task: string;
}

export default function Questions() {
  const questionsRef = useRef<HTMLElement>(null);

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

    if (questionsRef.current) {
      observer.observe(questionsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const questions: Question[] = [
    {
      question: "Develop an AI-powered system that suggests personalized courses, career paths, and relevant university resources based on a student's academic profile (major, GPA, project keywords) and desired job role.",
      domain: "AI/ML (Primary) with WebDev (Secondary)",
      task: "Recommendation Engine & Frontend Design. The core task is to implement the recommendation logic and create an intuitive visualization dashboard."
    },
    {
      question: "Create a full-stack web application that visualizes the consumption (simulated or real-time) of a specific campus resource (e.g., electricity, water, or cafeteria waste) to motivate behavioral change and resource reduction.",
      domain: "WebDev (Full-Stack)",
      task: "Data Visualization & Persuasion Design. The core task is building the web app infrastructure and creating compelling, actionable visualizations."
    },
    {
      question: "Design an AI-powered interface (like a chatbot or a 'Scheme Finder' tool) to simplify the process of tracking government applications, filing grievances, or checking eligibility for a single, specific government scheme.",
      domain: "AI/ML (Primary) with WebDev/Messaging API (Secondary)",
      task: "Conversational AI & Knowledge Retrieval. The core task is implementing the logic to understand a user's question and pull the correct, simplified answer from a dataset."
    },
    {
      question: "Develop a platform to provide accessible, real-time, or predicted information for public transport (buses, shared taxis) in a hilly region, addressing the lack of centralized, up-to-date schedule information.",
      domain: "WebDev (Full-Stack/Mobile Focus)",
      task: "Geospatial Data Collection & Display. The core task is implementing the front-end interface for check-ins and the back-end logic to store and retrieve location data efficiently."
    },
    {
      question: "Propose and build a solution for a real-world problem by demonstrating how a Web3/Blockchain component fundamentally improves trust, transparency, or decentralization compared to a traditional system.",
      domain: "Web3/Blockchain",
      task: "Smart Contract Development & Basic DApp Interface. The core task is writing and deploying the smart contract logic and creating a minimal front-end to interact with it."
    },
    {
      question: "Build an AI-driven platform that predicts crop yield and recommends optimal crop rotation/sustainable practices based on simulated or real data like soil health, weather patterns, and satellite data.",
      domain: "AI/ML (Primary)",
      task: "Predictive Modeling & Feature Engineering. The core task is cleaning the data, selecting relevant features, and training the predictive model."
    },
    {
      question: "How can a gamified, trust-based digital platform incentivize tourists towards eco-friendly behavior (e.g., waste management) and promote sustainably certified businesses (\"Green Stamp\") to mitigate the environmental pressure on Himachal Pradesh's fragile ecosystem?",
      domain: "WebDev (Primary, for mobile-first app) & Web3/Blockchain (for verifiable rewards)",
      task: "Incentive System & Trust Layer Implementation. The core task is to build a full-stack system that ensures the integrity and non-repudiation of the eco-point issuance (using Geo-stamping/Web3 proof) and provides a trustworthy listing of verified businesses."
    }
  ];

  return (
    <section
      id="questions"
      ref={questionsRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyber-dark/95 to-cyber-dark fade-in"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-cyber-red mb-6">
            Problem Statements
          </h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-4"></div>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Explore the challenges and opportunities presented in this hackathon.
          </p>
        </div>

        <div className="space-y-8">
          {questions.length > 0 ? (
            questions.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/60 border border-cyber-red/20 rounded-2xl p-8 hover:border-cyber-red/40 transition-colors duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-cyber-red mb-4">
                    Question {index + 1}
                  </h3>
                  <p className="text-xl text-white leading-relaxed">
                    {item.question}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-cyber-dark/50 border border-cyber-red/10 rounded-lg p-6">
                    <h4 className="text-lg font-orbitron font-semibold text-cyber-red mb-3">
                      Domain
                    </h4>
                    <p className="text-cyber-gray/90">{item.domain}</p>
                  </div>

                  <div className="bg-cyber-dark/50 border border-cyber-red/10 rounded-lg p-6">
                    <h4 className="text-lg font-orbitron font-semibold text-cyber-red mb-3">
                      Task
                    </h4>
                    <p className="text-cyber-gray/90">{item.task}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-cyber-gray/60 text-lg">
                Questions will be added soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
