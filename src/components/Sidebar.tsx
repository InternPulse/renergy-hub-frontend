// import { Scrollbars } from "react-custom-scrollbars-2";
// const sidebarMenu = [
//     {
//         menu:'Dashboard',
//         icon:'/home.png'
//     },
//     {
//         menu:'Reports',
//         icon:'/pie-chart.png'
//     },
//     {
//         menu:'Products',
//         icon:'/box.png'
//     },
//     {
//         menu:'Offers',
//         icon:'/award.png'
//     },
//     {
//         menu:'Inventory',
//         icon:'/archive.png'
//     },
//     {
//         menu:'Order',
//         icon:'/shopping-bag.png'
//     },
//     {
//         menu:'Payment',
//         icon:'/layout.png'
//     },
//     {
//         menu:'Messages',
//         icon:'/mail.png'
//     },
//     {
//         menu:'Customers',
//         icon:'/users.png'
//     },
//     {
//         menu:'Security',
//         icon:'/key.png'
//     },    {
//         menu:'Management',
//         icon:'/settings.png'
//     }
// ]

// const Sidebar = () => {
// return (
//     // top logo
//     <div className="bg-white fixed h-full  w-[300px] flex flex-col gap-3 justify-center">
//         <div className="flex mt-10 flex-col gap-3">
//             <div className="w-44 h-44">
//                 <img className="object-cover" src="/logo.png" alt="logo" />
//             </div>
//         </div>
//         {/* upper menu */}
//         <Scrollbars autoHide>
//         <div className="flex -mt-12 flex-col gap-4">
//             {sidebarMenu.map((menu,index)=>(
//                 <div className="flex cursor-pointer hover:bg-green-300 px-4 rounded-[10px] py-[10px] gap-3 
//                 items-center justify-start" key={index}>
//                     <img src={menu.icon} alt="icons" />
//                     <h2>{menu.menu}</h2>
//                 </div>
//             ))

//             }
//         </div>
//         </Scrollbars>
//         {/* lower menu */}
//         <div className="flex mt-24 flex-col gap-4">
//             <div className="cursor-pointer flex hover:bg-green-300 px-4 rounded-[10px] py-[10px] gap-3 
//                 items-center justify-start">
//                 <img src="/settings.png" alt="settings" />
//                 <h2>Settings</h2>
//             </div>
//             <div className="flex cursor-pointer hover:bg-green-300 px-4 rounded-[10px] py-[10px] gap-3 
//                 items-center justify-start">
//                 <img src="/logout.png" alt="settings" />
//                 <h2>Log Out</h2>
//             </div>
//         </div>
//     </div>
// )
// }

// export default Sidebar

import { Scrollbars } from "react-custom-scrollbars-2";
import { useState } from "react";
import {MenuIcon,X} from "lucide-react"
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

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle

    const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
          {/* Menu Icon */}
          <div className="fixed top-7 left-[14px] z-50 md:hidden">
            <button
                onClick={toggleSidebar}
                className="text-xl bg-green-500 text-white p-2 rounded-full shadow-md"
            >
             {isOpen? <X/> : <MenuIcon/> }
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
                onClick={() => setIsOpen(false)} 
              className="flex cursor-pointer hover:bg-green-300 px-4 py-[10px] rounded-[10px] gap-3 items-center"
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
