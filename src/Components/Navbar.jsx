import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react"; // Import the Menu icon
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap py-6 px-8 md:px-16">
        <div className="w-[120px] sm:w-[140px] md:w-[160px] h-auto">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex gap-8 text-sm text-gray-700 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110 py-4 md:py-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110 py-4 md:py-0">
            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Find a doctor
            </Link>
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110 py-4 md:py-0">
            <Link
              to="apps"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Apps
            </Link>
            
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110 py-4 md:py-0">
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110 py-4 md:py-0">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
