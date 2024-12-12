import Header from "../vendorcomponents/Header"
import { PencilLine, Trash2, Plus, Search } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/ui/table"

const VendorOffer = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Offers' />

      <div className="bg-gray-200 w-full h-full flex mx-auto my-auto">
        <div className="mt-8 w-full">

        <div className="flex flex-col sm:flex-row w-[98%] mx-auto mb-4 justify-between">
          <div className="flex justify-between h-12 w-[270px] m-1">
            <form action="" 
            className="p-2 border-solid border-green-800 border-2 rounded-md"
            >
              <button><Search /></button>
              <input type="text"
              className="bg-gray-200 h-full w-20"
              />
            </form>

            <select className="h-12 p-2 border-solid border-green-800 border-2 rounded-md bg-gray-200">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            
          </div>
          <button className="bg-green-700 text-white flex p-3 rounded-md h-12 w-40 m-1"> 
            <Plus />Create Offer
          </button>
        </div>

        <div className="w-[98%] h-full flex justify-center mx-auto my-auto">
          <Table className="bg-white rounded-lg">
          <TableHeader>
            <TableRow className="text-lg">
              <TableHead className="text-black">Name</TableHead>
              <TableHead className="text-black">Code</TableHead>
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-black">Start Date</TableHead>
              <TableHead className="text-black">End Date</TableHead>
              <TableHead className="text-black">Remaining/Total</TableHead>
              <TableHead className="text-black">Edited</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-white rounded-lg">
              <TableCell className="text-black font-medium border-b-2 pb-1">10% Off</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">20500</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1"><p className="bg-green-400 rounded-2xl p-3">Active</p></TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">20th, Jul 2024</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">30th Dec 2024</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1">10/20</TableCell>
              <TableCell className="text-black font-medium border-b-2 pb-1"> 1 day ago</TableCell>
              <TableCell className="text-green-800 font-medium border-b-2 pb-1"><PencilLine /></TableCell>
              <TableCell className="text-red-800 font-medium border-b-2 pb-1"><Trash2 /></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        </div>
        

      </div>
      </div>

      
    </div>
  )
}

export default VendorOffer
