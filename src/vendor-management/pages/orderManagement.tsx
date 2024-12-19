import { CircleHelp } from "lucide-react";
import { orders as mockOrders } from "../data";
import {
  Search,
  ChevronLeft,
  Share,
  Calendar,
  ChevronRight,
} from "lucide-react";

import React, { useState } from "react";
import { formatCurrency } from "../data";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

// Define the NavLink type
interface OrderManagementType {
  name: string;
  number: number;
}

// Define the navigation links array
const OrderManagementData: OrderManagementType[] = [
  { name: "Completed", number: 45 },
  { name: "Returned", number: 5 },
  { name: "Conceled", number: 2 },
  { name: "Refunded", number: 120 },
  { name: "In progress", number: 23 },
];

const OrderManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Holds the input value for filtering
  const [filteredOrders, setFilteredOrders] = useState(mockOrders); // Holds the filtered orders

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter orders based on the search term
    const filtered = mockOrders.filter(
      (order) =>
        order.customer.toLowerCase().includes(value) || // Match product name
        order.paymentStatus.toLowerCase().includes(value) || // Match status
        order.items.toLowerCase().includes(value)
    );

    setFilteredOrders(filtered);
  };
  return (
    <>
      <section className="lg:p-6 p-2">
        <div className="bg-white px-4 py-2 mb-4 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="lg:text-3xl text-xl">All Order Management</h1>
              <div className="lg:block hidden">
                <CircleHelp size={20} />
              </div>
            </div>
            <button className="lg:flex hidden gap-5 border border-[#B3B3B3] text-[#808080] pl-2 py-2 pr-6 font-semibold">
              <Share />
              <p>Export</p>
            </button>
          </div>

          <p className="text-[#666666] font-400 mb-2">
            In order management section, you can review and manage orders with
            their details. you can edit informations as IDs of all orders,
            ordered product, order date , pricing and order status.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full gap-3">
          {OrderManagementData.map((data, index) => (
            <div
              key={index}
              className="bg-white py-6 rounded-[6px] border-[0.85px] border-[#CCCCCC] text-center"
            >
              <h3 className="text-[#B3B3B3] font-[400]">{data.name}</h3>
              <p className="mt-4 text-[#201B0E] font-[400]">{data.number}</p>
            </div>
          ))}
        </div>
        {/* Search bar */}
        <div className="flex justify-between items-center mt-4 bg-white py-2 pl-2 lg:pr-8">
          <div className="flex items-center lg:w-[60%]">
            <input
              type="text"
              placeholder="Search for order"
              value={searchTerm}
              onChange={handleSearch}
              className="outline-none pl-9 py-[4px] bg-[#F2F2F2] rounded-sm relative w-[60%] text-[#666666]"
            />
            <Search className="absolute text-[#666666] pl-2" size={28} />
          </div>
          <div className="flex border border-[#999999] gap-1 rounded-sm p-1 items-center">
            <Calendar className="text-[#666666]" size={10} />
            <p className="text-[#666666] font-[500] pr-3 lg:text-[16px] text-sm">
              This month
            </p>
          </div>
        </div>
        {/* Table with shadcn */}
        <Table className="my-4 border-none bg-white">
          <TableHeader className="bg-[#F2F2F2] ">
            <TableRow>
              <TableHead className="text-[#0E1F0D] lg:font-[500] lg:text-[16px] text-sm">
                Customer
              </TableHead>
              <TableHead className="text-[#0E1F0D] lg:font-[500] lg:text-[16px] text-sm ">
                Created at
              </TableHead>
              <TableHead className="text-[#0E1F0D] lg:font-[500] lg:text-[16px] text-sm ">
                Total
              </TableHead>
              <TableHead className="text-[#0E1F0D] lg:font-[500] lg:text-[16px] text-sm ">
                Payment status
              </TableHead>
              <TableHead className="text-[#0E1F0D] lg:font-[500] lg:text-[16px] text-sm ">
                Items
              </TableHead>
              <TableHead className="text-[#0E1F0D] lg:font-[500] lg:text-[16px] text-sm ">
                Delivery ID
              </TableHead>
              <TableHead className="text-[#0E1F0D] lg:font-[500] lg:text-[16px] text-sm">
                Order Staus
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.customer} className="mb-10">
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="text-[#666666]">{order.date}</TableCell>
                  <TableCell className="text-[#666666]">
                    {formatCurrency(order.total)}
                  </TableCell>
                  <TableCell className="text-[#2C742F] ">
                    {order.paymentStatus}
                  </TableCell>
                  <TableCell className="text-[#666666] font-[500]">
                    {order.items}
                  </TableCell>
                  <TableCell className="text-[#666666]">
                    {order.deliveryId}
                  </TableCell>
                  <TableCell
                    className={`className="text-[#666666]" ${
                      order.orderStatus === "Completed"
                        ? "text-green-500 border-[1.5px] border-green-500 rounded-sm"
                        : order.orderStatus === "Returned"
                        ? "text-red-500 border-[1.5px]  border-red-500 rounded-sm "
                        : "text-orange-500 border-[1.5px]  border-orange-500 rounded-sm "
                    }`}
                    style={{ marginBottom: "10px", marginTop: "10px" }}
                  >
                    {order.orderStatus}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} style={{ textAlign: "center" }}>
                  No orders match your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="bg-white mt-4 py-2 lg:pr-8 pr-2 pl-2 flex justify-between">
          <div className="flex border border-[#666666] p-2 rounded-sm lg:gap-2 items-center">
            <ChevronLeft />
            <p className="text-[#666666]">Previous</p>
          </div>
          <div className="border border-[#666666] py-2 px-4 rounded-sm">
            <p className="text-[#666666]">page 1 of 20</p>
          </div>
          <div className="flex border border-[#666666] py-2 px-4 rounded-sm lg:gap-2 items-center">
            <p className="text-[#666666]">Next</p>
            <ChevronRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderManagement;
