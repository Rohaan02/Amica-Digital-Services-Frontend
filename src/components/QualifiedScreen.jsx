import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Button from "./Button";

const QualifiedScreen = ({ submittedName }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi ${submittedName} You're ready for the next step.\n` +
        `Please choose a time for your AI Growth Consultation: https://calendly.com/amica-digital/strategy-call\n` +
        `Speak soon — Amica Digital Services`
    );
    window.open(`https://wa.me/447808014132?text=${message}`, "_blank");
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
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="material-icons text-5xl text-green-600 dark:text-green-400">
                    check_circle
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                You're booked for the next step{" "}
              </h1>

              {/* Body */}
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Thanks, {submittedName}. We've received your details and
                prepared the right specialist for your call.
              </p>

              {/* Next Step */}
              <div className="bg-primary/5 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  Next: Please choose a time that suits you below.
                </h2>

                <div className="text-left space-y-4 mb-8">
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    What you'll get on the call:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Clear package recommendation",
                      "Fast cost estimate range",
                      "30-day launch plan overview",
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
                    icon="event"
                    onClick={() => {
                      window.open(
                        "https://calendly.com/amica-digital/strategy-call",
                        "_blank"
                      );
                    }}
                    className="flex-1 max-w-xs mx-auto sm:mx-0"
                  >
                    Choose a Time (Calendar)
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    icon="chat"
                    onClick={handleWhatsAppClick}
                    className="flex-1 max-w-xs mx-auto sm:mx-0"
                  >
                    Add us on WhatsApp
                  </Button>
                </div>

                {/* Note about afternoon availability */}
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                  ⏰ Afternoon time slots only (12 PM - 5 PM UK time)
                </p>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Can't find a suitable time? Reply to your confirmation email or
                contact us directly.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QualifiedScreen;
