import {
  Award,
  Menu,
  Dock,
  House,
  Mail,
  Package,
  PanelsTopLeft,
  PieChart,
  ShoppingBag,
  User,
  Wrench,
  Settings,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

// Custom hook to detect screen size
const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: House,
    color: "black",
    href: "/vendor-dashboard",
  },
  {
    name: "Report",
    icon: PieChart,
    color: "black",
    href: "/vendor-dashboard/report",
  },
  {
    name: "Products",
    icon: Package,
    color: "black",
    href: "/vendor-dashboard/products",
  },
  {
    name: "Offers",
    icon: Award,
    color: "black",
    href: "/vendor-dashboard/offer",
  },
  {
    name: "Inventory",
    icon: Dock,
    color: "black",
    href: "/vendor-dashboard/inventory",
  },
  {
    name: "Orders",
    icon: ShoppingBag,
    color: "black",
    href: "/vendor-dashboard/orders",
  },
  {
    name: "Payments",
    icon: PanelsTopLeft,
    color: "black",
    href: "/vendor-dashboard/orders/",
  },
  {
    name: "Messages",
    icon: Mail,
    color: "black",
    href: "/vendor-dashboard/orders",
  },
  {
    name: "Customers",
    icon: User,
    color: "black",
    href: "/vendor-dashboard/orders",
  },
  {
    name: "Management",
    icon: Wrench,
    color: "black",
    href: "/vendorprofile",
  },
];

const SIDEBAR_BOTTOM = [
  {
    name: "Settings",
    icon: Settings,
    color: "black",
    href: "/settings",
  },
  {
    name: "Logout",
    icon: LogOut,
    color: "black",
    href: "/",
  },
];

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Detect small screens

  const toggleSidebar = () => {
    if (!isSmallScreen) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSmallScreen ? "w-20" : isSidebarOpen ? "w-40" : "w-20"
      }`}
      animate={{
        width: isSmallScreen ? 80 : isSidebarOpen ? 170 : 80, // Fixed width on small screens
      }}
    >
      <div className="h-full bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img className={`h-12 w-12 mt-4 ml-1`} src={logo} alt="logo" />
        </div>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className={`p-2 rounded-full hover:bg-green-400 transition-colors max-w-fit ${
            isSmallScreen ? "hidden" : "block"
          }`}
        >
          <Menu size={24} />
        </motion.button>

        {/* Navigation Items */}
        <div className="h-full flex flex-col justify-between">
          <nav>
            {SIDEBAR_ITEMS.map((item, index) => (
              <Link key={index} to={item.href}>
                <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors mb-1">
                  <item.icon
                    size={20}
                    style={{ color: item.color, minWidth: "20px" }}
                  />
                  {/* Text: Hide on smaller screens */}
                  <AnimatePresence>
                    {isSidebarOpen && !isSmallScreen && (
                      <motion.span
                        className={`ml-4 whitespace-nowrap hidden sm:block`}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </nav>

          <nav>
            {SIDEBAR_BOTTOM.map((item, index) => (
              <Link key={index} to={item.href}>
                <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors">
                  <item.icon
                    size={20}
                    style={{ color: item.color, minWidth: "20px" }}
                  />
                  {/* Text: Hide on smaller screens */}
                  <AnimatePresence>
                    {isSidebarOpen && !isSmallScreen && (
                      <motion.span
                        className={`ml-4 whitespace-nowrap hidden sm:block`}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.div>
  );
};
