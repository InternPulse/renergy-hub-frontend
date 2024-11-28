//import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import { VendorDashboard } from "./pages/VendorDashboard/VendorDashboard";

function App() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />

      </Routes>
    </div>
  );
}

export default App;
