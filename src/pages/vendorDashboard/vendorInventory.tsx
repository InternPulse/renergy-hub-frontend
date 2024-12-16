import Header from "../vendorcomponents/Header"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import InventoryProducts from "../vendorcomponents/InventoryProducts"

const VendorInventory = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Inventory' />

      <div className="bg-gray-200 h-auto  mx-auto my-auto pb-4">
        <div className="pt-8 w-[98%] flex justify-between flex-wrap mx-auto my-auto">
            <section className="bg-white rounded-md w-[98%] h-auto mx-auto">
                <h2 className="text-xl ml-2 mt-2">
                    Overview
                </h2>
                <section className="flex flex-wrap justify-between p-2 bg-white rounded-md w-[95%] h-auto">
                    <div className="ml-7 sm:ml-0 sm:mt-2">
                        <h3 className="text-xl text-green-800">
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
                    <div className="mx-auto">
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
                    <div className="mx-auto">
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
                    <div className="mx-auto">
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

            <InventoryProducts />

        </div>
      </div>
    </div>
  )
}

export default VendorInventory
