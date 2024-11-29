
import { Routes, Route} from "react-router-dom";
import ProductListing from "./products-listing";


const Products = () => {
  return (
   <Routes> 
    <Route path="/" element={<ProductListing />} />



   </Routes>
  )
}

export default Products