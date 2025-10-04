'use client';

import { useEffect, useRef } from 'react';

export default function Rules() {
  const rulesRef = useRef<HTMLElement>(null);

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

    if (rulesRef.current) {
      observer.observe(rulesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ruleCategories = [
    {
      title: 'General Rules',
      icon: '📋',
      rules: [
        'All participants must be college students with valid student ID',
        'Teams must consist of 2-4 members',
        'Registration is mandatory before the event starts',
        'All participants must follow the code of conduct',
        'Respect all fellow participants and organizers',
        'No harassment or inappropriate behavior will be tolerated'
      ]
    },
    {
      title: 'Project Rules',
      icon: '💻',
      rules: [
        'All code must be written during the 24-hour hackathon period',
        'Use of pre-written code is strictly prohibited',
        'Projects must be original and not previously submitted',
        'All team members must contribute to the project',
        'Projects must be submitted before the deadline',
        'Source code must be made available for review'
      ]
    },
    {
      title: 'Submission Rules',
      icon: '📤',
      rules: [
        'Submit your project through the official platform',
        'Include a README file with setup instructions',
        'Provide a 2-minute demo video of your project',
        'Prepare a 5-minute presentation for judging',
        'Include all necessary documentation',
        'Ensure your project is fully functional'
      ]
    },
    {
      title: 'Judging Criteria',
      icon: '⚖️',
      rules: [
        'Innovation and creativity (25%)',
        'Technical implementation (25%)',
        'User experience and design (20%)',
        'Problem-solving approach (15%)',
        'Presentation and pitch (15%)',
        'Overall impact and potential (10%)'
      ]
    }
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
            Please read and follow these rules to ensure a fair and enjoyable hackathon experience for everyone.
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
                    <span className="text-cyber-gray/90 leading-relaxed">{rule}</span>
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
              <h3 className="text-xl font-bold text-cyber-red mb-2">Important Notice</h3>
              <p className="text-cyber-gray/90 leading-relaxed">
                Violation of any rules may result in disqualification. If you have any questions about the rules, 
                please contact the organizers before the event starts. We're here to help ensure everyone has a great experience!
              </p>
            </div>
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/60 border border-cyber-red/20 rounded-xl p-8">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-6 text-center">
            Code of Conduct
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">✅ Do's</h4>
              <ul className="space-y-2 text-cyber-gray/90">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Be respectful and inclusive
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Help fellow participants
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Ask questions when in doubt
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Have fun and learn
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">❌ Don'ts</h4>
              <ul className="space-y-2 text-cyber-gray/90">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Use inappropriate language
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Plagiarize or cheat
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Disrupt other teams
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Violate any rules
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-cyber-gray/80 mb-4">
            Questions about the rules? Contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:codeforge@chaitanya.edu" 
              className="text-cyber-red hover:text-red-400 transition-colors font-semibold"
            >
              codeforge@chaitanya.edu
            </a>
            <span className="hidden sm:block text-cyber-gray/50">•</span>
            <a 
              href="tel:+91-9876543210" 
              className="text-cyber-red hover:text-red-400 transition-colors font-semibold"
            >
              +91-9876543210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
