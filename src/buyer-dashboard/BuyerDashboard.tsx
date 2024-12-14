import Sidebar from "../components/Sidebar"
import { Routes, Route } from 'react-router-dom';
import BuyerOverview from "./pages/BuyerOverview";


function BuyerDashboard() {
  return (
      <div className="flex h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<BuyerOverview />} />
        </Routes>
      </div>

  )
}

export default BuyerDashboard