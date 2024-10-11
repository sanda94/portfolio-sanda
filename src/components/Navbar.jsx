import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaSearch } from 'react-icons/fa';
import logo from '../assets/kevinRushLogo.png';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-gray-700 w-full shadow-md flex items-center justify-between py-4 px-6 lg:px-12 fixed top-0 left-0 z-50">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 cursor-pointer"
      >
        <img className="w-20 h-auto rounded-full" src={logo} alt="logo" />
      </motion.div>

      {/* Space between logo and icons */}
      <div className="flex-grow"></div>

      {/* Social Icons and Search */}
      <div className="flex items-center gap-6 text-3xl text-white">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
          <FaInstagram />
        </a>

        {/* Search Icon */}
        <div className="relative ml-2">
          <FaSearch
            className="text-white hover:text-blue-300 transition duration-300 cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)} // Toggle the search input on click
          />
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-40" // Added width for better input
            >
              <input
                type="text"
                className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
                placeholder="Search..."
              />
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
