import { Routes, Route, Outlet } from 'react-router-dom';
import BuyerOverview from "./pages/BuyerOverview";
import BuyerSideBar from "../components/BuyerSideBar";
import SavedProducts from './pages/SavedProducts';
import BuyerNavbar from './components/BuyerNavbar';
import BuyerOrders from './pages/BuyerOrders';
import CancelledOrders from './pages/CancelledOrders';
import PurchaseHistory from './pages/PurchaseHistory';

function BuyerLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <BuyerSideBar />

      {/* Main Content */}
      <div className="bg-[#E6E6E6] flex flex-col h-screen w-full">
        {/* Navbar and Header */}
        <BuyerNavbar />

        {/* Outlet for page-specific content */}
        <div className="bg-[#E6E6E6]  flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function BuyerDashboard() {
  return (
    <Routes>
      {/* Parent Route */}
      <Route path="/" element={<BuyerLayout />}>
        {/* Default Route (Overview) */}
        <Route index element={<BuyerOverview />} />

        {/* Saved Products Route */}
        <Route path="/saved-products" element={<SavedProducts />} />
        <Route path="/ordered-products" element={<BuyerOrders/>} />
        <Route path="/orders-cancelled" element={<CancelledOrders/>} />
        <Route path="/purchase-history" element={<PurchaseHistory/>} />
      </Route>
    </Routes>
  );
}

export default BuyerDashboard;
