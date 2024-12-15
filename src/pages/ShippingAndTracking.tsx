import Navbar from "../components/Navbar";
import { OrderTracking } from "../components/OrderTracking";
import { TrackingInfo } from "../components/TrackingInfo";

function ShippingAndTracking() {
  return (
    <>
      <Navbar />
      <div className="bg-[#d2f3d2] w-full lg:flex justify-between min-h-screen p-5 md:p-10 gap-10">
        <OrderTracking />
        <TrackingInfo />
      </div>
    </>
  );
}

export default ShippingAndTracking;
