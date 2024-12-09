import { Routes, Route } from 'react-router-dom';
import { VendorOverview } from './vendorOverview';
import { VendorOrders } from './vendorOrders';
import { Sidebar } from '../vendorcomponents/sidebar';

export const VendorDashboard = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <Routes>
      <Route path="/" element={<VendorOverview />} />
      <Route path="orders" element={<VendorOrders />} />
    </Routes>
    </div>
  )
}
