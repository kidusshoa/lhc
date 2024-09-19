import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#903839] p-4 w-full">
      <div className="w-2/3 mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Website</div>
        <ul className="flex space-x-6">
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
              Vision
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
