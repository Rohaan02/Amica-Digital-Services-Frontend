import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const IntakeForm = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Helmet>
        <title>
          Contact Us | AI Powered Automation & Digital Services | Amica Digital
        </title>
        <meta
          name="description"
          content="Contact Amica Digital for AI Powered automation, SEO, web development, and digital services. Let’s grow your business together."
        />
        <meta name="keywords" content="ai powered automation" />
        {/* Optional: Add canonical URL */}
        <link
          rel="canonical"
          href={`https://amicadigitalservices.com/contact-us`}
        />
        {/* Open Graph tags for social sharing */}
        <meta
          property="og:title"
          content="Contact Us | AI Powered Automation & Digital Services | Amica Digital"
        />
        <meta
          property="og:description"
          content="Contact Amica Digital for AI Powered automation, SEO, web development, and digital services. Let’s grow your business together."
        />
        <meta
          property="og:url"
          content={`https://amicadigitalservices.com/contact-us`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />

      <main className="flex-grow flex items-center justify-center py-12 px-6 pt-12">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar/Context Area */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Amica Smart Intake
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                2–3 minutes to help us understand your business and recommend
                the right AI growth system.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-primary/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">schedule</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Quick Process
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Takes approximately 2-3 minutes to complete.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Secure & Confidential
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Your information is encrypted and only used for your custom
                    proposal.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
              <h4 className="font-bold mb-4 text-slate-900 dark:text-white">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-3">
                  <span className="material-icons text-sm text-primary">
                    email
                  </span>
                  <a
                    href="mailto:growth@amica.digital"
                    className="hover:text-primary transition-colors"
                  >
                    growth@amica.digital
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="material-icons text-sm text-primary">
                    phone
                  </span>
                  <a
                    href="tel:+447446981768"
                    className="hover:text-primary transition-colors"
                  >
                    +44 7446 981768
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="material-icons text-sm text-primary">
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

          {/* Main Form Card */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight pb-3">
              Intake Form
            </h1>
            <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl form-card-shadow overflow-hidden">
              <div className="p-8 lg:p-10">
                {/* Embedded Form */}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/84oRTR2WPe4OYlKPWY4A"
                  style={{
                    width: "100%",
                    height: "700px",
                    border: "none",
                    borderRadius: "0.75rem",
                  }}
                  id="lead-form-84oRTR2WPe4OYlKPWY4A"
                  title="Lead Capture Form"
                  scrolling="no"
                />
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntakeForm;
