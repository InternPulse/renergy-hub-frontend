import AboutUS from "../components/AboutUS"
import Blog from "../components/Blog"
import ChooseHub from "../components/ChooseHub"
import Faqs from "../components/Faqs"
import FeaturedProducts from "../components/FeaturedProducts"
import Hero from "../components/Hero"
import Mission from "../components/Mission"
import Review from "../components/Review"



const LandingPage = () => {
  return (
    <div>
       
        <Hero/>
        <AboutUS/>
        <Mission/>
        <FeaturedProducts/>
        <ChooseHub/>
        <Review/>
        <Blog/>
        <Faqs/>
        
    </div>
  )
}

export default LandingPage