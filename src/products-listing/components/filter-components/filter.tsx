import { Button } from "../../../components/ui/button";
import {  useEffect } from "react";
import FilterContainer from "./categoryButtonProps";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/store";
import { useDebouncedCallback } from "use-debounce"; // Import useDebounce
import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";
import SortOrder from "./SortOrder";

//this is the Filter component, the parent component of all filtering, sorting and searching components
const Filter = () => {
  const [searchParams] = useSearchParams();
  const {
    
    setIsClicked,
    isClicked,
   getVendor,
    getCategories,
    getProduct,
  
  } = useProductStore();
  const navigate = useNavigate(); // Hook to update the URL
  
  const handleRemoveButton = () => {
    setIsClicked(false);
  };

  // Show filter panel
  const handleButton = () => {
    setIsClicked(true);
  };
  

  const handleSearch =useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams as any); // Convert searchParams to URLSearchParams for manipulation
    console.log(value)

    
    if (value) {
      params.set('query', value); // Set 'query' param if a search term exists
    } else {
      params.delete('query'); // Remove 'query' param if search term is cleared
    }

    navigate({ search: params.toString() }, { replace: true });
    (setIsClicked(true)) 
  }, 300);

  // Use useEffect to trigger the filter update when the debounced search query or filter selections change
  useEffect(() => {
    const fetchData = async ()=>{
      try{
        await Promise.all([getProduct(), getCategories(),getVendor()]);
        }catch(err){console.log(err)}
    }
   
    fetchData();  
  

  }, [
    getProduct,
    getCategories,
    getVendor
  
  ]);

  return (
    <section className="flex flex-col gap-8 ">
      <header className=" flex flex-col gap-4">
        <ul className="flex flex-col md:flex-row gap-8 justify-between lg:items-center">
          <li className="pr-8">
            <h1 className="text-3xl">Products</h1>
          </li>
          <li className="relative w-full">
             
            <Input
              type="text"
            
              onChange={(e) => handleSearch(e.target.value)}
              defaultValue={searchParams.get('query')?.toString()} // Retrieve current 'query' param
              placeholder="Search products"
              className="border p-2 rounded   text-right pl-2 pr-10 "
            />
            <Search className="absolute right-2 top-2" />
    

          </li>
        
          <li className="lg:pr-8"></li>
        </ul>
      </header>

      <main className="flex flex-col">
        <ul className="flex justify-between gap-4">
          <li>
            {!isClicked ? (
              <div>
                <Button
                  className="gap-2 flex p-3 rounded-xl bg-white text-black border border-slate-200 hover:text-black hover:bg-green-500"
                  onClick={handleButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M4 21.5V14.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 10.5V3.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21.5V12.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8.5V3.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 21.5V16.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12.5V3.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 14.5H7"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.5H15"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 16.5H23"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Filter</span>
                </Button>
              </div>
            ) : (
              <button
                className="hover:bg-green-300 rounded-full max-w-[47px]"
                onClick={handleRemoveButton}
                title="Remove Filter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  className=""
                >
                  <path
                    d="M23.4993 43.0807C34.3149 43.0807 43.0827 34.313 43.0827 23.4974C43.0827 12.6818 34.3149 3.91406 23.4993 3.91406C12.6838 3.91406 3.91602 12.6818 3.91602 23.4974C3.91602 34.313 12.6838 43.0807 23.4993 43.0807Z"
                    stroke="#1F2223"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.375 17.625L17.625 29.375"
                    stroke="#1F2223"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.625 17.625L29.375 29.375"
                    stroke="#1F2223"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </li>

          <li>
            <SortOrder />
          </li>
        </ul>
        <div>
          {isClicked && (
            <FilterContainer /> // Render the filter container directly
          )}
        </div>
      </main>
    </section>
  );
};

export default Filter;
