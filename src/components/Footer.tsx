import React from 'react';
import iqralogo from '../../public/iqralogo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070F07] px-5 md:px-10 pt-16 pb-10 border-t border-[#EDE5D8]/[0.03]">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <img src={iqralogo} alt="IQRA" className="h-28 md:h-36 opacity-60 brightness-0 invert" />
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { href: "/location", label: "Location" },
              { href: "/contact", label: "Support" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="footer-link text-[#EDE5D8]/30 hover:text-[#D4A853]">{label}</a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#EDE5D8]/[0.03] mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#EDE5D8]/15 text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} IQRA International
          </p>
          <p className="text-[#EDE5D8]/10 text-[10px] tracking-[0.2em] uppercase">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
