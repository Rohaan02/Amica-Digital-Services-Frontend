import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import IntakeForm from "./pages/IntakeForm";
import RSMCaseStudy from "./pages/CaseStudy";
import ServiceDetail from "./components/ServiceDetail";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <Router>
      <FloatingWhatsApp />
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
