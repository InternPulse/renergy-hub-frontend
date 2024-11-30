import ProductCard from '../components/ui-sections/ProductCard'
import { Button } from '../../components/ui/button'
import Header from '../components/ui-sections/header'
import PriceSection from '../components/ui-sections/Price'
import Vendor from '../components/ui-sections/Vendor'


//props
const ProductDetail = () => {
  return (
    <>
     <div className='flex flex-col p-4 lg:p-8'>
      <nav>
        <Header />
      </nav>
      <main className='grid md:grid-cols-2 grid-cols-1 '>
        <PriceSection/>
        <Vendor/>
      </main>
    <section className='flex flex-col'>

        <p className='text-[#808080] text-2xl text-wrap'></p>
        
        <div className='flex text-center text-black'>
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