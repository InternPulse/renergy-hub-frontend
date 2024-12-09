import ProductCard from '../components/ui-sections/ProductCard'
import { Button } from '../../components/ui/button'
import Header from '../components/ui-sections/header'
import PriceSection from '../components/ui-sections/Price'
import Vendor from '../components/ui-sections/Vendor'
import { Link, Outlet } from 'react-router-dom'
import ImageGallery from '../components/ui-sections/image-gallery'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/store'
import { useEffect,useState } from 'react'
import { apiProduct } from '../store/store'
//props
const ProductDetail = () => {
  const {id} = useParams()
  const {testProducts} = useProductStore()
  const [product,setProduct] = useState<apiProduct|undefined>(undefined)
  useEffect (()=>{
    const index = parseInt(id as string)
    const product = testProducts.find(p=>p.id === index)
    console.log(product)
    setProduct(product)

  },[id,testProducts])

  return (
    <>
     <div className='flex flex-col p-4 lg:p-8 mx-auto'>
      <nav>
        <Header />
      </nav>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-center lg:items-start '>
        <ImageGallery/>
        <PriceSection/>
        <Vendor/>
      </main>
    <section className='flex flex-col gap-8'>
      
       <main className='flex flex-col gap-8'>
        <div className='flex gap-2'>
          <Link to={'/product/detail/'} className='text-black hover:text-[#002603]'> DETAILS </Link>
          <Link to='/product/detail/review' className='text-black hover:text-[#002603]'> REVIEWS </Link>
          
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