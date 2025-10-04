'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function RegisterForm() {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    team_name: '',
    members: '',
    email: '',
    project_idea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([formData]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        team_name: '',
        members: '',
        email: '',
        project_idea: ''
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      ref={formRef}
      className="py-20 px-4 sm:px-6 lg:px-8 fade-in"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-cyber-red mb-6">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-4"></div>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Join the most exciting hackathon of the year. Fill out the form below to secure your spot!
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/60 border border-cyber-red/20 rounded-2xl p-8 md:p-12">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl font-orbitron font-bold text-cyber-red mb-4">
                Registration Successful!
              </h3>
              <p className="text-lg text-cyber-gray/90 mb-6">
                Thank you for registering for Code Forge! We'll send you a confirmation email shortly.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="btn-secondary"
              >
                Register Another Team
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="team_name" className="block text-sm font-semibold text-cyber-gray mb-2">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    id="team_name"
                    name="team_name"
                    value={formData.team_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-red/30 rounded-lg text-cyber-gray placeholder-cyber-gray/50 focus:border-cyber-red focus:outline-none focus:ring-2 focus:ring-cyber-red/20 transition-colors"
                    placeholder="Enter your team name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-cyber-gray mb-2">
                    Team Leader Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-red/30 rounded-lg text-cyber-gray placeholder-cyber-gray/50 focus:border-cyber-red focus:outline-none focus:ring-2 focus:ring-cyber-red/20 transition-colors"
                    placeholder="team@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="members" className="block text-sm font-semibold text-cyber-gray mb-2">
                  Team Members *
                </label>
                <input
                  type="text"
                  id="members"
                  name="members"
                  value={formData.members}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-red/30 rounded-lg text-cyber-gray placeholder-cyber-gray/50 focus:border-cyber-red focus:outline-none focus:ring-2 focus:ring-cyber-red/20 transition-colors"
                  placeholder="Enter names of all team members (2-4 members)"
                />
                <p className="text-sm text-cyber-gray/70 mt-1">
                  Separate names with commas (e.g., John Doe, Jane Smith, Bob Johnson)
                </p>
              </div>

              <div>
                <label htmlFor="project_idea" className="block text-sm font-semibold text-cyber-gray mb-2">
                  Project Idea (Optional)
                </label>
                <textarea
                  id="project_idea"
                  name="project_idea"
                  value={formData.project_idea}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-red/30 rounded-lg text-cyber-gray placeholder-cyber-gray/50 focus:border-cyber-red focus:outline-none focus:ring-2 focus:ring-cyber-red/20 transition-colors resize-none"
                  placeholder="Describe your project idea or leave blank if you want to brainstorm during the event"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm">
                    {errorMessage || 'An error occurred while submitting the form. Please try again.'}
                  </p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary text-lg px-12 py-4 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Register Team'
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-cyber-red/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📅</div>
                <h4 className="font-semibold text-cyber-red mb-1">Registration Deadline</h4>
                <p className="text-sm text-cyber-gray/80">November 20, 2025</p>
              </div>
              <div>
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-semibold text-cyber-red mb-1">Team Size</h4>
                <p className="text-sm text-cyber-gray/80">2-4 members</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-semibold text-cyber-red mb-1">Eligibility</h4>
                <p className="text-sm text-cyber-gray/80">College students only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
