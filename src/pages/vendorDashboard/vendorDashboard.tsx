import { Routes, Route } from 'react-router-dom';
import { VendorOverview } from './vendorOverview';
import { VendorOrders } from './vendorOrders';
import { Sidebar } from '../vendorcomponents/sidebar';
import VendorOffer from './vendorOffer';
import VendorProducts from './vendorProducts';
import VendorReport from './VendorReport';
import VendorInventory from './vendorInventory';

export const VendorDashboard = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <Routes>
      <Route path="/" element={<VendorOverview />} />
      <Route path="orders" element={<VendorOrders />} />
      <Route path="offer" element={<VendorOffer />} />
      <Route path="products" element={<VendorProducts />} />
      <Route path="report" element={<VendorReport />} />
      <Route path="inventory" element={<VendorInventory />} />
    </Routes>
    </div>
  )
}
