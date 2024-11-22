import { Button } from "../../components/ui/button";
import { useState, useEffect } from "react";
import FilterContainer from "./categoryButtonProps";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/store";

const Filter = () => {
  const [isClicked, setisClicked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedCategories, selectedProducts, selectedVendors } = useProductStore();
  const navigate = useNavigate(); // Hook to update the URL

  useEffect(() => {
    const params = new URLSearchParams(searchParams as any);

    // Update category parameter in the URL
    if (selectedCategories.length > 0) {
      const categoryNames = selectedCategories.map(cat => cat.name);
      params.set('category', categoryNames.join(', '));
    } else {
      params.delete('category');
    }

    // Update product parameter in the URL
    if (selectedProducts.length > 0) {
      const productNames = selectedProducts.map(prod => prod.name);
      params.set('product', productNames.join(', '));
    } else {
      params.delete('product');
    }

    // Update vendor parameter in the URL
    if (selectedVendors.length > 0) {
      const vendorNames = selectedVendors.map(vendor => vendor.name);
      params.set('vendor', vendorNames.join(', '));
    } else {
      params.delete('vendor');
    }

    // Update the search params in the URL without needing a button click
    setSearchParams(params);
    navigate({ search: params.toString() }, { replace: true });
  }, [selectedCategories, selectedProducts, selectedVendors, searchParams, setSearchParams, navigate]);

  // Optional button for toggling the filter view
  const handleClick = () => {
    setisClicked(true);
  };

  return (
    <>
      <section className="flex justify-between">
        <ul className="flex flex-col gap-2">
          <li>
            <Button className="gap-2 flex p-2 rounded-xl" onClick={handleClick}>
              <img src='' alt="" />
              <span>Filter</span>
            </Button>
          </li>
          <li>
            {isClicked ? <div><FilterContainer /></div> : ''}
          </li>
        </ul>
      </section>
    </>
  );
}

export default Filter;
