import './App.css' 
import ProductGuide from "./sections/ProductGuide.js"
import Header from "./layouts/Header.js"
import Footer from "./layouts/Footer.js"

const App: React.FC = () => {

  return (
    <div>
      <Header/>
      <main>
        <ProductGuide/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
