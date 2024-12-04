import search from "./Assets/search.png";
import frame from "./Assets/Frame 3201.png";
import bell from "./Assets/Ellipse.png";
import chevron from "./Assets/chevron-down.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-4">
        <span className="hidden md:block text-lg font-bold">Overview</span>
        <div className="flex items-center border rounded-lg bg-green-50 border-gray-300 p-1">
          <input 
            type="text"  
            className="border-none outline-none bg-green-50 p-2 text-sm md:text-base w-[450px] md:w-[690px]" 
          />
          <button className="flex items-center justify-center p-2">
            <img src={search} alt="Search" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-4 justify-end w-full">
        <img src={frame} alt="Frame" className="w-6 h-6 cursor-pointer" />
        <img src={bell} alt="Notifications" className="w-6 h-6 cursor-pointer" />
        <span className="hidden md:block text-sm font-medium">Admin omooga</span>
        <img src={chevron} alt="Dropdown" className="w-4 h-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;