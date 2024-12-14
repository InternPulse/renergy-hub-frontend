
//props
import img1 from '../../../../public/assets/solor.svg'
import { apiProduct } from '../../store/store';
export type ProductProps = {
    products?: apiProduct
}

const VendorCard = ({products}: ProductProps) => {
  const formattedPrice = Number(products?.price).toLocaleString();
  return (
    <>
    <ul className="flex flex-col gap-2 text-black">
        <li className="items-center flex justify-center max-w-[98px] p-4 border border-slate-200 rounded-lg"><img src={img1} alt=""/></li>
        <li className="max-w-[128px] text-wrap">{products?.name}</li>
        <li className="font-semibold">{`NGN ${formattedPrice}`}</li>


    </ul>
    
    
    </>
  )
}

export default VendorCard