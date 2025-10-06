"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterForm() {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    team_name: "",
    email: "",
    contact_number: "",
    members: [""],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (name === "members" && typeof index === "number") {
      const updatedMembers = [...formData.members];
      updatedMembers[index] = value;
      setFormData((prev) => ({ ...prev, members: updatedMembers }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addMemberField = () => {
    setFormData((prev) => ({ ...prev, members: [...prev.members, ""] }));
  };

  const removeMemberField = (index: number) => {
    const updatedMembers = [...formData.members];
    updatedMembers.splice(index, 1);
    setFormData((prev) => ({ ...prev, members: updatedMembers }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Check minimum members
    const filledMembers = formData.members.filter((m) => m.trim() !== "");
    if (filledMembers.length < 3) {
      setErrorMessage("You must have at least 3 team members.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("registrations")
        .insert([{ ...formData, members: filledMembers }]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({
        team_name: "",
        email: "",
        contact_number: "",
        members: [""],
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "An error occurred while submitting the form."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="preregister"
      ref={formRef}
      className="py-20 px-4 sm:px-6 lg:px-8 fade-in"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-cyber-red mb-6">
            Preregister Now
          </h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-4"></div>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Join the most exciting hackathon of the year. Fill out the form
            below to secure your spot!
          </p>
        </div>

        {/* Note box about registration fees and preregistration */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-5 mb-8 text-yellow-300 text-center font-medium">
          <p>
            <span className="font-bold">Note:</span> This is a <span className="font-bold">preregistration</span> form. The event has a registration fee. By preregistering, you will be contacted with payment instructions as soon as the payment portal goes live.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/60 border border-cyber-red/20 rounded-2xl p-8 md:p-12">
          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🎉</div>
              <p className="text-lg text-cyber-gray/90 mb-6">
                Thank you for preregistering for Code Forge! We’ll contact you with payment details as soon as the portal is live.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="btn-secondary"
              >
                Preregister Another Team
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="team_name"
                    className="block text-sm font-semibold text-cyber-gray mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-cyber-gray mb-2"
                  >
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
                <label
                  htmlFor="contact_number"
                  className="block text-sm font-semibold text-cyber-gray mb-2"
                >
                  Team Leader Contact Number *
                </label>
                <input
                  type="tel"
                  id="contact_number"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-red/30 rounded-lg text-cyber-gray placeholder-cyber-gray/50 focus:border-cyber-red focus:outline-none focus:ring-2 focus:ring-cyber-red/20 transition-colors"
                  placeholder="+1 234 567 890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-cyber-gray mb-2">
                  Team Members *
                </label>
                {formData.members.map((member, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      name="members"
                      value={member}
                      onChange={(e) => handleInputChange(e, index)}
                      required
                      className="flex-1 px-4 py-3 bg-cyber-dark/50 border border-cyber-red/30 rounded-lg text-cyber-gray placeholder-cyber-gray/50 focus:border-cyber-red focus:outline-none focus:ring-2 focus:ring-cyber-red/20 transition-colors"
                      placeholder={`Member ${index + 1} Name`}
                    />
                    {formData.members.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMemberField(index)}
                        className="ml-2 text-cyber-red text-xl font-bold"
                      >
                        &times;
                      </button>
                    )}
                  </div>
                ))}

                {formData.members.length < 5 && (
                  <button
                    type="button"
                    onClick={addMemberField}
                    className="mt-2 text-cyber-red font-bold flex items-center"
                  >
                    + Add Member
                  </button>
                )}
              </div>

              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary text-lg px-12 py-4 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Preregister Team"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
