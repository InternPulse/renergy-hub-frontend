import { useState, useEffect } from "react"
import axios from 'axios';

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

interface Product {
  id: number;
  categoryId: number;
  userId: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: number;
    categoryName: string;
    description: string;
  };
  user: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    userType: string;
    registerType: string;
    socialId: null | string;
    registrationDate: string;
    phoneNumber: string;
    confirmPassword: null | string;
    isVerified: string;
    verificationToken: string;
    verificationTokenExpiresAt: string;
    resetToken: null | string;
    resetTokenExpiresAt: null | string;
  };
}

interface ApiResponse {
  status: string;
  code: number;
  data: Product[];
}

const VendorInventory = () => {

    const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://renergy-hub-express-backend.onrender.com/api/v1/products') // Replace with your actual API endpoint
        setProducts(response.data.data); 
      } catch (err) {
        setError('Failed to fetch products.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

   if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

            <div  className="ml-auto mr-auto w-[98%] bg-white rounded-md overflow-y-scroll overflow-x-scroll">
                <div className="flex flex-col sm:flex-row justify-between p-2">
                    <h2 className="text-2xl mb-4 ml-2 mt-2">
                        Products
                    </h2>
                    <div className="flex  h-10">
                        <button className="bg-green-600 text-white hover:bg-green-300 rounded-md p-2 mr-2">
                            Add Product
                        </button>
                        <button className="border-gray-300 border-2 bg-white text-black hover:bg-green-300 rounded-md p-2 mr-2 flex">
                            <ListFilter />
                            Filters
                        </button>
                        <button className="border-gray-300 border-2 bg-white hover:bg-green-300 text-black rounded-md p-2">
                            Download
                        </button>
                    </div>
                </div>
            
            <Table>
                <TableHeader>
                    <TableRow className="text-lg">
                    <TableHead className="text-black">Product</TableHead>
                    <TableHead className="text-black">Buying Price</TableHead>
                    <TableHead className="text-black">Quantity</TableHead>
                    <TableHead className="text-black">Availability</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                    <TableRow key={product.id}>
                    <TableCell className="text-black font-medium border-b-2 pb-1 w-1/5">{product.name}</TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1 w-1/5">NGN{product.price}</TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1 w-1/5">{product.stock} Packets</TableCell>
                    <TableCell className="font-medium border-b-2 pb-1 w-1/5">{product.stock > 0 ? <span className="text-green-600">In Stock</span> : <span className="text-red-600">Out Of Stock</span>}</TableCell>
                    <TableCell className="text-green-800 font-medium border-b-2 pb-1 w-8"><PencilLine /></TableCell>
                    <TableCell className="text-red-800 font-medium border-b-2 pb-1 w-8"><Trash2 /></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
             
        </div>

        </div>
      </div>
    </div>
  )
}

export default VendorInventory
