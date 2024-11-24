import { Link } from 'react-router-dom';

import img1 from '../../../public/assets/solor.svg'
export type ProductProps ={
    products: []
}

// {products}: ProductProps

const ProductCard = () => {





  return (
    <>
    <div className="">
      <ul className="flex flex-col gap-4 pt-4 pb-[11px] px-[11px] bg-white text-black rounded-xl max-w-[210px] border border-slate-300 ">

        <li className="flex justify-end">
           
            <button>

            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
  <path d="M19.948 2.35696C19.4594 1.85246 18.8791 1.45225 18.2405 1.17921C17.6019 0.906162 16.9174 0.765625 16.2261 0.765625C15.5348 0.765625 14.8503 0.906162 14.2117 1.17921C13.5731 1.45225 12.9929 1.85246 12.5042 2.35696L11.49 3.40348L10.4758 2.35696C9.48866 1.33838 8.14984 0.766153 6.75384 0.766153C5.35785 0.766153 4.01903 1.33838 3.03191 2.35696C2.04479 3.37553 1.49023 4.75701 1.49023 6.19749C1.49023 7.63797 2.04479 9.01946 3.03191 10.038L4.04611 11.0846L11.49 18.7656L18.9338 11.0846L19.948 10.038C20.437 9.53377 20.8248 8.93505 21.0894 8.27608C21.354 7.61711 21.4902 6.91079 21.4902 6.19749C21.4902 5.48419 21.354 4.77788 21.0894 4.11891C20.8248 3.45994 20.437 2.86122 19.948 2.35696Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
            
          
        </li>
        <Link to={''}>
        <li className="flex justify-center">
             <img src={img1} alt="Product Image" className='bg-cover bg-no-repeat' />
            
        </li>
     <li className="flex flex-col text-center gap-2">
        <p className='text-black'>Fireman 380W Solar Panel</p>
        <p className="text-[#4C4C4C]">₦350,000.00</p>

     </li>

     </Link>

      </ul>
      </div>


    </>
  )
}

export default ProductCard

// const filteredProducts = products.filter((product) => {
//   const matchesVendor = filteredVendors.length === 0 || filteredVendors.includes(product.vendor);
//   const matchesCategory = filteredCategories.length === 0 || filteredCategories.includes(product.category);
//   const matchesShop = filteredShops.length === 0 || filteredShops.includes(product.shop);

//   // Include the product if it matches any one of the filters
//   return matchesVendor || matchesCategory || matchesShop;
// });