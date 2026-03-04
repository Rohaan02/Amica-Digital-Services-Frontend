import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Foundation",
      description: "For businesses starting digital growth",
      price: "£199",
      setupFee: "£290",
      features: [
        "Website (one page) or landing page",
        "Basic SEO setup",
        "Google Business Profile optimisation",
        "Analytics & tracking",
        "Consent & compliance tools",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      title: "Growth Engine",
      description: "For businesses that want leads & momentum",
      price: "£299",
      setupFee: "£990",
      features: [
        "Everything in Foundation, plus:",
        "AI-assisted lead generation",
        "CRM & pipeline automation",
        "SEO content framework",
        "Social media systems",
        "Automated follow-ups",
        "Monthly reporting",
      ],
      highlighted: true,
      badgeText: "Most Popular",
      buttonText: "Scale My Business",
      buttonVariant: "primary",
    },
    {
      title: "AI Automation & Compliance",
      description:
        "For healthcare, law firms and recruitment agencies — regulated & scaling businesses",
      price: "£490",
      setupFee: "£1,950",
      features: [
        "Everything in Growth Engine, plus:",
        "AI virtual assistants & agents",
        "Advanced automation workflows",
        "AI governance & usage policy",
        "Security & access controls",
        "Priority support & strategy reviews",
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

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <header className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge="Simple & Transparent"
            title={
              <>
                Transparent Pricing.
                <br />
                <span className="text-primary">Scalable Growth.</span>
              </>
            }
            description="Choose the level that fits your ambition."
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

      {/* Footer CTA */}
      <section className="bg-primary py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Ready to future-proof your digital growth?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join 200+ businesses scaling their operations with Amica's
            intelligent digital frameworks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact-us">
              <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                Get Started Today
              </button>
            </Link>
            <Link to="/contact-us">
              <button className="bg-primary/20 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/30 transition-colors">
                Talk to an Expert
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
