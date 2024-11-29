import { Route, Routes } from "react-router-dom";
import OrderManagement from "./Pages/OrderManagement";
import ProductManagement from "./Pages/ProductManagement";
import VendorProfile from "./Pages/VendorProfile";
import SaleAnalytics from "./Pages/SaleAnalytics";

function Vendor() {
  return (
    <main className="bg-[#E6E6E6]">
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
