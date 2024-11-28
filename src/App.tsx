import './App.css' 
import ProductGuide from "./sections/ProductGuide.js"
import Header from "./layouts/Header.js"
import Footer from "./layouts/Footer.js"
import ProductPropertiesTable from './sections/ProductPropertiesTable.js'

const App: React.FC = () => {

  return (
    <div>
      <Header/>
      <main>
        <ProductGuide/>
        <ProductPropertiesTable/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
