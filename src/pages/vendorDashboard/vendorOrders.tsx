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

export const VendorOrders = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Orders' />

    <div className="bg-gray-200 h-full p-4">
      <div className="flex flex-wrap w-[98%] mx-auto bg-white rounded-md h-auto p-2">
        <section className="mx-auto my-auto">
          <h2>Today</h2>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Total Orders</h2>
          <p className="font-bold">2654</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Delivered Orders</h2>
          <p className="font-bold">2600</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Pending Orders</h2>
          <p className="font-bold">50</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Returns</h2>
          <p className="font-bold">0</p>
        </section>
        <section className="mx-auto my-auto">
          <h2 className="text-gray-500 text-sm">Cancelled</h2>
          <p  className="font-bold">4</p>
        </section>
      </div>

      <div className="flex justify-between w-[98%] mx-auto my-4">
        <div className="flex flex-wrap w-auto">
          <button className="bg-white hover:bg-green-500 text-black flex p-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Type<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Status<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Order Date<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 rounded-3xl border-2 border-green-500 mx-1"> 
            Delivery Status<ChevronDown className="h-4 my-auto" />
          </button>
          <button className="bg-white hover:bg-green-500 text-black flex p-2 rounded-3xl border-2 border-green-500 mx-1"> 
            All Filters<ChevronDown className="h-4 my-auto" />
          </button>
        </div>
        <button className="bg-green-700 hover:bg-green-500 text-white flex p-2 rounded-md"> 
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
              <TableCell className="text-black font-medium border-b-2 pb-1">#1119256</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">Esther Howard</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">Shipping</TableCell>
              <TableCell className="text-green-700 font-medium border-b-2 pb-1">Paid</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">#175,000</TableCell>
              <TableCell className="font-medium border-b-2 pb-1 text-black"> #175,000</TableCell>
              <TableCell className="font-medium border-b-2 pb-1 text-black flex"> Jun 19 <Ellipsis /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>

    </div>
    </div>
  )
}
