import ProductCard from '../components/ui-sections/ProductCard'
import { Button } from '../../components/ui/button'
import Header from '../components/ui-sections/header'
import PriceSection from '../components/ui-sections/Price'
import Vendor from '../components/ui-sections/Vendor'
import { Link, Outlet } from 'react-router-dom'


//props
const ProductDetail = () => {
  return (
    <>
     <div className='flex flex-col p-4 lg:p-8 mx-auto'>
      <nav>
        <Header />
      </nav>
      <main className='grid md:grid-cols-2 grid-cols-1 '>
        <PriceSection/>
        <Vendor/>
      </main>
    <section className='flex flex-col gap-8'>
      
       <main className='flex flex-col gap-8'>
        <div className='flex gap-2'>
          <Link to='/product/detail' className='text-black hover:text-[#002603]'> DETAILS </Link>
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