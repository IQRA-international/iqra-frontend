import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iqralogonav from "../../public/iqralogonav.jpg";

interface NavItem { name: string; link: string; }
interface NavbarProps { navItems: NavItem[]; }

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[9998] top-0 left-0 transition-all duration-700 ${
      scrolled
        ? "bg-[#0B1A0B]/90 backdrop-blur-xl border-b border-[#EDE5D8]/[0.04] shadow-lg shadow-black/10"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        <Link to="/" className="flex-shrink-0">
          <img src={iqralogonav} className={`transition-all duration-500 ${scrolled ? "h-10" : "h-14"} rounded-sm brightness-0 invert opacity-80`} alt="IQRA" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a key={i} href={item.link} className="nav-link text-[#EDE5D8]/60 hover:text-[#EDE5D8]">
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="mailto:Info@iqrainternational.com.au" className="hidden md:block">
          <span className="btn-primary inline-block text-[#EDE5D8] border border-[#EDE5D8]/10 px-6 py-2.5 hover:border-[#D4A853]">
            <span className="btn-fill" />
            <span className="relative z-[1]">Get in Touch</span>
          </span>
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-5 h-[1.5px] bg-[#EDE5D8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#EDE5D8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#EDE5D8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-gradient-to-b from-[#0B1A0B] to-[#142814] border-t border-[#EDE5D8]/[0.04] px-6 py-6 flex flex-col gap-4">
          {navItems.map((item, i) => (
            <a key={i} href={item.link} onClick={() => setMenuOpen(false)} className="nav-link text-[#EDE5D8]/60 hover:text-[#EDE5D8] py-1">
              {item.name}
            </a>
          ))}
          <div className="h-px bg-[#EDE5D8]/[0.04] my-2" />
          <a href="mailto:Info@iqrainternational.com.au" className="nav-link text-[#D4A853]">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
