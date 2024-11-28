import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Email from "../assets/email.png";

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  // Handler for navigation to the OTP page
  const handleConfirmEmail = () => {
    navigate("/authentication/otp");
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
        <button
          className="w-[20rem] px-4 bg-green-800 hover:bg-green-900 text-white py-2 rounded mt-4"
          onClick={handleConfirmEmail}
        >
          Confirm Email
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
