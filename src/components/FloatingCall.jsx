import React, { useState, useEffect } from "react";

const FloatingCall = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Phone number in international format
  const phoneNumber = "+447446981768";
  const telUrl = `tel:${phoneNumber}`;

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href = telUrl;
  };

  return (
    <div
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Main button */}
      <button
        onClick={handleClick}
        className="relative group"
        aria-label="Call us"
      >
        {/* Button background - smaller on mobile */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform duration-300 active:scale-95 hover:scale-110">
          {/* Phone Icon - smaller on mobile */}
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FloatingCall;
