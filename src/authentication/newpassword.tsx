import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    if (!isLongEnough) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasSymbol) {
      return "Password must contain at least one symbol.";
    }
    return "";
  };

  const handlePasswordReset = () => {
    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Password reset successfully!");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-end px-4 py-1">
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center flex-grow justify-center px-4">
        <p className="font-bold text-center text-3xl my-4">
          Enter your new password
        </p>

        <div className="w-full max-w-md">
          {/* New Password Input */}
          <div className="relative mb-8">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className={`w-full p-2 border ${
                error && !newPassword ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Default to Eye icon (closed) */}
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>
          <div className="relative mb-8">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className={`w-full p-2 border ${
                error && !confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Default to Eye icon (closed) */}
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            onClick={handlePasswordReset}
            className="w-full px-4 bg-green-800 hover:bg-green-900 text-white py-2 rounded"
          >
            Reset Password
          </button>
        </div>

        {/* Back to Login */}
        <p className="text-sm mt-2 text-gray-400 text-center leading-relaxed">
          Back to{" "}
          <a
            href="/authentication/login"
            className="text-green-900 font-semibold cursor-pointer hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewPassword;

