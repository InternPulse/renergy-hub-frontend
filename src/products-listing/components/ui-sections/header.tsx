
import { useState, useCallback, useEffect } from "react";

import { useSearchParams, useNavigate,  } from "react-router-dom";
import { useProductStore } from "../../store/store";
import { useDebounce } from "use-debounce"; // Import useDebounce
import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";
import img from '../../../../public/logo.svg'


//this is the Header component, 
const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    selectedCategories,
    selectedProducts,
    selectedVendors,
   
  } = useProductStore();
  const navigate = useNavigate(); // Hook to update the URL
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  ); // To handle the search input

  // Debounced version of the search query
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500); // 500ms debounce delay

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

 
  const handleClick = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    // Handle category Header
    if (selectedCategories.length > 0) {
      const categoryNames = selectedCategories.map((cat) => cat);
      params.set("category", categoryNames.join(","));
    } else {
      params.delete("category");
    }

    // Handle product Header
    if (selectedProducts.length > 0) {
      const productNames = selectedProducts.map((prod) => prod.name);
      params.set("product", productNames.join(","));
    } else {
      params.delete("product");
    }

    // Handle vendor Header
    if (selectedVendors.length > 0) {
      const vendorNames = selectedVendors.map((vendor) => vendor.name);
      params.set("vendor", vendorNames.join(","));
    } else {
      params.delete("vendor");
    }

    // Handle search query (using the debounced version)
    if (debouncedSearchQuery) {
      params.set("search", debouncedSearchQuery);
    } else {
      params.delete("search");
    }

    // Set the updated search params to the URL
    setSearchParams(params);
    navigate({ search: params.toString() }, { replace: true });
  }, [
    selectedCategories,
    selectedProducts,
    selectedVendors,
    debouncedSearchQuery,
    setSearchParams,
    navigate,
    searchParams,
  ]);

  // Use useEffect to trigger the Header update when the debounced search query or Header selections change
  useEffect(() => {
    handleClick(); // Update Headers immediately after selection or debounced search
  }, [
    debouncedSearchQuery,
    selectedCategories,
    selectedProducts,
    selectedVendors,
    handleClick,
  ]);

  return (
    <section className="flex flex-col gap-8">
      <header className=" flex flex-col gap-4">
        <ul className="flex flex-col md:flex-row gap-8 justify-between lg:items-center">
          <li className="pr-8">
            <img src={img} alt="logo"/>
          </li>
          <li className="relative w-full">
             
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products"
              className="border p-2 rounded   text-right pl-2 pr-10 "
            />
            <Search className="absolute right-2 top-2" />
    

          </li>
        
          <li className="hidden lg:flex">
            <div>
           settings 
            </div>
          </li>
        </ul>
      </header>

     
    </section>
  );
};

export default Header;
