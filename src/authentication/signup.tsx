import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import { User } from 'lucide-react';
import { Users } from 'lucide-react';

const Signup: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<"buyer" | "vendor" | null>(null);
  const navigate = useNavigate();

  const handleRoleSelection = (role: "buyer" | "vendor") => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole === "buyer") {
      navigate("/signup/buyer");
    } else if (selectedRole === "vendor") {
      navigate("/signup/vendor");
    } else {
      alert("Please select a role to proceed!");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between px-4 py-1">
        <ArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>
  
      {/* Middle Section */}
      <div className="flex flex-col items-center flex-grow justify-center">
        <h1 className="text-4xl font-bold mb-4">Select User Type</h1>
        <p className="mb-12 text-gray-600">To help us serve you better</p>
        <div className="flex space-x-12">
          {/* Customer Button */}
          <button
            onClick={() => handleRoleSelection("buyer")}
            className={`px-6 pt-[3rem] pb-[8rem] border-2 rounded text-center ${
              selectedRole === "buyer"
                ? "border-b-green-800 border-b-8"
                : "border-gray-100 bg-white text-gray-700 hover:bg-green-100"
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              <User className="text-xl" size={50} />
              <p>Customer</p>
              <p className="text-sm text-gray-600">
                Get quality products at your convenience
              </p>
            </div>
          </button>
  
          {/* Vendor Button */}
          <button
            onClick={() => handleRoleSelection("vendor")}
            className={`px-6 pt-[3rem] pb-[8rem] border-2 rounded text-center ${
              selectedRole === "vendor"
                ? "border-b-green-800 border-b-8"
                : "border-gray-100 bg-white text-gray-700 hover:bg-green-100"
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              <Users className="text-xl" size={50} />
              <p>Vendor</p>
              <p className="text-sm text-gray-600">
                We help showcase your Brands better
              </p>
            </div>
          </button>
        </div>
  
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-[6rem] py-2 mt-12 bg-green-800 text-white rounded hover:bg-green-900"
        >
          Next
        </button>
      </div>
    </div>
  );
  
};

export default Signup;
