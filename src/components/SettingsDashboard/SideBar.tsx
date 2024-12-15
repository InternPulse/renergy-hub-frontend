// // import React, { useState } from 'react';
// import { cn } from "../../lib/utils";
// import {
//   Home,
//   PieChart,
//   Package,
//   Award,
//   Dock,
//   ShoppingBag,
//   PanelsTopLeft,
//   Mail,
//   Users,
//   Settings,
//   LogOut,
//   Menu,
// } from "lucide-react";

// import { Bell, Search, ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../../components/ui/dropdown-menu";
// import { Input } from "../../components/ui/input";
// import { Button } from "../../components/ui/button";

// import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
// import Logo from "../../assets/logo.png";
// import Man from "../../assets/man.png";
// import { useNavigate } from "react-router-dom";

// interface SidebarProps {
//   className?: string;
// }

// interface NavItem {
//   label: string;
//   icon: React.ReactNode;

//   route: string;
//   variant?: "default" | "ghost";
// }

// const MobileSidebar = () => {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="ghost" size="icon" className="md:hidden">
//           <Menu className="h-6 w-6" />
//           <span className="sr-only">Open sidebar</span>
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left" className="p-0 w-72">
//         <SidebarContent />
//       </SheetContent>
//     </Sheet>
//   );
// };

// const SidebarContent = () => {
//   const navigate = useNavigate();

//   const navItems: NavItem[] = [
//     {
//       label: "Dashboard",
//       // icon: <LayoutDashboard className="h-4 w-4" />,
//       icon: <Home className="h-4 w-4" />,

//       route: "/dashboard",
//     },
//     {
//       label: "Report",
//       icon: <PieChart className="h-4 w-4" />,

//       route: "/report",
//     },
//     {
//       label: "Products",
//       icon: <Package className="h-4 w-4" />,

//       route: "/products",
//     },
//     {
//       label: "Offers",
//       icon: <Award className="h-4 w-4" />,

//       route: "/offers",
//     },
//     {
//       label: "Inventory",
//       icon: <Dock className="h-4 w-4" />,

//       route: "/inventory",
//     },
//     {
//       label: "Orders",
//       icon: <ShoppingBag className="h-4 w-4" />,

//       route: "/orders",
//     },
//     {
//       label: "Payments",
//       icon: <PanelsTopLeft className="h-4 w-4" />,

//       route: "/payments",
//     },
//     {
//       label: "Messages",
//       icon: <Mail className="h-4 w-4" />,

//       route: "/messages",
//     },
//     {
//       label: "Customers",
//       icon: <Users className="h-4 w-4" />,

//       route: "/customers",
//     },
//     {
//       label: "Settings",
//       icon: <Settings className="h-4 w-4" />,
//       route: "/settings",
//       variant: "ghost",
//     },
//   ];

//   return (
//     <div className="flex h-full flex-col">
//       {/* Logo */}
//       <div className="flex h-40 items-center px-6">
//         <div className="h-26 w-26">
//           <img
//             src={Logo}
//             alt="Renergy Hub Logo"
//             className="h-full w-full object-contain"
//           />
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-1 px-3 py-4">
//         {navItems.map((item) => (
//           <Button
//             key={item.route}
//             variant={item.variant || "ghost"}
//             className={cn(
//               "w-full justify-start gap-3 hover:bg-green-100",
//               item.label === "Settings" && "pt-20"
//             )}
//             onClick={() => navigate(item.route)}
//           >
//             {item.icon}
//             {item.label}
//           </Button>
//         ))}

//         {/* Logout Button */}
//         <Button
//           variant="ghost"
//           className="w-full justify-start gap-3 hover:bg-gray-100 text-red-600 hover:text-red-700"
//         >
//           <LogOut className="h-4 w-4" />
//           Logout
//         </Button>
//       </nav>
//     </div>
//   );
// };

