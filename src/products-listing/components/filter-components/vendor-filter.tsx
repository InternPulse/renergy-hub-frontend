"use client"


import { ChevronDown } from 'lucide-react'

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




export function VendorFilter() {
  
    const {vendors, selectedVendors , setFilteredVendor} = useProductStore(); // Assuming ProductStore contains vendors data
   
  const handleVendorChange = (vendorId: string) => {
   
  
     setFilteredVendor(vendorId); 
  };
  
  

// Utility function to get selected vendor names
const getSelectedVendorsText = () => {
    if (selectedVendors.length === 0) {
      return "Shop by Vendors";
    }
  
    // 5. Handle "all" case when it's selected
    if (selectedVendors.some(v => v.id === "all")) {
      return "All Vendors";
    }
  
    // 6. Get the names of selected vendors
    const selectedNames = selectedVendors.map(vendor => vendor.name);
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
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] bg-[#F2F2F2] ">
       
        <ScrollArea className="h-[300px]">
          {vendors.map((vendor) => (
            <div className='flex items-center'>
            <Checkbox
              key={vendor.id}
              checked={selectedVendors.includes(vendor)}
              onCheckedChange={() => handleVendorChange(vendor.id)}
            />
            <DropdownMenuLabel>
              {vendor.name}
              </DropdownMenuLabel>
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

