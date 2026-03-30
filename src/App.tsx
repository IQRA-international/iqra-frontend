import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./components/Services";
import Trading from "./components/Trading";
import Consulting from "./components/Consulting";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Location from "./components/Location";
import ThankYou from "./pages/ThankYou";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Consulting", link: "#consulting" },
    { name: "Training", link: "#training" },
    { name: "Contact", link: "#contact" },
    { name: "Sourcing", link: "#trading" },
  ];

  return (
    <Router>
      <ScrollToTop />
      {/* Film grain noise overlay */}
      <div className="noise-overlay" />
      <Navbar navItems={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
