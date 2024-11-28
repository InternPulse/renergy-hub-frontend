import { Route, Routes } from "react-router-dom";
import Navbar from "./Header/Navigation";
import OrderManagement from "./Pages/OrderManagement";
import ProductManagement from "./Pages/ProductManagement";
import VendorProfile from "./Pages/VendorProfile";
import SaleAnalytics from "./Pages/SaleAnalytics";
// import { Sidebar } from "./Header/SideBar";

function Vendor() {
  return (
    <main className="bg-[#E6E6E6]">
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route
          path="vendor-management/order-management"
          element={<OrderManagement />}
        />
        <Route
          path="vendor-management/product-management"
          element={<ProductManagement />}
        />
        <Route
          path="vendor-management/vendor-profile"
          element={<VendorProfile />}
        />
        <Route
          path="vendor-management/sale-analytics"
          element={<SaleAnalytics />}
        />
      </Routes>
    </main>
  );
}

export default Vendor;
