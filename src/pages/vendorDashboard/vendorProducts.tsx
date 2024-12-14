import Header from "../vendorcomponents/Header"
import { Plus, Filter } from "lucide-react"

import Products from "../vendorcomponents/products"

const vendorProducts = () => {

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Products' />

      <div className="bg-gray-200 h-auto pb-8 pt-8">

        <div className="ml-auto mr-auto flex justify-between w-[95%] bg-white p-4 rounded-md h-20">

            <h1 className="lg:text-3xl text-xl my-auto">Product Listing</h1>

            <div className="flex justify-between p-1 w-[140px] mt-auto mb-auto">
                <Filter
                className="h-12 text-green-800"
                />
                <button className="w-18 h-12 bg-white text-black flex p-2 border-2 border-green-800 rounded-md"> 
                    <Plus />Add
                </button>
            </div>
             
        </div>

        <Products />

      </div>
    </div>
  )
}

export default vendorProducts
