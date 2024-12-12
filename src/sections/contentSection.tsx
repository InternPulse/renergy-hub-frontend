import ProductGuide from "./productGuide.js"
import Navbar from "../components/Navbar";
// import Header from "../layouts/Header.js"
// import Footer from "../layouts/Footer.js"
import Faqs from "../components/Faqs";
import ProductPropertiesTable from './productPropertiesTable.js'
import Footer from "../components/Footer";
import React, { useEffect } from "react";

const ContentSection: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <section>
        {/* <Header/> */}
        <Navbar/>
        <main>
          <ProductGuide/>
          <ProductPropertiesTable/>
        </main>
        <Faqs />
        <Footer />
        {/* <Footer/> */}
      </section>
  
    );
  }

  export default ContentSection;