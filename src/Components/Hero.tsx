import hero40 from '../assets/hero40.png';
import hero10k from '../assets/hero10k.png';
import hero_image from '../assets/hero_image.png';
import bg_image from '../assets/bg_image.png';
import circo from '../assets/cieco.png';
import sol from '../assets/sol.png';
import partner from '../assets/partners.png';

const Hero = () => {
  return (
    <div
      className="h-auto min-h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="w-full h-auto min-h-[100vh] flex flex-col md:flex-row items-start justify-between">
        {/* Text and Button Section */}
        <div className="text-white text-center md:text-left md:px-5 lg:p-10 max-w-full md:max-w-[50%] lg:max-w-md">
          <p className="text-[32px] md:text-[72px] font-bold leading-tight w-full lg:w-[750px] lg:mt-[30px]">
            Greener Future With <br />
            RENERGY HUB
          </p>
          <p className="text-[16px] md:text-[18px] mt-[10px] md:mt-[20px]">
            Eco-friendly, Cost Effective, and Reliable Energy Solutions for your Home and Business. Discover our premium
            products.
          </p>
          <div className="flex justify-center lg:justify-start mt-[20px] md:mt-[30px]">
            <button className="flex items-center gap-3 text-white font-semibold bg-hardGreen px-6 py-3 rounded hover:bg-hardYellow hover:text-white">
              Explore Products
            </button>
          </div>
          <div className="flex justify-center md:justify-start mt-[10px] md:mt-[100px] gap-2">
            <img src={hero40} alt="40" />
            <img src={hero10k} alt="10k" />
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center m-0">
          <img
            className="h-[500px] lg:h-[800px]"
            src={hero_image}
            alt="Hero"
          />
        </div>
      </div>

      {/* Bottom Section with Icons */}
      <div className="w-full flex justify-around items-center bg-hardGreen gap-4 m-0">
        <img src={sol} alt="Sol" className="mx-2" />
        <img src={circo} alt="Circo" className="mx-2" />
        <img src={sol} alt="Sol" className="mx-2" />
        <img src={partner} alt="Circo" className="mx-2" />
        <img src={sol} alt="Sol" className="mx-2" />
      </div>
    </div>
  );
};

export default Hero;
