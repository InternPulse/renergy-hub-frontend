import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { MenuIcon, X } from "lucide-react";

const sidebarMenu = [
  { menu: "Overview", icon: "/home.png", path: "/buyer-dashboard" },
  { menu: "Products", icon: "/box.png", path: "/product" },
  { menu: "Offers", icon: "/award.png", path: "/buyer-dashboard" },
  { menu: "Saved Products", icon: "/archive.png", path: "/buyer-dashboard/saved-products" },
  { menu: "Order", icon: "/shopping-bag.png", path: "/buyer-dashboard/ordered-products" },
  { menu: "Payment", icon: "/layout.png", path: "/buyer-dashboard" },
  { menu: "Messages", icon: "/mail.png", path: "/buyer-dashboard" },
  { menu: "Purchase History", icon: "/key.png", path: "/buyer-dashboard/purchase-history" },
  { menu: "Security", icon: "/key.png", path: "/buyer-dashboard" },
];

const BuyerSideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      sidebarRef.current?.focus();
    }
  };

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

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://renergy-hub-express-backend.onrender.com/api/v1/auth/logout",
        {
          method: "GET",
          credentials: "include", // Ensures cookies are sent
        }
      );

      if (response.ok) {
        navigate("/"); // Redirect to login page on successful logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className="fixed top-7 left-[14px] z-50 md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-xl bg-green-500 text-white p-2 rounded-full shadow-md"
          aria-controls="sidebar"
          aria-expanded={isOpen}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>
      <div
        id="sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-[250px] bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        role="navigation"
        aria-label="Buyer sidebar"
        tabIndex={-1}
      >
        <div className="flex w-44 h-44 flex-col items-center mt-10">
          <img className="object-cover" src="/logo.png" alt="logo" />
        </div>
        <Scrollbars autoHide style={{ height: "calc(100vh - 350px)" }}>
          <div className="flex flex-col gap-4 px-5 mt-2">
            {sidebarMenu.map((menu, index) => (
              <Link
                to={menu.path}
                key={index}
                ref={(el) => (menuRefs.current[index] = el)}
                tabIndex={0}
                onClick={() => {
                  setIsOpen(false);
                  setActiveIndex(index);
                }}
                className={`flex cursor-pointer hover:bg-green-400 px-4 py-[10px] rounded-[10px] gap-3 items-center ${
                  activeIndex === index ? "bg-green-400" : ""
                }`}
                aria-current={activeIndex === index ? "page" : undefined}
              >
                <img src={menu.icon} alt={`${menu.menu} icon`} />
                <h2>{menu.menu}</h2>
              </Link>
            ))}
          </div>
        </Scrollbars>
        <div className="border-t-4 border-slate-300 py-3 flex flex-col gap-4 px-5 mb-10">
          <div className="cursor-pointer flex hover:bg-green-300 px-4 py-[10px] rounded-[10px] gap-3 items-center">
            <img src="/settings.png" alt="settings" />
            <h2>Settings</h2>
          </div>
          <div
            onClick={handleLogout}
            className="cursor-pointer flex hover:bg-green-300 px-4 py-[10px] rounded-[10px] gap-3 items-center"
          >
            <img src="/logout.png" alt="logout" />
            <h2>Log Out</h2>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default BuyerSideBar;
