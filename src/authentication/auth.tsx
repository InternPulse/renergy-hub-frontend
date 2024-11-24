
import { Routes, Route} from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import BuyerSignup from "./buyerSignup";
import VendorSignup from "./vendorSignup";
import Registration from "./registration";
import Welcome from "./welcome";
import ForgotPassword from "./forgot-password";
import Confirmation from "./confirmation";
import Otp from "./otp";

function Auth() {
    return (
        <Routes>
        <Route path="authentication/signup" element={<Signup/>} />
        <Route path="authentication/signup/buyer" element={<BuyerSignup />} />
        <Route path="authentication/signup/vendor" element={<VendorSignup />} />
        <Route path="authentication/login" element={<Login />} />
        <Route path="authentication/registration" element={<Registration />} />
        <Route path="authentication/welcome" element={<Welcome />} />
        <Route path="authentication/forgot-password" element={<ForgotPassword />} />
        <Route path="authentication/confirmation" element={<Confirmation />} />
        <Route path="authentication/otp" element={<Otp />} />
      </Routes>
    )
}

export default Auth;