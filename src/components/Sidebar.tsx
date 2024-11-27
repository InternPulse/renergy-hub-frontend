
import { Scrollbars } from "react-custom-scrollbars-2";
import { MenuIcon, X } from "lucide-react"
import { useState, useRef, useEffect } from "react";

const sidebarMenu = [
    { menu: "Dashboard", icon: "/home.png" },
    { menu: "Reports", icon: "/pie-chart.png" },
    { menu: "Products", icon: "/box.png" },
    { menu: "Offers", icon: "/award.png" },
    { menu: "Inventory", icon: "/archive.png" },
    { menu: "Order", icon: "/shopping-bag.png" },
    { menu: "Payment", icon: "/layout.png" },
    { menu: "Messages", icon: "/mail.png" },
    { menu: "Customers", icon: "/users.png" },
    { menu: "Security", icon: "/key.png" },
    { menu: "Management", icon: "/settings.png" },
];

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle
    const [activeIndex, setActiveIndex] = useState<number>(9);
    const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
    const toggleSidebar = () => setIsOpen(!isOpen);

    // Handle key navigation with proper typing
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
            document.removeEventListener("keydown", handleKeyDown); // Cleanup
        };
    }, [activeIndex]);

    return (
        <>
            {/* Menu Icon */}
            <div className="fixed top-7 left-[14px] z-50 md:hidden">
                <button
                    onClick={toggleSidebar}
                    className="text-xl bg-green-500 text-white p-2 rounded-full shadow-md"
                >
                    {isOpen ? <X /> : <MenuIcon />}
                </button>
            </div>
            {/* sidemenu */}
            <div className={`fixed top-0 left-0 h-screen w-[300px] bg-white z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                {/* Logo */}
                <div className="flex w-44 h-44 flex-col items-center mt-10">
                    <img className="object-cover" src="/logo.png" alt="logo" />
                </div>
                {/* Scrollable Menu */}
                {/* Changes start here */}
                <Scrollbars autoHide style={{ height: "calc(100vh - 350px)" }}>
                    <div className="flex flex-col gap-4 px-5 mt-10">
                        {sidebarMenu.map((menu, index) => (
                            <div
                                ref={(el) => (menuRefs.current[index] = el)} // Assign ref
                                tabIndex={0} // Make focusable
                                onClick={() => { setIsOpen(false); setActiveIndex(index) }}
                                className={`flex cursor-pointer hover:bg-green-400 px-4 py-[10px] rounded-[10px] gap-3 items-center ${activeIndex === index ? "bg-green-400" : ""
                                    }`}
                                // className="flex cursor-pointer hover:bg-green-300 px-4 py-[10px] rounded-[10px] gap-3 items-center"
                                key={index}
                            >
                                <img src={menu.icon} alt="icons" />
                                <h2>{menu.menu}</h2>
                            </div>
                        ))}
                    </div>
                </Scrollbars>
                {/* Changes end here */}
                {/* Bottom Section */}
                <div className="flex flex-col gap-4 px-5 mb-10">
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
            {/* Overlay (for closing the sidebar) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
