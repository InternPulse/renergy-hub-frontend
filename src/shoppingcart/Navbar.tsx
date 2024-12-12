import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";


const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false); // Toggle search bar
  const [cartCount] = useState<number>(3); // Example cart count
  const location = useLocation(); // Get the current route

  // Function to toggle the search bar
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white px-4 sm:px-16 py-4 shadow-md">
      {/* Logo Section */}
      <div className="mb-2 sm:mb-0">
        <img
          src="src/assets/logo.jpg"
          alt="logo"
          className="w-[100px] h-[60px] sm:w-[116.5px] sm:h-[80px]"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center flex-grow space-x-4 sm:space-x-8 mb-2 sm:mb-0">
        {[
          { name: "Who We Are", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Features", path: "/features" },
          { name: "Contact Us", path: "/contact" },
        ].map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`hover:underline ${
              location.pathname === link.path
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Icons Section */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Profile Icon */}
        <CgProfile className="text-2xl cursor-pointer hover:text-blue-500" />

        {/* Search Icon */}
        <div className="relative">
          <CiSearch
            onClick={toggleSearch}
            className="text-2xl cursor-pointer hover:text-blue-500"
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute right-0 top-8 sm:top-10 border rounded p-2 w-48 shadow-lg"
            />
          )}
        </div>

        {/* Shopping Bag Icon with Count */}
        <div className="relative">
          <FiShoppingBag className="text-2xl cursor-pointer hover:text-blue-500" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
