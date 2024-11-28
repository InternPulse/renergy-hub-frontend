import VendorProfile from "./vendor-management/Pages/VendorProfile";
import Vendor from "./vendor-management/Vendor";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Vendor />} />
    </Routes>
  );
}

export default App;
