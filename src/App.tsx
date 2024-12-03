//import "./App.css";
import LandingPage from "./pages/landingPage";
import { Routes, Route } from "react-router-dom";
import CheckoutHomePage from "./pages/checkoutHome";
import { VendorDashboard } from "./pages/vendorDashboard/vendorDashboard";
import Auth from "./authentication/auth";
import Vendor from "./vendor-management/vendor";
import Product from "./products-listing/page/products";
import SettingsRoutes from "./components/SettingsDashboard/SettingsLayout";
import ShippingAndTracking from './pages/ShippingAndTracking';
import ContentSection from "./sections/contentSection";
import AdminDashboardRoutes from "./components/AdminDashboard/AdminDashboardRoutes";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";



function App() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/checkout" element={<CheckoutHomePage />} />
        <Route path="/authentication/*" element={<Auth />} />
        <Route path="/*" element={<Vendor />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/settings/*" element={<SettingsRoutes />} />
        <Route path="/shipping-and-tracking" element={<ShippingAndTracking />} />
        <Route path="/content-section" element={<ContentSection />} />
        <Route path="/admin/*" element={<AdminDashboardRoutes />} />
      </Routes>    
    </div>
  );
}

export default App;
