
import { Button } from '../../components/ui/button'
// import Header from '../components/ui-sections/header'
import PriceSection from '../components/ui-sections/Price'
import Vendor from '../components/ui-sections/Vendor'
import { Link, Outlet } from 'react-router-dom'
import ImageGallery from '../components/ui-sections/image-gallery'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/store'
import { useEffect,useState} from 'react'
 import ViewCard from '../components/ui-sections/featureProducts'
 import { Separator } from '../../components/ui/separator';
import BreadcrumbNav from '../components/ui-sections/headBreadCrumbs'
import SkeletonDetail from '../components/skeleton-loader.tsx/ske-Detail'



const ProductDetail = () => {
  const {id} = useParams()
  const index = parseInt(id as string)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {testProducts,setDetailProducts,detailProducts,getProduct,setIsDclicked,setIsRClick,isDclicked, isRClick,getReviews,review} = useProductStore()

  const filteredProducts = testProducts.filter((product) => product.userId === product.userId);
  // const [product,setProduct] = useState<apiProduct|undefined>(undefined)
 useEffect(() => {
  const fetchProduct = async () => {
    try {
      // Fetch products if the array is empty
      if (testProducts.length === 0) {
        await Promise.all([getProduct(), getReviews()]);// Presumably fetches products
      }
      
      // Proceed if products are available and index is valid
      if (testProducts.length > 0 && index) {
        const product = testProducts.find(p => p.id === index);
        
        if (product) {
          setDetailProducts(product);
          console.log("Product found:", product);
          console.log("review found:", review);
        } else {
          console.warn("No product found with the provided index.");
        }
      }
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  fetchProduct();
  const timeout = setTimeout(() => {
    setIsLoading(false); // Stop showing skeleton after a delay
  }, 1000); // Set delay to 1 second (you can adjust the time)

  return () => clearTimeout(timeout); // Cleanup on unmount
}, [index, testProducts, getProduct,setDetailProducts,getReviews,review]); // Removed setDetailProducts if it's a setter

const handleDetailClick = ()=>{
      setIsDclicked(true)
         setIsRClick(false)
}
const handleReviewClick = ()=>{
  setIsDclicked(false)
  setIsRClick(true)
}
if (isLoading) return <div className=""><SkeletonDetail/></div>;
  return (
    <>
     <div className='flex flex-col p-4 lg:p-8 gap-8 mx-auto'>
      <nav>
        {/* <Header /> */}
        <BreadcrumbNav products={detailProducts}/>
      </nav>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-center lg:items-start '>
        <ImageGallery/>
        <PriceSection products={detailProducts}/>
        <Vendor products={detailProducts}/>
      </main>
    <section className='flex flex-col gap-8'>
      
       <main className='flex flex-col gap-8'>
        <ul className='flex flex-col'>
          <li className='flex gap-2'>
            <button onClick={handleDetailClick}  className='bg-none p-0' >
          <Link to={`/product/detail/${index}`} className='text-black hover:text-[#002603] flex flex-col ' > 
         
        <p className={isDclicked ? 'text-green-500' : ''}>  DETAILS </p> 
      
          
           </Link>
           </button>
           <button onClick={handleReviewClick}   className='bg-none p-0' >
          <Link to={`/product/detail/${index}/review`} className='text-black hover:text-[#002603] flex flex-col ' > 
         
        <p className={isRClick? 'text-green-500' : ''}>  REVIEWS </p> 
      
         
          
           </Link>
           </button>
         
          </li>
      {/* <li className='flex'>
      {isDclicked && <Separator className='max-w-[96px] h-1 bg-black'/>  }
      {isRClick && <Separator className='max-w-[96px] h-1 bg-black'/>  }     
      </li> */}
          <Separator/>
          </ul>

          <section>
          <Outlet/>
          </section>
       </main>
     
        <section className='flex flex-col gap-8 md:p-8 '>
        <div className=' text-center text-black'>
            <p> YOU MAY ALSO LIKE </p>
        </div>
        <div>
          <div className='lg:flex-row flex flex-col gap-4 lg:gap-12 items-center justify-center '>
        {/* add props later products={[]} */}
        {filteredProducts.slice(0,3).map(product => (
           <ViewCard products={product} key={product.id}/>
        ))}
        </div>
         </div>
         <div className='flex justify-center items-center'>
         <Button variant={'outline'} className='bg-white text-black rounded-lg  border-[#2C742F]' size={'sm'} asChild> 
         <Link to='/product' >View more</Link>   
         </Button>
         </div>
         </section>
    </section>
    </div>
    </>
  )
}

export default ProductDetail