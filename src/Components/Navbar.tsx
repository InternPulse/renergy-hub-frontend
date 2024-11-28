import { useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import profile_icon from '../assets/profile_icon.png';
import search_icon from '../assets/search_icon.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 mx-4 sm:mx-[10%] relative">
      {/* Logo */}
      <img className="w-[80px] h-[60px] cursor-pointer" src={logo} alt="logo" />

      {/* Nav Links */}
      <ul
        className={`absolute top-full left-0 w-full bg-white text-black shadow-lg flex flex-col items-center gap-5 font-medium transition-transform duration-300 md:static md:flex-row md:bg-transparent md:text-sm md:shadow-none md:flex md:justify-center ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-[200%]'
        } md:translate-y-0`}
      >
        <li className="cursor-pointer hover:text-softGreen">Who We Are</li>
        <li className="cursor-pointer hover:text-softGreen">Products</li>
        <li className="cursor-pointer hover:text-softGreen">Features</li>
        <li className="cursor-pointer hover:text-softGreen">Contact Us</li>
      </ul>

      {/* Profile, Search, Cart Icons */}
      <div className="flex items-center gap-6">
        <img className="cursor-pointer" src={profile_icon} alt="profile" />
        <img className="cursor-pointer" src={search_icon} alt="search" />
        <img className="cursor-pointer" src={cart_icon} alt="cart" />

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-softGreen" />
          ) : (
            <FaBars className="text-2xl text-softGreen" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
