import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Training from "./components/Training";
import Consulting from "./components/Consulting";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Training", link: "#training" },
    { name: "Consulting", link: "#consulting" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Router>
      <Navbar navItems={navItems} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Hero /> */}
      <Services />
      <Training />
      <Consulting />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
