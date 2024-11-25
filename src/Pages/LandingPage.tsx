import AboutUS from "../Components/AboutUS"
import Blog from "../Components/Blog"
import ChooseHub from "../Components/ChooseHub"
import Faqs from "../Components/Faqs"
import FeaturedProducts from "../Components/FeaturedProducts"
import Hero from "../Components/Hero"
import Mission from "../Components/Mission"
import Navbar from "../Components/Navbar"
import Review from "../Components/Review"



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
    </div>
  )
}

export default LandingPage