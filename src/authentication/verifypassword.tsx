import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Email from "../assets/email.png";
import { useState } from "react";
import axios from "axios";

const VerifyPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely retrieve the `id` from location.state
  const email = location.state?.email || null;

  // Initialize OTP state for 4 inputs
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [loading, setLoading] = useState(false);

  const handleInputChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      // Ensure only digits are entered
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");

    if (!email) {
      alert("Invalid session. Please try again.");
      return;
    }

    if (enteredOtp.length === otp.length) {
      try {
        setLoading(true);
        console.log({ email, verifyToken: enteredOtp });
        await axios.post(
          `https://renergy-hub-express-backend.onrender.com/api/v1/auth/verify-forgot-password`,
          { email, resetToken: enteredOtp }
        );
        navigate("/authentication/newpassword", { state: { email } });
      } catch (err: any) {
        alert(err.response?.data?.message || "Failed to verify OTP");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please complete the OTP input.");
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      alert("Invalid session. Unable to resend code.");
      return;
    }

    try {
      await axios.post(`https://renergy-hub-express-backend.onrender.com/api/v1/auth/resend/${email}`);
      alert("OTP code has been resent!");
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <div className="flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between px-4 py-1">
        <ArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center flex-grow justify-center px-4">
        <img src={Email} alt="email" />
        <p className="font-bold text-4xl text-center mb-2">We Have Sent An Email</p>
        <p className="text-sm text-gray-400 text-center leading-relaxed mb-8">
          Enter code.
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(e.target.value, index)}
              maxLength={1}
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800"
            />
          ))}
        </div>

        <button
          onClick={handleVerifyOtp}
          disabled={loading}
          className={`px-24 py-2 bg-green-800 text-white rounded-md hover:bg-green-900 mb-4 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <p className="text-sm text-gray-400">
          Didn't receive code?{" "}
          <span
            onClick={handleResendCode}
            className="text-green-800 font-semibold cursor-pointer hover:underline"
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyPassword;
