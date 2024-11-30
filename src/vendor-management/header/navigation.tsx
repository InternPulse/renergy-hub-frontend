// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom"; // Assuming React Router is used

// Define the NavLink type
interface NavLinkType {
  name: string;
  path: string;
  isActive?: boolean; // Optional property
}

// Define the navigation links array
const navLinks: NavLinkType[] = [
  { name: "Vendor Profile", path: "/vendorprofile" },
  {
    name: "Product Management",
    path: "/product-management",
  },
  {
    name: "Order Management",
    path: "/order-management",
  },
  { name: "Sales Analytics", path: "/sale-analytics" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-[#0E1F0D] p-6">
      <ul className="flex space-x-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "bg-[#C9EDBD] px-6 py-2 rounded-lg" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
