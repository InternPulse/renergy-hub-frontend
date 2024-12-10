import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";

// Example images imported directly
import frame3 from 'src/assets/frame3.png';

const ProductListThree = () => {
  const [likedItems, setLikedItems] = useState([]);
  const [cart, setCart] = useState([]);

  const items = [
    {
      id: 1,
      name: 'Fireman 380w solar Panel',
      price: '₦350,000.00',
      imgSrc: frame3, // Imported image path
    },
    {
      id: 2,
      name: 'Fireman 380w solar Panel',
      price: '₦350,000.00',
      imgSrc: frame3, // Imported image path
    },
    {
      id: 3,
      name: 'Fireman 380w solar Panel',
      price: '₦350,000.00',
      imgSrc: frame3, // Imported image path
    },
  ];

  const handleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="bg-white border-2 border-green-100">
      <div className="p-4 md:p-6">
        <h3 className="text-lg font-bold py-4 md:text-2xl">
          Customers who viewed this also viewed
        </h3>
        <div className="border-b-2 mb-3"></div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center"
            >
              {/* Heart Icon aligned to the right */}
              <div className="flex justify-end w-full mb-2">
                <CiHeart
                  className={`cursor-pointer text-2xl ${
                    likedItems.includes(item.id) ? 'text-red-500' : 'text-gray-500'
                  }`}
                  onClick={() => handleLike(item.id)}
                />
              </div>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full max-w-[200px] h-auto object-contain rounded-md"
              />
              <div className="mt-3 space-y-2">
                <p className="text-base font-semibold">{item.name}</p>
                <p className="text-lg font-bold">{item.price}</p>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-100">
        <h3 className="text-lg font-bold">Your Cart ({cart.length} items)</h3>
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductListThree;
