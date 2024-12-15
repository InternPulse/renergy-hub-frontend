import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "../vendorcomponents/Header"
import { ChevronDown, MoveUp, Minus, Ellipsis } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/ui/table"

import {
  Popover,
  PopoverTrigger,
} from "../../../src/components/ui/popover"

import PopOver from "../vendorcomponents/popOver"

// interface Order {
//   id: number;
//   userId: number;
//   productId: number;
//   quantity: number;
//   totalPrice: string;
//   status: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface ApiResponse {
//   status: string;
//   code: number;
//   data: Order[];
// }

export const VendorOrders = () => {

  // const [orders, setOrders] = useState<Order[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://renergy-hub-express-backend.onrender.com/api/v1/orders',{withCredentials:true}
  //       );
  //       setOrders(response.data.data);
  //       console.log(response.data.payload);
  //     } catch (err) {
  //       setError('Failed to fetch orders.');
  //       console.error(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin mx-auto my-auto"></div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Orders' />

    <div className="bg-gray-200 h-full p-4">
      <div className="flex flex-col sm:flex-row w-[98%] mx-auto bg-white rounded-md h-auto p-2">
        <section className="mx-auto my-auto">
          <h2>Today</h2>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Total Orders</h2>
          <p className="font-bold text-center">2654</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Delivered Orders</h2>
          <p className="font-bold text-center">2600</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Pending Orders</h2>
          <p className="font-bold text-center">50</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Returns</h2>
          <p className="font-bold text-center">0</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm ">Cancelled</h2>
          <p  className="font-bold text-center">4</p>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-[98%] mx-auto my-4">
        <div className="flex flex-wrap w-auto">
          <button className="bg-white hover:bg-green-500 text-black flex m-2 p-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Type<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 m-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Status<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 m-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Order Date<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 m-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Delivery Status<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 m-2 rounded-3xl border-2 border-green-500 mx-1"> 
            All Filters<ChevronDown className="h-4 my-auto" />
          </button>
        </div>
        <button className="bg-green-700 hover:bg-green-500 text-white flex p-2 m-2 rounded-md w-20 h-10"> 
          <MoveUp className="h-4 my-auto" />Export
        </button>
      </div>

    <div>
      <Table className="bg-white rounded-lg">
          <TableHeader>
            <TableRow className="text-lg">
              <TableHead className="text-black">
                <button className="flex">
                   <Minus className="bg-green-400 my-auto" /> Order <ChevronDown className="my-auto" />
                </button>
              </TableHead>
              <TableHead className="text-gray-400">Customer</TableHead>
              <TableHead className="text-gray-400">Type</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Products</TableHead>
              <TableHead className="text-gray-400">Total</TableHead>
              <TableHead className="text-gray-400">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-white rounded-lg">
              <TableCell className="text-black font-medium border-b-2 pb-1">
                 <Popover>
                  <PopoverTrigger>
                    #1119256
                  </PopoverTrigger>
                  <PopOver />
                </Popover>
              </TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">
                <Popover>
                  <PopoverTrigger>
                     Esther Howard
                  </PopoverTrigger>
                  <PopOver />
                </Popover>
              </TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">
                <Popover>
                  <PopoverTrigger>
                     Shipping
                  </PopoverTrigger>
                  <PopOver />
                </Popover>
              </TableCell>
              <TableCell className="text-green-700 font-medium border-b-2 pb-1">
                <Popover>
                  <PopoverTrigger>
                     Paid
                  </PopoverTrigger>
                  <PopOver />
                </Popover>
              </TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">
                <Popover>
                  <PopoverTrigger>
                     #175,000
                  </PopoverTrigger>
                  <PopOver />
                </Popover>
              </TableCell>
              <TableCell className="font-medium border-b-2 pb-1 text-black">
                <Popover>
                  <PopoverTrigger>
                     #175,000
                  </PopoverTrigger>
                  <PopOver />
                </Popover>
              </TableCell>
              <TableCell className="font-medium border-b-2 pb-1 text-black">
                <Popover>
                  <PopoverTrigger className="flex">
                     Jun 19 <Ellipsis />
                  </PopoverTrigger>
                  <PopOver />
                </Popover>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
    </div>
    </div>
  )
}
