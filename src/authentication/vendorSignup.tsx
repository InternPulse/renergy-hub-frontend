import React, { useState } from "react";
import vendor from "../assets/vendor-img.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

const VendorSignup: React.FC = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
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
    const newErrors = {
      firstName: "",
      email: "",
      password: "",
    };

    if (!formData.firstName.trim()) {
      hasError = true;
      newErrors.firstName = "First name is required.";
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
      console.log("Form submitted:", formData);
      navigate("/registration")
    }
  };

  return (
    <div className="flex h-screen ">
      {/* Left Section */}
      <div className="w-1/2">
        <img
          src={vendor}
          alt="vendor"
          className="h-[100%] w-full object-cover p-6"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Get Started</h1>
          <p className="text-gray-600 mt-2">
            Welcome to <span className="text-yellow-400">Renery Hub</span> -
            Let's create your account
          </p>
        </div>

        {/* Form */}
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded mb-6"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mb-4">{errors.firstName}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded mb-6"
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
            className="w-full p-3 border border-gray-300 rounded mb-6"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">{errors.password}</p>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-green-800 text-white rounded-md hover:bg-green-900"
          >
            Next
          </button>
        </form>

        <div className="mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-yellow-400 font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </div>

        <div className="flex items-center mt-4 mb-10 w-[20rem] lg:w-[30rem]">
    <div className="flex-grow h-px bg-gray-300"></div>
    <p className="px-4 text-gray-400">or register with</p>
    <div className="flex-grow h-px bg-gray-300"></div>
  </div>

        <div className="flex space-x-4 lg:space-x-20">
          <button className="flex px-[3rem] py-2 border border-gray-300 rounded-md hover:bg-green-800">
            <img src={google} alt="google" className="pr-2" />
            Google
          </button>
          <button className="flex px-[3rem] py-2 border border-gray-300 rounded-md hover:bg-green-800">
            <img src={fb} alt="google" className="pr-2" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
