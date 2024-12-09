import { useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import profile_icon from '../assets/profile_icon.png';
import search_icon from '../assets/search_icon.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 mx-4 sm:mx-[10%] relative">
      {/* Logo */}
      <Link to='/'><img className="w-[80px] h-[60px] cursor-pointer" src={logo} alt="logo" /></Link>

      {/* Nav Links */}
      <ul
        className={`absolute top-full left-0 w-full bg-white text-black shadow-lg flex flex-col items-center gap-5 font-medium transition-transform duration-300 md:static md:flex-row md:bg-transparent md:text-sm md:shadow-none md:flex md:justify-center ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-[200%]'
        } md:translate-y-0`}
      >
    <Link to='/about'><li className="cursor-pointer hover:bg-softGreen px-2 py-2">Who We Are</li></Link> 
    <Link to='/product'><li className="cursor-pointer  hover:bg-softGreen px-2 py-2">Products</li></Link>
    <Link to='blog'> <li className="cursor-pointer  hover:bg-softGreen px-2 py-2">blog</li></Link>
       <Link to='/contact_us'> <li className="cursor-pointer hover:bg-softGreen px-2 py-2">Contact Us</li></Link>
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
