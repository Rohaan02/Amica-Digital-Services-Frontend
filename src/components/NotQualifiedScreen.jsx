import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NotQualifiedScreen = ({ submittedName }) => {
  const navigate = useNavigate();

  const handleGetStarterGuide = () => {
    // Replace with actual URL to your starter guide
    window.open("https://amica.digital/starter-guide", "_blank");
  };

  const handleRecheck = () => {
    // Navigate back to the form or homepage to start over
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
              {/* Info Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="material-icons text-5xl text-blue-600 dark:text-blue-400">
                    info
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                Thanks — we may not be the best fit right now
              </h1>

              {/* Body */}
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Thanks, {submittedName}. Based on your current budget/timeline,
                we may not be able to deliver the outcomes you want responsibly.
              </p>

              {/* Options */}
              <div className="bg-primary/5 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  If you'd like, we can:
                </h2>

                <div className="text-left space-y-4 mb-8">
                  <ul className="space-y-3">
                    {[
                      "share a starter guide, or",
                      "reconnect when you're ready to invest in a growth system.",
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
                    icon="menu_book"
                    onClick={handleGetStarterGuide}
                    className="flex-1 max-w-xs mx-auto sm:mx-0"
                  >
                    Get the Starter Guide
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    icon="refresh"
                    onClick={handleRecheck}
                    className="flex-1 max-w-xs mx-auto sm:mx-0"
                  >
                    Recheck in 60 Days
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-slate-400 dark:text-slate-500">
                We believe in being transparent about fit — it's the only way to
                build trust that lasts.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotQualifiedScreen;
