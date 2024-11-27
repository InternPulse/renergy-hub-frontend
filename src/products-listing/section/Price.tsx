
import { Button } from '../../components/ui/button'



const PriceSection = () => {
  return (
    <section>
        <ul className='flex flex-col gap-4 p-6'>
            <li className='flex flex-col'>
                <h1 className='text-black text-3xl max-w-[300px]'>product.name</h1>
                <div className='flex gap-2 text-[#808080]'> <span>rating</span>
                <p> Be the first to review this product </p></div>

            </li>
            <li>product.price </li>
            <li>
            <p className='text-[#666666] uppercase'>Availability <span className='text-[#002603]'>product.availability</span></p>
            <p className='text-[#666666] uppercase'>sku <span className='text-[#002603]'>product.sku</span></p>
            </li>
            <li className='text-[#2C742F]'>
                notify me when the price drops
            </li>
            <li className='flex gap-2'> 
             <Button variant={'outline'} className='bg-white text-[#1F2223] rounded-xl text-xl' size={'icon'}> - </Button>
             <p>count</p>
             <Button variant={'outline'} className='bg-white text-[#1F2223] rounded-xl text-xl' size={'icon'}>+</Button>
             <Button className='flex space-x-2 text-white bg-black'>
                  <span>icon</span>
                  <span className=''>add to cart</span>
             </Button>
             <Button className='flex space-x-2 text-white bg-black'>
                  <span>icon</span>
                  
             </Button>

            </li>

            <li>
                links
            </li>


        </ul>
    </section>
  )
}

export default PriceSection