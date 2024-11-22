import Filter from "./products-listing/filter/filter"


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {

  return (
    <div className='flex gap-4'>
      
      
      <Router>
     
        
     <Routes>
     {/* {isLoggedIn && <div></div> <Sidebar/> } */}
       {/* <Route path="/" element={<LandingPage/>} /> */}
       <Route path="/" element={<Filter/>} />
   
    
    </Routes>
    
    
  {/* </div> */}
</Router>
     
      {/* <Button>click me</Button> */}
    </div>
  )
}

export default App
