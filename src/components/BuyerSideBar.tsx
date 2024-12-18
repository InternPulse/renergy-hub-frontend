import { Scrollbars } from "react-custom-scrollbars-2";
import { MenuIcon, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const sidebarMenu = [
  { menu: "Overview", icon: "/home.png", path: "/buyer-dashboard" },
  { menu: "Products", icon: "/box.png", path: "/product" },
  { menu: "Offers", icon: "/award.png", path: "/buyer-dashboard" },
  { menu: "Saved Products", icon: "/archive.png", path: "/buyer-dashboard" },
  { menu: "Order", icon: "/shopping-bag.png", path: "/buyer-dashboard/ordered-products" },
  { menu: "Payment", icon: "/layout.png", path: "/buyer-dashboard" },
  { menu: "Messages", icon: "/mail.png", path: "/buyer-dashboard" },
  { menu: "Purchase History", icon: "/key.png", path: "/buyer-dashboard/purchase-history" },
  { menu: "Security", icon: "/key.png", path: "/buyer-dashboard" },
];

const BuyerSideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar visibility
  const [activeIndex, setActiveIndex] = useState<number>(0); // State to track the active menu item
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]); // References for menu items

  // Toggle the sidebar open/close state
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle keyboard navigation (ArrowUp/ArrowDown)
  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (activeIndex + 1) % sidebarMenu.length;
      setActiveIndex(nextIndex);
      menuRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (activeIndex - 1 + sidebarMenu.length) % sidebarMenu.length;
      setActiveIndex(prevIndex);
      menuRefs.current[prevIndex]?.focus();
    }
  };

  // Attach and clean up the keyboard event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      {/* Toggle Button for Mobile View */}
      <div className="fixed top-7 left-[14px] z-50 md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-xl bg-green-500 text-white p-2 rounded-full shadow-md"
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Sidebar Component */}
      <div
        className={`fixed top-0 left-0 h-screen w-[250px] bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex w-44 h-44 flex-col items-center mt-10">
          <img className="object-cover" src="/logo.png" alt="logo" />
        </div>

        {/* Scrollable Menu Items */}
        <Scrollbars autoHide style={{ height: "calc(100vh - 350px)" }}>
          <div className="flex flex-col gap-4 px-5 mt-2">
            {sidebarMenu.map((menu, index) => (
              <Link
                to={menu.path} // Navigation Link
                key={index}
                ref={(el) => (menuRefs.current[index] = el)} // Assign ref
                tabIndex={0} // Make focusable
                onClick={() => {
                  setIsOpen(false);
                  setActiveIndex(index);
                }}
                className={`flex cursor-pointer hover:bg-green-400 px-4 py-[10px] rounded-[10px] gap-3 items-center ${
                  activeIndex === index ? "bg-green-400" : ""
                }`}
              >
                <img src={menu.icon} alt={`${menu.menu} icon`} />
                <h2>{menu.menu}</h2>
              </Link>
            ))}
          </div>
        </Scrollbars>

        {/* Bottom Section for Settings and Logout */}
        <div className="border-t-4 border-slate-300 py-3 flex flex-col gap-4 px-5 mb-10">
          <div className="cursor-pointer flex hover:bg-green-300 px-4 py-[10px] rounded-[10px] gap-3 items-center">
            <img src="/settings.png" alt="settings" />
            <h2>Settings</h2>
          </div>
          <div className="cursor-pointer flex hover:bg-green-300 px-4 py-[10px] rounded-[10px] gap-3 items-center">
            <img src="/logout.png" alt="logout" />
            <h2>Log Out</h2>
          </div>
        </div>
      </div>

      {/* Overlay to Close Sidebar in Mobile View */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default BuyerSideBar;
