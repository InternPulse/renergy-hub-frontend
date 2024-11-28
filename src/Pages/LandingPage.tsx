import AboutUS from "../components/AboutUS"
import Blog from "../components/Blog"
import ChooseHub from "../components/ChooseHub"
import Faqs from "../components/Faqs"
import FeaturedProducts from "../components/FeaturedProducts"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Mission from "../components/Mission"
import Navbar from "../components/Navbar"
import Review from "../components/Review"



const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutUS/>
        <Mission/>
        <FeaturedProducts/>
        <ChooseHub/>
        <Review/>
        <Blog/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default LandingPage