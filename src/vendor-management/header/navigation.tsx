// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Bell } from "lucide-react";
import { useUser } from "./userContext";

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
  const { formData } = useUser();

  // getting the initial
  const getInitials = () => {
    const { firstName, lastName } = formData;
    const firstNameInitial = firstName.slice(0, 1).toUpperCase();
    const lastNameInitial = lastName.slice(0, 1).toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
  };

  return (
    <nav className="bg-white text-[#0E1F0D] px-6 py-4 flex justify-between items-center">
      {/* right side */}
      <ul className="flex space-x-8">
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

      {/* left side */}
      <div className="flex items-center gap-2">
        <Bell />
        <div className="bg-[#DEDEDE] p-2 rounded-full  text-2xl">
          {getInitials()}
        </div>

        <p>{`${formData.firstName} ${formData.lastName}`}</p>
      </div>
    </nav>
  );
};

export default Navbar;
