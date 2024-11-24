import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Password from "../assets/password.png";
const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between px-4 py-1">
        <ArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>
      <div className="flex flex-col items-center flex-grow justify-center">
        <img src={Password} alt="forgot-password" />
        <p className="font-bold text-3xl mb-4">forgot password?</p>
        <p className="text-sm text-gray-400 text-center leading-relaxed">
          That’s okay, it happens! Click on the button <br/> below to reset your
          password.
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-[20rem] p-2 border border-gray-300 rounded mt-8"
        />
        <button className="w-[20rem] px-4 bg-green-800 hover:bg-green-900 text-white py-2 rounded mt-4">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
