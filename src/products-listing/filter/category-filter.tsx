"use client"


import { ChevronsUpDown } from 'lucide-react'

import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
 
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { ScrollArea } from "../../components/ui/scroll-area"
import { useProductStore } from "../store/store"





export function CategoryFilter() {
  
    const {categories, selectedCategories , setFilteredCategory} = useProductStore(); // Assuming ProductStore contains vendors data
   
  const handleVendorChange = (categoryId: string) => {
   
  
     setFilteredCategory(categoryId); 
     console.log(selectedCategories)
  };
  
  

// Utility function to get selected vendor names
const getSelectedVendorsText = () => {
    if (selectedCategories.length === 0) {
      return "Shop by Category";
    }
  
    // 5. Handle "all" case when it's selected
    if (selectedCategories.some(v => v.id === "all")) {
      return "All Categories";
    }
  
    // 6. Get the names of selected vendors
    const selectedNames = selectedCategories.map(vendor => vendor.name);
    return selectedNames.join(", ");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select vendors"
          className="w-[250px] justify-between"
        >
          <span className="truncate">{getSelectedVendorsText()}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
       
        <ScrollArea className="">
          {categories.map((category) => (
            <DropdownMenuCheckboxItem
              key={category.id}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleVendorChange(category.id)}
            >
              {category.name}
            </DropdownMenuCheckboxItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

