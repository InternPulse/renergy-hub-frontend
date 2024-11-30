import { Link } from 'react-router-dom';
import { useState } from 'react';
import img1 from '../../../../public/assets/solor.svg'
import { useProductStore } from '../../store/store';
export type ProductProps = {
    products: []
}

// {products}: ProductProps

const ProductCard = () => {
    const [isClicked, setIsClicked] = useState(false)
    const {addToCart} = useProductStore()

const handleClick = (products: any)=> {
     setIsClicked(true)
      addToCart(products)
}

const removeClick = ()=> {
    setIsClicked(false)
}


  return (
    <>
    <div className="">
      <ul className="flex flex-col gap-4 pt-4 pb-[11px] px-[11px] bg-white text-black rounded-xl max-w-[210px] border border-slate-300 ">

        <li className="flex justify-end">
           {!isClicked?    <button onClick={handleClick}>

<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
<path d="M19.948 2.35696C19.4594 1.85246 18.8791 1.45225 18.2405 1.17921C17.6019 0.906162 16.9174 0.765625 16.2261 0.765625C15.5348 0.765625 14.8503 0.906162 14.2117 1.17921C13.5731 1.45225 12.9929 1.85246 12.5042 2.35696L11.49 3.40348L10.4758 2.35696C9.48866 1.33838 8.14984 0.766153 6.75384 0.766153C5.35785 0.766153 4.01903 1.33838 3.03191 2.35696C2.04479 3.37553 1.49023 4.75701 1.49023 6.19749C1.49023 7.63797 2.04479 9.01946 3.03191 10.038L4.04611 11.0846L11.49 18.7656L18.9338 11.0846L19.948 10.038C20.437 9.53377 20.8248 8.93505 21.0894 8.27608C21.354 7.61711 21.4902 6.91079 21.4902 6.19749C21.4902 5.48419 21.354 4.77788 21.0894 4.11891C20.8248 3.45994 20.437 2.86122 19.948 2.35696Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>  :
 <button onClick={removeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
  <path d="M18.948 2.35696C18.4594 1.85246 17.8791 1.45225 17.2405 1.17921C16.6019 0.906162 15.9174 0.765625 15.2261 0.765625C14.5348 0.765625 13.8503 0.906162 13.2117 1.17921C12.5731 1.45225 11.9929 1.85246 11.5042 2.35696L10.49 3.40348L9.47578 2.35696C8.48866 1.33838 7.14984 0.766153 5.75384 0.766153C4.35785 0.766153 3.01903 1.33838 2.03191 2.35696C1.04479 3.37553 0.490234 4.75701 0.490234 6.19749C0.490234 7.63797 1.04479 9.01946 2.03191 10.038L3.04611 11.0846L10.49 18.7656L17.9338 11.0846L18.948 10.038C19.437 9.53377 19.8248 8.93505 20.0894 8.27608C20.354 7.61711 20.4902 6.91079 20.4902 6.19749C20.4902 5.48419 20.354 4.77788 20.0894 4.11891C19.8248 3.45994 19.437 2.86122 18.948 2.35696Z" fill="#1C6328"/>
</svg>
            </button> }
         
           
            
          
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