import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
export type ProductProps ={
    products: []
}

const ProductCard = ({products}: ProductProps) => {
  return (
    <>
    <div className="pt-4 pb-[11px] px-[11px] bg-white rounded-xl">
      <ul className="flex flex-col gap-4 min-w-[202px]">

        <li className="flex justify-end">
           
            <Button>

                <img src='/assets/favorite.svg' alt=''/>
            </Button>
            
          
        </li>
        <Link to={''}>
        <li className="flex justify-center">
             <img src={'products.image'} alt="Product Image" />
            
        </li>
     <li className="flex flex-col gap-2">
        <p className='text-black'>product.name</p>
        <p className="text-[#4C4C4C]">product.price</p>

     </li>

     </Link>

      </ul>
      </div>


    </>
  )
}

export default ProductCard