import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import FeaturePoint from "../components/FeaturePoint";
import ProcessStep from "../components/ProcessStep";
import IndustryIcon from "../components/IndustryIcon";
import SectionHeader from "../components/SectionHeader";
import IndustriesWeServe from "../assets/Industries We Serve.jpg";
import AILeadGeneration from "../assets/AI Lead Generation & Growth Marketing.jpg";
import AIAutomationCRM from "../assets/AI Automation & CRM Systems.jpg";
import AIVirtual from "../assets/AI Virtual Assistants & Intelligent Agents.jpg";
import CareAgency from "../assets/Care Agency Recruitment & Compliance Automation System.jpg";
import ResponsibleAI from "../assets/Responsible AI & Compliance.jpg";
import SEO from "../assets/SEO & Content Systems.jpg";
import WebCustomSoftware from "../assets/Web & Custom Software.jpg";
import { createPortal } from "react-dom";
import blogs from "../data/blogData.json";
import BlogCard from "../components/BlogCard";

const heroImages = [
  AILeadGeneration,
  AIAutomationCRM,
  AIVirtual,
  CareAgency,
  ResponsibleAI,
  SEO,
  WebCustomSoftware,
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [serviceSlide, setServiceSlide] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      slug: "ai-lead-generation",
      icon: "rocket_launch",
      iconColor: "text-primary",
      title: "AI Lead Generation",
      description:
        "Hyper-personalized outreach sequences that convert prospects at 3x the industry average.",
      features: ["LinkedIn Automation", "AI Email Warmup"],
      featureIconColor: "text-primary",
    },
    {
      slug: "ai-automation",
      icon: "storage",
      iconColor: "text-accent-indigo",
      title: "Intelligent CRM",
      description:
        "Centralize your customer data with smart tagging and predictive lead scoring systems.",
      features: ["Hubspot/Salesforce Sync", "Pipeline Prediction"],
      featureIconColor: "text-accent-indigo",
    },
    {
      slug: "ai-virtual-assistants",
      icon: "smart_toy",
      iconColor: "text-accent-emerald",
      title: "AI Virtual Assistants",
      description:
        "Custom-trained LLM agents that handle customer support and sales bookings 24/7.",
      features: ["Voice AI Calling", "24/7 Web Chat"],
      featureIconColor: "text-accent-emerald",
    },
    {
      slug: "seo-content-social",
      icon: "search",
      iconColor: "text-amber-500",
      title: "Next-Gen SEO",
      description:
        "AI-optimized content strategies that dominate search engines for 2026's search behavior.",
      features: ["Semantic Optimization", "Authority Building"],
      featureIconColor: "text-amber-500",
    },
    {
      slug: "websites-custom-software",
      icon: "code",
      iconColor: "text-rose-500",
      title: "Web & Custom Software",
      description:
        "Bespoke digital tools built to solve your unique operational bottlenecks.",
      features: ["SaaS Development", "API Integrations"],
      featureIconColor: "text-rose-500",
    },
    {
      slug: "responsible-ai-compliance",
      icon: "security",
      iconColor: "text-slate-500",
      title: "Responsible AI",
      description:
        "Protect your business with ethical AI frameworks and data privacy safeguards.",
      features: ["Risk Assessment", "Governance Tools"],
      featureIconColor: "text-slate-500",
    },
    {
      slug: "care-agency-recruitment",
      icon: "verified_user",
      iconColor: "text-sky-500",
      title: "Care Agency Recruitment",
      description:
        "Automated compliance and recruitment workflows that reduce onboarding time by 40%.",
      features: ["Document Collection", "Compliance Tracking"],
      featureIconColor: "text-sky-500",
    },
  ];

  // Update getVisibleServices to show different number based on screen size
  const getVisibleServices = () => {
    const itemsPerPage =
      window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const startIndex = serviceSlide * itemsPerPage;
    return services.slice(startIndex, startIndex + itemsPerPage);
  };

  // Update totalSlides based on screen size
  const getTotalSlides = () => {
    const itemsPerPage =
      window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    return Math.ceil(services.length / itemsPerPage);
  };

  const [totalSlides, setTotalSlides] = useState(getTotalSlides());
  const [visibleServices, setVisibleServices] = useState(getVisibleServices());

  // Update visible services and total slides on window resize
  useEffect(() => {
    const handleResize = () => {
      setTotalSlides(getTotalSlides());
      setServiceSlide(0); // Reset to first slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update visible services when serviceSlide or window size changes
  useEffect(() => {
    setVisibleServices(getVisibleServices());
  }, [serviceSlide, typeof window !== "undefined" ? window.innerWidth : 0]);

  const nextServiceSlide = () => {
    setServiceSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevServiceSlide = () => {
    setServiceSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const whyChooseUs = [
    {
      icon: "psychology",
      iconColor: "text-accent-emerald",
      iconBg: "bg-accent-emerald/10",
      title: "AI-first Approach",
      description: "Not outdated agency methods.",
    },
    {
      icon: "auto_awesome",
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      title: "Smart Automation",
      description: "That reduces staff workload.",
    },
    {
      icon: "verified",
      iconColor: "text-emerald-500",
      iconBg: "bg-accent-indigo/10",
      title: "Responsible AI",
      description: "Ethical & responsible AI usage",
    },
    {
      icon: "shield",
      iconColor: "text-amber-500",
      iconBg: "bg-amber-500/10",
      title: "Compliance",
      description: "Aware digital systems.",
    },
    {
      icon: "engineering",
      iconColor: "text-rose-500",
      iconBg: "bg-rose-500/10",
      title: "Built by operators",
      description: "NOT “marketing influencers”",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Attract",
      description: "SMM, SEO, ads, content & visibility.",
      isActive: true,
    },
    {
      number: 2,
      title: "Engage",
      description: "AI chat, virtual assistants, lead capture.",
      isActive: true,
    },
    {
      number: 3,
      title: "Qualify",
      description: "AI agents score & route leads.",
      isActive: false,
    },
    {
      number: 4,
      title: "Convert",
      description: "CRM, bookings, follow-ups.",
      isActive: false,
    },
    {
      number: 5,
      title: "Optimise",
      description: "Data, reporting & continuous improvement.",
      isActive: false,
    },
  ];

  const slides = [
    "Amica Digital Services helps ambitious businesses grow using AI-driven marketing systems, intelligent automation, and next-generation digital infrastructure.",
    "We don't just market your business — we install scalable growth engines powered by AI.",
    "Built for service businesses, healthcare, medical tourism, and regulated industries.",
    "AI Growth Systems for Care Agencies & Service Businesses, Automate recruitment, lead generation, and compliance workflows with intelligent AI automation built by operators who understand your industry.",
  ];

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const industries = [
    { icon: "health_and_safety", label: "Healthcare & Care Services" },
    { icon: "flight_takeoff", label: "Medical Tourism" },
    { icon: "gavel", label: "Law Firms" },
    { icon: "business_center", label: "Professional Services" },
    { icon: "spa", label: "Clinics & Wellness" },
    { icon: "computer", label: "SaaS & Marketplaces" },
  ];

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="bg-background-light dark:bg-background-dark w-full overflow-x-hidden">
      <Navigation variant="glass" />
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center w-full">
        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out w-full ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70 w-full"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 items-center">
            {/* LEFT CONTENT */}
            <div className="text-white w-full">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full mb-4 sm:mb-6 uppercase tracking-widest">
                <span className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
                  <span className="text-[10px] sm:text-xs">
                    Intelligent Growth Engine
                  </span>
                </span>
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6 lg:mb-8">
                AI-Powered Digital Growth for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-indigo block sm:inline">
                  2026 Businesses
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mb-6 sm:mb-8 inline-block pb-2">
                Marketing. Automation. Intelligence. Results.
              </h2>

              <div
                className="relative h-32 sm:h-28 flex overflow-hidden mb-6 sm:mb-8 lg:mb-10 w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {slides.map((slide, index) => (
                  <p
                    key={index}
                    className={`
                absolute text-base sm:text-lg md:text-xl text-slate-200 max-w-xl mx-auto px-4 sm:px-0 w-full
                transition-all duration-700 ease-in-out transform
                ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
                  >
                    {slide}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="hidden lg:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/25"
                >
                  {/* <Link to="/contact-us" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="xl"
                    className="w-full sm:w-auto text-sm sm:text-base whitespace-normal sm:whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4"
                  > */}
                  Book a Free AI Growth Consultation
                  {/* </Button>
                </Link> */}
                </button>

                <a href="/services" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto text-primary border-white/20 hover:bg-white/10 text-sm sm:text-base whitespace-normal sm:whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4"
                    size="xl"
                  >
                    Explore Our Services
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE EMPTY (for visual balance) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>
      {isBookingOpen &&
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
        )}
      {/* Why Amica Section */}
      <section className="py-24 bg-white dark:bg-slate-950/50 w-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionHeader
            title="Why Amica Digital Services?"
            description="We don't just follow trends; we engineer the future of digital presence using proprietary AI models and battle-tested workflows."
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {whyChooseUs.map((point, index) => (
              <FeaturePoint key={index} {...point} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Capabilities with Slider */}
      <section
        className="py-24 bg-background-light dark:bg-background-dark w-full"
        id="services"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader
              align="left"
              title="Core Capabilities"
              description="Our suite of intelligent services designed to automate every touchpoint of your customer journey."
            />
            <div className="flex items-center gap-4">
              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setServiceSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === serviceSlide
                        ? "w-6 bg-primary"
                        : "bg-slate-300 dark:bg-slate-600 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={prevServiceSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={totalSlides <= 1}
                  aria-label="Previous services"
                >
                  <span className="material-icons">chevron_left</span>
                </button>
                <button
                  onClick={nextServiceSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={totalSlides <= 1}
                  aria-label="Next services"
                >
                  <span className="material-icons">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid with Animation - Now responsive for all screens */}
          <div className="relative overflow-hidden w-full">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out w-full"
              key={serviceSlide}
            >
              {visibleServices.map((service, index) => (
                <div
                  key={service.slug}
                  className="animate-fadeIn w-full"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ServiceCard {...service} slug={service.slug} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile view pagination info - optional */}
          <div className="text-center mt-4 text-sm text-slate-500 md:hidden">
            Showing {visibleServices.length} of {services.length} services
          </div>
        </div>

        <div className="mt-12 w-full flex justify-center">
          <Link to="/services">
            <Button variant="ghost" icon="arrow_forward">
              See All Services
            </Button>
          </Link>
        </div>
      </section>
      {/* Case Study */}
      <section
        className="py-24 bg-white dark:bg-background-dark relative overflow-hidden w-full"
        id="case-study"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none w-full">
          <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Section Header */}
          <div className="text-center mb-16 w-full">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 to-emerald-500/10 backdrop-blur text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-widest border border-primary/20">
              <span className="flex items-center space-x-2">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span>Featured Case Study</span>
              </span>
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Workforce Automation Transformation for RSM Care Links Ltd
            </p>
          </div>

          {/* Hero Case Study Card */}
          <Link to="/rsm-case-study" className="block group relative w-full">
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-700"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-all duration-700"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl shadow-xl w-full">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 w-full">
                <div
                  className="absolute inset-0 w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                  }}
                ></div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-emerald-500/10 w-full"></div>

              <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 w-full">
                {/* Left Column - Main Content */}
                <div className="space-y-6 w-full">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white text-xs font-bold px-4 py-2 rounded-full border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Healthcare Automation
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white text-xs font-bold px-4 py-2 rounded-full border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      90-Day Transformation
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                    RSM Care Links Ltd
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed">
                    How we helped a leading home care provider build a
                    predictable, compliant workforce pipeline — reducing admin
                    burden by 42% within 90 days.
                  </p>

                  {/* Key Metrics - Redesigned */}
                  <div className="grid grid-cols-2 gap-4 pt-4 w-full">
                    <div className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 transform transition-all duration-300 group-hover:bg-white/10">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-black text-emerald-400">
                          42
                        </span>
                        <span className="text-emerald-400/80 text-xl font-bold">
                          %
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 font-medium leading-tight">
                        Reduction in manual document chasing
                      </p>
                      <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-400 h-full rounded-full"
                          style={{ width: "42%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 transform transition-all duration-300 group-hover:bg-white/10">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-black text-primary">
                          37
                        </span>
                        <span className="text-primary/80 text-xl font-bold">
                          %
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 font-medium leading-tight">
                        Faster onboarding cycle time
                      </p>
                      <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: "37%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics - Small Preview */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 text-lg font-bold">
                        55%
                      </span>
                      <span className="text-xs text-slate-400">
                        Faster responses
                      </span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-lg font-bold">
                        30%
                      </span>
                      <span className="text-xs text-slate-400">Less admin</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual Elements & CTA */}
                <div className="relative flex flex-col items-end justify-between w-full">
                  {/* Quote/Testimonial Preview */}
                  <div className="relative mb-8 lg:mb-0 w-full">
                    <div className="absolute -top-4 -left-4 text-6xl text-white/10 font-serif">
                      "
                    </div>
                    <blockquote className="relative text-white/80 text-lg italic pl-6 border-l-2 border-primary">
                      The difference is not just digital — it is operational
                      clarity.
                    </blockquote>
                    <div className="mt-3 flex items-center gap-3 pl-6">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="material-icons text-primary text-sm">
                          person
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          A Afzal
                        </p>
                        <p className="text-slate-400 text-xs">
                          Managing Director
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="w-full mt-6 lg:mt-0">
                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-1">
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <span className="block text-white font-medium">
                            Read full case study
                          </span>
                          <span className="text-sm text-slate-400">
                            5 min read
                          </span>
                        </div>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-emerald-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-12deg] group-hover:shadow-lg">
                          <span className="material-icons text-white text-2xl">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-4 justify-end">
                      <span className="text-xs bg-white/5 text-slate-300 px-3 py-1.5 rounded-full border border-white/10">
                        Amica AI Suite
                      </span>
                      <span className="text-xs bg-white/5 text-slate-300 px-3 py-1.5 rounded-full border border-white/10">
                        Custom CRM
                      </span>
                      <span className="text-xs bg-white/5 text-slate-300 px-3 py-1.5 rounded-full border border-white/10">
                        Real-time Dashboards
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar with Stats */}
              <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm px-8 lg:px-12 py-4 w-full">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">
                      Client
                    </p>
                    <p className="text-white font-semibold">
                      RSM Care Links Ltd
                    </p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-white font-semibold">Manchester, UK</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">
                      Timeline
                    </p>
                    <p className="text-white font-semibold">3 Months</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      {/* How We Work */}
      <section
        className="py-24 bg-slate-950 text-white relative overflow-hidden w-full"
        id="process"
      >
        <div className="absolute inset-0 opacity-10 w-full">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#137fec_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <SectionHeader
            title="How We Work"
            titleClass="text-white"
            description="A systematic, 5-step engine designed for rapid deployment and sustainable scale."
            className="mb-20 text-white"
          />

          <div className="relative w-full">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary to-accent-indigo shadow-[0_0_15px_rgba(19,127,236,0.8)]"></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 w-full">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
            <div className="mt-12 w-full flex justify-center">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="hidden lg:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/25"
              >
                {/* <Link to="/contact-us">
                <Button variant="primary" icon="arrow_forward"> */}
                Book Free AI Growth Consultation
                {/* </Button>
              </Link> */}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Industry Focus */}
      <section className="py-24 bg-background-light dark:bg-background-dark w-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionHeader
            title="Trusted Across Healthcare & Professional Services"
            description="Specialized AI solutions built for the unique challenges of care agencies, clinics, and professional service firms."
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {/* Care Agencies Card */}
            <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 w-full">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="material-icons text-3xl text-primary">
                    elderly
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500/10 rounded-full blur-md group-hover:bg-primary/20 transition-all duration-300"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Care Agencies
              </h3>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Streamline recruitment, compliance tracking, and staff
                scheduling with AI-powered workforce automation.
              </p>

              {/* Key Challenges Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Compliance
                </span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Staff Shortages
                </span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Documentation
                </span>
              </div>
            </div>

            {/* Clinics Card */}
            <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-2 w-full">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="material-icons text-3xl text-emerald-500">
                    local_hospital
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-all duration-300"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                Clinics
              </h3>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Automate patient intake, appointment scheduling, and follow-ups
                while maintaining regulatory compliance.
              </p>

              {/* Key Challenges Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Patient Flow
                </span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Scheduling
                </span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Records
                </span>
              </div>
            </div>

            {/* Professional Services Card */}
            <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 w-full">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="material-icons text-3xl text-blue-500">
                    business_center
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/10 rounded-full blur-md group-hover:bg-blue-500/20 transition-all duration-300"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                Professional Services
              </h3>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Optimize client onboarding, document management, and billing
                cycles with intelligent automation.
              </p>

              {/* Key Challenges Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Billing
                </span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Client Intake
                </span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full">
                  Compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industry Focus */}
      <section
        className="py-24 bg-white dark:bg-background-dark w-full"
        id="industries"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full">
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-slate-500 mb-10 text-lg">
                We build industry-specific AI brains that understand the
                nuances, jargon, and pain points of your unique market.
              </p>

              <div className="grid grid-cols-2 gap-y-6 w-full">
                {industries.map((industry, index) => (
                  <IndustryIcon key={index} {...industry} />
                ))}
              </div>

              <div className="mt-12">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="hidden lg:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/25"
                >
                  {/* <Link to="/contact-us">
                  <Button variant="ghost" icon="arrow_forward"> */}
                  Book Free AI Growth Consultation
                  {/* </Button>
                </Link> */}
                </button>
              </div>
            </div>

            <div className="relative w-full">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-4 overflow-hidden shadow-inner w-full">
                <img
                  src={IndustriesWeServe}
                  alt="Industries We Serve"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 w-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="bg-primary rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden w-full">
            <div className="absolute inset-0 opacity-10 w-full">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">
                Ready to future-proof your
                <br />
                digital growth?
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
                Stop paying for disconnected services.
                <br />
                Start building an AI-powered growth system.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* <Link to="/contact-us">
                  <Button
                    size="xl"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-slate-100"
                  > */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="hidden lg:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/25"
                >
                  Book Free AI Growth Consultation
                  {/* </Button>
                </Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-24 bg-background-light dark:bg-background-dark w-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full mb-6">
              <span className="material-icons text-sm">rss_feed</span>
              Amica Insights
            </div>
            <h1 className="text-4xl mb-12 md:text-6xl font-extrabold text-slate-900 leading-tight">
              Blog & <span className="text-primary">Resources</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <Link to="/blog">
              <Button variant="ghost" icon="arrow_forward">
                See More Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
