 {/* Sidebar */}
 <div
 className={`fixed top-0 left-0 h-screen w-[300px] bg-white z-40 transform transition-transform 
    duration-300 ${
   isOpen ? "translate-x-0" : "-translate-x-full"
 } md:translate-x-0`}
>
 {/* Logo */}
 <div className="flex flex-col items-center mt-10">
   <img className="w-44 h-44 object-cover" src="/logo.png" alt="logo" />
 </div>

 {/* Scrollable Menu */}
 <Scrollbars autoHide>
   <div className="flex flex-col gap-4 px-5 mt-10">
     {sidebarMenu.map((menu, index) => (
       <div
         key={index}
         className="flex cursor-pointer hover:bg-green-300 px-4 py-[10px] rounded-[10px] 
         gap-3 items-center"
         onClick={() => setIsOpen(false)} // Close sidebar on menu click (optional)
       >
         <img src={menu.icon} alt="icons" />
         <h2>{menu.menu}</h2>
       </div>
     ))}
   </div>
 </Scrollbars>

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
SecurityDocuments Component
Changes:
Added responsive padding to shift the content only on larger screens.
jsx
Copy code
import Navbar from "./Navbar";

const SecurityDocuments = () => {
return (
<section
className="w-full h-screen overflow-auto md:ml-[300px]" // Responsive margin
>
<Navbar />
<div className="bg-[#E6E6E6] flex flex-col gap-4 mt-3 py-5 px-4">
 {/* Top Header */}
 <div className="shadow-sm rounded-sm bg-white px-4 py-8">
   <h1 className="font-semibold text-[24px]">Security and Compliance</h1>
   <p className="text-[18px]">
     At Renergy Hub, we are committed to maintaining the highest
     standards of security and compliance in our e-commerce operations.
   </p>
 </div>
 {/* Data Protection */}
 <div className="shadow-sm rounded-sm bg-white px-10 py-8">
   <div className="flex flex-col gap-4">
     <div className="flex gap-3 font-semibold">
       <img src="/shield.png" alt="shield" />
       <h2 className="text-[18px]">Data Protection</h2>
     </div>
     <p className="text-[#565656]">
       We Employ industry-leading encryption and security measures to
       protect your personal and financial information.
     </p>
     <ul className="list-disc pl-5 text-[#565656]">
       <li>End-to-end encryption for all data transmissions</li>
       <li>Regular security audits and penetration testing</li>
       <li>Strict access controls and authentication procedures</li>
       <li>Secure, off-site data backups</li>
     </ul>
   </div>
 </div>
 {/* PCI Compliance */}
 <div className="shadow-sm rounded-sm bg-white px-10 py-8">
   <div className="flex flex-col gap-4">
     <div className="flex gap-3 font-semibold">
       <img src="/credit-card.png" alt="card" />
       <h2 className="text-[18px]">PCI Compliance</h2>
     </div>
     <p className="text-[#565656]">
       We adhere to the Payment Card Industry Data Security Standard
       (PCI DSS), designed to ensure secure credit card handling.
     </p>
     <ul className="list-disc pl-5 text-[#565656]">
       <li>Quarterly security audits and vulnerability scans</li>
       <li>Timely documentation of findings</li>
       <li>Compliance with relevant standards like PCI DSS</li>
     </ul>
   </div>
 </div>
</div>
</section>
);
};

export default SecurityDocuments;