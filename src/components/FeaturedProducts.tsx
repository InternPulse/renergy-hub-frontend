import React from "react";
import favourite from "../assets/favourite.png";
import product from "../assets/product.png";

type StarRatingProps = {
  rating: number; // Current rating value
  maxRating?: number; // Maximum possible rating (default is 5)
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div id='featuredProducts' className="flex items-center">
      {stars.map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill={star <= rating ? "gold" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.143c.97 0 1.371 1.24.588 1.81l-3.36 2.446a1 1 0 00-.363 1.118l1.286 3.943c.3.921-.755 1.688-1.54 1.118l-3.36-2.446a1 1 0 00-1.175 0l-3.36 2.446c-.785.57-1.84-.197-1.54-1.118l1.286-3.943a1 1 0 00-.363-1.118L2.868 9.37c-.784-.57-.382-1.81.588-1.81h4.143a1 1 0 00.95-.69l1.286-3.943z"
          />
        </svg>
      ))}
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 mt-[80px] max-w-7xl mx-auto">
      <h2 className="text-2xl lg:text-[56px] sm:text-3xl mb-4 font-bold ">Featured Products</h2>
      <p className="text-center mb-6 max-w-xl text-sm sm:text-base">
        Discover our top solar products: High-efficiency PV solar panels, smart
        inverters, durable batteries, and efficient wind turbines.
      </p>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 w-full sm:w-[280px] md:w-[300px] h-[400px] border border-gray-300 rounded p-4"
          >
            <div className="flex justify-between items-center">
              <StarRating rating={4} />
              <img
                src={favourite}
                alt="Favourite"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-[150px] h-[200px] object-contain"
                src={product}
                alt="Product"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">
                Fireman 380W Solar Panel
              </p>
              <p className="text-xl font-bold ">₦350,000.00</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="text-white font-semibold px-6 py-2 bg-hardGreen mt-6 rounded hover:bg-hardYellow w-[200px] sm:w-[240px]">
        View More
      </button>
    </div>
  );
};

export default FeaturedProducts;
