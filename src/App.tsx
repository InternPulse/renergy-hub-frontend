
import { Routes, Route} from "react-router-dom";
import Auth from "./authentication/auth";

 

function App() {

  return (
    <div>
     
      

      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/*" element={<Auth/>} />
      </Routes>
    </div>
  )
}

export default App
