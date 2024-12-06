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




export function ProductFilter() {
  
    const {testProducts, selectedProducts , setFilteredProduct} = useProductStore(); // Assuming ProductStore contains vendors data
   
  const handleVendorChange = (ProductId: number) => {
   
  
     setFilteredProduct(ProductId); 
     console.log(selectedProducts)
  };
  
  

// Utility function to get selected vendor names
const getSelectedVendorsText = () => {
    if (selectedProducts.length === 0) {
      return "Shop by Product";
    }
  
    // // 5. Handle "all" case when it's selected
    // if (selectedProducts.some(v => v.id === "all")) {
    //   return "All Products";
    // }
  
    // 6. Get the names of selected vendors
    const selectedNames = selectedProducts.map(vendor => vendor.name);
    return selectedNames.join(", ");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select vendors"
          className="w-[250px] justify-between rounded-xl bg-white text-black hover:bg-green-500 border-slate-200 hover:text-white"
        >
          <span className="truncate">{getSelectedVendorsText()}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] bg-[#F2F2F2]">
       
        <ScrollArea className=" ">
          {testProducts.map((product) => (
            <div  className='flex items-center'>
            <Checkbox
             key={product.id}
            checked={selectedProducts.includes(product)}
              onCheckedChange={() => handleVendorChange(product.id)}
            />
             <DropdownMenuLabel>
                 {product.name}
              </DropdownMenuLabel>
              </div>
           
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

