import { Routes, Route } from 'react-router-dom';
import { VendorOverview } from './VendorOverview';
import { VendorOrders } from './VendorOrders';
import { Sidebar } from '../vendorcomponents/Sidebar';

export const VendorDashboard = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
      <Route path="/" element={<VendorOverview />} />
      <Route path="orders" element={<VendorOrders />} />
    </Routes>
    </div>
  )
}
