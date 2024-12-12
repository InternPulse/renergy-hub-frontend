import { Search, Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  // Add any other specific props here if needed
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex mt-4 mb-2 justify-between p-2">
      <h1 
      className="text-3xl"
      >{title}</h1>
      <form action=""
      className="flex bg-gray-200 p-2 rounded-lg justify-center align-middle">
        <input type="" 
        className="w-[600px] h-10 bg-gray-200"
        />
      <Search 
      className="mt-auto mb-auto"
      />
      </form>

      <div 
      className="flex align-middle w-[180px] justify-evenly"
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