import Filter from "./products-listing/components/filter-components/filter"


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SortOrder from "./products-listing/components/filter-components/SortOrder";
import Product from "./products-listing/page/products";
import ProductCard from "./products-listing/components/ui-sections/ProductCard";
import ReviewStat from "./products-listing/components/ui-sections/reviewStat";
import ReviewCard from "./products-listing/components/ui-sections/reviewCard";
function App() {

  return (
    <div className='flex flex-col gap-4'>
      
      
      <Router>
     
        
     <Routes>
     {/* {isLoggedIn && <div></div> <Sidebar/> } */}
       {/* <Route path="/" element={<LandingPage/>} /> */}
       <Route path="/" element={<Product/>} />
  
    </Routes>
    
    
  {/* </div> */}
</Router>
     
      {/* <Button>click me</Button> */}
    </div>
  )
}

export default App
