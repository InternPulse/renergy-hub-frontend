import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import Email from "../assets/email.png";

const Confirmation: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { email, id, verifyToken } = location.state || {};

  useEffect(() => {
    if (!email || !id || !verifyToken) {
      console.error("Missing confirmation details");
      navigate("/authentication/signup"); // Redirect back if email is missing
    }
  }, [email,id, verifyToken, navigate]);


  const handleConfirmEmail = async () => {
    if (!id || !verifyToken) {
      setError("Verification details are missing");
      return;
    }
  
  
    setLoading(true);
    setError(null);

    try {
      await axios.post(
        "https://renergy-hub-express-backend.onrender.com/api/v1/auth/verify",
        { id, verifyToken }
      );
      navigate("/authentication/otp", { state: { id } }); 
    }
      
       catch (err: any) {
      // Handle API error
      setError(err.response?.data?.message || "Failed to send verification email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between ">
      {/* Top Section */}
      <div className="flex justify-between px-4 py-1">
        <ArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center flex-grow justify-center">
        <img src={Email} alt="email" />
        <p className="font-bold text-4xl mb-4">Confirm Your Email</p>
        <p className="text-sm text-gray-400 text-center leading-relaxed">
          Please click on the button below to validate your email address and
          <br />
          confirm that you are the owner of this account.
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          className="w-[20rem] px-4 bg-green-800 hover:bg-green-900 text-white py-2 rounded mt-4"
          onClick={handleConfirmEmail}
          disabled={loading}
        >
          {loading ? "Sending..." : "Confirm Email"}
        </button>
      </div>
    </div>
  );
};

export default Confirmation;

