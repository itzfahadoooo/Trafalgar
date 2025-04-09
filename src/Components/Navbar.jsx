import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap py-6 px-8 md:px-16">
        <div className="w-[120px] sm:w-[140px] md:w-[160px] h-auto">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>

        <ul className="hidden md:flex gap-8 text-sm text-gray-700">
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer">
            Find a doctor
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer">
            Apps
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer">
            Testimonials
          </li>
          <li className="hover:text-[#1F1534] hover:font-bold cursor-pointer">
            About us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
