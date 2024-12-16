
import { useState,useEffect } from 'react';

import { ChevronDown } from 'lucide-react'
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
 
  DropdownMenuContent,
 
  DropdownMenuLabel,
 
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { useProductStore } from "../../store/store"
import { Checkbox } from '../../../components/ui/checkbox'




export function CategoryFilter() {
  
    const {testCategories, selectedCategories , setFilteredCategory} = useProductStore(); // Assuming ProductStore contains vendors data
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const handleVendorChange = (categoryId: number) => {
   
  
     setFilteredCategory(categoryId); 

    
     console.log(selectedCategories)
  };
// Effect to update search params when a checkbox is clicked
useEffect(() => {
  if (!isCheckboxClicked) return; // Only run when checkbox is clicked

  const params = new URLSearchParams(searchParams.toString());

  if (selectedCategories.length > 0) {
    const categoryNames = selectedCategories.map((cat) => cat.categoryName);
    params.set("category", categoryNames.join(","));
  } else {
    params.delete("category");
  }

  // Update the URL with new search params
  setSearchParams(params);
  navigate({ search: params.toString() }, { replace: true });

  // Reset the flag after the URL update
  setIsCheckboxClicked(false);
}, [selectedCategories, isCheckboxClicked, searchParams, setSearchParams, navigate]);

 
  
  

// Utility function to get selected vendor names
const getSelectedVendorsText = () => {
    if (selectedCategories.length === 0) {
      console.log(selectedCategories)
      return "Shop by Category";
   
    }
  
    // // 5. Handle "all" case when it's selected
    // if (selectedCategories.some(v => v.id === "all")) {
    //   return "All Categories";
    // }
  
    // 6. Get the names of selected vendors
    const selectedNames = selectedCategories.map(vendor => vendor.categoryName);
    return selectedNames.join(", ");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <div className='pl-1'> 
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select vendors"
          className="w-[250px] justify-between rounded-xl bg-white text-black hover:bg-green-500 border-slate-200 hover:text-white"
        >
          <span className="truncate">{getSelectedVendorsText()}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] bg-[#F2F2F2]">
       
        <ScrollArea className="">
          {testCategories.map((item) => (
            <div className='flex items-center'   key={item.id}>
            <Checkbox
               key={item.id}
              checked={selectedCategories.some((c) => c.id === item.id)}
              onCheckedChange={() => handleVendorChange(item.id)}
            />
            <DropdownMenuLabel>
              {item.categoryName}
              </DropdownMenuLabel>
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

