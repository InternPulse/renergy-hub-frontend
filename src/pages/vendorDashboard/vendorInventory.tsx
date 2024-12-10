import Header from "../vendorcomponents/Header"
import { PencilLine, Trash2, ListFilter } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/ui/table"

const VendorInventory = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Inventory' />

      <div className="bg-gray-200 h-full mx-auto my-auto pb-2">
        <div className="pt-8 w-[98%] flex justify-between flex-wrap mx-auto my-auto">
            <section className="bg-white rounded-md w-[98%] h-auto mx-auto">
                <h2 className="text-xl ml-2 mt-2">
                    Overview
                </h2>
                <section className="flex flex-wrap justify-between p-2 bg-white rounded-md w-[95%] h-auto">
                    <div>
                        <h3 className="text-xl ml-2 mt-2 text-green-800">
                            Categories
                        </h3>
                        <Table className="bg-white rounded-lg mt-1 mb-0">
                            <TableHeader>
                                <TableRow className="text-md">
                                <TableHead className="text-black font-medium">14</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-white rounded-lg text-gray-600 text-sm">
                                <TableCell>Last 7 days</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <h3 className="text-xl ml-2 mt-2 text-[#DF7400]">
                            Total Products
                        </h3>
                        <Table className="bg-white rounded-lg mt-1 mb-0">
                            <TableHeader>
                                <TableRow className="text-md">
                                <TableHead className="text-black">823</TableHead>
                                <TableHead className="text-black">NGN250M</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-white rounded-lg text-gray-600 text-sm">
                                <TableCell>Last 7 days</TableCell>
                                <TableCell>Revenue</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <h3 className="text-xl ml-2 mt-2 text-green-500">
                            Top Selling
                        </h3>
                        <Table className="bg-white rounded-lg mt-1 mb-0">
                            <TableHeader>
                                <TableRow className="text-md">
                                <TableHead className="text-black">5</TableHead>
                                <TableHead className="text-black">NGN25000</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-white rounded-lg text-gray-600 text-sm">
                                <TableCell>Last 7 days</TableCell>
                                <TableCell>Cost</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <h3 className="text-xl ml-2 mt-2 text-red-600">
                            Low Stock
                        </h3>
                        <Table className="bg-white rounded-lg mt-1 mb-0">
                            <TableHeader>
                                <TableRow className="text-md">
                                <TableHead className="text-black">12</TableHead>
                                <TableHead className="text-black">2</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-white rounded-lg text-gray-600 text-sm">
                                <TableCell>Ordered</TableCell>
                                <TableCell>Not In Stock</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </section>
            <div className="w-full flex p-2 justify-end">
                <button className="bg-green-600 hover:bg-green-300 text-white rounded-md p-2">Generate Report</button>
            </div>

            <div  className="ml-auto mr-auto w-[98%] bg-white rounded-md overflow-y-scroll overflow-x-scroll">
                <div className="flex justify-between p-2">
                    <h2 className="text-2xl mb-4 ml-2 mt-2">
                        Products
                    </h2>
                    <div className="flex h-10">
                        <button className="bg-green-600 text-white hover:bg-green-300 rounded-md p-2 mr-2">
                            Add Product
                        </button>
                        <button className="border-gray-300 border-2 bg-white text-black hover:bg-green-300 rounded-md p-2 mr-2 flex">
                            <ListFilter />
                            Filters
                        </button>
                        <button className="border-gray-300 border-2 bg-white hover:bg-green-300 text-black rounded-md p-2">
                            Download All
                        </button>
                    </div>
                </div>
            
            <Table>
                <TableHeader>
                    <TableRow className="text-lg">
                    <TableHead className="text-black">Product</TableHead>
                    <TableHead className="text-black">Buying Price</TableHead>
                    <TableHead className="text-black">Quantity</TableHead>
                    <TableHead className="text-black">Treshold Value</TableHead>
                    <TableHead className="text-black">Availability</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="text-black font-medium border-b-2 pb-1">Fireman 380W Solar Panel</TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1">NGN250K</TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1">43 Packets</TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1">12 Packets</TableCell>
                    <TableCell className="font-medium border-b-2 pb-1 text-green-600">In Stock</TableCell>
                    <TableCell className="text-green-800 font-medium border-b-2 pb-1 w-8"><PencilLine /></TableCell>
                    <TableCell className="text-red-800 font-medium border-b-2 pb-1 w-8"><Trash2 /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        </div>
      </div>
    </div>
  )
}

export default VendorInventory
