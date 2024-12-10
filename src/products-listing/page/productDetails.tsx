import ProductCard from '../components/ui-sections/ProductCard'
import { Button } from '../../components/ui/button'
import Header from '../components/ui-sections/header'
import PriceSection from '../components/ui-sections/Price'
import Vendor from '../components/ui-sections/Vendor'
import { Link, Outlet } from 'react-router-dom'
import ImageGallery from '../components/ui-sections/image-gallery'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/store'
import { useEffect, } from 'react'
 



const ProductDetail = () => {
  const {id} = useParams()
  const index = parseInt(id as string)
  const {testProducts,setDetailProducts,detailProducts,getProduct} = useProductStore()
  // const [product,setProduct] = useState<apiProduct|undefined>(undefined)
 useEffect(() => {
  const fetchProduct = async () => {
    try {
      // Fetch products if the array is empty
      if (testProducts.length === 0) {
        await getProduct(); // Presumably fetches products
      }
      
      // Proceed if products are available and index is valid
      if (testProducts.length > 0 && index) {
        const product = testProducts.find(p => p.id === index);
        
        if (product) {
          setDetailProducts(product);
          console.log("Product found:", product);
        } else {
          console.warn("No product found with the provided index.");
        }
      }
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  fetchProduct();
}, [index, testProducts, getProduct,setDetailProducts]); // Removed setDetailProducts if it's a setter
  return (
    <>
     <div className='flex flex-col p-4 lg:p-8 mx-auto'>
      <nav>
        <Header />
      </nav>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-center lg:items-start '>
        <ImageGallery/>
        <PriceSection products={detailProducts}/>
        <Vendor/>
      </main>
    <section className='flex flex-col gap-8'>
      
       <main className='flex flex-col gap-8'>
        <div className='flex gap-2'>
          <Link to={`/product/detail/${index}`} className='text-black hover:text-[#002603]'> DETAILS </Link>
          <Link to={`/product/detail/${index}/review`}className='text-black hover:text-[#002603]'> REVIEWS </Link>
          
          </div>
          <section>
          <Outlet/>
          </section>
       </main>
     
        
        <div className=' text-center text-black'>
            <p> YOU MAY ALSO LIKE </p>
        </div>
        <div>
        {/* add props later products={[]} */}
         <ProductCard />
         </div>
         <div className='flex justify-center items-center'>
         <Button variant={'outline'} className='bg-white text-black rounded-xl text-xl border-[#2C742F]' size={'sm'}> 
            View more
         </Button>
         </div>

    </section>
    </div>
    </>
  )
}

export default ProductDetail