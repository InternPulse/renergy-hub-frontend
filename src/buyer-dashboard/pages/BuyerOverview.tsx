import Orders from "../components/Orders";
import panel from "../assets/panel.png";
import dp from "../assets/dp.png";
import { useProductStore } from "../../products-listing/store/store";
import { useEffect, useState } from "react";

const BuyerOverview = () => {
  const { userId } = useProductStore();
  const [userName, setUserName] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://renergy-hub-express-backend.onrender.com/api/v1/users/${userId}`,
          { method: "GET" }
        );
        if (response.ok) {
          const data = await response.json();
          setUserName({
            firstName: data.data.firstName || "Default",
            lastName: data.data.lastName || "Default",
          });
        } else {
          console.error("Failed to fetch profile data.");
        }
      } catch (error) {
        console.error("Error fetching profile:");
      }
    };
    if (userId) fetchProfile();
  }, [userId]);

  return (
    <section className="md:ml-[250px] w-[90%] h-screen mx-auto p-5 bg-gray-200">
      <div className="h-full">
        <section className="md:w-[90%] md:flex gap-5">
          <div className="p-2 w-full rounded-md bg-white">
            <div className="flex p-5 gap-5">
              <img src={dp} alt="" className="size-12 mx-1" />
              <div>
                <h3 className="font-bold ">
                  {userName.firstName || userName.lastName
                    ? `${userName.firstName} ${userName.lastName}`
                    : "John Doe"}
                </h3>
                <p>Profile</p>
              </div>
            </div>
            <div className="flex justify-evenly w-full mt-10 md:mt-20 text-sm gap-2">
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

          <div className="sm:h-full flex flex-col md:flex-row gap-3 rounded-md p-5 bg-white">
            <div className="flex space-y-2 flex-col mx-auto p-2">
              <h2 className="font-bold mx-auto">Saved Products</h2>
              <img src={panel} alt="" className="w-[150px] mx-auto" />
              <p className="font-bold mx-auto">NGN100000</p>
              <p className="border-b-[1px] border-gray-900 w-40 mx-auto text-center">
                Order: 1 Piece
              </p>
            </div>
            <div className="w-1 h-[90%] bg-gray-200 my-auto" />
            <div className="flex space-y-2 flex-col mx-auto p-2">
              <h2 className="font-bold mx-auto">Browse History</h2>
              <img src={panel} alt="" className="w-[150px] mx-auto" />
              <p className="font-bold mx-auto">NGN100000</p>
              <p className="border-b-[1px] border-gray-900 w-40 mx-auto text-center">
                Order: 1 Piece
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 md:w-[90%] w-full flex md:flex-row flex-col justify-between my-3">
          <div className="md:w-[49%] h-auto bg-white rounded-md p-2">
            <h2 className="font-bold">Purchase History</h2>
          </div>
          <Orders />
        </section>
        <section className="bg-white w-full h-auto my-3 md:w-[90%]">
          <div className="flex justify-between items-center p-2 w-full">
            <h2 className="font-bold text-xl">Orders</h2>
            <p className="text-sm text-blue-500 cursor-pointer">View more</p>
          </div>

          <div className="flex flex-wrap gap-2 p-2">
            {[
              "All",
              "Confirming",
              "Unpaid",
              "Preparing to ship",
              "Delivering",
              "Refunds",
              "Completed",
            ].map((status, index) => (
              <button
                key={index}
                className={`border-2 ${
                  status === "All"
                    ? "border-black"
                    : "border-gray-400 text-gray-600"
                } rounded-full p-2`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between p-2 gap-4">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={panel}
                alt="Panel"
                className="w-32 h-32 md:w-[150px] md:h-[150px] object-cover"
              />
              <div className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                <h2 className="my-1 font-bold text-xl">
                  Request to be confirmed
                </h2>
                <p className="my-1">Total: NGN100000</p>
                <p className="my-1">3 Variation(s), 4 Item(s)</p>
              </div>
            </div>
            <button className="h-10 text-sm outline-gray-600 outline outline-1 py-2 px-4 rounded-md self-center md:self-start">
              View more details
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BuyerOverview;
