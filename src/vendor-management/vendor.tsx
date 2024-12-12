import { Route, Routes } from "react-router-dom";
import OrderManagement from "./pages/orderManagement";
import ProductManagement from "./pages/productManagement";
import VendorProfile from "./pages/vendorProfile";
import SaleAnalytics from "./pages/saleAnalytics";
import { Sidebar } from "./header/sideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Vendor() {
  return (
    <main className="bg-[#E6E6E6] flex overflow-hidden">
      <Sidebar />
      <section className="w-full">
        <Routes>
          <Route path="order-management" element={<OrderManagement />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="/vendorprofile" element={<VendorProfile />} />
          <Route path="sale-analytics" element={<SaleAnalytics />} />
        </Routes>
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
      </section>
    </main>
  );
}

export default Vendor;
