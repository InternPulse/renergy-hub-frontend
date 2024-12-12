import { useState, useEffect } from "react"
import axios from 'axios';

import Header from "../vendorcomponents/Header"
import { PencilLine, Trash2, Plus, Filter } from "lucide-react"

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

const vendorProducts = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('https://renergy-hub-express-backend.onrender.com/api/v1/products'); // Replace with your actual API endpoint
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
      <Header title='Products' />

      <div className="bg-gray-200 h-auto pb-8 pt-8">

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
          
          <Table >
                <TableHeader>
                    <TableRow className="text-lg">
                    <TableHead className="text-black">Product</TableHead>
                    <TableHead className="text-black">Details</TableHead>
                    <TableHead className="text-black">Image</TableHead>
                    <TableHead className="text-black">Category</TableHead>
                    </TableRow>
                </TableHeader>
                {products.map((product) => (
                <TableBody key={product.id}>
                    <TableRow>
                    <TableCell className="text-black font-medium border-b-2 pb-1 w-1/5">{product.name}</TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1 w-1/5">Price: {product.price}<br />
                    Stock: {product.stock}<br />
                    </TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1">
                        <img  src={product.image} alt="Product Image"
                        className="h-[70px] w-auto mx-auto"
                        />
                    </TableCell>
                    <TableCell className="text-black font-medium border-b-2 pb-1 w-1/5">{product.category.categoryName}</TableCell>
                    <TableCell className="text-green-800 font-medium border-b-2 pb-1 w-8"><PencilLine /></TableCell>
                    <TableCell className="text-red-800 font-medium border-b-2 pb-1 w-8"><Trash2 /></TableCell>
                    </TableRow>
                </TableBody>
                ))}
            </Table>
        
        </div>

      </div>
    </div>
  )
}

export default vendorProducts
