import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const SemiQualifiedScreen = ({ submittedName }) => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi ${submittedName} Thanks — we're reviewing your details.\n\n` +
        `To speed things up, reply with:\n` +
        `1. website link\n` +
        `2. best time to contact you\n` +
        `3. budget range you're comfortable with (monthly + setup)\n\n` +
        `— Amica Team`
    );
    window.open(`https://wa.me/447808014132?text=${message}`, "_blank");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Navigation />

      <main className="flex-grow flex items-center justify-center py-12 px-6 pt-32">
        <div className="max-w-4xl w-full">
          {/* Success Card */}
          <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl form-card-shadow overflow-hidden">
            <div className="p-12 lg:p-16 text-center">
              {/* Success Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                  <span className="material-icons text-5xl text-yellow-600 dark:text-yellow-400">
                    pending
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                Thanks — we're reviewing your request ✅
              </h1>

              {/* Body */}
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Thanks, {submittedName}. A specialist will review your
                information and contact you within 1 business day with next
                steps.
              </p>

              {/* Next Steps */}
              <div className="bg-primary/5 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  To speed things up:
                </h2>

                <div className="text-left space-y-4 mb-8">
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    Reply to our email/WhatsApp with:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "your website URL (if any)",
                      "1–2 competitors you admire",
                      "your best contact times",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                      >
                        <span className="text-primary font-bold text-lg">
                          •
                        </span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    icon="chat"
                    onClick={handleWhatsAppClick}
                    className="flex-1 max-w-xs mx-auto sm:mx-0"
                  >
                    Message Us on WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    icon="home"
                    onClick={handleBackToHome}
                    className="flex-1 max-w-xs mx-auto sm:mx-0"
                  >
                    Back to Home
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-slate-400 dark:text-slate-500">
                We aim to respond to all inquiries within 1 business day.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SemiQualifiedScreen;
