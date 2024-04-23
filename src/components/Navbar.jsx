import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/kevinRushLogo.png';

const Navbar = () => {
  return (
    <nav className="bg-red-300 mb-20 flex items-start justify-between py-6">
      <div className="flex flex-shrink-0 items-start">
        <img className="mx-2 w-10" src={logo} alt="logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
