import { Route, Routes } from "react-router-dom";
import OrderManagement from "./pages/orderManagement";
import ProductManagement from "./pages/productManagement";
import VendorProfile from "./pages/vendorProfile";
import SaleAnalytics from "./pages/saleAnalytics";
import { Sidebar } from "./header/sideBar";
import { UserProvider } from "./header/userContext";

function Vendor() {
  return (
    <main className="bg-[#E6E6E6] flex overflow-hidden">
      <Sidebar />
      <section className="w-full">
        <UserProvider>
          <Routes>
            <Route path="order-management" element={<OrderManagement />} />
            <Route path="product-management" element={<ProductManagement />} />
            <Route path="/vendorprofile" element={<VendorProfile />} />
            <Route path="sale-analytics" element={<SaleAnalytics />} />
          </Routes>
        </UserProvider>
      </section>
    </main>
  );
}

export default Vendor;
