
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
import Newpassword from "./newpassword";
import Callback from "./callback";
import VerifyPassword from "./verifypassword";

function Auth() {
    return (
        <Routes>
        <Route path="signup" element={<Signup/>} />
        <Route path="signup/buyer" element={<BuyerSignup />} />
        <Route path="signup/vendor" element={<VendorSignup />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-password" element={<VerifyPassword />} />
        <Route path="callback" element={<Callback />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="otp" element={<Otp />} />
        <Route path="newpassword" element={<Newpassword />} />
      </Routes>
    )
}

export default Auth;