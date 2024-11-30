import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fb from "../assets/fb.png";
import google from "../assets/google.png";

const BuyerSignup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!validateEmail(formData.email)) {
      hasError = true;
      newErrors.email = "Enter a valid email address.";
    }

    if (!validatePassword(formData.password)) {
      hasError = true;
      newErrors.password =
        "Password must contain at least one uppercase letter and one symbol.";
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Form submitted", formData);
      navigate("/authentication/confirmation");
    }
  };

  return (
    <div className="flex flex-col px-6 py-4">
      {/* Form Container */}
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full lg:w-1/2 p-2 border border-gray-300 rounded mb-4 lg:mb-0"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-green-800 text-white rounded-md hover:bg-green-900 transition"
          >
            Create Account
          </button>
        </form>
        <p className="text-start text-gray-600 mt-2">
          Already have an account?{' '}
          <a href="/authentication/login" className="text-green-900 hover:underline">
            Login
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="px-4 text-gray-400 text-sm">or register with</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="flex items-center justify-center w-full lg:w-auto px-6 py-2 border-2 border-gray-100 rounded-md hover:bg-green-800 transition">
            <img src={google} alt="google" className="mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center w-full lg:w-auto px-6 py-2 border-2 border-gray-100 rounded-md hover:bg-green-800 transition">
            <img src={fb} alt="facebook" className="mr-2" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerSignup;

