import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Email from "../assets/email.png";
import { useState } from "react";

const Otp: React.FC = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));

  const handleInputChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      // Ensure only digits are entered
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === otp.length) {
      alert(`OTP Verified: ${enteredOtp}`);
      navigate("/authentication/welcome"); // Navigate to confirmation page
    } else {
      alert("Please complete the OTP input.");
    }
  };

  const handleResendCode = () => {
    alert("OTP code has been resent!");
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
          Input the code sent to your email to verify your account.
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
          className="px-24 py-2 bg-green-800 text-white rounded-md hover:bg-green-900 mb-4"
        >
          Verify
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

export default Otp;
