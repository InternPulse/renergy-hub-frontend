import about_page from '../assets/about_page.png';
import solarlab from '../assets/solarlab_sol_logo.png';
import loction_icon from '../assets/location_icon.png';
import energy_coin from '../assets/EnergyCoin_logo.png';
import energy_logo from '../assets/energy_logo.png';
import innovative_icon from '../assets/innovative_icon.png';
import verified_supplier from '../assets/verified_supplier_icon.png';
import solution from '../assets/solution_icon.png';
import du_logo from '../assets/Du _ogo.png';
import policy from '../assets/policy_icon.png';
import trusted_product from '../assets/trusted_product_icon.png';
import star from '../assets/star.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl  mx-4 sm:mx-[10%] flex flex-col items-center justify-center">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Powering <span className="text-hardGreen">Nigeria Sustainably</span>
      </h2>
      <div className="flex justify-center mb-6 w-full">
  <img 
    src={about_page} 
    alt="About us" 
    className="w-full max-w-3xl rounded-lg shadow-md" 
  />
</div>
      <p className="text-gray-700 text-lg leading-relaxed  mb-12">
        As the global shift toward clean energy for Nigeria, where energy challenges persist, these trends signal
        exciting opportunities for individuals, businesses, and communities to embrace sustainable solutions.{' '}
        <span className="text-hardGreen font-semibold">RENERGYHUB</span> bridges the gap between renewable energy
        suppliers and consumers. Nigeria is poised to benefit from key developments in the renewable energy sector. We
        simplify the process of purchasing, financing, and installing clean energy solutions. REnergy Hub is making
        renewable energy more accessible by connecting buyers with trusted suppliers and service providers.
      </p>

      {/* Suppliers Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Explore <span className="text-softGreen ">Our Suppliers</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Supplier Card */}
          <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <img src={solarlab} alt="Sun King Energy" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sun King Energy</h3>
            <div className="flex items-center mb-2">
              <img src={loction_icon} alt="Location icon" className="w-4 h-4 mr-2" />
              <span className="text-sm text-gray-600">Lagos, Nigeria</span>
            </div>            
            <img src={star} alt="Rating" className="w-22 mb-4" />
            <div className='flex justify-between'>
                <span></span>
                <button className=" py-2 px-3 bg-white border border-gray-800 text-gray-800 text-sm font-medium rounded-lg hover:bg-green-700 transition hover:text-white">
              Learn More
            </button>
            </div>
           
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <img src={energy_coin} alt="Green Energy" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Green Energy</h3>
            <div className="flex items-center mb-2">
              <img src={loction_icon} alt="Location icon" className="w-4 h-4 mr-2" />
              <span className="text-sm text-gray-600">Lagos, Nigeria</span>
            </div>
            <img src={star} alt="Rating" className="w-22 mb-4" />
            <div className='flex justify-between'>
                <span></span>
                <button className=" py-2 px-3 bg-white border border-gray-800 text-gray-800 text-sm font-medium rounded-lg hover:bg-green-700 transition hover:text-white">
              Learn More
            </button>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <img src={energy_logo} alt="Expert Solutions" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Solutions</h3>
            <div className="flex items-center mb-2">
              <img src={loction_icon} alt="Location icon" className="w-4 h-4 mr-2" />
              <span className="text-sm text-gray-600">Lagos, Nigeria</span>
            </div>
            <img src={star} alt="Rating" className="w-22 mb-4" />
            <div className='flex justify-between'>
                <span></span>
                <button className=" py-2 px-3 bg-white border border-gray-800 text-gray-800 text-sm font-medium rounded-lg hover:bg-green-700 transition hover:text-white">
              Learn More
            </button>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <img src={du_logo} alt="Dulli Solar" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dulli Solar</h3>
            <div className="flex items-center mb-2">
              <img src={loction_icon} alt="Location icon" className="w-4 h-4 mr-2" />
              <span className="text-sm text-gray-600">Lagos, Nigeria</span>
            </div>
            <img src={star} alt="Rating" className="w-22 mb-4" />
            <div className='flex justify-between'>
                <span></span>
                <button className=" py-2 px-3 bg-white border border-gray-800 text-gray-800 text-sm font-medium rounded-lg hover:bg-green-700 transition hover:text-white">
              Learn More
            </button>
            </div>
          </div>
        </div>
       
      </div>
      <Link to='/*'><button className='bg-hardGreen text-white mt-10 px-6 py-2 rounded'>View All</button></Link>
    </div>
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-4 sm:mx-[10%]">
  {/* Header Section */}
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
    Renergy <span className="text-hardGreen">Advantages</span>
  </h2>

  {/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="rounded-tl-3xl rounded-br-3xl flex flex-col bg-green-100 p-6 shadow-md">
      <img src={innovative_icon} alt="Innovative Technology" className="w-10 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovative Technology</h3>
      <p className="text-gray-700">
        Empowering Nigerian communities through affordable, sustainable energy to drive economic growth.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-tl-3xl rounded-br-3xl flex flex-col bg-green-100 p-6 shadow-md">
      <img src={verified_supplier} alt="Verified Suppliers" className="w-10 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Verified Suppliers</h3>
      <p className="text-gray-700">
        Empowering Nigerian communities through affordable, sustainable energy to drive economic growth.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-tl-3xl rounded-br-3xl flex flex-col bg-green-100 p-6 shadow-md">
      <img src={solution} alt="Affordable Solutions" className="w-10 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Affordable Solutions</h3>
      <p className="text-gray-700">
        Empowering Nigerian communities through affordable, sustainable energy to drive economic growth.
      </p>
    </div>

    {/* Card 4 */}
    <div className="rounded-tl-3xl rounded-br-3xl flex flex-col bg-green-100 p-6 shadow-md">
      <img src={policy} alt="Policy Support and Financing" className="w-10 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Policy Support and Financing</h3>
      <p className="text-gray-700">
        Empowering Nigerian communities through affordable, sustainable energy to drive economic growth.
      </p>
    </div>
  </div>

  {/* Centered Fifth Card */}
  <div className="mt-6 flex justify-center">
    <div className="rounded-tl-3xl rounded-br-3xl flex flex-col bg-green-100 p-6 shadow-md max-w-sm">
      <img src={trusted_product} alt="Trusted Products" className="w-10 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Trusted Products</h3>
      <p className="text-gray-700">
        Empowering Nigerian communities through affordable, sustainable energy to drive economic growth.
      </p>
    </div>    
  </div>
  <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-4xl mt-10">
  {/* Header Section */}
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
    Future <span className="text-hardGreen">Prospects</span>
  </h2>

  {/* Content Section */}
  <p className="text-lg text-gray-700 leading-relaxed text-center">
    In the future, <span className="text-softGreen font-semibold">Renegyhub</span> will continue to devote to the popularization of photovoltaic energy storage systems as a mission, adhering to the values of hard work, innovation, dedication, and honesty. To provide users with better quality, reliable products, and provide clean energy for people around the world.
  </p>
</div>

</div>

    <Footer/>
    </div>
  );
};

export default AboutUs;
