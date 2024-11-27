import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Password from "../assets/password.png";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); 
    alert("Password reset instructions have been sent to your email.");
    setEmail("");
  };

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
        <p className="font-bold text-3xl mb-4">Forgot Password?</p>
        <p className="text-sm text-gray-400 text-center leading-relaxed">
          That’s okay, it happens! Click on the button <br /> below to reset your
          password.
        </p>
        <input
          type="email"
          placeholder="Email"
          className={`w-[20rem] p-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded mt-8`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
        <button
          onClick={handleResetPassword}
          className="w-[20rem] px-4 bg-green-800 hover:bg-green-900 text-white py-2 rounded mt-4"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

