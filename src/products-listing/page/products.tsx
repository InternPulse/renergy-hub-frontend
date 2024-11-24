import { useSearchParams } from "react-router-dom";
import Filter from "../filter/filter";
import { useEffect, useState,useCallback } from "react";
import { useProductStore } from "../store/store";

interface Product {
  id: string;
  name: string;
  vendorId: string;
  categoryId: string;
  price: number;
  stock: number;
}

const Product = () => {
  const [searchParams,setSearchParams] = useSearchParams(); // Access searchParams from the URL
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const {sort}=useProductStore()
  const { products, vendors, categories } = storeData;

  const itemsPerPage = 5; // Number of items per page
  const currentPage = parseInt(searchParams.get("page") || "1", 10); // Get current page from URL, default to 1


  const sortProducts = useCallback((products: Product[]) => {
    console.log(sort);
    switch (sort) {
     
      case "na-z":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "nz-a":
        return products.sort((a, b) => b.name.localeCompare(a.name));
        case "ma-z":
          return products.sort((a, b) => a.vendorId.localeCompare(b.vendorId));
        case "mz-a":
          return products.sort((a, b) => b.vendorId.localeCompare(a.vendorId));

      case "pl-h":
        return products.sort((a, b) => a.price - b.price);
      case "ph-l":
        return products.sort((a, b) => b.price - a.price);
      case "rh-l":
        return products.sort((a, b) => b.stock - a.stock);
      case "rl-h":
        return products.sort((a, b) => a.stock - b.stock);
      default:
        return products;
    }
  },[sort])

  // Update filtered products whenever searchParams change
  useEffect(() => {
    const vendorQuery = searchParams.get("vendor");
    const categoryQuery = searchParams.get("category");
    const searchQuery = searchParams.get("search");

    // Filter products based on the query parameters
    const filtered = products.filter((product) => {
      // Get vendor and category names based on their respective IDs
      const vendorName = vendors.find((vendor) => vendor.id === product.vendorId)?.name;
      const categoryName = categories.find((category) => category.id === product.categoryId)?.name;

      // Check if the product matches the selected vendor
      const matchesVendor = vendorQuery
        ? vendorQuery.split(",").includes(vendorName || "") // Split by comma for multiple selections
        : true;

      // Check if the product matches the selected category
      const matchesCategory = categoryQuery
        ? categoryQuery.split(",").includes(categoryName || "") // Split by comma for multiple selections
        : true;

      // Check if the product name matches the search query
      const matchesSearch = searchQuery
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      // Return true only if the product matches all filters
      return matchesVendor && matchesCategory && matchesSearch;
      
    });
    const sortedProducts = sortProducts(filtered);
    console.log(sortedProducts)
    setFilteredProducts(sortedProducts); // Update state with the filtered products
  }, [searchParams, products, vendors, categories,sortProducts]);


 // Calculate the products to display for the current page
 const paginatedProducts = filteredProducts.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);



  // Handle page change (can be triggered from pagination controls)
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params); // Update URL with the new page number
  };










  return (
    <>
    <div className="flex flex-col gap-4">
      <Filter />
      <div className="px-8">
        {filteredProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <p key={product.id}>{product.name}</p>
          ))
        ) : (
          <p>No products match your criteria.</p>
        )}
      </div>
        {/* Pagination Controls */}
        
        <div className="flex px-8 justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
    </div>
    </>
  );
};

export default Product;





const storeData = {
  vendors: [
    { id: "all", name: "All Vendors" },
    { id: "ecowatts", name: "EcoWatts" },
    { id: "enpowers", name: "En Powers" },
    { id: "panelsonic", name: "Panelsonic" },
    { id: "solarcreed", name: "Solar Creed" },
    { id: "solarwaves", name: "Solar Waves" },
    { id: "sygnitesuper", name: "Sygnite Super" },
    { id: "nazpowerhouse", name: "Naz Power House" },
    { id: "gregcopower", name: "Gregco Power and Energy" },
  ],

  products: [
    { id: "prod-001", name: "EcoWatts Solar Panel 250W", vendorId: "ecowatts", categoryId: "solar-panels", price: 220.99, stock: 40 },
    { id: "prod-002", name: "En Powers Hybrid Inverter 7kW", vendorId: "enpowers", categoryId: "inverters", price: 749.99, stock: 25 },
    { id: "prod-003", name: "Panelsonic Battery 200Ah", vendorId: "panelsonic", categoryId: "batteries", price: 380.50, stock: 30 },
    { id: "prod-004", name: "Solar Creed Charge Controller 60A", vendorId: "solarcreed", categoryId: "charge-controllers", price: 149.99, stock: 20 },
    { id: "prod-005", name: "Solar Waves Roof Mounting Kit", vendorId: "solarwaves", categoryId: "mounting-systems", price: 69.99, stock: 80 },
    { id: "prod-006", name: "Sygnite Super 350W Monocrystalline Panel", vendorId: "sygnitesuper", categoryId: "solar-panels", price: 299.99, stock: 50 },
    { id: "prod-007", name: "Naz PowerHouse Lithium Battery 150Ah", vendorId: "nazpowerhouse", categoryId: "batteries", price: 420.00, stock: 15 },
    { id: "prod-008", name: "Gregco Power Solar Monitoring Kit", vendorId: "gregcopower", categoryId: "monitoring-systems", price: 199.99, stock: 10 }
  ],

  categories: [
    { id: "all", name: "All Categories" },
    { id: "solar-panels", name: "Solar Panels" },
    { id: "inverters", name: "Inverters" },
    { id: "batteries", name: "Batteries" },
    { id: "charge-controllers", name: "Charge Controllers" },
    { id: "mounting-systems", name: "Mounting Systems" },
    { id: "monitoring-systems", name: "Monitoring Systems" },
  ],
};
