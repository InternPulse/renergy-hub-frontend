import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { useSearchParams } from 'react-router-dom';
import { useProductStore } from '../store/store';
import { useEffect } from 'react';
export type ProductProps ={
    products: []
}



const ProductCard = ({products}: ProductProps) => {

  const [searchParams] = useSearchParams();
  useEffect(() => {
    
    try{
  // Extract query parameters from URL
  const categoryQuery = searchParams.get("category")?.split(", ");
  const productQuery = searchParams.get("product")?.split(", ");
  const vendorQuery = searchParams.get("vendor")?.split(", ");


      


    }catch(err){console.log(err);}
  }, []); 





  return (
    <>
    <div className="pt-4 pb-[11px] px-[11px] bg-white rounded-xl">
      <ul className="flex flex-col gap-4 min-w-[202px]">

        <li className="flex justify-end">
           
            <Button>

                <img src='/assets/favorite.svg' alt=''/>
            </Button>
            
          
        </li>
        <Link to={''}>
        <li className="flex justify-center">
             <img src={'products.image'} alt="Product Image" />
            
        </li>
     <li className="flex flex-col gap-2">
        <p className='text-black'>product.name</p>
        <p className="text-[#4C4C4C]">product.price</p>

     </li>

     </Link>

      </ul>
      </div>


    </>
  )
}

export default ProductCard

// const filteredProducts = products.filter((product) => {
//   const matchesVendor = filteredVendors.length === 0 || filteredVendors.includes(product.vendor);
//   const matchesCategory = filteredCategories.length === 0 || filteredCategories.includes(product.category);
//   const matchesShop = filteredShops.length === 0 || filteredShops.includes(product.shop);

//   // Include the product if it matches any one of the filters
//   return matchesVendor || matchesCategory || matchesShop;
// });