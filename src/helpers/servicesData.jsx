// src/helpers/servicesData.jsx
import React from "react";
import AILeadGeneration from "../assets/AI Lead Generation & Growth Marketing.jpg";
import AIAutomationCRM from "../assets/AI Automation & CRM Systems.jpg";
import AIVirtual from "../assets/AI Virtual Assistants & Intelligent Agents.jpg";
import CareAgency from "../assets/Care Agency Recruitment & Compliance Automation System.jpg";
import ResponsibleAI from "../assets/Responsible AI & Compliance.jpg";
import SEO from "../assets/SEO & Content Systems.jpg";
import WebCustomSoftware from "../assets/Web & Custom Software.jpg";

const servicesData = {
  "ai-lead-generation": {
    serviceName: "AI Lead Generation & Growth Marketing",
    badge: "AI Lead Generation & Growth Marketing",
    tagline: (
      <>
        Leads That <span className="text-primary">Convert</span> – Not Just
        Traffic
      </>
    ),
    description: (
      <>
        In 2026, traffic is easy. Conversion is not. <br />
        Most businesses are running ads, posting content, and hoping something
        works. But hope is not a strategy.
      </>
    ),
    heroImage: AILeadGeneration,
    features: [
      {
        icon: "person_search",
        title: "Identify high-intent audiences",
        description:
          "AI-powered targeting that finds people actively searching for solutions like yours.",
      },
      {
        icon: "ads_click",
        title: "Engage with precision targeting",
        description:
          "Reach the right people at the right time with messaging that resonates.",
      },
      {
        icon: "verified",
        title: "Qualify them automatically",
        description:
          "Intelligent scoring separates ready-to-buy leads from browsers.",
      },
      {
        icon: "route",
        title: "Route to your team ready to convert",
        description:
          "Pre-qualified leads delivered directly to your sales team with full context.",
      },
    ],
    whatWeOffer: {
      title: "What Makes Us Different?",
      subtitle: "We don't just 'run ads.' We build an integrated system:",
      items: [
        "AI-assisted Google & Meta campaigns",
        "Conversion-optimised landing funnels",
        "Lead scoring & behaviour tracking",
        "Automated follow-up sequences",
        "CRM integration",
        "Revenue attribution tracking",
      ],
    },
    forWhom: [
      {
        title: "For healthcare providers, this means:",
        points: [
          "Fewer unqualified enquiries",
          "Faster patient or staff acquisition",
          "Measurable ROI",
        ],
      },
      {
        title: "For service businesses:",
        points: [
          "Predictable lead flow",
          "Automated follow-ups",
          "Higher close rates",
        ],
      },
    ],
    primaryCTA: "Get More Qualified Leads",
  },

  "ai-automation": {
    serviceName: "AI Automation & CRM Systems",
    badge: "AI Automation & CRM Systems",
    tagline: (
      <>
        Stop Managing Tasks.{" "}
        <span className="text-primary">Start Running a System</span>.
      </>
    ),
    description:
      "In UK healthcare and service sectors, the biggest challenge in 2026 is  not demand — it's operational overload.",
    heroImage: AIAutomationCRM,
    features: [
      {
        icon: "autorenew",
        title: "End-to-end enquiry automation",
        description:
          "Automatically capture, respond to, nurture, and convert enquiries without manual follow-up.",
      },
      {
        icon: "event_available",
        title: "Automated appointment booking",
        description:
          "Enable clients to view real-time availability and schedule appointments instantly.",
      },
      {
        icon: "device_hub",
        title: "CRM pipeline design",
        description:
          "Custom-built sales pipelines that track, organise, and optimise every opportunity.",
      },
      {
        icon: "person_add_alt_1",
        title: "Staff onboarding workflows",
        description:
          "Automate contracts, document collection, task assignments, and compliance steps for new hires.",
      },
      {
        icon: "school",
        title: "Training tracking systems",
        description:
          "Monitor staff certifications, course progress, and ongoing training requirements in one system.",
      },
      {
        icon: "psychology",
        title: "AI-powered reminders and notifications",
        description:
          "Smart, behaviour-based alerts and follow-ups to keep prospects and teams on track.",
      },
      {
        icon: "rule",
        title: "Lead qualification & routing logic",
        description:
          "Automatically score, segment, and assign leads to the right team member based on predefined criteria.",
      },
    ],
    whatWeOffer: {
      title: "We design intelligent automation systems",
      subtitle: "Using AI, CRM architecture, and workflow engineering.",
      items: [
        "Manual follow-ups.",
        "Slow onboarding.",
        "Compliance paperwork.",
        "Staff admin.",
        "Missed enquiries.",
      ],
    },
    benefits: {
      title: "Our automation reduces:",
      items: [
        "Admin workload",
        "Response times",
        "Human error",
        "Compliance risk",
      ],
      footer: "Built by operators who understand what delays actually cost.",
    },
    primaryCTA: "Automate My Business",
  },

  "ai-virtual-assistants": {
    serviceName: "AI Virtual Assistants & Intelligent Agents",
    badge: "AI Virtual Assistants & Intelligent Agents",
    tagline: (
      <>
        24/7 Digital Staff That{" "}
        <span className="text-primary">Work Without Burnout</span>
      </>
    ),
    description:
      "Healthcare businesses, clinics, and agencies lose revenue simply because nobody responds fast enough.",
    heroImage: AIVirtual,
    features: [
      {
        icon: "question_answer",
        title: "Answer FAQs instantly",
        description:
          "Deliver accurate, real-time responses to common questions around the clock without human intervention.",
      },
      {
        icon: "fact_check",
        title: "Pre-qualify patients or job candidates",
        description:
          "Automatically assess eligibility, capture key information, and filter applicants before passing them to your team.",
      },
      {
        icon: "folder_open",
        title: "Collect required documents",
        description:
          "Securely request and store forms, certifications, and supporting documents in one streamlined workflow.",
      },
      {
        icon: "priority_high",
        title: "Route urgent cases correctly",
        description:
          "Identify high-priority enquiries and instantly direct them to the appropriate department or staff member.",
      },
      {
        icon: "support_agent",
        title: "Support internal staff queries",
        description:
          "Provide employees with quick answers, policy guidance, and process support through an AI assistant.",
      },
    ],
    deployment: {
      title: "We deploy assistants across:",
      channels: [
        "Website chat",
        "WhatsApp",
        "Email",
        "Social media messaging",
        "Internal operations",
      ],
    },
    additionalNote:
      "Designed with responsible AI principles and human handover controls. This is not hype AI. It's structured, controlled automation built for real businesses.",
    primaryCTA: "Deploy an AI Assistant",
  },

  "seo-content-social": {
    serviceName: "SEO & Content Systems",
    badge: "SEO & Content Systems",
    tagline: (
      <>
        Visibility That{" "}
        <span className="text-primary">Compounds Over Time</span>
      </>
    ),
    description:
      "Most SEO agencies chase keywords. We build authority systems. Using AI-enhanced keyword intelligence and structured content strategies.",
    heroImage: SEO,
    features: [
      {
        icon: "insights",
        title: "Identify high-value search opportunities",
        description:
          "Uncover high-intent keywords and untapped search gaps that attract qualified traffic ready to convert.",
      },
      {
        icon: "web_asset",
        title: "Build conversion-focused landing pages",
        description:
          "Design and optimise landing pages that rank well and guide visitors toward clear, measurable actions.",
      },
      {
        icon: "verified",
        title: "Develop trust-building content",
        description:
          "Create authoritative, value-driven content that strengthens credibility and nurtures long-term trust.",
      },
      {
        icon: "bolt",
        title: "Optimise technical performance",
        description:
          "Improve site speed, mobile responsiveness, and core technical SEO to maximise search visibility.",
      },
      {
        icon: "monitoring",
        title: "Track ranking and engagement impact",
        description:
          "Monitor keyword rankings, user behaviour, and conversion metrics to continuously refine performance.",
      },
    ],
    forWhom: [
      {
        title: "For UK healthcare providers:",
        points: [
          "Local visibility",
          "Trust signals",
          "Authority positioning",
          "Reputation strength",
        ],
      },
      {
        title: "For other sectors:",
        points: [
          "Sustainable inbound traffic",
          "Lower ad dependency",
          "Long-term brand equity",
        ],
      },
    ],
    primaryCTA: "Grow My Online Presence",
  },

  "websites-custom-software": {
    serviceName: "Web & Custom Software",
    badge: "Web & Custom Software",
    tagline: (
      <>
        Built to Scale -{" "}
        <span className="text-primary">Engineered for Performance</span>
      </>
    ),
    description:
      "Your website is not just a brochure. It is your conversion engine.",
    heroImage: WebCustomSoftware,
    features: [
      {
        icon: "public",
        title: "High-performance business websites",
        description:
          "Optimised, responsive websites built for speed, SEO, and high conversion performance.",
      },
      {
        icon: "vpn_key",
        title: "Secure client portals",
        description:
          "Encrypted, access-controlled portals where clients can securely manage documents and communications.",
      },
      {
        icon: "insights",
        title: "Staff dashboards",
        description:
          "Custom internal dashboards providing real-time data, reporting, and operational oversight.",
      },
      {
        icon: "integration_instructions",
        title: "Custom software tools",
        description:
          "Tailor-made applications designed to automate and enhance your specific business workflows.",
      },
      {
        icon: "cloud",
        title: "SaaS architecture support",
        description:
          "Scalable cloud-based systems with user authentication, subscription billing, and performance optimisation.",
      },
      {
        icon: "storefront",
        title: "Marketplace systems",
        description:
          "Multi-vendor platforms with product listings, payment processing, and user management capabilities.",
      },
    ],
    builtWith: {
      title: "All built with:",
      items: [
        "Scalable backend architecture",
        "Secure authentication",
        "Role-based access controls",
        "Automation integrations",
        "API connectivity",
      ],
      footer:
        "For healthcare clients, security and compliance awareness is embedded from the start.",
    },
    pricingPackages: [
      {
        title: "Business Websites",
        price: "£950",
        features: [
          "Conversion-focused design",
          "CMS setup",
          "Performance optimisation",
          "Analytics & tracking",
        ],
      },
      {
        title: "Client Portals & Dashboards",
        price: "£2,500",
        features: [
          "Secure login & user roles",
          "Data dashboards",
          "CRM or system integrations",
          "Access & permission controls",
        ],
      },
      {
        title: "Custom Software & Integrations",
        price: "£4,500",
        features: [
          "Bespoke functionality",
          "API integrations",
          "Workflow automation",
          "Scalability & security planning",
        ],
        highlighted: true,
      },
      {
        title: "SaaS & Marketplace Support",
        price: "£7,500+",
        description: "Project-based or retainer.",
        features: [
          "Platform architecture",
          "Feature development",
          "Optimisation & scaling",
          "Ongoing technical support",
        ],
      },
    ],
    pricingNote:
      "We do not offer 'one-size-fits-all' development. Final pricing is confirmed after a technical discovery session.",
    primaryCTA: "Request a Technical Discovery Call",
    secondaryCTA: "Get a Project Cost Estimate",
  },

  "responsible-ai-compliance": {
    serviceName: "Responsible AI & Compliance",
    badge: "Responsible AI & Compliance",
    tagline: (
      <>
        AI Done Properly – <span className="text-primary">Not Recklessly</span>
      </>
    ),
    description: (
      <>
        2026 UK businesses face:
        <li>Data sensitivity.</li>
        <li>Compliance pressure.</li>
        <li>AI misuse risks.</li>
        <li>Reputational damage concerns.</li>
        <br />
        We help organisations adopt AI responsibly.
      </>
    ),
    heroImage: ResponsibleAI,
    features: [
      {
        icon: "architecture",
        title: "AI usage frameworks",
        description:
          "Structured governance models that define responsible AI implementation, risk boundaries, and accountability.",
      },
      {
        icon: "shield",
        title: "Data handling best practice guidance",
        description:
          "Establish secure data collection, storage, and processing standards aligned with compliance requirements.",
      },
      {
        icon: "privacy_tip",
        title: "Consent-aware automation",
        description:
          "Design workflows that automatically respect user consent, opt-ins, and privacy regulations.",
      },
      {
        icon: "manage_accounts",
        title: "Role-based system controls",
        description:
          "Implement tiered access permissions to ensure users only access what their role requires.",
      },
      {
        icon: "gavel",
        title: "Human override safeguards",
        description:
          "Embed escalation paths and manual review checkpoints for critical or sensitive decisions.",
      },
    ],
    additionalNote:
      "We are not just technologists. We understand operational and regulatory realities.",
    primaryCTA: "Discuss Compliance & AI",
  },

  "care-agency-recruitment": {
    serviceName: "Care Agency Recruitment & Compliance Automation System",
    badge: "Care Agency Recruitment & Compliance Automation System",
    tagline: (
      <>
        Stop Losing Time on Recruitment Admin, Compliance Chasing and{" "}
        <span className="text-primary">Slow Onboarding</span>
      </>
    ),
    description: (
      <>
        We help UK care agencies automate recruitment, compliance workflows and
        staff onboarding — so you can prepare fully compliant carers faster,
        reduce admin pressure and improve operational continuity.
        <br />
        <br />
        Built for domiciliary care, supported living and care providers under
        real operational pressure.
      </>
    ),
    heroImage: CareAgency,
    trustBar: {
      title: "Designed for UK care providers who need:",
      items: [
        "Faster onboarding",
        "Better compliance visibility",
        "Less document chasing",
        "More staff ready to work",
        "Fewer delays between recruitment and deployment",
      ],
    },
    theProblem: {
      title: "If you run a care agency, you already know the pain",
      issues: [
        "Applications come from Indeed, CV Library, Facebook, Website, Word of mouth",
        "Your team has to chase missing documents",
        "Check right to work",
        "Track training",
        "Verify references",
        "Organise compliance stages",
        "Keep managers updated",
        "Try to get staff ready before service users are waiting",
      ],
      resultsList: [
        "Onboarding delays",
        "Admin overload",
        "Missed opportunities",
        "Staff not ready when demand arrives",
        "Internal teams stretched too thin",
      ],
      conclusion: "This is not just a staffing issue. It is a workflow issue.",
    },
    systemOverview: {
      title: "The Care Agency Automation System",
      description:
        "We install a structured recruitment and compliance automation system that helps your agency move applicants from enquiry to work-ready faster and with less manual effort.",
      benefits: [
        "Centralises all applications",
        "Automates document chasing",
        "Tracks onboarding stages",
        "Improves staff readiness visibility",
        "Reduces admin workload",
      ],
    },
    features: [
      {
        icon: "input",
        title: "Centralised Applicant Intake",
        shortDescription:
          "Collect applications from multiple channels into one organised pipeline.",
        description:
          "Multi-source application tracking and candidate pipeline organisation.",
        details: [
          "Multi-channel collection",
          "Candidate pipeline organisation",
          "Centralised applicant capture",
        ],
      },
      {
        icon: "email",
        title: "Automated Document Chasing",
        description:
          "Send reminders automatically for missing compliance documents.",
        details: [
          "Missing document reminders",
          "Automated follow-ups",
          "Status tracking",
        ],
      },
      {
        icon: "assignment",
        title: "Tracks Onboarding Stages",
        description: "See exactly where each applicant is in the process.",
        details: [
          "Stage-based onboarding",
          "Role-based workflow",
          "Progress tracking",
        ],
      },
      {
        icon: "visibility",
        title: "Staff Readiness Visibility",
        shortDescription:
          "Know who is ready, who is waiting, and what is outstanding.",
        description:
          "Improve visibility across your entire onboarding pipeline.",
        details: [
          "Ready to deploy",
          "Awaiting documents",
          "In progress",
          "New applicants",
        ],
      },
      {
        icon: "dashboard",
        title: "White Label CRM",
        description:
          "Lead and candidate pipelines in one place with full team visibility.",
        details: [
          "Pipeline organisation",
          "Team visibility",
          "Notes and progress tracking",
          "Custom stages",
        ],
      },
      {
        icon: "notifications_active",
        title: "Email and WhatsApp Automation",
        description:
          "Keep candidates and team informed with automated messaging.",
        details: [
          "Instant acknowledgements",
          "Automated follow-ups",
          "Internal notifications",
        ],
      },
      {
        icon: "bar_chart",
        title: "Dashboard Visibility",
        description: "Real-time overview of your entire recruitment pipeline.",
        details: [
          "New applicants overview",
          "In progress tracking",
          "Document status",
          "Ready to deploy count",
        ],
      },
    ],
    whatWeOffer: {
      title: "What's Included",
      subtitle: "Your Care Agency Automation System includes:",
      items: [
        "Recruitment Intake Automation",
        "Compliance Workflow Automation",
        "White Label CRM",
        "Email and WhatsApp Automation",
        "Dashboard Visibility",
        "Workflow setup and configuration",
        "Onboarding pipeline design",
        "Support and optimisation",
      ],
    },
    whyDifferent: {
      title: "Why This Matters",
      intro:
        "We understand the care sector because we come from it. This is not generic automation.",
      points: [
        "Care recruitment pressure",
        "Onboarding delays",
        "Compliance risk",
        "CQC expectations",
        "Staff shortages",
        "Operational gap between available packages and ready-to-work staff",
      ],
      conclusion:
        "We build systems around real sector challenges — not generic software templates.",
    },
    results: {
      title: "What Changes After Implementation?",
      subtitle:
        "Instead of spreadsheets, manual chasing and uncertainty, you get:",
      metrics: [
        "One structured system",
        "Faster communication",
        "Clearer compliance stages",
        "Improved onboarding flow",
        "Better workforce visibility",
        "Reduced admin time",
        "Faster onboarding cycles",
        "Improved recruitment visibility",
        "Better alignment between staff supply and service demand",
        "Less pressure on managers",
      ],
    },
    whoIsThisFor: {
      title: "Who This Is For",
      subtitle: "This is ideal for:",
      points: [
        "Domiciliary care agencies",
        "Supported living providers",
        "Home care businesses",
        "Care providers recruiting regularly",
        "Agencies struggling with onboarding delays",
        "Managers overloaded with compliance admin",
      ],
      conclusion:
        "If your agency is onboarding carers every month and your process still depends heavily on manual admin, this system is for you.",
    },
    pricingPackages: [
      {
        title: "Growth Commitment",
        price: "£490",
        priceUnit: "per month",
        features: [
          "No setup fee",
          "12-month agreement",
          "Best for agencies serious about improving systems and operational stability",
          "Includes workflow setup",
          "CRM configuration",
          "Automation build",
          "Onboarding pipeline design",
          "Support and optimisation",
        ],
        highlighted: true,
      },
      {
        title: "Flexible Start",
        price: "£490",
        priceUnit: "per month",
        features: [
          "£990 setup fee",
          "Cancel anytime",
          "Best for agencies that want flexibility",
          "Includes workflow setup",
          "CRM configuration",
          "Automation build",
          "Onboarding pipeline design",
          "Support and optimisation",
        ],
      },
    ],
    pricingNote: "No hidden fees. No complicated licensing.",
    primaryCTA: "Book My Free Workflow Review",
    secondaryCTA: "Speak on WhatsApp",
    secondaryCTALink: "https://wa.me/447446981768",
    finalCTAMessage: (
      <>
        Ready to reduce onboarding delays and compliance pressure?
        <br />
        <br />
        Book a free workflow review and we will show you how your agency can
        automate recruitment and staff onboarding more effectively.
      </>
    ),
    faqs: [
      {
        question: "How long does implementation take?",
        answer:
          "Most systems can be configured and launched within 14 days, depending on complexity.",
      },
      {
        question: "Is this suitable for small care agencies?",
        answer:
          "Yes. It works especially well for small to medium agencies that need structure without hiring more admin staff.",
      },
      {
        question: "Do you replace our current software?",
        answer:
          "Not always. In many cases we can improve your workflow by integrating with existing tools or centralising key stages into one simpler system.",
      },
      {
        question: "Can this be adapted to our onboarding process?",
        answer:
          "Yes. The workflows can be tailored to your agency's recruitment and compliance steps.",
      },
    ],
  },
};

export default servicesData;
