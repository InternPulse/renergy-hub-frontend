import { Card } from "./ui/card";
import deliveryBus from "../assets/delivery.png";
import box from "../assets/package.png";
import delivered from "../assets/delivered.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect } from "react";
import axios from "axios";

export function OrderTracking() {
  
  useEffect(() => {
    const getCoinData = async () => {
      const myData = axios.get(`https://renergy-hub-express-backend.onrender.com/api/v1/orders`)
      .then((response) => {
          console.log(response.data)
          return response.data
      })
      .catch((err) => {
          return err
      })
  
       console.log(myData)
  }
  getCoinData()
  }, [])
  
  return (
    <div className="w-[100%] lg:w-[50%]">
      <h1 className="text-3xl font-bold mb-2">Order Tracking</h1>
      <Tabs defaultValue="transit">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="transit"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            In Transit
          </TabsTrigger>
          <TabsTrigger
            value="delivered"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Delivered
          </TabsTrigger>
        </TabsList>
        <TabsContent value="transit">
          <Card className="p-5 my-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 md:gap-5">
                <img src={box} alt="package" /> <p>#3692283</p>
              </div>
              <div className="bg-blue-200 text-blue-600 rounded-2xl px-2">
                In Transit
              </div>
            </div>

            <div className="flex justify-between items-center mt-10 text-sm md:text-base">
              <p>Imo - 10.06.24</p>
              <img src={deliveryBus} alt="bus" className="w-[50%] " />
              <p>Lagos - 20.06.24</p>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="delivered">
          <Card className="p-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 md:gap-5">
                <img src={box} alt="package" /> <p>#3692283</p>
              </div>
              <div className="bg-green-200 text-green-600 rounded-2xl px-2">
                Delivered
              </div>
            </div>

            <div className="flex justify-between items-center mt-10 text-sm md:text-base">
              <p>Imo - 10.06.24</p>
              <img src={delivered} alt="bus" className="w-[50%] " />
              <p>Lagos - 20.06.24</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
