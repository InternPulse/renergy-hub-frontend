//import "./App.css";
import LandingPage from "./pages/landingPage";
import { Routes, Route } from "react-router-dom";
import CheckoutHomePage from "./pages/checkoutHome";
import { VendorDashboard } from "./pages/vendorDashboard/vendorDashboard";
import Auth from "./authentication/auth";
import Vendor from "./vendor-management/vendor";
import Product from "./products-listing/page/products";
import SettingsRoutes from "./components/SettingsDashboard/SettingsLayout";
import ShippingAndTracking from "./pages/ShippingAndTracking";
import ContentSection from "./sections/contentSection";
import SecurityCompliance from "./pages/SecurityCompliance"; // From HEAD
import AdminDashboardRoutes from "./components/AdminDashboard/AdminDashboardRoutes"; // From oo-branch
import AboutUs from "./pages/AboutUs";
// import Page from "./buyer-dashboard/BuyerDashboard"
import ContactUs from "./pages/ContactUs";
import RenergyBlog from "./pages/RenergyBlog";
import BlogDetail from "./pages/BlogDetail";
import ProductList from "./shoppingcart/ProductList";
//import AdminDashboard from "./components/AdminDashboard/AdminDashboard"; // From oo-branch
import { Toaster } from "./components/ui/sonner";
import BuyerDashboard from "./buyer-dashboard/BuyerDashboard";
import ProtectedRoute from "./protectedRoute";

function App() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/blog" element={<RenergyBlog />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/vendor-dashboard/*" element={<VendorDashboard />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}

        {/* FROM BUYER DASHBOARD */}
        <Route path="/buyer-dashboard/*" element={<BuyerDashboard />} />
        {/* From oo-branch */}
        <Route path="/checkout" element={<CheckoutHomePage />} />
        <Route path="/authentication/*" element={<Auth />} />

        <Route path="/product/*" element={<Product />} />

        <Route path="/settings/*" element={<SettingsRoutes />} />
        <Route path="/security-compliance" element={<SecurityCompliance />} />
        {/* From HEAD */}
        <Route
          path="/shipping-and-tracking"
          element={<ShippingAndTracking />}
        />
        <Route path="/explore" element={<ContentSection />} />
        <Route path="/shopping-cart" element={<ProductList />} />
        <Route
          path="/admin/*"
          element={<ProtectedRoute element={<AdminDashboardRoutes />} />}
        />
        <Route
          path="/vendor-dashboard/*"
          element={<ProtectedRoute element={<VendorDashboard />} />}
        />
        <Route path="/*" element={<Vendor />} />

        {/* From oo-branch */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
