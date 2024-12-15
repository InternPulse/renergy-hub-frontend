import { Routes, Route, Outlet } from 'react-router-dom';
import BuyerOverview from "./pages/BuyerOverview";
import BuyerSideBar from "../components/BuyerSideBar";
import SavedProducts from './pages/SavedProducts';
import BuyerNavbar from './components/BuyerNavbar';

function BuyerLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <BuyerSideBar />

      {/* Main Content */}
      <div className="flex flex-col h-screen w-full">
        {/* Navbar and Header */}
        <BuyerNavbar />

        {/* Outlet for page-specific content */}
        <div className="flex-grow">
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
      </Route>
    </Routes>
  );
}

export default BuyerDashboard;
