import React from "react";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import img from "../assets/signup-img.jpeg";

const BuyerSignup: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");  // Navigate to the login page
      };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2  flex flex-col px-8 py-6">
        {/* Back Arrow */}
        <ArrowLeft
          size={24}
          className="cursor-pointer mb-6"
          onClick={() => navigate(-1)}
          
        />
        
        {/* Form */}
        <form className="space">
            <h1 className="text-4xl font-bold text-center mb-2"> Signup</h1>
            <p className="text-center text-xs text-gray-400 mb-8">We offer the Best!</p>
 
          <div className="flex space-x-4 mb-8">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-8"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-8"
          />

          <button
            type="submit"
            className="w-full p-2 bg-green-800 text-white rounded-md hover:bg-green-900"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center mt-4 mb-10">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="px-4 text-gray-400">or register with</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 p-2 border-2 border-gray-100  rounded-md hover:bg-green-800">
            Google
          </button>
          <button className="flex-1 p-2 border-2 border-gray-100  rounded-md hover:bg-green-800">
            Facebook
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center relative">
      <img src={img} alt="signup-image" className="w-full object-cover" />
      
      
      <div className="absolute ">
        <p className="text-3xl font-bold">Have An Account?</p>
        
        
        <button
          onClick={handleLoginClick}
          className="mt-4 py-2 w-full bg-green-800 text-white rounded hover:bg-green-900"
        >
          Login
        </button>
      </div>
    </div>

    </div>
  );
};

export default BuyerSignup;

