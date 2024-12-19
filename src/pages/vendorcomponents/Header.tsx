import { useState, useEffect } from "react";
import { Search, Bell } from "lucide-react";
import MobileSidebar from "@/vendor-management/header/mobileSidebar";

import { useProductStore } from "../../products-listing/store/store";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

  const { userId } = useProductStore();
  const [userName, setUserName] = useState({
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
          setUserName({
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

  return (
    <header className="flex flex-col sm:flex-row mt-4 mb-2 justify-between p-2">
      <MobileSidebar />
      <h1 
      className="text-3xl m-1"
      >{title}</h1>
      <form action=""
      className="flex bg-gray-200 p-2 m-1 rounded-lg justify-center align-middle">
        <input type="" 
        className="w-[600px] h-10 bg-gray-200"
        />
      <Search 
      className="my-auto size-10"
      />
      </form>

      <div 
      className="flex align-middle w-[180px] justify-evenly m-1"
      >
        <Bell 
        className="mt-auto mb-auto"
        />

        <img src="" alt="Profile Image mt-auto mb-auto"
        className="h-8 w-8 rounded-full mt-auto mb-auto"
        />

        <h2 className="my-auto">{`${userName.firstName}`}</h2>
      </div>
     
    </header>
  );
};

export default Header;