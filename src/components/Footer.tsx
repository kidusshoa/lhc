import React from "react";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#903839] py-8">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">Little Hearts Club</h2>
          <p className="text-sm mt-2">
            A student-run charity organization supporting children in need.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://t.me/LittleHeartsCLUB"
            className="text-xl hover:text-gray-300"
          >
            <FaTelegram />
          </a>
          <a
            href="https://instagram.com"
            className="text-xl hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="text-xl hover:text-gray-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Little Hearts Club. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
