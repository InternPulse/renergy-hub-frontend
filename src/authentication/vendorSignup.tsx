import React, { useState } from "react";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

const VendorSignup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "VENDOR",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
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

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/authentication/registration", { state: formData });

    let hasError = false;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (!formData.firstName.trim()) {
      hasError = true;
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      hasError = true;
      newErrors.firstName = "Last name is required.";
    }

    if (!validateEmail(formData.email)) {
      hasError = true;
      newErrors.email = "Enter a valid email address.";
    }

    if (!validatePassword(formData.password)) {
      hasError = true;
      newErrors.password =
        "Password must contain at least 8 characters, one uppercase letter, and one symbol.";
    }

    setErrors(newErrors);

    if (!hasError) {
      navigate("/authentication/registration", { state: formData });
    }

   
  };

  return (
    <div className="flex flex-col px-6 py-4">
      {/* Form */}
      <div className="max-w-lg mx-auto">
        <form className="space-y-4" onSubmit={handleNext}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mb-4">{errors.firstName}</p>
          )}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mb-4">{errors.lastName}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-6"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-6"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">{errors.password}</p>
          )}



<button
          type="submit"
          className="w-full p-3 text-white bg-green-800 hover:bg-green-900 rounded-md"
        >
          Next
        </button>
        </form>
        <p className="text-start text-gray-600 mt-2">
          Already have an account?{" "}
          <a
            href="/authentication/login"
            className="text-green-900 hover:underline"
          >
            Login
          </a>
        </p>

        <div className="flex items-center my-6 w-full max-w-md">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="px-4 text-gray-400">or register with</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <button
            className="flex items-center justify-center w-full px-6 py-2 border-2 border-gray-100 rounded-md hover:bg-green-800 transition"
            
          >
            <img src={google} alt="google" className="mr-2" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
