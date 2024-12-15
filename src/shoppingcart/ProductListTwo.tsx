import { useState } from 'react';
import OrderSummary from './OrderSummary';
import { CiHeart } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import CartSummary from './CartSummary';

import ProductListThree from './ProductListThree';


const ProductListTwo = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fireman 380W Solar Panel',
      price: 350000,
      imgSrc: '/assets/frame2.png',  // Adjust image path
      quantity: 1,
    },
    {
      id: 2,
      name: 'Fireman 380W Solar Panel',
      price: 350000,
      imgSrc: '/assets/frame2.png',  // Adjust image path
      quantity: 1,
    },
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0); // Discount in percentage (e.g., 10% discount)

  // Increase quantity handler
  const handleIncreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity handler
  const handleDecreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Handle coupon change
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };

  // Apply coupon logic
  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10);  // Apply 10% discount
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  // Calculate total price including discount
  const getTotalPrice = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return subtotal - (subtotal * discount) / 100;
  };

  // Remove item from cart
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-100 p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-4">
            <CartSummary />
          </div>

          {/* Cart Items */}
          <div className="p-4 border-t">
            {cartItems.map((item) => (
              <div key={item.id} className="flex space-x-4 items-center mb-4">
                <input type="checkbox" className="mt-2" />
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-[160px] h-[262px] object-cover rounded"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h3>
                  <p className="text-green-500 font-semibold text-sm">
                    ₦{item.price.toLocaleString()}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      className="w-10 h-10 bg-gray-200 border border-green-200 rounded-md hover:bg-gray-300"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      className="w-10 h-10 bg-gray-200 border border-green-200 rounded-md hover:bg-gray-300"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <div className="flex items-center space-x-2 ml-auto pe-4 ">
                      <CiHeart className="text-xl hover:text-red-500 cursor-pointer" />
                      <RiDeleteBinLine 
                        className="text-xl hover:text-red-500 cursor-pointer" 
                        onClick={() => handleRemoveItem(item.id)} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="bg-reba w-full" />
        </div>

        {/* Right Section - Cart Summary */}
        <div>
          <div className="bg-white shadow-md rounded space-y-2 text-gray-600">
            <OrderSummary />
            <div className="px-6 font-poppins">
              <div className="flex space-x-4 items-center justify-between leading-4 border-t h-20">
                <h3>Items Total Price</h3>
                <span className="text-sm">₦{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between pb-6">
                <h3 className="text-sm font-semibold">Delivery Fee</h3>
                <span className="text-sm text-gray-500">
                  Will be Calculated after checkout
                </span>
              </div>
              <hr className="my-2 py-5" />
              <div className="flex items-center justify-between space-x-4">
                <input
                  type="text"
                  className="border p-2 rounded w-3/4"
                  placeholder="Enter Coupon Number"
                  value={couponCode}
                  onChange={handleCouponChange}
                />
                <button
                  className="bg-green-300 text-black font-poppins rounded text-sm p-3 w-1/4"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between pt-10 pb-5">
                <h3 className="text-sm font-semibold">SubTotal</h3>
                <span className="text-sm">₦{getTotalPrice().toLocaleString()}</span>
              </div>
              <hr className="pt-5" />
              <div className="flex justify-between items-center py-5 font-poppins font-semi-bold">
                <h2 className="text-lg">Total</h2>
                <span>₦{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="px-6 py-6 space-y-8">
                <button className="bg-green-500 text-white font-poppins font-bold text-sm px-4 py-5 rounded w-full">
                  Proceed To Checkout
                </button>
                <button className="font-poppins font-bold text-sm px-4 py-5 border-green-500 w-full mt-2 rounded border-solid border-2">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Product Listings */}
      <div className="mt-8">
        <ProductListThree />
      </div>

     {/* <div className="mt-8">
        <ProductlistFour />
      </div> */}
    </div>
  );
};

export default ProductListTwo;
