import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function TrackingInfo() {
  return (
    <div className="w-[100%] lg:w-[50%] mt-10 md:mt-0">
      <h1 className="text-3xl font-bold mb-2">Tracking Info</h1>
      <Tabs defaultValue="orderInfo">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="orderInfo"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Order Info
          </TabsTrigger>
          <TabsTrigger
            value="driverInfo"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Driver Info
          </TabsTrigger>
        </TabsList>
        <TabsContent value="orderInfo">
          <Card className="p-5 space-y-3">
            <p>
              Load ID: <span>#3692283</span>
            </p>
            <p>
              Pickup Date: <span>August 15, 2024</span>
            </p>
            <p>
              Delivery Date: <span>August 30, 2024</span>
            </p>
            <p>
              Pickup Location:{" "}
              <span>20 Allen Avenue, Ikeja, Lagos, Nigeria</span>
            </p>
            <p>
              Delivery Location:{" "}
              <span>12 Amazon Street, Maitama, Abuja, Nigeria</span>
            </p>
          </Card>
        </TabsContent>
        <TabsContent value="driverInfo">
          <Card className="p-5 space-y-3">
            <p>
              Driver's Number: <span>07065435231</span>
            </p>
            <p>
              Name: <span>Johnson Anthony</span>
            </p>
            <p>
              Vehicle: <span>Toyota Pickup Van; AKW1684</span>
            </p>
            <p>
              Pickup Location:{" "}
              <span>20 Allen Avenue, Ikeja, Lagos, Nigeria</span>
            </p>
            <p>
              Delivery Location:{" "}
              <span>12 Amazon Street, Maitama, Abuja, Nigeria</span>
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
