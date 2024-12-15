import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/ui/table"

interface ProductData {
  product_id: number;
  category_id: number;
  user_id: number;
  name: string;
  description: string;
  image: string;
  created_at: string;
  total_revenue: number;
  total_cost: number;
  total_quantity_sold: number;
  total_profit: number;
  average_stock: number;
  sales_data: {
    date: string;
    price: number;
    quantity_sold: number;
    revenue: number;
    cost: number;
    profit: number;
  }[];
  profit_margin: number;
  average_price: number;
  stock_turnover_rate: number;
  is_profitable: boolean;
  profit_per_unit: number;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductData[];
}

const TopProducts = () => {

    // const [productData, setProductData] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('https://renergy-hub-django-backend.onrender.com/api/v1/financial/analytics/top-profit',{withCredentials:true});
        console.log(response.data.results); 
      } catch (err) {
        setError('Failed to fetch product data.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    }, []);

    if (isLoading) {
        return <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin mx-auto my-auto"></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
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

  )
}

export default TopProducts
