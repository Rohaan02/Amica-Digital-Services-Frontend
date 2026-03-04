import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const About = () => {
  const philosophyPoints = [
    {
      icon: "psychology",
      title: "AI should enhance, not replace humans",
      description:
        "We believe AI is a tool to amplify human capability, not eliminate it. Our solutions are designed to empower your team.",
    },
    {
      icon: "settings_suggest",
      title: "Automation should save time, not create chaos",
      description:
        "Smart automation removes friction and repetitive work, giving you more time to focus on what matters most.",
    },
    {
      icon: "trending_up",
      title: "Marketing should convert, not just impress",
      description:
        "Beautiful campaigns mean nothing without results. We build strategies that drive measurable growth and revenue.",
    },
    {
      icon: "verified_user",
      title: "Compliance should be built-in, not bolted on",
      description:
        "Security and compliance aren't afterthoughts. We architect them into the foundation of every solution.",
    },
  ];

  const industries = [
    {
      icon: "medical_services",
      label: "Healthcare",
      description: "Care services and clinical operations",
    },
    {
      icon: "gavel",
      label: "Law Firms",
      description: "Legal practice management and compliance",
    },
    {
      icon: "cloud_done",
      label: "SaaS Platforms",
      description: "Software product development and scaling",
    },
    {
      icon: "people",
      label: "Recruitment Agencies",
      description: "Talent acquisition and management systems",
    },
    {
      icon: "restaurant",
      label: "Food Chains",
      description: "Multi-location restaurant operations",
    },
    {
      icon: "public",
      label: "International Markets",
      description: "Multi-country operations and compliance",
    },
  ];

  const understandingPoints = [
    "Regulated environments",
    "High-trust industries",
    "Multi-country operations",
    "Scaling without losing control",
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              About Amica Digital Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-navy-deep dark:text-white leading-[1.1] mb-8">
              Built for the <span className="text-primary">AI-first</span>{" "}
              future
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-xl">
              Amica Digital Services was created to solve a growing problem:
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl font-semibold">
              Businesses are buying more tools, more software, more marketing —
              but getting less clarity, less control, and less real growth.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              We bridge strategy, technology, AI, and execution into one
              intelligent system.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <div className="w-full h-[500px] bg-slate-300 dark:bg-slate-700"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl max-w-xs border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                  <span className="material-icons text-xl">check_circle</span>
                </div>
                <span className="text-sm font-bold">AI Implementation</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                98% of our deployments result in immediate operational
                efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Our Philosophy"
            description="The principles that guide everything we build."
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons">{point.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Background */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-64 bg-slate-300 dark:bg-slate-700"></div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-48 bg-slate-300 dark:bg-slate-700"></div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-48 bg-slate-300 dark:bg-slate-700"></div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 h-64 bg-slate-300 dark:bg-slate-700"></div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-deep dark:text-white mb-6">
                Our Background
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our leadership comes from real operational businesses —
                healthcare, care services, SaaS platforms, law firms,
                recruitment agencies, food chains, and international markets.
              </p>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                We understand:
              </h3>

              <div className="space-y-4 mb-8">
                {understandingPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="material-icons text-primary text-sm">
                      check_circle
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="material-icons text-primary text-5xl mb-8">
            format_quote
          </span>
          <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-3xl lg:text-5xl font-extrabold leading-tight mb-10">
            To help businesses grow smarter, faster, and more responsibly using
            AI-driven digital systems.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-[2rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
              <span className="material-icons text-[20rem]">groups</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Ready to work with us?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Let's discuss how we can help you bridge strategy, technology,
                and AI into one intelligent system that drives real growth.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/services">
                  <button className="px-10 py-5 bg-navy-deep/30 text-white font-extrabold rounded-xl border border-white/20 hover:bg-navy-deep/50 transition-colors">
                    View Our Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
