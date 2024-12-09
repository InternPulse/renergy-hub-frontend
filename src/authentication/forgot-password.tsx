import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Password from "../assets/password.png";
import axios from "axios";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); 
    
    try {
      setLoading(true); 
      await axios.post(
        `https://renergy-hub-express-backend.onrender.com/api/v1/auth/forgot-password`,
        { email }
      );
      navigate("/authentication/verify-password", { state: { email } });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex flex-col justify-between">
     
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
          disabled={loading}
          className={`w-[20rem] px-4 ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-800 hover:bg-green-900"
          } text-white py-2 rounded mt-4`}
        >
          {loading ? "Sending..." : "Reset Password"}
        </button> 
      </div>
    </div>
  );
};

export default ForgotPassword;

