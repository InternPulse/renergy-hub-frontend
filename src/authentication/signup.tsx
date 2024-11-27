import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import img from "../assets/signup-img.jpeg";
import BuyerSignup from "./buyerSignup";
import VendorSignup from "./vendorSignup";

const Signup: React.FC = () => {
  const [role, setRole] = useState<"buyer" | "vendor">("buyer");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 flex flex-col px-8 py-6">
        <div className="flex justify-between px-4 py-1">
          <ArrowLeft
            size={24}
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center flex-grow justify-center">
          <h1 className="text-4xl font-bold text-center mb-2">
            {role === "buyer" ? " Signup" : "Get started"}
          </h1>
          <p className="text-center text-sm text-gray-400 mb-8" dangerouslySetInnerHTML={{
    __html: role === "buyer" ? "We offer the best" : 'Welcome to <span class="text-green-800">Renergy Hub</span> - Let\'s create your account'
  }} />

          
          <div className="flex space-x-12">
            <button
              onClick={() => setRole("buyer")}
              className={`px-4 py-2 font-bold text-xl ${
                role === "buyer" ? " text-green-800 border-b-2 border-green-800" : "text-gray-300"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setRole("vendor")}
              className={`px-4 py-2 font-bold text-xl ${
                role === "vendor" ? "text-gray-800 border-b-2 border-green-800 " : "text-gray-500"
              }`}
            >
              Vendor
            </button>
          </div>

          <div className="max-w-md p-8">
            {role === "buyer" ? <BuyerSignup /> : <VendorSignup />}
          </div>
        </div>
      </div>

      <div className="w-1/2 hidden lg:block items-center justify-center relative">
        <img src={img} alt="signup-image" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Signup;

