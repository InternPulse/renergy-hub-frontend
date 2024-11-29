import { OrderTracking } from "@/Components/OrderTracking"
import { TrackingInfo } from "@/Components/TrackingInfo"

function ShippingAndTracking() {
  return (
    <div className="bg-[#d2f3d2] w-full lg:flex justify-between min-h-screen p-5 md:p-10 gap-10">
      <OrderTracking />
      <TrackingInfo />
    </div>
  )
}

export default ShippingAndTracking