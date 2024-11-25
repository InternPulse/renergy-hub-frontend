import { Home } from 'lucide-react'
import {
    LayoutDashboard,
    FileText,
    Package,
    Tag,
    PackageOpen,
    ShoppingCart,
    CreditCard,
    MessageSquare,
    Users,
    Settings,
    LogOut
  } from 'lucide-react';


export const SideBarLinks = [
    {
      label: "Sidebar",
      route: "/components/Sidebar",
      icon: Home,
    },
    
  ];



  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      href: "/dashboard",
    },
    {
      label: "Report",
      icon: <FileText className="h-4 w-4" />,
      href: "/report",
    },
    {
      label: "Products",
      icon: <Package className="h-4 w-4" />,
      href: "/products",
    },
    {
      label: "Offers",
      icon: <Tag className="h-4 w-4" />,
      href: "/offers",
    },
    {
      label: "Inventory",
      icon: <PackageOpen className="h-4 w-4" />,
      href: "/inventory",
    },
    {
      label: "Orders",
      icon: <ShoppingCart className="h-4 w-4" />,
      href: "/orders",
    },
    {
      label: "Payments",
      icon: <CreditCard className="h-4 w-4" />,
      href: "/payments",
    },
    {
      label: "Messages",
      icon: <MessageSquare className="h-4 w-4" />,
      href: "/messages",
    },
    {
      label: "Customers",
      icon: <Users className="h-4 w-4" />,
      href: "/customers",
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      href: "/settings",
      variant: "ghost",
    },
  ];
