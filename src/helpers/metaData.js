// Meta data configuration for all pages
export const metaData = {
  // Home page
  "/": {
    title: "AI Automation Agency UK & AI Digital Marketing | Amica Digital",
    description:
      "AI automation agency for healthcare & business, B2B & B2C. AI automation helps out to capture leads, automate workflows, reduce costs & scale faster",
    keywords:
      "ai automation agency, ai digital marketing, AI automation agency for healthcare, B2B AI solutions, B2C AI automation, lead capture automation, workflow automation UK",
  },

  // About page
  "/about": {
    title:
      "About Amica Digital | AI Marketing Agency for Healthcare & Business",
    description:
      "Discover about Amica Digital an AI digital marketing agency in UK helping healthcare & other brands grow smarter.",
    keywords:
      "about Amica Digital, AI marketing agency UK, healthcare AI agency, digital marketing agency Manchester, AI agency UK",
  },

  // Services page
  "/services": {
    title: "AI Automation Services Company | Amica Digital",
    description:
      "AI automation services company delivering smart workflows & AI-driven marketing to boost growth and brand visibility for healthcare & other businesses",
    keywords:
      "AI automation services, AI automation company, smart workflows, AI-driven marketing, healthcare automation, business automation UK",
  },

  // AI Lead Generation
  "/services/ai-lead-generation": {
    title:
      "AI Lead Generation Services for B2B & B2C Businesses | Amica Digital",
    description:
      "Hire AI lead generation for healthcare & other businesses by a best AI digital marketing agency. Get qualified leads and real growth.",
    keywords:
      "ai lead generation, B2B lead generation, B2C lead generation, AI lead generation services, healthcare lead generation, qualified leads AI",
  },

  // AI Automation & CRM
  "/services/ai-automation": {
    title:
      "AI Automation & CRM Solutions for Businesses Marketing with Amica Digital",
    description:
      "Experience AI automated CRM solutions for business to streamline workflows, manage leads & improve engagement for better growth.",
    keywords:
      "AI automation, CRM solutions, AI CRM, automated CRM, business workflow automation, lead management CRM, AI business solutions",
  },

  // AI Virtual Assistants
  "/services/ai-virtual-assistants": {
    title:
      "AI Virtual Assistant & AI Chatbot | Amica Digital Healthcare Services UK",
    description:
      "Hire AI virtual assistant and AI chatbot for all businesses along with healthcare to automate tasks, improve support, and boost business growth.",
    keywords:
      "AI virtual assistant, AI chatbot, healthcare AI assistant, business automation, virtual assistant UK, AI customer support, task automation",
  },

  // SEO & Content
  "/services/seo-content-social": {
    title: "AI SEO Agency | SEO Services for Healthcare & Other Business UK",
    description:
      "AI SEO agency offering SEO services for healthcare & other brands to improve rankings, drive traffic, and grow your business.",
    keywords:
      "AI SEO agency, SEO services UK, healthcare SEO, business SEO, AI SEO services, search engine optimization, drive traffic",
  },

  // Web Development
  "/services/websites-custom-software": {
    title: "Web Development Agency UK | Apps, Portal & Software Development",
    description:
      "Web development company offering web app development, portal and software development services to build scalable AI digital solutions",
    keywords:
      "web development agency UK, web app development, portal development, software development, AI digital solutions, custom software UK",
  },

  // AI Compliance
  "/services/responsible-ai-compliance": {
    title: "AI Compliance Software company for Healthcare | Amica Digital",
    description:
      "Hire AI compliance software and solutions to automate healthcare compliance, staff onboarding and improve operations management",
    keywords:
      "AI compliance software, healthcare compliance, compliance automation, staff onboarding automation, operations management, AI compliance UK",
  },

  // Recruitment Software
  "/services/care-agency-recruitment": {
    title:
      "AI Recruitment Software | Automated Recruitment System | Amica Digital",
    description:
      "AI recruitment software for healthcare with HR automation software to streamline hiring, reduce workload, and improve talent acquisition efficiency for businesses.",
    keywords:
      "AI recruitment software, healthcare recruitment, HR automation, automated recruitment system, talent acquisition, hiring automation",
  },

  // Pricing page
  "/pricing": {
    title: "Affordable Pricing for AI Marketing Automation | Amica Digital",
    description:
      "Explore pricing plans for AI marketing automation, SEO, web development, and digital services. Transparent pricing with Amica Digital.",
    keywords:
      "AI marketing automation pricing, SEO pricing, web development cost, digital services pricing, transparent pricing UK",
  },

  // Contact page
  "/contact-us": {
    title:
      "Contact Us | AI Powered Automation & Digital Services | Amica Digital",
    description:
      "Contact Amica Digital for AI Powered automation, SEO, web development, and digital services. Let's grow your business together.",
    keywords:
      "contact Amica Digital, AI automation contact, SEO services contact, web development contact, digital services UK",
  },

  // Case Study
  "/rsm-case-study": {
    title:
      "RSM Care Links Case Study | Healthcare Automation Success | Amica Digital",
    description:
      "See how Amica Digital helped RSM Care Links transform their workforce automation with AI solutions. Real results from healthcare automation.",
    keywords:
      "healthcare automation case study, care agency automation, workforce automation, RSM Care Links, AI case study UK",
  },

  // Blog
  "/blog": {
    title: "AI & Digital Marketing Blog | Insights & Resources | Amica Digital",
    description:
      "Latest insights on AI automation, digital marketing, SEO, and business growth strategies for healthcare and service businesses.",
    keywords:
      "AI blog, digital marketing blog, automation insights, SEO tips, business growth strategies, healthcare marketing blog",
  },
};

// Helper function to get meta data for a path
export const getMetaData = (path) => {
  // Check for exact match first
  if (metaData[path]) {
    return metaData[path];
  }

  // Check for dynamic service routes
  const servicePaths = [
    "/services/ai-lead-generation",
    "/services/ai-automation",
    "/services/ai-virtual-assistants",
    "/services/seo-content-social",
    "/services/websites-custom-software",
    "/services/responsible-ai-compliance",
    "/services/care-agency-recruitment",
  ];

  if (servicePaths.includes(path)) {
    return metaData[path];
  }

  // Check for blog post routes (dynamic)
  if (path.startsWith("/blog/")) {
    return {
      title: "Amica Digital Blog | AI & Digital Marketing Insights",
      description:
        "Read our latest articles on AI automation, digital marketing strategies, and business growth tips.",
      keywords:
        "AI blog post, digital marketing article, automation guide, business tips",
    };
  }

  // Default meta data
  return {
    title: "Amica Digital | AI-Powered Digital Growth for Modern Businesses",
    description:
      "AI automation agency for healthcare & business. Capture leads, automate workflows, reduce costs & scale faster with intelligent AI solutions.",
    keywords:
      "AI agency, digital marketing, automation, business growth, healthcare AI, B2B AI solutions",
  };
};
