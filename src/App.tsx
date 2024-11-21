
import { Routes, Route} from "react-router-dom";
import Signup from "./authentication/signup";
import Login from "./authentication/login";
import BuyerSignup from "./authentication/buyerSignup";
import VendorSignup from "./authentication/vendorSignup";
 

function App() {

  return (
    <div>
     
      

      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signup/buyer" element={<BuyerSignup />} />
        <Route path="/signup/vendor" element={<VendorSignup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
