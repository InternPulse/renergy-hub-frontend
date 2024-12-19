import { Search, Bell } from "lucide-react";
import MobileSidebar from "@/vendor-management/header/mobileSidebar";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
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

        <h3 className="mt-auto mb-auto">Brand</h3>
      </div>
     
    </header>
  );
};

export default Header;