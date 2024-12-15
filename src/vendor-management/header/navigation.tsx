// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Bell } from "lucide-react";
import { useProductStore } from "../../products-listing/store/store";
import { useEffect, useState } from "react";

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
  const { userId } = useProductStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://renergy-hub-express-backend.onrender.com/api/v1/users/${userId}`,
          { method: "GET" }
        );

        if (response.ok) {
          const data = await response.json();
          setFormData({
            firstName: data.data.firstName || "Default",
            lastName: data.data.lastName || "Default",
          });
        } else {
          console.error("Failed to fetch profile data.");
        }
      } catch (error) {
        console.error("Error fetching profile:");
      }
    };

    if (userId) fetchProfile();
  }, [userId]);

  // getting the initial
  const getInitials = () => {
    const { firstName, lastName } = formData;
    const firstNameInitial = firstName.slice(0, 1).toUpperCase();
    const lastNameInitial = lastName.slice(0, 1).toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
  };

  return (
    <nav className="bg-white text-[#0E1F0D] px-6 py-4 flex justify-between items-center flex-wrap">
      {/* right side */}
      <ul className="flex lg:space-x-8">
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
