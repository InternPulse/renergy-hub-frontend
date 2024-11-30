import about_img from '../assets/about_img.png';
import get_started_arrow from '../assets/get_started_arrow.png';
import { Link } from 'react-router-dom';
const AboutUS = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-16">
      <h2 className="text-[32px] lg:text-[72px] font-bold text-center">
        About Renergy Hub
      </h2>
      <div className="flex flex-col lg:flex-row gap-7 mt-5 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[600px] h-auto object-cover"
            src={about_img}
            alt="About Renergy Hub"
          />
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left">
          <p className="text-[24px] md:text-[32px] lg:text-[48px] font-semi-bold leading-tight">
            Empowering Sustainable Energy Independence, Made Easy
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl">
            Renergy Hub offers Nigeria's most comprehensive renewable energy marketplace, providing affordable, high-quality solar, wind, and energy storage solutions, backed by flexible financing options, expert support, and a commitment to empowering sustainable energy independence for homes, businesses, and communities.
          </p>
        <Link to='/authentication/signup' className='lg:w-full'>  <button className="mt-6 w-full lg:w-full flex justify-between bg-white shadow-lg items-center px-4 py-2 font-semibold cursor-pointer hover:bg-hardGreen hover:text-white">
            GET STARTED
            <img
              className="w-[24px] h-[24px] ml-2"
              src={get_started_arrow}
              alt="Get Started"
            />
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
