import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import iqralogo from "../../public/iqralogo.svg";

interface NavItem {
  name: string;
  link: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav
      className="fixed w-full z-[9999] top-0 left-0 transition-all duration-300 bg-[#e2dddc]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and title */}
        <Link to="/" className="grid items-center">
          <img src={iqralogo} className="h-18" />
          <a
            href="#"
            className="ody text-3xl font-bold text-black mx-2 lg:text-4xl"
          />
        </Link>

        {/* Buttons and menu toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="mailto:">
            <button
              type="button"
              className="text-white bg-black focus:outline-none font-medium rounded-2xl text-md px-4 py-3 text-center border border-gray-700 hover:bg-white hover:text-black"
            >
              Get In Touch
            </button>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="menu-toggle text-black inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <IoMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } items-center justify-center bg-transparent text-black rounded-lg w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-black w-full p-2 mt-4 font-medium border border-gray-500 rounded-lg bg-white md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent md:justify-center">
            {navItems.map((navItem, idx) => (
              <li key={idx} className="w-full">
                <a
                  href={navItem.link}
                  className="block font-bold py-2 px-3 text-left rounded-xl hover:bg-gray-100 md:hover:bg-[#e2dddc] md:hover:text-black md:text-black hover:bg-[#e2dddc]"
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
