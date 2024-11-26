import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import linkedin_icon from '../assets/linkedin_icon.png'
import instagram_icon from '../assets/instagram_icon.png'


const Footer = () => {
    return (
      <footer className="bg-hardGreen text-white py-8">
        {/* Header Section */}
        <div className="flex flex-col  lg:flex-row items-center justify-between mx-4 sm:mx-[5%] space-y-6 lg:space-y-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left lg:w-[500px]">
            Leading renewable energy solution provider in the world
          </h2>
          <button className="text-gray-800 font-semibold px-6 py-2 bg-white border border-gray-800 rounded hover:bg-hardYellow w-full sm:w-[240px] lg:w-[260px] h-[40px]">
            Contact Us
          </button>
        </div>
  
        {/* Divider */}
        <hr className="w-[90%] border-t border-white mx-4 sm:mx-[5%] my-8" />
  
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between mx-4 sm:mx-[5%] space-y-8 lg:space-y-0">
          {/* Renergy Section */}
          <div className="flex flex-col  w-full lg:w-[20%] lg:mr-9 space-y-4">
            <h4 className="text-xl font-bold">Renergy</h4>
            <p>Your go-to brand for standard products with full support from our dedicated team.</p>
            <p>Join our community of satisfied customers who are making a difference.</p>
            <button className="text-gray-800 font-semibold px-6 py-2 bg-white border border-gray-800 rounded hover:bg-hardYellow w-full sm:w-[240px] lg:w-[260px] h-[40px]">
              Subscribe
            </button>
          </div>
  
          {/* Links Section */}
          <div className="flex flex-wrap w-full lg:w-[55%] justify-between">
            {/* Product Links */}
            <div className="space-y-2">
             
              {["Solar Panels", "Wind Turbines", "Storage", "Maintenance", "Strategy", "Development"].map(
                (item, index) => (
                  <p key={index} className="cursor-pointer hover:text-hardYellow">
                    {item}
                  </p>
                )
              )}
            </div>
  
            {/* About Links */}
            <div className="space-y-2">
              {["About", "Projects", "Blog", "Press", "Contact Us", "Customer Support"].map(
                (item, index) => (
                  <p key={index} className="cursor-pointer hover:text-hardYellow">
                    {item}
                  </p>
                )
              )}
            </div>
  
            {/* Policies */}
            <div className="space-y-2">
              
              {["Privacy Policy", "Security Policy", "Terms & Conditions"].map((item, index) => (
                <p key={index} className="cursor-pointer hover:text-hardYellow">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-[5%] mt-[100px] space-y-4 sm:space-y-0">
  {/* Copyright Text */}
  <span className="text-sm sm:text-base text-center sm:text-left">
    © 2024 Renergy Hub. All rights reserved.
  </span>

  {/* Social Media Icons */}
  <div className="flex gap-4">
    <img src={youtube_icon} alt="YouTube" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-75" />
    <img src={instagram_icon} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-75" />
    <img src={linkedin_icon} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-75" />
    <img src={twitter_icon} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-75" />
  </div>
</div>

      </footer>
    );
  };
  
  export default Footer;
  