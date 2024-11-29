

//import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import CheckoutHomePage from "./pages/CheckoutHome";
import { VendorDashboard } from "./pages/VendorDashboard/VendorDashboard";
import Auth from "./authentication/auth";
import Vendor from "./vendor-management/Vendor";
import Product from "./products-listing/page/products";
import SettingsRoutes from "./components/layout/SettingsLayout";


function App() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <Routes>
        {/*<Route path="/" element={<LandingPage />} />*/}
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/checkout" element={<CheckoutHomePage />} />
        <Route path="/authentication/*" element={<Auth />} />
        {/*<Route path="/*" element={<Vendor />} />*/}
        <Route path="/product" element={<Product/>} />
        <Route path="/settings/*" element={<SettingsRoutes />} />
      </Routes>

    
      
    </div>

  );
}

export default App;

