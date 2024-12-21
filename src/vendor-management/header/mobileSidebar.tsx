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
  X,
  ShoppingBasket,
  BringToFront,
  BadgeDollarSign,
} from "lucide-react";
import { useState } from "react";
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
    name: "Profile",
    href: "/vendor-management",
    icon: Wrench,
    color: "black",
  },

  {
    name: "Product Mangement",
    href: "/vendor-management/product-management",
    icon: ShoppingBasket,
    color: "black",
  },
  {
    name: "Order Management",
    href: "/vendor-management/order-management",
    icon: BringToFront,
    color: "black",
  },
  {
    name: "Sales Analytics",
    href: "/vendor-management/sale-analytics",
    icon: BadgeDollarSign,
    color: "black",
  },
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

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <section className="lg:hidden block">
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-black bg-gray-200 rounded-md"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-2/3 z-50`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-md"
        >
          <X />
        </button>

        {/* Sidebar Content */}
        <ul className="mt-16 space-y-4 px-4 py-6 overflow-y-auto h-[calc(100%-4rem)] hover">
          {SIDEBAR_ITEMS.map((item) => (
            <li
              key={item.name}
              className="flex items-center space-x-8 p-2 hover:bg-green-400"
            >
              <item.icon className="w-5 h-5 text-black" />
              <a href={item.href} className="text-black font-medium">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </section>
  );
}

export default MobileSidebar;
