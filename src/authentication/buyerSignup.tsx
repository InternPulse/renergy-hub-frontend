import React, {useState} from "react";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import img from "../assets/signup-img.jpeg";
import fb from "../assets/fb.png"
import google from "../assets/google.png"

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
    

    const handleLoginClick = () => {
        navigate("/authentication/login");  // Navigate to the login page
      };
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/2  flex flex-col px-8 py-6">

        <ArrowLeft
          size={24}
          className="cursor-pointer mb-6"
          onClick={() => navigate(-1)}
          
        />
        
        {/* Form */}
        <div className="lg:px-[8rem]">
        <form className="space" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold text-center mb-2"> Signup</h1>
            <p className="text-center text-xs text-gray-400 mb-8">We offer the Best!</p>
 
          <div className="flex space-x-4 mb-8">
            <input
              type="text"
                name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}

              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
             name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mb-8"
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
            className="w-full p-2 border border-gray-300 rounded mb-8"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">{errors.password}</p>
          )}


          <button
            type="submit"
            className="w-full p-2 bg-green-800 text-white rounded-md hover:bg-green-900"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center mt-4 mb-10">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="px-4 text-gray-400">or register with</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex space-x-4 lg:space-x-20">
          <button className="flex px-[3rem] py-2 border-2 border-gray-100  rounded-md hover:bg-green-800">
          <img src={google} alt="google" className="pr-2" />
            Google
          </button>
          <button className="flex px-[3rem] py-2 border-2 border-gray-100  rounded-md hover:bg-green-800">
          <img src={fb} alt="google" className="pr-2" />
            Facebook
          </button>
        </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center relative">
      <img src={img} alt="signup-image" className="w-full object-cover" />
      
      
      <div className="absolute ">
        <p className="text-3xl font-bold">Have An Account?</p>
        
        
        <button
          onClick={handleLoginClick}
          className="mt-4 py-2 w-full bg-green-800 text-white rounded hover:bg-green-900"
        >
          Login
        </button>
      </div>
    </div>

    </div>
  );
};

export default BuyerSignup;

