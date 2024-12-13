
import { Button } from '../../../components/ui/button'
import { useProductStore } from '../../store/store'
import img from '../../../../public/shopping-bag.svg'
import img1 from '../../../../public/Vector.svg'
import { apiProduct } from '../../store/store'
import { Separator } from '../../../components/ui/separator'
import img2 from '../../../../public/youtube.svg'
import img3 from '../../../../public/instagram.svg'
import img4 from '../../../../public/linkedin.svg'
import img5 from '../../../../public/x.svg'
import { Link } from 'react-router-dom'
import ControlledRating from './contRating'
interface props {
    products: apiProduct
}

interface socialProps{
    icon: string 
    link?: string
}

const Socials: socialProps[] = [{icon:img2 },{icon:img3 },{icon:img4 },{icon:img5 }]


const PriceSection = ({products}:props) => {
    const {count,setCount,addToCart,cartProducts} = useProductStore()
// Convert the string to a number and then format it
const formattedPrice = Number(products.price).toLocaleString();
    const handleIncrement = () =>{
        setCount(count + 1)
    }
    const handleDecrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    const handleAddCart = () => {
        addToCart(products)
        console.log('added products',cartProducts)
    }

  return (
    <section>
        <ul className='flex flex-col gap-4 lg:gap-8 p-6'>
            <li className='flex flex-col gap-2'>
                <h1 className='text-black text-3xl max-w-[300px]'>{products.name}</h1>
                <div className='flex items-center gap-2 text-[#808080]'> <span><ControlledRating/></span>
                <p> Be the first to review this product </p></div>

            </li>
            <li className='font-normal text-xl text-black'>{`NGN ${formattedPrice}`} </li>
            <li>
            <p className='text-[#666666] uppercase'>Availability: <span className='text-[#002603]'>{products.stock > 0 ? 'in stock' : 'out of stock'}</span></p>
            <p className='text-[#666666] uppercase'>sku: <span className='text-[#002603]'>{`XYZ-PTZ${products.id}`}</span></p>
            </li>
            <li className='text-[#2C742F]'>
            Notify me when the price drops
            </li>
            <Separator />
            <li className='flex items-center gap-2'> 
             <Button  className='bg-white border text-[#1F2223] rounded-xl border-[#cccccc] text-xl hover:bg-[#dcffdf]' size={'icon'} onClick={handleDecrement} disabled={count <= 1}> - </Button>
             <p>{count}</p>
             <Button  className='bg-white text-[#1F2223] rounded-xl text-xl border border-[#cccccc] hover:bg-[#dcffdf]' size={'icon'} onClick={handleIncrement} disabled={count >= products.stock}>+</Button>
             <Button className='flex  text-white bg-[#002603] rounded-xl hover:bg-[#004d08]' onClick={handleAddCart}>
                  <span><img src={img} alt="" /></span>
                  <span className='uppercase'>add to cart</span>
             </Button>
             <Button className='bg-white border border-slate-200 hover:bg-[#dcffdf] rounded-xl' size={'icon'} >
                  <span><img src={img1} alt="" /></span>
                  
             </Button>

            </li>
            <Separator />
            <li className='flex gap-2'>
                {Socials.map((item,index) => (
                    <Link to='' key={index} className='p-2 flex justify-center items-center border border-slate-200 rounded-full w-[60px] h-[60px]'>
                        <img key={index} src={item.icon} alt="" className='' />
                    </Link> 
                    
                ))}
            </li>


        </ul>
    </section>
  )
}

export default PriceSection