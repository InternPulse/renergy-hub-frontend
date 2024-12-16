import Orders from "../components/Orders"
import panel from "../assets/panel.png"
import dp from "../assets/dp.png"




const BuyerOverview = () => {
  return (
    <section className="md:ml-[250px] w-[90%] h-screen bg-gray-200 p-2">
        
        <div className="h-full">
          <section className="w-full h-[250px] flex justify-between">
            <div className="p-2 w-[60%] h-auto sm:h-full rounded-sm bg-white">
              <div className="flex">
                <img src={dp} alt="" className="size-12 mx-1" />
                <div>
                  <h3 className="font-bold ">Frank</h3>
                  <p>Profile</p>
                </div>
              </div>
              <div className="flex justify-evenly w-full mt-[100px]">
                <div className="h-20 w-40 pt-6">
                  <p className="text-center">0</p>
                  <h4 className="text-center">Unread message</h4>
                </div>
                <div className="w-[2px] bg-gray-200 h-20" />
                <div className="h-20 w-40 pt-6">
                  <p className="text-center">0</p>
                  <h4 className="text-center">New Quote(s)</h4>
                </div>
                <div className="w-[2px] bg-gray-200 h-20" />
                <div className="h-20 w-40 pt-6">
                  <p className="text-center">0</p>
                  <h4 className="text-center">Coupon(s)</h4>
                </div>
              </div>
            </div>
            
            <div className="w-[39%] h-auto sm:h-full flex rounded-sm bg-white">
              <div className="flex flex-col mx-auto p-2">
                <h2 className="font-bold mx-auto">
                  Saved Products
                </h2>
                <img src={panel} alt="" className="w-[150px] mx-auto" />
                <p className="font-bold mx-auto">NGN100000</p>
                <p className="border-b-[1px] border-gray-900 w-40 mx-auto text-center">Order: 1 Piece</p>
              </div>
              <div className="w-1 h-[90%] bg-gray-200 my-auto" />
              <div className="flex flex-col mx-auto p-2">
                <h2 className="font-bold mx-auto">
                  Browse History
                </h2>
                <img src={panel} alt="" className="w-[150px] mx-auto" />
                <p className="font-bold mx-auto">NGN100000</p>
                <p className="border-b-[1px] border-gray-900 w-40 mx-auto text-center">Order: 1 Piece</p>
              </div>
            </div>

          </section>
          <section className="bg-gray-200 w-auto h-auto flex justify-between my-3">
            <div className="w-[49%] h-auto bg-white rounded-sm p-2">
              <h2 className="font-bold">Purchase History</h2>
            </div>
            <Orders />
          </section>
          <section className="bg-white w-full h-auto my-3">
            <div className="flex justify-between p-2 w-full">
              <h2 className="font-bold text-xl">
                Orders
              </h2>
              <p>View more</p>
            </div>
            <div className="max-w-full flex flex-wrap">
              <button className="border-2 border-black rounded-full p-2 mx-1">All</button>
              <button className="border-2 border-gray-400 text-gray-600 rounded-full p-2 mx-1">Confirming</button>
              <button className="border-2 border-gray-400 text-gray-600 rounded-full p-2 mx-1">Unpaid</button>        
              <button className="border-2 border-gray-400 text-gray-600 rounded-full p-2 mx-1">Preparing to ship</button>
              <button className="border-2 border-gray-400 text-gray-600 rounded-full p-2 mx-1">Delivering</button>
              <button className="border-2 border-gray-400 text-gray-600 rounded-full p-2 mx-1">Refunds</button>
              <button className="border-2 border-gray-400 text-gray-600 rounded-full p-2 mx-1">Completed</button>
            </div>
            <div className="flex justify-between p-2 w-full">
                <div className="flex">
                  <img src={panel} alt="" className="w-[150px]" />
                  <div className="my-auto mx-2">
                    <h2 className="my-1 font-bold text-xl">Request to be confirmed</h2>
                    <p className="my-1">Total: NGN100000</p>
                    <p className="my-1">3 Variation(s), 4 Item(s)</p>
                  </div>
                </div>
                <button className="h-8 text-sm outline-gray-600 outline outline-1 py-1 px-4 rounded-md">
                  View more details
                </button>
            </div>
          </section>
        </div>
    </section>
  )
}

export default BuyerOverview
