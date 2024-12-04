import  { useState } from 'react';
import {Link} from 'react-router-dom'
import homeIcon from '../components/Assets/home.png';
import userManagementIcon from '../components/Assets/users.png';
import orderManagementIcon from '../components/Assets/shopping-bag.png';
import messagesIcon from '../components/Assets/mail.png';
import reportAnalyticsIcon from '../components/Assets/pie-chart.png';
import settingsIcon from '../components/Assets/settings.png';
import logoutIcon from '../components/Assets/Log Out copy.png';

const menuItems = [
    {
        icon: homeIcon,
        label: "Dashboard",
        href: "/admin/dashboard",
    },
    {
        icon: userManagementIcon,
        label: "User Management",
        href: "/admin/user-management",
    },
    {
        icon: orderManagementIcon,
        label: "Order Management",
        href: "/admin/order-management",
    },
    {
        icon: messagesIcon,
        label: "Messages",
        href: "/admin/messages",
    },
    {
        icon: reportAnalyticsIcon,
        label: "Report & Analytics",
        href: "/admin/reports",
    },
];

const footerItems = [
    {
        icon: settingsIcon,
        label: "Settings",
        href: "/admin/settings",
    },
    {
        icon: logoutIcon,
        label: "Logout",
        href: "/admin/logout",
    },
];

const Menu = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (href:string) => {
        setActiveLink(href);
    };

    return (
        <div className="menu mt-4 text-sm">
            <div className="menu-items flex flex-col gap-3">
                {menuItems.map((item, index) => (
                    
                    <Link 
                        key={index} 
                        to={item.href} 
                        className={`menu-item gap-3 flex items-center justify-center lg:justify-start p-2 transition-colors duration-300 
                                    ${activeLink === item.href ? 'bg-green-500 text-white' : 'hover:bg-green-200'}`}
                        onClick={() => handleLinkClick(item.href)}
                    >
                        <img src={item.icon} alt={item.label} className="menu-icon" width={20} height={20} />
                        <span className="hidden md:inline">{item.label}</span>
                    </Link>
                ))}
            </div>

            <div className="footer-menu flex flex-col gap-4 mt-[230px]">
                {footerItems.map((item, index) => (
                    <Link 
                        key={index} 
                        to={item.href} 
                        className={`footer-item gap-3 flex items-center justify-center lg:justify-start p-2 transition-colors duration-300 
                                    ${activeLink === item.href ? 'bg-green-500 text-white' : 'hover:bg-green-200'}`}
                        onClick={() => handleLinkClick(item.href)}
                    >
                        <img src={item.icon} alt={item.label} className="footer-icon" width={20} height={20} />
                        <span className="hidden md:inline">{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;