
import ProductCard from './ProductCard'
import { Button } from '../../components/ui/button'

//props
const Detail = () => {
  return (
    <>

    <section className='flex flex-col'>

        <p className='text-[#808080] text-2xl text-wrap'></p>
        
        <div className='flex text-center text-black'>
            <p> YOU MAY ALSO LIKE </p>
        </div>
        <div>
         <ProductCard products={[]}/>
         </div>
         <div className='flex justify-center items-center'>
         <Button variant={'outline'} className='bg-white text-black rounded-xl text-xl border-[#2C742F]' size={'sm'}> 
            View more
         </Button>
         </div>

    </section>
    </>
  )
}

export default Detail