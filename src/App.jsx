import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import IntakeForm from "./pages/IntakeForm";
import RSMCaseStudy from "./pages/CaseStudy";
import ServiceDetail from "./components/ServiceDetail";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    // Load script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <FloatingWhatsApp />
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/84oRTR2WPe4OYlKPWY4A"
        style={{
          display: "none",
          width: "100%",
          height: "100%",
          border: "none",
        }}
        id="popup-84oRTR2WPe4OYlKPWY4A"
        data-layout='{"id":"POPUP"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Lead Capture"
        data-height="609"
        data-layout-iframe-id="popup-84oRTR2WPe4OYlKPWY4A"
        data-form-id="84oRTR2WPe4OYlKPWY4A"
        title="Lead Capture"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/rsm-case-study" element={<RSMCaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<IntakeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
