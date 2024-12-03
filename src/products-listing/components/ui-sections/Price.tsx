
import { Button } from '../../../components/ui/button'
import { useProductStore } from '../../store/store'
import img from '../../../../public/shopping-bag.svg'
import img1 from '../../../../public/Vector.svg'
const PriceSection = () => {
    const {count,setCount} = useProductStore()

    const handleIncrement = () =>{
        setCount(count + 1)
    }
    const handleDecrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }

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
            <p className='text-[#666666] uppercase'>Availability: <span className='text-[#002603]'>product.availability</span></p>
            <p className='text-[#666666] uppercase'>sku: <span className='text-[#002603]'>product.sku</span></p>
            </li>
            <li className='text-[#2C742F]'>
                notify me when the price drops
            </li>
            <li className='flex items-center gap-2'> 
             <Button  className='bg-white border text-[#1F2223] rounded-xl border-[#cccccc] text-xl hover:bg-[#dcffdf]' size={'icon'} onClick={handleDecrement} disabled={count < 1}> - </Button>
             <p>{count}</p>
             <Button  className='bg-white text-[#1F2223] rounded-xl text-xl border border-[#cccccc] hover:bg-[#dcffdf]' size={'icon'} onClick={handleIncrement}>+</Button>
             <Button className='flex  text-white bg-[#002603] rounded-xl hover:bg-[#004d08]' >
                  <span><img src={img} alt="" /></span>
                  <span className='uppercase'>add to cart</span>
             </Button>
             <Button className='bg-white border border-slate-200 hover:bg-[#dcffdf] rounded-xl' size={'icon'} >
                  <span><img src={img1} alt="" /></span>
                  
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