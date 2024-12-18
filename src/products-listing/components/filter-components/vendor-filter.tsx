
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { useProductStore } from "../../store/store";
import { Checkbox } from "../../../components/ui/checkbox";

export function VendorFilter() {
  const { testVendors, selectedVendors, setFilteredVendor } = useProductStore(); // Assuming ProductStore contains vendors data
  const vendors = testVendors.filter((v) => v.userType === "VENDOR"); // Filter user type vendor
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const navigate = useNavigate();

  // Handle vendor change on checkbox click
  const handleVendorChange = (vendorId: number) => {
    setFilteredVendor(vendorId); // Toggle vendor selection in selectedVendors state
    setIsCheckboxClicked(true);
  };

  // Effect to update search params whenever selectedVendors changes
  useEffect(() => {
    if (!isCheckboxClicked) return; // Only run when checkbox is clicked
    const params = new URLSearchParams(searchParams.toString());

    // Update the vendor query param based on the selected vendors
    if (selectedVendors.length > 0) {
      const vendorNames = selectedVendors.map((vendor) => vendor.firstName);
      params.set("vendor", vendorNames.join(","));
    } else {
      params.delete("vendor");
    }

    // Set the updated search params in the URL and navigate
    setSearchParams(params,{replace: true});
    navigate({ search: params.toString() }, { replace: true });
  }, [selectedVendors, searchParams, setSearchParams, navigate,isCheckboxClicked]);

  // Utility function to get selected vendor names
  const getSelectedVendorsText = () => {
    if (selectedVendors.length === 0) {
      return "Shop by Vendors";
    }
    const selectedNames = selectedVendors.map((vendor) => vendor.firstName);
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
        <ScrollArea>
          {vendors.map((vendor) => (
            <div className="flex items-center" key={vendor.id}>
              <Checkbox
                checked={selectedVendors.some((v) => v.id === vendor.id)}
                onCheckedChange={() => handleVendorChange(vendor.id)}
              />
              <DropdownMenuLabel>{vendor.firstName}</DropdownMenuLabel>
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
