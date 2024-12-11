import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../assets/login-img.png";
import google from "../assets/google.png";
import { useProductStore } from "@/products-listing/store/store";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {setUserId} = useProductStore();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log({ email, password });
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://renergy-hub-express-backend.onrender.com/api/v1/auth/login",
        { email, password }
      );
      const user = response.data?.data;
      if (!user) {
        throw new Error("User data is missing from the response.");
      }
        setUserId(user.id);

      if (user.userType === "CUSTOMER") {
        navigate("/userprofile", { state: { userId: user.id } });
      } else if (user.userType === "VENDOR") {

        navigate("/vendorprofile", { state: { userId: user.id } });
      } else {
        throw new Error("Invalid role");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
           

            
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-6 relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-md text-white mb-4 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-800 hover:bg-green-900"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex justify-center w-full mb-6">
              <button className="flex px-8 md:px-14 py-2 border border-gray-300 rounded-md hover:bg-green-800 hover:text-white">
                <img src={google} alt="Google" className="w-6 h-6 mr-2" />
                Google
              </button>
              
            </div>
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
