import React, { useState } from "react";
import Button from "./Button";

const CareAgencyLeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    agencyName: "",
    role: "",
    email: "",
    mobile: "",
    onboardingCarersPerMonth: "",
    biggestChallenge: "",
    preferredContact: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/leads/care-agency", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "care-agency-service-page",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        agencyName: "",
        role: "",
        email: "",
        mobile: "",
        onboardingCarersPerMonth: "",
        biggestChallenge: "",
        preferredContact: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/10 dark:to-blue-900/10">
      <div className="max-w-2xl mx-auto px-6">
        {/* Form Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Get Your Free Workflow Review
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No obligation. Just a practical review of where automation can save
            your team time.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="material-icons text-emerald-600 dark:text-emerald-400 text-xl">
                check_circle
              </span>
              <div>
                <h3 className="font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                  Thank you!
                </h3>
                <p className="text-sm text-emerald-800 dark:text-emerald-300">
                  We've received your request. We'll be in touch within 24 hours
                  to schedule your free workflow review.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="material-icons text-red-600 dark:text-red-400 text-xl">
                error
              </span>
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-1">
                  Oops!
                </h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Agency Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Agency Name *
                </label>
                <input
                  type="text"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  required
                  placeholder="Your Agency Ltd"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Your Role *
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Operations Manager"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@agency.com"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Mobile / WhatsApp */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="+44 7XXX XXXXXX"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Carers Onboarded Per Month */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Carers Onboarded Per Month *
                </label>
                <select
                  name="onboardingCarersPerMonth"
                  value={formData.onboardingCarersPerMonth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">Select...</option>
                  <option value="1-5">1-5 carers</option>
                  <option value="5-10">5-10 carers</option>
                  <option value="10-20">10-20 carers</option>
                  <option value="20+">20+ carers</option>
                </select>
              </div>
            </div>

            {/* Biggest Challenge */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                What's your biggest challenge right now? *
              </label>

              <select
                name="biggestChallenge"
                value={formData.biggestChallenge}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                <option value="">Select...</option>
                <option value="slow-onboarding">Slow onboarding</option>
                <option value="compliance-chasing">Compliance chasing</option>
                <option value="too-much-admin">Too much admin</option>
                <option value="no-visibility">No visibility</option>
                <option value="recruitment-delays">Recruitment delays</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
                Preferred contact method *
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { value: "phone", label: "Phone", icon: "phone" },
                  { value: "whatsapp", label: "WhatsApp", icon: "message" },
                  { value: "email", label: "Email", icon: "mail" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
                  >
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      checked={formData.preferredContact === option.value}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-primary cursor-pointer"
                    />
                    <span className="material-icons text-slate-600 dark:text-slate-400 text-sm">
                      {option.icon}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Get My Automation Review"}
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">
              No obligation. Just a practical review of where automation can
              save your team time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default CareAgencyLeadForm;
