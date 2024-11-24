import Filter from "./products-listing/filter/filter"


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SortOrder from "./products-listing/filter/SortOrder";
import Product from "./products-listing/page/products";
import ProductCard from "./products-listing/components/ProductCard";


function App() {

  return (
    <div className='flex flex-col gap-4'>
      
      
      <Router>
     
        
     <Routes>
     {/* {isLoggedIn && <div></div> <Sidebar/> } */}
       {/* <Route path="/" element={<LandingPage/>} /> */}
       <Route path="/" element={<ProductCard/>} />
 
   
    </Routes>
    
    
  {/* </div> */}
</Router>
     
      {/* <Button>click me</Button> */}
    </div>
  )
}

export default App
