import Header from "../vendorcomponents/Header"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/ui/table"

const VendorReport = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Report' />

      <div className="bg-gray-200 h-auto mx-auto my-auto pb-2">
        <div className="pt-8 w-[95%] flex justify-between flex-wrap mx-auto my-auto">
            <section className="bg-white w-[49%] h-auto rounded-md p-2">
                <h2 className="text-xl ml-2 mt-2">
                    Overview
                </h2>

                <Table className="bg-white rounded-lg mt-1 mb-0">
                    <TableHeader>
                        <TableRow className="text-md">
                        <TableHead className="text-black">NGN 21,000</TableHead>
                        <TableHead className="text-black">NGN 18,000</TableHead>
                        <TableHead className="text-black">NGN 17,000</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="bg-white rounded-lg text-black text-sm">
                        <TableCell className="text-green-300">Total Profit</TableCell>
                        <TableCell className="text-[#DF7400]">Revenue</TableCell>
                        <TableCell className="text-[#F9D262]">Sales</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="bg-white rounded-lg">
                    <TableHeader>
                        <TableRow className="text-md">
                        <TableHead className="text-black">NGN 21,000</TableHead>
                        <TableHead className="text-black">NGN 18,000</TableHead>
                        <TableHead className="text-black">NGN 17,000</TableHead>
                        <TableHead className="text-black">NGN 15,000</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="bg-white rounded-lg text-black text-sm">
                        <TableCell className="w-1/4">Net Purchase Value</TableCell>
                        <TableCell className="w-1/4">Net Sales Value</TableCell>
                        <TableCell className="w-1/4">MoM Profit</TableCell>
                        <TableCell className="w-1/4">YoY Profit</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
            <section className="bg-white w-[49%] h-[400px] rounded-md p-2 flex">
                <section className="w-1/3 mt-auto mb-auto">
                    <h3 className="text-green-300 text-xl">
                        In Stock
                    </h3>
                    <Table className="bg-white rounded-lg mt-1 mb-0">
                    <TableHeader>
                        <TableRow className="text-md">
                        <TableHead className="text-black ali">12</TableHead>
                        <TableHead className="text-black">2</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="bg-white rounded-lg text-black text-sm">
                        <TableCell>Total Profit</TableCell>
                        <TableCell>Revenue</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </section>
                <section className="w-1/3 mt-auto mb-auto">
                    <h3 className="text-[#DF7400] text-xl">
                        Low Stock
                    </h3>
                    <Table className="bg-white rounded-lg mt-1 mb-0">
                    <TableHeader>
                        <TableRow className="text-md">
                        <TableHead className="text-black ali">12</TableHead>
                        <TableHead className="text-black">2</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="bg-white rounded-lg text-black text-sm">
                        <TableCell>Total Profit</TableCell>
                        <TableCell>Revenue</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </section>
                <section className="w-1/3 mt-auto mb-auto">
                    <h3 className="text-red-600 text-xl">
                        Out Of Stock
                    </h3>
                    <Table className="bg-white rounded-lg mt-1 mb-0">
                    <TableHeader>
                        <TableRow className="text-md">
                        <TableHead className="text-black ali">12</TableHead>
                        <TableHead className="text-black">2</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="bg-white rounded-lg text-black text-sm">
                        <TableCell>Total Profit</TableCell>
                        <TableCell>Revenue</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </section>
            </section>
        </div>

        <section className="w-[95%] h-auto rounded-md bg-white ml-auto mr-auto mt-8">

        </section>

        <div className="max-w-[95%] h-auto mx-auto my-auto overflow-y-scroll overflow-x-scroll bg-white rounded-md">
            <h2 className="text-2xl mb-4 ml-2 mt-2">
                Best Selling Product
            </h2>
          <Table className="bg-white rounded-lg">
          <TableHeader>
            <TableRow className="text-lg">
              <TableHead className="text-black">Product</TableHead>
              <TableHead className="text-black">Product ID</TableHead>
              <TableHead className="text-black">Category</TableHead>
              <TableHead className="text-black">Remaining Quantity</TableHead>
              <TableHead className="text-black">Turn Over</TableHead>
              <TableHead className="text-black">Increase By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-white rounded-lg">
              <TableCell className="text-black font-medium border-b-2 pb-1">Synergy Power</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">20500</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">Solar Panel</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">14 Packets</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">17,000</TableCell>
              <TableCell className="font-medium border-b-2 pb-1 text-green-700"> 3.3%</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        </div>

      </div>
    </div>
  )
}

export default VendorReport
