import Header from "../vendorcomponents/Header"
import { PencilLine, Trash2, Plus, Filter } from "lucide-react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/ui/table"

const vendorProducts = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Products' />

      <div className="bg-gray-200 h-full pt-8">

        <div className="ml-auto mr-auto flex justify-between w-[95%] bg-white p-4 rounded-md h-20">

            <h1 className="text-3xl mt-auto mb-auto">Product Listing</h1>

            <div className="flex justify-between p-1 w-[140px] mt-auto mb-auto">
                <Filter
                className="h-12 text-green-800"
                />
                <button className=" h-12 bg-white text-black flex p-3 border-2 border-green-800 rounded-md"> 
                    <Plus />Add
                </button>
            </div>
            
        </div>

        <div  className="ml-auto mr-auto w-[95%] bg-white mt-8 rounded-md overflow-y-scroll overflow-x-scroll">
            <Table>
                <TableCaption>A list of your products.</TableCaption>
                <TableHeader>
                    <TableRow className="text-lg">
                    <TableHead className="text-black">Product</TableHead>
                    <TableHead className="text-black">Details</TableHead>
                    <TableHead className="text-black">Image</TableHead>
                    <TableHead className="text-black">Category</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="text-black font-medium border-b-2 pb-1">Fireman 380W Solar Panel</TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1">Price: <br />
                    Stock: <br />
                    Status: <br />
                    </TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1">
                        <img src="" alt="Product Image" 
                        className="h-[70px] w-auto"
                        />
                    </TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1">Solar Panel</TableCell>
                    <TableCell className="text-green-800 font-medium border-b-2 pb-1 w-8"><PencilLine /></TableCell>
                    <TableCell className="text-red-800 font-medium border-b-2 pb-1 w-8"><Trash2 /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

      </div>
    </div>
  )
}

export default vendorProducts
