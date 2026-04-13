import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import CaseStudy from "../assets/heathcare-automation case study hero section.jpg";
import { createPortal } from "react-dom";

const RSMCaseStudy = () => {
  const challenges = [
    {
      icon: "inbox",
      title: "Unstructured Recruitment",
      description:
        "Applications arriving from multiple unstructured platforms with no unified process.",
    },
    {
      icon: "assignment_late",
      title: "Manual Compliance Checks",
      description:
        "DBS and credential tracking consuming significant internal staff time.",
    },
    {
      icon: "hourglass_empty",
      title: "Onboarding Delays",
      description:
        "Delays in onboarding care workers and senior staff due to document chasing.",
    },
    {
      icon: "sync_problem",
      title: "Availability Misalignment",
      description:
        "Staff availability misaligned with service user demand, creating operational gaps.",
    },
    {
      icon: "manage_history",
      title: "High Admin Cost",
      description:
        "High internal admin cost and document verification overload slowing growth.",
    },
  ];

  const solutions = [
    {
      icon: "input_circle",
      title: "Unified Digital Application Intake",
      description:
        "Centralised portal collecting and structuring all inbound applications automatically.",
    },
    {
      icon: "account_tree",
      title: "CRM Pipeline Architecture",
      description:
        "A single source of truth connecting recruitment, compliance, and shift management.",
    },
    {
      icon: "psychology",
      title: "AI-Assisted Pre-Screening",
      description:
        "Automated workflows ranking candidates based on experience and compliance-readiness.",
    },
    {
      icon: "mark_email_read",
      title: "Automated Document Collection & Reminders",
      description:
        "Smart reminders that chase documents automatically, removing staff from the loop.",
    },
    {
      icon: "verified_user",
      title: "Role-Based Compliance Tracking",
      description:
        "Granular compliance visibility across all roles, with real-time status updates.",
    },
    {
      icon: "dashboard",
      title: "Real-Time Staff Readiness Dashboards",
      description:
        "Executive oversight tools showing recruitment funnels, utilisation, and compliance health.",
    },
  ];

  const results = [
    { value: "42%", label: "Reduction in manual document chasing", bar: 42 },
    { value: "37%", label: "Faster onboarding cycle time", bar: 37 },
    {
      value: "55%",
      label: "Improvement in application response speed",
      bar: 55,
    },
    {
      value: "30%",
      label: "Reduction in internal recruitment admin workload",
      bar: 30,
    },
    {
      value: "100%",
      label: "Centralised visibility of applicant pipeline",
      bar: 100,
    },
    { value: "90 days", label: "To full operational transformation", bar: 75 },
  ];

  const trustItems = [
    "Faster onboarding",
    "Better compliance visibility",
    "Less document chasing",
    "More staff ready to work",
    "Fewer delays between recruitment and deployment",
  ];

  const problemItems = [
    "chase missing documents",
    "check right to work",
    "track training",
    "verify references",
    "organise compliance stages",
    "keep managers updated",
    "get staff ready before service users are waiting",
  ];

  const systemFeatures = [
    {
      icon: "hub",
      title: "Centralises all applications",
      description:
        "Collect applications from multiple channels into one organised pipeline.",
    },
    {
      icon: "notifications_active",
      title: "Automates document chasing",
      description:
        "Send reminders automatically for missing compliance documents.",
    },
    {
      icon: "linear_scale",
      title: "Tracks onboarding stages",
      description: "See exactly where each applicant is in the process.",
    },
    {
      icon: "groups",
      title: "Improves staff readiness visibility",
      description:
        "Know who is ready, who is waiting, and what is outstanding.",
    },
    {
      icon: "reduce_capacity",
      title: "Reduces admin workload",
      description:
        "Free your managers and coordinators from repetitive chasing and manual updates.",
    },
  ];

  const included = [
    {
      icon: "person_search",
      title: "Recruitment Intake Automation",
      items: [
        "Centralised applicant capture",
        "Multi-source application tracking",
        "Candidate pipeline organisation",
      ],
    },
    {
      icon: "verified_user",
      title: "Compliance Workflow Automation",
      items: [
        "Missing document reminders",
        "Status tracking",
        "Stage-based onboarding process",
        "Role-based workflow for care workers and senior staff",
      ],
    },
    {
      icon: "view_kanban",
      title: "White Label CRM",
      items: [
        "Lead and candidate pipelines in one place",
        "Team visibility",
        "Notes, statuses and progress tracking",
        "Custom stages based on your process",
      ],
    },
    {
      icon: "mark_email_read",
      title: "Email and WhatsApp Automation",
      items: [
        "Instant acknowledgement messages",
        "Automated follow-ups",
        "Internal notifications",
      ],
    },
    {
      icon: "dashboard",
      title: "Dashboard Visibility",
      items: [
        "New applicants",
        "In progress",
        "Awaiting documents",
        "Ready to deploy",
      ],
    },
  ];

  const faqs = [
    {
      q: "How long does implementation take?",
      a: "Most systems can be configured and launched within 14 days, depending on complexity.",
    },
    {
      q: "Is this suitable for small care agencies?",
      a: "Yes. It works especially well for small to medium agencies that need structure without hiring more admin staff.",
    },
    {
      q: "Do you replace our current software?",
      a: "Not always. In many cases we can improve your workflow by integrating with existing tools or centralising key stages into one simpler system.",
    },
    {
      q: "Can this be adapted to our onboarding process?",
      a: "Yes. The workflows can be tailored to your agency's recruitment and compliance steps.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    agencyName: "",
    role: "",
    email: "",
    mobile: "",
    onboardingVolume: "",
    challenge: "",
    contactMethod: "",
  });

  {
    isBookingOpen &&
      createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsBookingOpen(false)}
          />
          <div className="relative w-[95%] h-[90%] max-w-6xl bg-white rounded-xl overflow-hidden shadow-2xl">
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
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CaseStudy})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
          <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Care Agency Automation System
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Stop Losing Time on Recruitment Admin, Compliance Chasing and{" "}
            <span className="text-primary">Slow Onboarding</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            We help UK care agencies automate recruitment, compliance workflows
            and staff onboarding — so you can prepare fully compliant carers
            faster, reduce admin pressure and improve operational continuity.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Built for domiciliary care, supported living and care providers
            under real operational pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30"
            >
              Book a Free Workflow Review
            </button>
            <a
              href="https://wa.me/447808014132"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              <span className="material-icons text-xl">chat</span>
              Speak on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
            Designed for UK care providers who need:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="material-icons text-primary text-base">
                  check_circle
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* ── SECTION 1: THE PROBLEM ── */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              If you run a care agency, you already know the pain
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Applications come from everywhere — Indeed, CV Library, Facebook,
              your website, word of mouth. Then the real challenge begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-red-500">
                  error_outline
                </span>
                Your team has to:
              </h3>
              <ul className="space-y-3">
                {problemItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm"
                  >
                    <span className="material-icons text-red-400 text-base">
                      arrow_right
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-slate-500">
                  trending_down
                </span>
                The result?
              </h3>
              <ul className="space-y-3">
                {[
                  "Onboarding delays",
                  "Admin overload",
                  "Missed opportunities",
                  "Staff not ready when demand arrives",
                  "Internal teams stretched too thin",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm"
                  >
                    <span className="material-icons text-red-400 text-base">
                      remove_circle_outline
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-slate-900 dark:text-white font-bold text-sm">
                  This is not just a staffing issue. It is a workflow issue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: THE SOLUTION ── */}
        <section className="bg-primary/5 dark:bg-primary/10 -mx-6 px-6 py-16 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The Care Agency Automation System
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We install a structured recruitment and compliance automation
              system that helps your agency move applicants from enquiry to
              work-ready faster and with less manual effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {systemFeatures.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <span className="material-icons text-primary text-2xl mb-3 block">
                  {item.icon}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: WHAT'S INCLUDED ── */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Your Care Agency Automation System includes:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((section, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">
                      {section.icon}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
                    >
                      <span className="material-icons text-primary text-base mt-0.5 flex-shrink-0">
                        check
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: WHY THIS MATTERS ── */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Why This Matters
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              What changes after implementation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-red-500">close</span>
                Instead of:
              </h3>
              <ul className="space-y-3">
                {[
                  "Spreadsheets",
                  "Manual chasing",
                  "Scattered applications",
                  "Slow responses",
                  "Uncertainty around readiness",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm"
                  >
                    <span className="material-icons text-red-400 text-base">
                      remove
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-emerald-500">
                  check_circle
                </span>
                You get:
              </h3>
              <ul className="space-y-3">
                {[
                  "One structured system",
                  "Faster communication",
                  "Clearer compliance stages",
                  "Improved onboarding flow",
                  "Better workforce visibility",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm"
                  >
                    <span className="material-icons text-emerald-500 text-base">
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WHO THIS IS FOR ── */}
        <section className="bg-slate-50 dark:bg-slate-900/50 -mx-6 px-6 py-16 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Who This Is For
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              This is ideal for:
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {[
              "Domiciliary care agencies",
              "Supported living providers",
              "Home care businesses",
              "Care providers recruiting regularly",
              "Agencies with onboarding delays",
              "Managers overloaded with compliance admin",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4"
              >
                <span className="material-icons text-primary text-base flex-shrink-0">
                  check_circle
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            If your agency is onboarding carers every month and your process
            still depends heavily on manual admin, this system is for you.
          </p>
        </section>

        {/* ── SECTION 6: WHY AMICA ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                Why Amica Digital Services
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                We understand the care sector because we come from it
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                This is not generic automation. We understand care recruitment
                pressure, onboarding delays, compliance risk, CQC expectations,
                staff shortages, and the operational gap between available
                packages and ready-to-work staff.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We build systems around real sector challenges — not generic
                software templates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "health_and_safety",
                  label: "Industry-aware automation",
                },
                {
                  icon: "build_circle",
                  label: "Practical systems, not jargon",
                },
                { icon: "manage_accounts", label: "Operator-led thinking" },
                {
                  icon: "account_tree",
                  label: "Built for real care workflows",
                },
                {
                  icon: "support_agent",
                  label: "Clear implementation and support",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4"
                >
                  <span className="material-icons text-primary">
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: CASE STUDY ── */}
        <section className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                Case Study
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                RSM Care Links Ltd, Manchester
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A Manchester-based home care and supported living provider was
                struggling with fragmented recruitment channels, manual document
                verification, slow onboarding and inconsistent staff readiness
                visibility.
              </p>
              <p className="text-slate-300 font-medium mb-6">
                Early outcomes after implementation:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Reduced manual document chasing",
                  "Faster onboarding flow",
                  "Better recruitment visibility",
                  "Reduced admin pressure",
                  "More structured pipeline of compliant staff",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <span className="material-icons text-primary text-base">
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/case-studies/rsm-care-links">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
                  Request the Full Case Study
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {results.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <p className="text-primary text-3xl font-extrabold tracking-tight mb-1">
                    {item.value}
                  </p>
                  <p className="text-slate-300 text-xs leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: PRICING ── */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Simple and flexible pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Option 1 */}
            <div className="bg-primary text-white rounded-2xl p-8 shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <h3 className="text-xl font-black mb-1">Growth Commitment</h3>
              <p className="text-white/70 text-sm mb-6">
                Best for care agencies serious about improving systems
              </p>
              <p className="text-5xl font-extrabold mb-1">£490</p>
              <p className="text-white/70 text-sm mb-4">per month</p>
              <p className="text-white/90 font-semibold text-sm mb-6">
                No setup fee with 12-month agreement
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Workflow setup",
                  "CRM configuration",
                  "Automation build",
                  "Onboarding pipeline design",
                  "Support and optimisation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-white/90 text-sm"
                  >
                    <span className="material-icons text-white/70 text-base">
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Option 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-black mb-1 text-slate-900 dark:text-white">
                Flexible Start
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Best for agencies that want flexibility
              </p>
              <p className="text-5xl font-extrabold text-slate-900 dark:text-white mb-1">
                £490
              </p>
              <p className="text-slate-500 text-sm mb-4">per month</p>
              <p className="text-slate-600 dark:text-slate-400 font-semibold text-sm mb-6">
                + £990 setup fee · Cancel anytime
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Workflow setup",
                  "CRM configuration",
                  "Automation build",
                  "Onboarding pipeline design",
                  "Support and optimisation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm"
                  >
                    <span className="material-icons text-primary text-base">
                      check
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: FAQ ── */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Common questions
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-sm pr-4">
                    {faq.q}
                  </span>
                  <span className="material-icons text-primary text-xl flex-shrink-0">
                    {openFaq === i ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 10: LEAD FORM ── */}
        <section className="bg-slate-50 dark:bg-slate-900/50 -mx-6 px-6 py-16 rounded-3xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                Free Review
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Get Your Free Workflow Review
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                No obligation. Just a practical review of where automation can
                save your team time.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    value={formData.agencyName}
                    onChange={(e) =>
                      setFormData({ ...formData, agencyName: e.target.value })
                    }
                    className="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Care Agency Ltd"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary transition-colors"
                    placeholder="Registered Manager / Owner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@agency.co.uk"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Mobile / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary transition-colors"
                    placeholder="+44 7700 000000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Carers onboarded per month?
                  </label>
                  <input
                    type="text"
                    value={formData.onboardingVolume}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        onboardingVolume: e.target.value,
                      })
                    }
                    className="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. 5–10 per month"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Biggest challenge right now?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Slow onboarding",
                    "Compliance chasing",
                    "Too much admin",
                    "No visibility",
                    "Recruitment delays",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, challenge: option })
                      }
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                        formData.challenge === option
                          ? "bg-primary text-white border-primary"
                          : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Preferred contact method
                </label>
                <div className="flex gap-3">
                  {["Phone", "WhatsApp", "Email"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, contactMethod: method })
                      }
                      className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                        formData.contactMethod === method
                          ? "bg-primary text-white border-primary"
                          : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl text-base transition-all shadow-xl shadow-primary/20 mt-2"
              >
                Get My Automation Review
              </button>
              <p className="text-center text-xs text-slate-400">
                No obligation. Just a practical review of where automation can
                save your team time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── TESTIMONIAL ── */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="px-8 py-16 bg-slate-900 dark:bg-slate-800 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <span className="material-icons text-[160px] text-white">
              format_quote
            </span>
          </div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-8">
              <span className="material-icons text-primary">format_quote</span>
            </div>
            <blockquote className="text-white text-2xl md:text-3xl font-medium leading-relaxed italic mb-10">
              "The difference is not just digital — it is operational clarity."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-primary mb-4 flex items-center justify-center">
                <span className="material-icons text-slate-400 text-3xl">
                  person
                </span>
              </div>
              <p className="text-white font-bold text-lg">A Afzal</p>
              <p className="text-primary font-medium text-sm">
                Managing Director, RSM Care Links Ltd
              </p>
              <p className="text-slate-500 text-sm mt-1">Manchester</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
          <div className="max-w-2xl mx-auto px-6">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Ready to Transform?
            </span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mb-4">
              Ready to reduce onboarding delays and compliance pressure?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
              Book a free workflow review and we will show you how your agency
              can automate recruitment and staff onboarding more effectively.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/25"
              >
                Book a Free Workflow Review
              </button>
              <a
                href="https://wa.me/447808014132"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white px-10 py-4 rounded-xl font-bold text-lg hover:border-primary transition-colors"
              >
                <span className="material-icons text-xl">chat</span>
                Speak on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setIsBookingOpen(false)}
            />
            <div className="relative w-[95%] h-[90%] max-w-6xl bg-white rounded-xl overflow-hidden shadow-2xl">
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

      <Footer />
    </div>
  );
};

export default RSMCaseStudy;
