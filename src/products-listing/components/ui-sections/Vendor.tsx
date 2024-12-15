import { Link } from 'react-router-dom'
import {Button} from '../../../components/ui/button'
import { apiProduct } from '@/products-listing/store/store'
import VendorCard from './vendorCard'
import { useProductStore } from '../../store/store'
import Rating from './rating'
interface props{
  products: apiProduct
}
const Vendor = ({products}:props) => {
  const {testProducts,} = useProductStore()
  const filteredProducts = testProducts.filter((product) => product.userId === product.userId);
  return (
    <>
     <section className=" flex flex-col gap-4 text-black lg:p-4">
    <ul className="flex gap-2 ">
        <li className="">
          <Link to="#" className='items-center flex justify-center rounded-full p-2 border border-slate-200 w-[60px] h-[60px]'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="24" viewBox="0 0 54 24" fill="none">
  <g clip-path="url(#clip0_1126_10443)">
    <path d="M38.0795 0.4375H52.8533L40.0941 23.015H25.3203L38.0795 0.4375Z" fill="#FF7A00"/>
    <path d="M24.6479 0.4375H35.3924L22.6333 23.015H11.8887L24.6479 0.4375Z" fill="#FF9736"/>
    <path d="M13.9037 0.4375H21.9622L9.20297 23.015H1.14453L13.9037 0.4375Z" fill="#FFBC7D"/>
  </g>
  <defs>
    <clipPath id="clip0_1126_10443">
      <rect width="52.3798" height="22.5775" fill="white" transform="translate(0.808594 0.4375)"/>
    </clipPath>
  </defs>
</svg>
          </Link>
          </li>
        <li className="flex flex-col"> 
          <div className="flex gap-2 items-center">
              <p className='lg:text-3xl'>{products.user.brandName}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
  <path d="M9.13141 0.406875L2.13141 3.51687C1.41141 3.83687 0.941406 4.55688 0.941406 5.34688V10.0469C0.941406 15.5969 4.78141 20.7869 9.94141 22.0469C15.1014 20.7869 18.9414 15.5969 18.9414 10.0469V5.34688C18.9414 4.55688 18.4714 3.83687 17.7514 3.51687L10.7514 0.406875C10.2414 0.176875 9.64141 0.176875 9.13141 0.406875ZM7.23141 15.3369L4.64141 12.7469C4.54882 12.6543 4.47538 12.5444 4.42528 12.4234C4.37517 12.3025 4.34939 12.1728 4.34939 12.0419C4.34939 11.9109 4.37517 11.7813 4.42528 11.6603C4.47538 11.5394 4.54882 11.4295 4.64141 11.3369C4.73399 11.2443 4.8439 11.1709 4.96486 11.1207C5.08583 11.0706 5.21548 11.0449 5.34641 11.0449C5.47734 11.0449 5.60699 11.0706 5.72795 11.1207C5.84891 11.1709 5.95882 11.2443 6.05141 11.3369L7.94141 13.2169L13.8214 7.33687C13.914 7.24429 14.0239 7.17085 14.1449 7.12075C14.2658 7.07064 14.3955 7.04485 14.5264 7.04485C14.6573 7.04485 14.787 7.07064 14.9079 7.12075C15.0289 7.17085 15.1388 7.24429 15.2314 7.33687C15.324 7.42946 15.3974 7.53937 15.4475 7.66033C15.4976 7.7813 15.5234 7.91094 15.5234 8.04187C15.5234 8.17281 15.4976 8.30245 15.4475 8.42342C15.3974 8.54438 15.324 8.65429 15.2314 8.74687L8.64141 15.3369C8.54889 15.4296 8.439 15.5031 8.31803 15.5533C8.19706 15.6035 8.06737 15.6293 7.93641 15.6293C7.80544 15.6293 7.67576 15.6035 7.55478 15.5533C7.43381 15.5031 7.32392 15.4296 7.23141 15.3369Z" fill="black"/>
</svg>
          </div>
          <p></p>
          <span> {<Rating rating={4}/>} </span>
        </li>

    </ul>
    <div className='flex gap-4 '>
      <Button className='text-black border bg-white rounded-xl'> Chat Now</Button>
      <Button className='text-black border bg-white rounded-xl'> Contact Vendor</Button>
    </div>
    <div className='flex  items-center justify-start gap-4 '>
    {filteredProducts.slice(0,2).map(product => (
           <VendorCard products={product} key={product.id}/>
        ))}
       
    </div>
    <hr/>
    <ul className="flex gap-4 text-wrap">
        <li className="flex flex-col ">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <path d="M0 8.45312V10.9531H23.75V29.7031H16.055C15.4975 27.5544 13.565 25.9531 11.25 25.9531C8.935 25.9531 7.0025 27.5544 6.445 29.7031H5V23.4531H2.5V32.2031H6.445C7.0025 34.3519 8.935 35.9531 11.25 35.9531C13.565 35.9531 15.4975 34.3519 16.055 32.2031H26.445C27.0025 34.3519 28.935 35.9531 31.25 35.9531C33.565 35.9531 35.4975 34.3519 36.055 32.2031H40V22.0081L39.9212 21.8119L37.4212 14.3119L37.15 13.4531H26.25V8.45312H0ZM1.25 13.4531V15.9531H12.5V13.4531H1.25ZM26.25 15.9531H35.3512L37.5 22.3594V29.7031H36.055C35.4975 27.5544 33.565 25.9531 31.25 25.9531C28.935 25.9531 27.0025 27.5544 26.445 29.7031H26.25V15.9531ZM2.5 18.4531V20.9531H10V18.4531H2.5ZM11.25 28.4531C12.6462 28.4531 13.75 29.5569 13.75 30.9531C13.75 32.3494 12.6462 33.4531 11.25 33.4531C9.85375 33.4531 8.75 32.3494 8.75 30.9531C8.75 29.5569 9.85375 28.4531 11.25 28.4531ZM31.25 28.4531C32.6463 28.4531 33.75 29.5569 33.75 30.9531C33.75 32.3494 32.6463 33.4531 31.25 33.4531C29.8538 33.4531 28.75 32.3494 28.75 30.9531C28.75 29.5569 29.8538 28.4531 31.25 28.4531Z" fill="black"/>
</svg>
            <h1 className="text-[#2C742F] text-wrap max-w-[107px] ">FREE LAGOS SHIPPING</h1>
           <p className=" text-wrap max-w-[147px] ">
           Free Shipping on order above NGN2,000,000
           </p>
        </li>
        <li className="flex flex-col items-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <path d="M35 20.4531C35 23.4198 34.1203 26.3199 32.4721 28.7867C30.8238 31.2534 28.4811 33.176 25.7403 34.3113C22.9994 35.4466 19.9834 35.7437 17.0737 35.1649C14.1639 34.5861 11.4912 33.1575 9.3934 31.0597C7.29562 28.9619 5.86701 26.2892 5.28823 23.3795C4.70945 20.4698 5.0065 17.4538 6.14181 14.7129C7.27713 11.972 9.19972 9.6293 11.6665 7.98108C14.1332 6.33286 17.0333 5.45313 20 5.45312C24.2 5.45312 28.2167 7.11979 31.2333 10.0198L35 13.7865" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.9993 5.45312V13.7865H26.666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <h1 className="text-[#2C742F] text-wrap max-w-[150px] ">ONLINE SUPPORT 24/7 </h1>
           <p className=" text-wrap max-w-[178px] ">
           Full technical and after sale support
           </p>
        </li>
    </ul>

    


    </section>
    
    
    </>
  )
}

export default Vendor