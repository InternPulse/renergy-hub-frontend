import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login-img.png";
import fb from "../assets/fb.png"
import google from "../assets/google.png"
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex overflow-hidden">
          
          <div className="w-1/2 px-8 py-2">
            <ArrowLeft
              size={24}
              onClick={() => navigate(-1)}
              className="cursor-pointer"
            />
            <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-6">Welcome back, please enter your details.</p>
        </div>
        <div className="flex space-x-4 lg:space-x-20 mb-4">
          <button className="flex px-[3rem] py-2 border-2 border-gray-100  rounded-md hover:bg-green-800">
          <img src={google} alt="google" className="pr-2" />
            Google
          </button>
          <button className="flex px-[3rem] py-2 border-2 border-gray-100  rounded-md hover:bg-green-800">
          <img src={fb} alt="google" className="pr-2" />
            Facebook
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form Fields */}
        <form>
          <div className="mb-4">

            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4 relative">
           
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Password"
              required
            />
            <div className="text-right mt-1">
              <a href="/forgot-password" className="text-sm text-yellow-400 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mb-4"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-yellow-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
          </div>
      
          
          <div className="w-1/2 h-screen flex items-center justify-center p-0 m-0">
            <img
              src={login}
              alt="login-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
      
}

export default Login;