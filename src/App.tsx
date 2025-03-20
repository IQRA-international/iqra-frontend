import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Training from "./components/Training";
import Consulting from "./components/Consulting";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Trading from "./components/Trading"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Consulting", link: "#consulting" },
    { name: "Training", link: "#training" },
    { name: "Contact", link: "#contact" },
    {name:"Sourcing", link:"#sourcing"}
  ];

  return (
    <Router>
      <Navbar navItems={navItems} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trading" element={<Trading />} />
         <Route path="/consulting" element={<Consulting />} />
        <Route path="/training" element={<Training />} />
       
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      {/* <Hero /> */}
      <Services />
      <Trading/> 
      <Consulting />
      <Training />
     
      <Contact />
      
      <Footer />
    </Router>
  );
}

export default App;
