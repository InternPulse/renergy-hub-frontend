import Navbar from '../components/Navbar';
import eclipse from '../assets/Ellipse.png';
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import topic2 from '../assets/topic2.png'
import topic1 from '../assets/topic1.png'
import topic3 from '../assets/topic3.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const RenergyBlog = () => {
  const [activeLink, setActiveLink] = useState('All');

  return (
    <div >
      <Navbar />
      <div className='mx-4 sm:mx-[10%] mb-10'>
      {/* Main Content Section */}
      <div className="flex items-center justify-center mt-10 ">
        <div className="w-[90%] sm:w-[580px] p-0 relative flex items-center">
          <span className="relative inline-block">
            <img
              src={eclipse}
              alt=""
              className="sm:h-[90px] sm:w-[320px]"
            />
            <span className="absolute inset-0 flex items-center justify-center text-hardYellow text-[25px] sm:text-[45px] font-semibold">
              Renergy Hub.
            </span>
          </span>
          <h3 className="text-[25px] sm:text-[45px] font-semibold ml-4 sm:ml-8">
            Articles
          </h3>
        </div>
      </div>

      {/* Articles and Links Section */}
      <div className="flex flex-col justify-center items-center mt-8 px-4 sm:px-0">
        <p className="text-center mb-6">
          Discover the latest news and answers to the frequently asked questions about Solar, mechanical, electricity, and wind energy.
        </p>
       
        
        {/* Navigation Links */}
        <hr className="w-[90vw] item center justify-center border-t-2 border-gray-300" />
        <ul className="flex gap-6 mt-3 mb-3  pt-3 pb-3">
          {['All', 'Mechanical', 'Electricity', 'Clean Energy', 'Wind Power', 'Solar Energy'].map(link => (
            <li
              key={link}
              onClick={() => setActiveLink(link)}
              className={`cursor-pointer ${activeLink === link ? 'underline' : 'hover:underline' }`}
            >
              {link}
            </li>
          ))}
        </ul>
        <hr className="w-[90vw] item center justify-center border-t-2 border-gray-300" />
      </div>
      <div className=" flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6 p-6">
  {/* Image Section */}
  <img src={blog1} alt="" className="w-full sm:w-[400px] h-[250px] rounded-lg shadow-lg" />

  {/* Content Section */}
  <div className="flex flex-col sm:ml-6 space-y-4 w-full sm:w-[500px]">
    <h3 className="text-lg sm:text-2xl font-semibold text-center sm:text-left text-gray-800">
      Solar energy, renewable energy, clean energy generic
    </h3>
    <p className="text-base sm:text-lg text-gray-600 text-center sm:text-left">
      Researchers discover chemical secrets of new material that could make solar energy far more economical.
    </p>
    
    {/* Button */}
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'> <button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link> 
    </div>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {/* Card 1 */}
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={blog2} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'> <button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={topic1} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'><button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={topic2} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'><button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>

  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={topic3} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'><button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={blog2} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'><button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={blog2} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'><button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={blog2} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'><button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={blog2} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'> <button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>
  <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <img src={blog2} alt="Blog Image" className="w-full h-[200px] object-cover rounded-lg mb-4" />
    <span className="text-sm text-gray-500 mb-2">October 07, 2024</span>
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Use alternative energy to boost your business's sustainability</h4>
    <p className="text-base text-gray-600 mb-4">Work places can now more easily commit to sustainability through innovative products and energy solutions</p>
    <div className="flex justify-center sm:justify-start">
    <Link to='/blog-detail'><button className="px-6 py-2 white border border-gray-800 text-gray-800 rounded-lg hover:bg-softGreen transition duration-300">
        Read More
      </button></Link>
    </div>
  </div>
</div>
</div>
<Footer/>
    </div>
  );
};

export default RenergyBlog;
