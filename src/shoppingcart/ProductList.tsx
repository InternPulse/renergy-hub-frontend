import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiShare } from "react-icons/fi";
import Navbar from "./Navbar"
import Wishlist from "./Shopping"; // Assuming Wishlist is a related component
import { useProductStore } from "../products-listing/store/store";
import img1 from '../../public/assets/solor.svg'
import { apiProduct } from "../products-listing/store/store";



const ProductList: React.FC = () => {
  const [cart, setCart] = useState<apiProduct[]>([]); // Type the cart state with Item type
  const { cartProducts}= useProductStore()
  const [items, setItems] = useState<apiProduct[]>([ // Type the items state with Item type
   
  ]);


  useEffect(() => {
    setItems(cartProducts);
  }, [cartProducts]); // Update items when products change

  const handleAddToCart = (item: apiProduct): void => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
      alert(`${item.name} added to cart!`);
    } else {
      alert(`${item.name} is already in the cart.`);
    }
  };

  const handleDelete = (id: number): void => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    alert(`Item with ID ${id} removed from the list.`);
  };

  return (
    <div className="bg-white w-full max-w-[1146px] mx-auto gap-8 rounded-tl-[8px] px-5 py-10">
      <Navbar />
      <Wishlist />

      <div className="flex flex-col space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center w-full h-[297px] shadow-md rounded-lg p-4 bg-gray-100"
          >
            <div className="flex-[0.5]">
              <input
                type="checkbox"
                className="cursor-pointer"
                aria-label={`Select ${item.name}`}
              />
            </div>
            <div className="flex-[3] w-[321px] h-[297px] shadow-inner rounded-lg bg-gray-200 overflow-hidden">
              <img
                src= {img1}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-[6.5] px-7">
              <h3 className="font-poppins font-semibold text-lg text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 font-semibold">{item.price}</p>
            {
               item.stock > 0 ? (<p className="text-green-500"> IN STOCK</p>) : 
                  <p className="text-green-500"> OUT OF STOCK</p>
            }
              
            </div>
            <div className="flex-[2]">
              <div className="flex justify-between items-center space-x-4">
                <Link to="/" aria-label={`Share ${item.name}`}>
                  <FiShare className="text-xl text-gray-500 hover:text-blue-500" />
                </Link>
                <button
                  aria-label={`Delete ${item.name}`}
                  onClick={() => handleDelete(item.id)}
                  className="text-xl text-gray-500 hover:text-red-500"
                >
                  <RiDeleteBinLine />
                </button>
                <button
                  className="bg-green-500 text-white w-[110px] h-[40px] rounded-md hover:bg-green-600"
                  onClick={() => handleAddToCart(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
