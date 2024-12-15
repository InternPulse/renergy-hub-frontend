import { Route, Routes } from "react-router-dom";
import OrderManagement from "./pages/orderManagement";
import ProductManagement from "./pages/productManagement";
import VendorProfile from "./pages/vendorProfile";
import SaleAnalytics from "./pages/saleAnalytics";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../pages/vendorcomponents/sidebar";
import Navbar from "./header/navigation";

function Vendor() {
  return (
    <main className="bg-[#E6E6E6] flex overflow-hidden">
      <div className="bg-white">
        <Sidebar />
      </div>

      <section className="w-full">
        <Navbar />
        <Routes>
          <Route path="order-management" element={<OrderManagement />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="vendorprofile" element={<VendorProfile />} />
          <Route path="sale-analytics" element={<SaleAnalytics />} />
        </Routes>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default Vendor;
