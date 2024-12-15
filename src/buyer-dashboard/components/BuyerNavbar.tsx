import { Input } from "../../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";

const routeTitles: Record<string, string> = {
  "/buyer-dashboard": "Overview",
  "/buyer-dashboard/saved-products": "Products",
  "/buyer-dashboard/reports": "Reports",
  "/buyer-dashboard/products": "Products",
  "/buyer-dashboard/offers": "Offers",
};




function BuyerNavbar() {

  // THIS RENDERS PAGE TITLE BASED ON THE ROUTES

  useEffect(()=>{
    console.log(pageTitle);
    
  },[])

  const location = useLocation();

  // Helper to get the page title
  const getPageTitle = (path: string): string => {
    const exactMatch = routeTitles[path]; // Exact match
    if (exactMatch) return exactMatch;

    // Fallback for prefix matches (if needed)
    for (const route in routeTitles) {
      if (path.startsWith(route)) {
        return routeTitles[route];
      }
    }
    return "Page Title"; // Default fallback
  };

  // Dynamically compute the page title based on the current route
  const pageTitle = useMemo(() => getPageTitle(location.pathname), [location.pathname]);
  // 
  return (
    <nav className="md:ml-[250px] flex h-24 justify-between items-center 
        pl-[60px] pr-[10px] sm:pl-[80px] sm:pr-[40px] md:px-2 lg:px-10 xl:px-20 py-5 bg-white ">
            <div>
                <h1 className="font-bold text-black text-[16px] sm:text-[18px] lg:text-[28px]">{pageTitle}</h1>
            </div>
            <div className="flex gap-1 mx-3 md:mx-0 items-center shadow-sm rounded-lg bg-[#E6E6E6]">
                <Input className="border-none outline-none md:px-[0px] lg:px-[50px] xl:px-20 bg-transparent"/>
                <img src="/searchnav.png" alt="search" />
            </div>
            <div className="flex gap-2 md:gap-2 items-center">
                <img className="hidden md:block" src="/bell.png" alt="bell" />
                <Avatar>
                    <AvatarImage src="/avatar3.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="hidden md:block">Frank</h2>
                <img className="hidden lg:block" src="/downicon.png" alt="downicon" />
            </div>
        </nav>
  )
}

export default BuyerNavbar