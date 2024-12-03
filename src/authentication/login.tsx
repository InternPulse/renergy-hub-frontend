import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login-img.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12 py-4 flex flex-col">
        <ArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer mb-6"
        />
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full">
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600 mb-6">
                Welcome back, please enter your details.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-row justify-between w-full mb-6">
              <button className="flex px-8 md:px-14 py-2 border border-gray-300 rounded-md hover:bg-green-800 hover:text-white">
                <img src={google} alt="Google" className="w-6 h-6 mr-2" />
                Google
              </button>
              <button className="flex px-8 md:px-14 py-2 border border-gray-300 rounded-md hover:bg-green-800 hover:text-white">
                <img src={fb} alt="Facebook" className="w-6 h-6 mr-2" />
                Facebook
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <form>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-6 relative">
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Password"
                  required
                />
                <div className="text-right mt-1">
                  <a
                    href="/authentication/forgot-password"
                    className="text-sm text-green-900 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-900 mb-4"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/authentication/signup"
                className="text-green-900 hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto hidden lg:flex">
        <img
          src={login}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;

