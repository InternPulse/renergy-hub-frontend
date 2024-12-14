
import { Routes, Route } from 'react-router-dom';
import BuyerOverview from "./pages/BuyerOverview";
import BuyerSideBar from "../components/BuyerSideBar";
import SavedProducts from './pages/SavedProducts';
import BuyerNavbar from './components/BuyerNavbar';


function BuyerDashboard() {
  return (
      <div className="flex h-screen">
        <BuyerSideBar/>
        <div className='flex flex-col w-full'>
          <BuyerNavbar/>
        <Routes>
          <Route path="/" element={<BuyerOverview />} />
          <Route path="/saved-products" element={<SavedProducts />} />
        </Routes>
        </div>
      </div>

  )
}

export default BuyerDashboard