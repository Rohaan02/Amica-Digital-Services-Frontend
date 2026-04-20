import React, { useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Shield,
  Eye,
  Lock,
  Trash2,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PrivacyPolicy = ({
  companyName = "Amica Digital Services",
  email = "info@amicadigitalservices.com",
  location = "United Kingdom",
  sections = [],
  isDark = false,
}) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState("overview");

  // Default sections if none provided
  const defaultSections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: Shield,
      content: `${companyName} ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you interact with our services, including our website, landing pages, social media platforms, and lead forms.`,
    },
    {
      id: "data-collection",
      title: "2. Data We Collect",
      icon: Eye,
      content: "We may collect and process the following information:",
      subsections: [
        {
          subtitle: "Personal Information",
          items: [
            "Name",
            "Email address",
            "Phone / WhatsApp number",
            "Company name",
            "Business information",
            "Any information you provide through forms or messages",
          ],
        },
        {
          subtitle: "Technical Data",
          items: ["IP address", "Browser type", "Device information"],
        },
      ],
    },
    {
      id: "data-usage",
      title: "3. How We Use Your Data",
      icon: Lock,
      content: "We use your data to:",
      items: [
        "Respond to enquiries",
        "Provide consultations and services",
        "Improve our services",
        "Send relevant business communications",
        "Follow up on leads and enquiries",
        "Deliver marketing (where consent is given)",
      ],
    },
    {
      id: "legal-basis",
      title: "4. Legal Basis for Processing",
      icon: Shield,
      content: "We process your data under the following legal bases:",
      items: [
        "Your consent",
        "Performance of a contract",
        "Legitimate business interests",
      ],
    },
    {
      id: "data-sharing",
      title: "5. Data Sharing",
      icon: Eye,
      content:
        "We do not sell your personal data. We may share your data with:",
      items: [
        "Service providers (CRM, automation tools, hosting platforms)",
        "Marketing platforms (Google, Meta, TikTok)",
        "Legal or regulatory authorities if required",
      ],
      note: "All third parties are required to protect your data.",
    },
    {
      id: "data-security",
      title: "6. Data Storage & Security",
      icon: Lock,
      content:
        "We take appropriate technical and organisational measures to protect your data against:",
      items: ["Unauthorised access", "Loss or misuse", "Disclosure"],
      note: "Your data is stored securely using trusted systems.",
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      icon: Trash2,
      content: "We retain your data only as long as necessary to:",
      items: [
        "Provide services",
        "Fulfil legal obligations",
        "Maintain business records",
      ],
    },
    {
      id: "user-rights",
      title: "8. Your Rights",
      icon: Shield,
      content: "Under GDPR, you have the right to:",
      items: [
        "Access your data",
        "Request correction",
        "Request deletion",
        "Restrict processing",
        "Object to processing",
        "Withdraw consent at any time",
      ],
      note: "To exercise your rights, contact us using the details below.",
    },
    {
      id: "cookies",
      title: "9. Cookies & Tracking",
      icon: Eye,
      content: "We may use cookies and tracking technologies to:",
      items: [
        "Improve website performance",
        "Analyse traffic",
        "Deliver targeted advertising",
      ],
      note: "You can control cookies through your browser settings.",
    },
    {
      id: "third-party",
      title: "10. Third-Party Links",
      icon: Lock,
      content: `Our website and services may include links to third-party platforms (e.g., WhatsApp, TikTok). We are not responsible for their privacy practices.`,
    },
    {
      id: "updates",
      title: "11. Updates to This Policy",
      icon: Shield,
      content:
        "We may update this Privacy Policy from time to time. Please review it regularly for any changes.",
    },
  ];

  const policySection = sections.length > 0 ? sections : defaultSections;

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const scrollToSection = (sectionId) => {
    // First, ensure the section is expanded
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: true,
    }));

    // Find the section's heading button (the clickable title bar)
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const headingButton = sectionElement.querySelector("button");
      if (headingButton) {
        // Scroll to heading with smooth behavior - scroll-margin-top handles sticky header offset
        headingButton.scrollIntoView({ behavior: "smooth" });
      } else {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-slate-950" : "bg-white"}`}>
      {/* Header */}
      <Navigation variant="glass" />
      <div
        className={`${
          isDark
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gradient-to-b from-blue-50 to-indigo-50"
        } border-b ${isDark ? "border-slate-800" : "border-slate-200"} sticky top-0 z-40`}
      ></div>

      <div className="max-w-6xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield
              className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            />
            <h1
              className={`text-4xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Privacy Policy
            </h1>
          </div>
          <p
            className={`${isDark ? "text-slate-400" : "text-slate-600"} text-lg`}
          >
            {companyName} - Data Protection & Privacy Commitment
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1">
            <div
              className={`${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              } border rounded-xl p-6 sticky top-24`}
            >
              <h2
                className={`text-sm font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-300" : "text-slate-700"
                } mb-4`}
              >
                Contents
              </h2>
              <nav className="space-y-2">
                {policySection.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-blue-400 hover:bg-slate-700"
                        : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="space-y-6">
              {policySection.map((section) => {
                const IconComponent = section.icon;
                const isExpanded = expandedSections[section.id] !== false;

                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className={`${
                      isDark
                        ? "bg-slate-800 border-slate-700"
                        : "bg-white border-slate-200"
                    } border rounded-xl overflow-hidden transition-all duration-300`}
                  >
                    {/* Section Header - Always Visible */}
                    {/* Added scroll-mt-28 to ensure heading is visible below sticky header when scrolled to */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className={`w-full px-6 py-5 flex items-center justify-between scroll-mt-28 ${
                        isDark ? "hover:bg-slate-700/50" : "hover:bg-slate-50"
                      } transition-colors`}
                    >
                      <div className="flex items-center gap-4">
                        <IconComponent
                          className={`w-6 h-6 flex-shrink-0 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <h3
                          className={`text-lg font-bold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {section.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        } ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Section Content - Collapsible */}
                    {isExpanded && (
                      <div
                        className={`px-6 py-4 border-t ${
                          isDark
                            ? "border-slate-700 bg-slate-800/50"
                            : "border-slate-200 bg-slate-50/50"
                        }`}
                      >
                        {/* Main content paragraph */}
                        <p
                          className={`${
                            isDark ? "text-slate-300" : "text-slate-700"
                          } leading-relaxed mb-4`}
                        >
                          {section.content}
                        </p>

                        {/* Subsections (for data collection) */}
                        {section.subsections && (
                          <div className="space-y-4 mb-4">
                            {section.subsections.map((subsection, idx) => (
                              <div key={idx}>
                                <h4
                                  className={`font-semibold ${
                                    isDark ? "text-slate-200" : "text-slate-900"
                                  } mb-2`}
                                >
                                  {subsection.subtitle}
                                </h4>
                                <ul className="space-y-2">
                                  {subsection.items.map((item, itemIdx) => (
                                    <li
                                      key={itemIdx}
                                      className={`flex items-start gap-3 ${
                                        isDark
                                          ? "text-slate-300"
                                          : "text-slate-700"
                                      }`}
                                    >
                                      <span
                                        className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                                          isDark ? "bg-blue-400" : "bg-blue-600"
                                        }`}
                                      />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* List Items */}
                        {section.items && (
                          <ul className="space-y-2 mb-4">
                            {section.items.map((item, idx) => (
                              <li
                                key={idx}
                                className={`flex items-start gap-3 ${
                                  isDark ? "text-slate-300" : "text-slate-700"
                                }`}
                              >
                                <span
                                  className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                                    isDark ? "bg-blue-400" : "bg-blue-600"
                                  }`}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Note/Additional Info */}
                        {section.note && (
                          <div
                            className={`${
                              isDark
                                ? "bg-blue-950 border-blue-800 text-blue-200"
                                : "bg-blue-50 border-blue-200 text-blue-900"
                            } border rounded-lg p-4 text-sm`}
                          >
                            ℹ️ {section.note}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Section */}
            <div
              className={`mt-12 ${
                isDark
                  ? "bg-gradient-to-br from-blue-900 to-blue-800"
                  : "bg-gradient-to-br from-blue-50 to-indigo-50"
              } rounded-xl p-8 border ${isDark ? "border-blue-700" : "border-blue-200"}`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                12. Contact Details
              </h3>
              <p
                className={`mb-6 ${isDark ? "text-slate-200" : "text-slate-700"}`}
              >
                If you have any questions about this Privacy Policy or your
                data:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail
                    className={`w-6 h-6 flex-shrink-0 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className={`font-semibold ${
                        isDark
                          ? "text-blue-300 hover:text-blue-200"
                          : "text-blue-600 hover:text-blue-700"
                      } transition-colors`}
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin
                    className={`w-6 h-6 flex-shrink-0 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-blue-300" : "text-blue-600"
                      }`}
                    >
                      {location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div
              className={`mt-8 text-center ${
                isDark ? "text-slate-400" : "text-slate-600"
              } text-sm`}
            >
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
