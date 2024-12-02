import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductGuide from "./sections/ProductGuide.js"
import Header from "./layouts/Header.js"
import Footer from "./layouts/Footer.js"
import ProductPropertiesTable from './sections/ProductPropertiesTable.js'
import FAQs from './sections/FAQs.js'

const App: React.FC = () => {

  return (
    <div>
      <Header/>
      <main>
        <ProductGuide/>
        <ProductPropertiesTable/>
        <FAQs/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
