
import { Routes, Route} from "react-router-dom";
import ProductListing from "./products-listing";
import ProductDetail from "./productDetails";

const Products = () => {
  return (
   <Routes> 
    <Route path="/" element={<ProductListing />} />
    <Route path="detail" element={<ProductDetail/>} />


   </Routes>
  )
}

export default Products