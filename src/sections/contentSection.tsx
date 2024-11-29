import ProductGuide from "./ProductGuide.js"
import Header from "../layouts/Header.js"
import Footer from "../layouts/Footer.js"
import ProductPropertiesTable from './ProductPropertiesTable.js'

const ContentSection: React.FC = () => {

    return (
      <div>
        <Header/>
        <main>
          <ProductGuide/>
          <ProductPropertiesTable/>
        </main>
        <Footer/>
 
      </div>
  
    );
  }

  export default ContentSection;