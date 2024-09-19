import React, { useState } from "react";
import Logo1 from "./../assets/logot.png";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="bg-[#903839] p-4 w-full sticky top-0">
      <div className="lg:w-2/3 w-full mx-auto flex justify-between items-center">
        <img src={Logo1} alt="Logo" className="w-20 md:w-40" />
        {!showNavbar ? (
          <IoMdMenu
            className="text-white sm:hidden text-3xl cursor-pointer"
            onClick={handleShowNavbar}
          />
        ) : (
          <AiOutlineClose
            className="text-white sm:hidden text-3xl cursor-pointer"
            onClick={handleShowNavbar}
          />
        )}
        <ul className="hidden sm:flex space-x-6 lg:text-2xl sm:text-xl">
          <li>
            <a href="#home" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#teams" className="text-white hover:text-gray-300">
              Teams
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#vision" className="text-white hover:text-gray-300">
              Join Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {showNavbar && (
        <ul className="flex flex-col items-center space-y-4 sm:hidden bg-[#903839] text-white mt-4">
          <li>
            <a
              href="#home"
              className="hover:text-gray-300"
              onClick={handleShowNavbar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#teams"
              className="hover:text-gray-300"
              onClick={handleShowNavbar}
            >
              Teams
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-300"
              onClick={handleShowNavbar}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#vision"
              className="hover:text-gray-300"
              onClick={handleShowNavbar}
            >
              Join Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-300"
              onClick={handleShowNavbar}
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
