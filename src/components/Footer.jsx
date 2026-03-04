import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Lead Generation", href: "/services/ai-lead-generation" },
        { label: "AI Automation & CRM", href: "/services/ai-automation" },
        {
          label: "AI Virtual Assistants",
          href: "/services/ai-virtual-assistants",
        },
        {
          label: "SEO & Content Systems",
          href: "/services/seo-content-social",
        },
        {
          label: "Web & Custom Software",
          href: "/services/websites-custom-software",
        },
        {
          label: "Responsible AI & Compliance",
          href: "/services/responsible-ai-compliance",
        },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-icons text-white text-sm">bolt</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              Amica
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Pioneering the next era of digital marketing through advanced
            artificial intelligence and automated growth engines.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <img
                alt="LinkedIn"
                className="w-4 h-4 dark:invert-0"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <img
                alt="Twitter"
                className="w-4 h-4 dark:invert-0"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'/%3E%3C/svg%3E"
              />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">
              {section.title}
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-white">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex items-start space-x-3">
              <a href="mailto:rohaannadeem2@gmail.com" className="space-x-3">
                <span className="material-icons text-xs mt-1 text-primary">
                  email
                </span>
                <span>growth@amica.digital</span>
              </a>
            </li>
            <li className="flex items-start">
              <a href="tel:+447808014132" className="space-x-3">
                <span className="material-icons text-xs mt-1 text-primary">
                  phone
                </span>
                <span>+44 7808 014132</span>
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <span className="material-icons text-xs mt-1 text-primary">
                location_on
              </span>
              <span>
                378 Claremont Road, Manchester
                <br />
                M14 7WB
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 border-t border-slate-200 dark:border-white/5 pt-10">
        <p>© 2024 Amica Digital Services. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link to="/cookies" className="hover:text-primary">
            Cookie Policy
          </Link>
          <Link to="/sitemap" className="hover:text-primary">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
