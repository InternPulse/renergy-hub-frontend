import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import CheckoutHomePage from "./pages/CheckoutHome";
import { VendorDashboard } from "./pages/VendorDashboard/VendorDashboard";
import Auth from "./authentication/auth";
import Vendor from "./vendor-management/Vendor";
import Product from "./products-listing/page/products";
import SettingsRoutes from "./components/layout/SettingsLayout";
import ShippingAndTracking from './pages/ShippingAndTracking';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContentSection from './sections/contentSection'; 

function App() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/checkout" element={<CheckoutHomePage />} />
        <Route path="/authentication/signup" element={<Auth />} />
        <Route path="/*" element={<Vendor />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/settings/*" element={<SettingsRoutes />} />
        <Route path="/shipping-and-tracking" element={<ShippingAndTracking />} />
        <Route path="/content-section" element={<ContentSection />} /> {/* Ensure this is defined */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