// const Sidebar = ({ className }: SidebarProps) => {
//   return (
//     <>
//       {/* Mobile Sidebar */}
//       <div className="sticky top-0 z-50 flex h-16 items-center px-4 md:hidden">
//         <MobileSidebar />
//         <div className="flex h-40 items-center ">
//           <div
//             className={`sticky top-0 z-30 flex h-16 w-80 items-center justify-between bg-white px-4 md:px-6 ${className}`}
//           >
//             {/* Search Bar */}
//             <div className="flex flex-1 items-center max-w-xl">
//               <div className="relative w-full">
//                 <Search className="absolute left-28 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//                 <Input
//                   type="search"
//                   className="w-full pl-10 bg-gray-50 border-none"
//                 />
//               </div>
//             </div>

//             {/* Right Section - Notifications & Profile */}
//             <div className="flex items-center gap-4">
//               {/* Notifications */}
//               <Button variant="ghost" size="icon" className="relative">
//                 <Bell className="h-5 w-5" />
//                 <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white grid place-items-center">
//                   0
//                 </span>
//               </Button>

//               {/* Profile Dropdown */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" className="flex items-center gap-2">
//                     <div className="flex items-center gap-2">
//                       <div className="h-8 w-8 rounded-full overflow-hidden">
//                         <img
//                           src={Man}
//                           alt="Profile"
//                           className="h-full w-full object-cover"
//                         />
//                       </div>
//                       <div className="hidden md:block text-sm font-medium">
//                         Gabriel James
//                       </div>
//                       <ChevronDown className="h-4 w-4 text-gray-500" />
//                     </div>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-56">
//                   <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>Profile</DropdownMenuItem>
//                   <DropdownMenuItem>Settings</DropdownMenuItem>
//                   <DropdownMenuItem>Billing</DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem className="text-red-600">
//                     Log out
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Sidebar */}
//       <aside
//         className={cn(
//           "fixed left-0 top-0 z-40 h-screen w-64 bg-white transition-transform hidden md:block",
//           className
//         )}
//       >
//         <SidebarContent />
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

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
  Settings,
  LogOut,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/vendor-images/logo.svg";

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: House,
    color: "black",
    href: "/",
  },
  {
    name: "Report",
    icon: PieChart,
    color: "black",
    href: "/report",
  },
  {
    name: "Products",
    icon: Package,
    color: "black",
    href: "/orders",
  },
  {
    name: "Offers",
    icon: Award,
    color: "black",
    href: "/offer",
  },
  {
    name: "Inventory",
    icon: Dock,
    color: "black",
    href: "/orders",
  },
  {
    name: "Orders",
    icon: ShoppingBag,
    color: "black",
    href: "/orders",
  },
  {
    name: "Payments",
    icon: PanelsTopLeft,
    color: "black",
    href: "orders/",
  },
  {
    name: "Messages",
    icon: Mail,
    color: "black",
    href: "/orders",
  },
  {
    name: "Customers",
    icon: User,
    color: "black",
    href: "/orders",
  },
  {
    name: "Managements",
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
    href: "/orders",
  },
];
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`hidden z-10 transition-all duration-300 ease-in-out flex-shrink-0 bg-white ${
        isSidebarOpen ? "w-40" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 170 : 80 }}
    >
      <img
        className={`h-12 w-12 mt-6 ml-6 ${
          isSidebarOpen ? "w-auto h-20" : "w-8 h-8"
        }`}
        src={logo}
        alt="logo"
      />

      <div className="h-full bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-green-400 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <div className="flex flex-col justify-between">
          <nav className="flex-grow mb-4">
            {SIDEBAR_ITEMS.map((item, index) => (
              <Link key={index} to={item.href}>
                <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors mb-2">
                  <item.icon
                    size={20}
                    style={{ color: item.color, minWidth: "20px" }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
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

          <nav className="flex-grow mt-6">
            {SIDEBAR_BOTTOM.map((item, index) => (
              <Link key={index} to={item.href}>
                <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors ">
                  <item.icon
                    size={20}
                    style={{ color: item.color, minWidth: "20px" }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
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

export default Sidebar;
