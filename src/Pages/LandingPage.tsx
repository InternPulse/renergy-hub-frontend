import AboutUS from "../Components/AboutUS"
import FeaturedProducts from "../Components/FeaturedProducts"
import Hero from "../Components/Hero"
import Mission from "../Components/Mission"
import Navbar from "../Components/Navbar"



const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutUS/>
        <Mission/>
        <FeaturedProducts/>
    </div>
  )
}

export default LandingPage