import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logoi.png'; // ✅ Logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1a1f2d] py-10 mt-16 shadow-inner border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* ✅ Logo */}
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto rounded-full shadow-md hover:shadow-yellow-400 transition duration-300"
            />
          </div>

          {/* ✅ Navigation Links */}
          <div className="flex space-x-6 text-sm sm:text-base font-medium">
            <Link
              to="/"
              className="text-gray-300 hover:text-yellow-400 hover:scale-105 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-yellow-400 hover:scale-105 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-yellow-400 hover:scale-105 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* ✅ Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 hover:scale-110 transition duration-300"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-sky-400 hover:scale-110 transition duration-300"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-pink-500 hover:scale-110 transition duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/@fxrocky003"
              className="text-gray-300 hover:text-red-600 hover:scale-110 transition duration-300"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>

        {/* ✅ Copyright */}
        <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.1)] text-center text-gray-400 text-sm tracking-wide">
          &copy; 2025 <span className="text-yellow-400 font-semibold">Prasad Seva</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
