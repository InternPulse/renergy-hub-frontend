
import { Routes, Route} from "react-router-dom";
import ProductListing from "./products-listing";
import ProductDetail from "./productDetails";
import Review from "./review";
import Detail from "./details";

const Products = () => {
  return (
   <Routes> 
    <Route path="/" element={<ProductListing />} />
     {/* Detail route as a parent */}
     
     {/* /:id  product dynamic pathname */}
  <Route path="detail" element={<ProductDetail />}>
    {/* Nested Routes */}
    <Route index element={<Detail />} />  {/* Default route when visiting /detail */}
    <Route path="review" element={<Review />} />  {/* Nested route for /detail/review */}
  
  </Route>


   </Routes>
  )
}

export default Products