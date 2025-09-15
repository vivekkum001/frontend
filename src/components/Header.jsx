import React, { useState, useEffect } from 'react'; 
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logoi.png'; // ✅ Your logo

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    setMobileMenuOpen(false);
    navigate('/');
    alert('You have been logged out successfully!');
  };

  const navLinks = ['Home', 'About', 'Contact']; // ✅ No "Order"

  return (
    <nav className="bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1a1f2d] py-4 sticky top-0 z-[1000] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* ✅ Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-32" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((text, i) => (
              <Link
                key={i}
                to={`/${text === 'Home' ? '' : text.toLowerCase().replace(/\s/g, '')}`}
                className="text-white hover:text-yellow-400 transition duration-200 font-medium"
              >
                {text}
              </Link>
            ))}
          </div>

          {/* Desktop - Only show user info & logout if logged in */}
          <div className="hidden md:flex gap-4 items-center">
            {isLoggedIn && (
              <>
                <span className="flex items-center gap-2 text-yellow-400">
                  <FaUser className="text-lg" />
                  <span className="font-medium">{userData?.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-1 rounded transition duration-200"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-64 h-full bg-[#1a1f2d] p-6 z-[1050] shadow-2xl transition duration-300">
          <div className="flex flex-col space-y-6 mt-16">
            {navLinks.map((text, i) => (
              <Link
                key={i}
                to={`/${text === 'Home' ? '' : text.toLowerCase().replace(/\s/g, '')}`}
                className="text-white hover:text-yellow-400 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {text}
              </Link>
            ))}

            {/* Mobile - Only show user info & logout if logged in */}
            {isLoggedIn && (
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 text-yellow-400 py-2 border-t border-gray-700">
                  <FaUser />
                  <span className="font-medium">{userData?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-200"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
