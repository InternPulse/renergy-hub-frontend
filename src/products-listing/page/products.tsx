import { Routes, Route } from "react-router-dom";


import Review from "./review";
import Detail from "./details";
import PageProduct from "./pageProduct";
import PageDetail from "./pageDetail";




const Products = () => {
  return (
  
      <Routes>
        <Route path="/" element={<PageProduct/>} /> {/* Lazy-loaded component */}
        {/* Detail route as a parent */}
        <Route path="detail/:id" element={<PageDetail/>}>
          {/* Nested Routes */}
          <Route index element={<Detail />} /> {/* Default route when visiting /detail */}
          <Route path="review" element={<Review />} /> {/* Nested route for /detail/review */}
        </Route>
      </Routes>
 
  );
};

export default Products;
