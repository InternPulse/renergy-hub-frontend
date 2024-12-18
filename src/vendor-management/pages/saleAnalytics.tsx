import { BarChartComponent } from "../Charts/BarChart";
import { PieChartComponent } from "../Charts/PieChart";

import { useEffect } from "react";
import axios from "axios";
interface CardData {
  title: string;
  value: string | number;
  percentage: string;
  description: string;
}

// Define the sales analytics array
const cards: CardData[] = [
  {
    title: "Total Sales",
    value: 1500,
    percentage: "+3.05%",
    description: "VS last month",
  },
  {
    title: "Total Revenue",
    value: "₦103,150,500.00",
    percentage: "+3.05%",
    description: "VS last month",
  },
  {
    title: "Top Selling Product",
    value: "Solar Panel",
    percentage: "+3.05%",
    description: "VS last month",
  },
  {
    title: "Avg. Order Value",
    value: "150,000,000",
    percentage: "+3.05%",
    description: "VS last month",
  },
];

function SaleAnalytics() {
  const apiUrl =
    "https://renergy-hub-django-backend.onrender.com/api/v1/sales/";

  async function fetchData() {
    try {
      const response = await axios.get(apiUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response) {
        throw new Error(`HTTP error! Status: ${response}`);
      }

      console.log("API Response:", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="lg:p-6 p-2">
        <div className="bg-white px-4 py-2 mb-4">
          <h1 className="lg:text-3xl text-xl mb-1">Sales Analytics</h1>
          <p className="text-[#666666] font-400 mb-2">
            In Sales Analytics , your are provided with your sales information
            tracked.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-2">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-sm p-4">
              <div className="flex justify-between items-center">
                <p className="text-[#666666] font-400">{card.title}</p>
                <div className="flex gap-1 flex-col">
                  <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
                </div>
              </div>
              <p className="text-[#052200] font-[500] text-2xl mt-4">
                {card.value}
              </p>
              <div className="flex gap-1 items-center mt-2">
                <div
                  className="
                w-0 h-0 
                border-l-[6px] border-l-transparent 
                border-r-[6px] border-r-transparent 
                border-b-[12px] border-b-[#00B207]
              "
                />
                <p className="text-[#666666] text-sm">
                  <span className="text-[#00B207]">{card.percentage}</span>{" "}
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white flex justify-between py-2 lg:pl-6 lg:pr-20 px-2 mt-4 text-[#052200] font-[500] lg:text-[28px]">
          <p>Sales Trend</p>
          <p>Customer Demographics</p>
        </div>

        {/* Chart */}
        <div className="flex mt-4 lg:flex-row flex-col gap-4">
          <div className="lg:w-[60%] w-[100%]">
            <BarChartComponent />
          </div>
          <div className="lg:w-[40%] w-[100%]">
            <PieChartComponent />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-8 mt-4">
          <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-[#052200] font-[500] lg:text-2xl text-xl">
                Top Selling Product
              </p>
              <div className="flex gap-1 flex-col">
                <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
                <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
                <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
              </div>
            </div>
            <div>
              <table className="w-full text-left mt-6">
                <thead className="text-gray-700">
                  <tr>
                    <th className="px-4 py-2 ">Product</th>
                    <th className="px-4 py-2 ">Quantity</th>
                    <th className="px-4 py-2 ">Revenue</th>
                  </tr>
                </thead>
                <tbody className="text-[#666666]">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 ">Solar Panel</td>
                    <td className="px-4 py-2 ">1,200</td>
                    <td className="px-4 py-2 ">₦800,000.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 ">Inverter PRO</td>
                    <td className="px-4 py-2 ">1,200</td>
                    <td className="px-4 py-2 ">₦600,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-[#052200] font-[500] lg:text-2xl text-xl">
                Low Selling Product
              </p>
              <div className="flex gap-1 flex-col">
                <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
                <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
                <div className="w-1 h-1 bg-[#1F2223] rounded-full"></div>
              </div>
            </div>
            <div>
              <table className="w-full text-left border-collapse mt-6">
                <thead className="text-gray-700">
                  <tr>
                    <th className="px-4 py-2 ">Product</th>
                    <th className="px-4 py-2 ">Quantity</th>
                    <th className="px-4 py-2 ">Revenue</th>
                  </tr>
                </thead>
                <tbody className="text-[#666666]">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 ">Biomasss Boilers</td>
                    <td className="px-4 py-2 ">10</td>
                    <td className="px-4 py-2 ">₦50,000.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 ">Water Turbines</td>
                    <td className="px-4 py-2 ">60</td>
                    <td className="px-4 py-2 ">₦40,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SaleAnalytics;
