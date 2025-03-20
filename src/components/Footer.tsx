import React from 'react';
import iqralogo from '../../public/iqralogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-t from-[#2d452b] to-[#1b2c1a] px-4 pt-20 border-b-4 border-[#f5a623]">
      <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-4 border-black bg-white p-4 shadow-lg">
        <img className="h-full object-contain" src={iqralogo} alt="Logo" />
      </div>
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex max-w-lg flex-col gap-6 text-center sm:flex-row sm:justify-center sm:text-left"
      >
        <a href="#" className="font-medium text-white hover:text-[#f5a623] transition duration-300">Location</a>
        <a href="#" className="font-medium text-white hover:text-[#f5a623] transition duration-300">Support</a>
        <a href="#" className="font-medium text-white hover:text-[#f5a623] transition duration-300">Privacy Policy</a>
        <a href="#" className="font-medium text-white hover:text-[#f5a623] transition duration-300">Terms & Conditions</a>
      </nav>
      <p className="py-10 text-center text-gray-300 text-sm">© 2025 IQRA | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
