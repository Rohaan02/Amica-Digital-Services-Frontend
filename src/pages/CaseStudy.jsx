import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";

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
    {
      value: "42%",
      label: "Reduction in manual document chasing",
      bar: 42,
    },
    {
      value: "37%",
      label: "Faster onboarding cycle time",
      bar: 37,
    },
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
    {
      value: "90 days",
      label: "To full operational transformation",
      bar: 75,
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
          <Link className="hover:text-primary transition-colors" to="/">
            Home
          </Link>
          <span className="material-icons text-sm">chevron_right</span>
          <Link
            className="hover:text-primary transition-colors"
            to="/case-studies"
          >
            Case Studies
          </Link>
          <span className="material-icons text-sm">chevron_right</span>
          <span className="text-primary font-semibold">RSM Care Links Ltd</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Case Study
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Healthcare Automation
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-8 text-slate-900 dark:text-white max-w-4xl">
            Workforce Automation Transformation for{" "}
            <span className="text-primary">RSM Care Links Ltd</span>
          </h1>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden aspect-[21/9] bg-slate-200 dark:bg-slate-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
            <div className="w-full h-full bg-slate-300 dark:bg-slate-700"></div>
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <p className="text-white text-xl max-w-2xl font-medium leading-relaxed">
                How we helped a leading home care provider build a predictable,
                compliant workforce pipeline — reducing admin burden by 42%
                within 90 days.
              </p>
            </div>
          </div>
        </section>

        {/* Main Grid: Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar: Client Snapshot */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sticky top-28 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="material-icons text-primary text-xl">
                  info
                </span>
                Client Snapshot
              </h3>

              <div className="space-y-0">
                {/* Client name */}
                <div className="flex items-center gap-4 py-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">
                      corporate_fare
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">
                      Client
                    </p>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">
                      RSM Care Links Ltd
                    </p>
                  </div>
                </div>

                {[
                  {
                    icon: "medical_services",
                    label: "Industry",
                    value: "Home Care & Supported Living",
                  },
                  {
                    icon: "location_on",
                    label: "Location",
                    value: "Manchester, UK",
                  },
                  {
                    icon: "business",
                    label: "Company Size",
                    value: "SME",
                  },
                  {
                    icon: "schedule",
                    label: "Engagement Duration",
                    value: "3 Months",
                  },
                  {
                    icon: "terminal",
                    label: "Tech Stack",
                    value: "Amica AI Suite, Custom CRM",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 py-4 border-b border-slate-100 dark:border-slate-800 last:border-0"
                  >
                    <span className="material-icons text-slate-400 text-xl mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-slate-900 dark:text-white font-medium text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-slate-500 text-sm mb-4">
                  Want similar results for your business?
                </p>
                <Link to="/contact">
                  <Button variant="primary" className="w-full">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">
            {/* The Situation */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2.5 rounded-xl">
                  <span className="material-icons">warning</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  The Situation
                </h2>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                RSM Care Links Ltd was facing operational strain common across
                UK care providers in 2026. The organisation needed structure,
                visibility, and automation — not just more staff.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challenges.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-red-200 dark:hover:border-red-900/50 transition-colors group"
                  >
                    <span className="material-icons text-red-500 text-xl mt-0.5 flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* The Solution */}
            <section className="bg-primary/5 dark:bg-primary/10 -mx-6 lg:-mx-0 px-6 py-12 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-white p-2.5 rounded-xl">
                  <span className="material-icons">lightbulb</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  The Solution: Amica Digital Services
                </h2>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Amica Digital Services implemented a centralised recruitment and
                compliance automation system. The objective was clear:
              </p>

              <div className="bg-white dark:bg-slate-900 border-l-4 border-primary rounded-r-xl px-6 py-4 mb-8">
                <p className="text-slate-800 dark:text-slate-200 font-semibold italic">
                  "Create a predictable, compliant workforce pipeline with
                  reduced admin burden."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {solutions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors group"
                  >
                    <span className="material-icons text-primary text-2xl mb-3 block">
                      {item.icon}
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-2.5 rounded-xl">
                  <span className="material-icons">trending_up</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Results Within 90 Days
                </h2>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                The transformation delivered measurable operational improvements
                across the board:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
                {results.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900/30 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <p className="text-emerald-500 text-4xl font-extrabold mb-1 tracking-tight">
                      {item.value}
                    </p>
                    <p className="text-slate-900 dark:text-slate-200 font-bold text-sm mb-4 leading-snug">
                      {item.label}
                    </p>
                    <div className="w-full bg-emerald-50 dark:bg-emerald-900/20 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.bar}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outcome Summary */}
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="material-icons text-primary text-xl">
                    stars
                  </span>
                  Most Importantly
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  RSM achieved greater alignment between service user demand and
                  staff availability — reducing downtime gaps and lost
                  operational opportunity. They also established a structured
                  pool of pre-compliant staff ready for deployment.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Testimonial */}
        <section className="mt-20 mb-16 px-8 py-16 bg-slate-900 dark:bg-slate-800 rounded-3xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <span className="material-icons text-[160px] text-white">
              format_quote
            </span>
          </div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

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
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
          <div className="max-w-2xl mx-auto px-6">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Ready to Transform?
            </span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mb-4">
              Ready for your own transformation?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
              Let's discuss how customised AI automation can remove bottlenecks
              and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  icon="calendar_today"
                  iconPosition="left"
                >
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="secondary" size="lg">
                  View Other Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RSMCaseStudy;
