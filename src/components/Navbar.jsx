import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/kevinRushLogo.png';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-red-300 mb-5 flex items-start justify-between py-6">
      <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        initial="hidden"
        animate="visible"
        className="flex flex-shrink-0 items-start">
        <img className="mx-6 w-40 rounded-2xl" src={logo} alt="logo"/>
      </motion.div>
      <motion.div 
        animate="visible"
        className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        <a href="https://github.com/"><FaGithub /></a>
        <a href="https://facebook.com/"><FaFacebook /></a>
        <a href="https://www.instagram.com/"><FaInstagram /></a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
