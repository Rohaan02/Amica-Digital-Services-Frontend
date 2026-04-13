import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Foundation",
      description: "Get Started with Smart Systems",
      price: "£199",
      setupFee: "£200 setup (free with 6-month commitment)",
      link: "https://payment.amicadigitalservices.com/foundation",
      features: [
        "Lead capture forms (website & social)",
        "Basic email automation",
        "Enquiry notifications & tracking",
        "Centralised contact database & lead tracking",
        "Basic pipeline visibility",
        "Conversion-focused website improvements",
        "Basic landing page setup",
        "4 branded social media posts / month",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      title: "Growth",
      description: "Automation + Lead Generation System",
      price: "£490",
      setupFee: "£990 setup (free with 12-month agreement)",
      link: "https://payment.amicadigitalservices.com/growth-engine",
      features: [
        "Everything in Foundation, plus:",
        "Multi-step workflow & WhatsApp automation",
        "Automated follow-ups & appointment booking",
        "Full CRM pipeline with team access",
        "Funnel setup with lead routing & qualification",
        "8 social media posts / month",
        "On-page SEO & local keyword targeting",
        "Technical SEO improvements",
      ],
      highlighted: true,
      badgeText: "Most Popular",
      buttonText: "Scale My Business",
      buttonVariant: "primary",
    },
    {
      title: "Pro",
      description: "Full AI Growth & Automation System",
      price: "£990",
      setupFee: "£1,950 setup (free with 12-month agreement)",
      link: "https://payment.amicadigitalservices.com/ai-automation-compliance",
      features: [
        "Everything in Growth, plus:",
        "Advanced workflows, sales pipelines & API integrations",
        "Lead scoring, qualification & advanced dashboards",
        "AI chatbot, WhatsApp assistant & lead qualification AI",
        "Advanced SEO content strategy & ranking optimisation",
        "12 posts / month + Reels / short-form video",
        "LinkedIn profile optimisation & B2B outreach",
        "YouTube channel optimisation (optional)",
      ],
      buttonText: "Book AI Strategy Call",
      buttonVariant: "outline",
    },
  ];

  const trustIndicators = [
    { icon: "verified_user", label: "Secure Payments" },
    { icon: "update", label: "Cancel Anytime" },
    { icon: "rocket_launch", label: "Fast Deployment" },
    { icon: "psychology", label: "AI Native Team" },
  ];

  const industrySystems = [
    { icon: "home_health", label: "Home Care Agencies" },
    { icon: "local_hospital", label: "Clinics & Healthcare" },
    { icon: "apartment", label: "Estate Agents & Property" },
    { icon: "work", label: "Recruitment Agencies" },
  ];

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  {
    isBookingOpen &&
      createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsBookingOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-[95%] h-[90%] max-w-6xl bg-white rounded-xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/70 text-white w-8 h-8 rounded-full"
            >
              ✕
            </button>

            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/F7jbFLqYxyDInUGjcOEG"
              className="w-full h-full border-0"
              title="Booking Widget"
            />
          </div>
        </div>,
        document.body,
      );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <header className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge="Our Growth Systems"
            title={
              <>
                AI-Powered Growth, Automation &amp;
                <br />
                <span className="text-primary">
                  Digital Systems for Modern Businesses
                </span>
              </>
            }
            description="We don't just offer marketing. We build intelligent systems that help you generate more leads, automate operations, convert enquiries faster, and scale without increasing workload."
          />
        </div>
      </header>

      {/* Pricing Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="material-icons text-2xl">{indicator.icon}</span>
              <span className="font-bold">{indicator.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industry-Specific Systems */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            ⚙️ Industry-Specific Systems Available
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            We also build tailored systems for regulated and specialist
            industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industrySystems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <span className="material-icons text-3xl text-primary">
                  {item.icon}
                </span>
                <span className="font-semibold text-sm text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Ready to Build a Smarter Business?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book a free consultation and discover how automation can transform
            your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
            >
              Book Free Strategy Call
            </button>
            <a
              href="https://wa.me/447808014132"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/20 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/30 transition-colors flex items-center gap-2"
            >
              <span className="material-icons text-xl">chat</span>
              Speak on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
