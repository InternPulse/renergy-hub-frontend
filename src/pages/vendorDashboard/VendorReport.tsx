import Header from "../vendorcomponents/Header"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import TopProducts from "../vendorcomponents/topProducts";

const data = [
  {
    name: 'Jun',
    Profit: 4000,
    Revenue: 2400,
    amt: 2400,
  },
  {
    name: 'Jul',
    Profit: 3000,
    Revenue: 1398,
    amt: 2210,
  },
  {
    name: 'Aug',
    Profit: 2000,
    Revenue: 9800,
    amt: 2290,
  },
  {
    name: 'Sep',
    Profit: 2780,
    Revenue: 3908,
    amt: 2000,
  },
  {
    name: 'Oct',
    Profit: 1890,
    Revenue: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    Profit: 2390,
    Revenue: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    Profit: 3490,
    Revenue: 4300,
    amt: 2100,
  },
];


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
        <div className="pt-8 w-[95%] flex flex-col sm:flex-row justify-between mx-auto my-auto">
            <section className="bg-white sm:w-[49%] h-[300px] rounded-md p-2">
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
            <section className="bg-white sm:w-[49%] h-auto rounded-md p-2 flex flex-wrap">
                <section className="sm:w-1/3 my-auto mx-auto">
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
                <section className="sm:w-1/3 my-auto mx-auto">
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
                <section className="sm:w-1/3 my-auto mx-auto">
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

        <section className="w-[95%] h-[400px] rounded-md bg-white mx-auto my-8">
            <h1 className="text-xl ml-2 my-2">Revenue & Profits</h1>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Revenue" stroke="#008000" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Profit" stroke="#FFA500" />
                </LineChart>
            </ResponsiveContainer>
        </section>

        <TopProducts />

      </div>
    </div>
  )
}

export default VendorReport
