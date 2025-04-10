import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap py-6 px-8 md:px-16">
        <div className="w-[120px] sm:w-[140px] md:w-[160px] h-auto">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>

        <ul className="hidden md:flex gap-8 text-sm text-gray-700">
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110">
            <Link to="services" smooth={true} duration={500}>
              Find a doctor
            </Link>
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110">
            <Link to="apps" smooth={true} duration={500}>
              Apps
            </Link>
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110">
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer transition duration-300 transform hover:scale-110">
            <Link to="about" smooth={true} duration={500}>
              About us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;