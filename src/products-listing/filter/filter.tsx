import { Button } from "../../components/ui/button";
import { useState ,useCallback} from "react";
import FilterContainer from "./categoryButtonProps";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/store";
import { useEffect } from "react";
import { useDebounce } from "use-debounce"; // Import useDebounce
import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";

const Filter = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedCategories, selectedProducts, selectedVendors } = useProductStore();
  const navigate = useNavigate(); // Hook to update the URL
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || ""); // To handle the search input

  // Debounced version of the search query
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500); // 500ms debounce delay

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

const handleRemoveButton = ()=>{
  setIsClicked(false);
} 

const handleButton =() =>{
  setIsClicked(true)
}

  const handleClick = useCallback(() => {
    
    const params = new URLSearchParams(searchParams as any);
  
    // Handle category filter
    if (selectedCategories.length > 0) {
      const categoryNames = selectedCategories.map((cat) => cat.name);
      params.set("category", categoryNames.join(", "));
    } else {
      params.delete("category");
    }
  
    // Handle product filter
    if (selectedProducts.length > 0) {
      const productNames = selectedProducts.map((prod) => prod.name);
      params.set("product", productNames.join(", "));
    } else {
      params.delete("product");
    }
  
    // Handle vendor filter
    if (selectedVendors.length > 0) {
      const vendorNames = selectedVendors.map((vendor) => vendor.name);
      params.set("vendor", vendorNames.join(", "));
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
  }, [selectedCategories, selectedProducts, selectedVendors, debouncedSearchQuery, setSearchParams, navigate,searchParams]);



  // Use useEffect to trigger the filter update when the debounced search query changes
  useEffect(() => {
    if (debouncedSearchQuery !== searchParams.get("search")) {
      handleClick(); // Automatically update filters when the debounced search query changes
    }
  }, [debouncedSearchQuery,handleClick,searchParams ]); // Trigger on change of debouncedSearchQuery

  return (
    <section className="">

     <header className="">
          <ul className="flex gap-4 justify-between items-center ">
            <li>
              <p className="text-3xl text-black">Products</p>
            </li>
            <li className="relative w-full">
            <Input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products"
          className="border p-2 rounded"
        />
        <Search className="absolute right-2 top-2"/>
            </li>
            <li></li>
            </ul>     


      </header>


      <ul className="flex flex-col gap-2">
        <li>
{!isClicked? <div>
  <Button className="gap-2 flex p-2 rounded-xl" onClick={handleButton}>
            <img src="" alt="" />
            <span>Filter</span>
          </Button>
</div>: <Button className="gap-2 flex h-[47px] w-[47px] rounded-full" onClick={handleRemoveButton}>
            
            <span>X</span>
          </Button>} 
        </li>
        <li>
          {isClicked ? (
            <button onClick={handleClick}>
              <FilterContainer />
            </button>
          ) : (
            ""
          )}
        </li>
      </ul>
      
    </section>
  );
};

export default Filter;
