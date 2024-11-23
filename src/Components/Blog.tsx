import { FaChevronDown } from 'react-icons/fa';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';

const Blog = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 mx-4 sm:mx-[5%] mt-[80px]">
      {/* Blog Header */}
      <div className=" mb-8">
        <h2 className="text-3xl font-bold mb-2">Blog</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Explore the latest in Renewable Energy
        </p>
      </div>

      {/* Search Bar and Tags */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for any blog article content"
            className="w-[250px] sm:w-[275px] md:w-[300px] px-4 py-2 pr-10 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Tags */}
        <p className="text-gray-600 text-center md:text-left">
        Mechanical Electricity Clean energy Wind power Solar energy
        </p>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
        {/* Blog 1 */}
        <div className="flex-1 max-w-[500px]">
          <img
            src={blog1}
            alt="Blog 1"
            className="w-full h-[250px] sm:h-[300px] object-cover rounded-md"
          />
          <p className="text-sm text-gray-500 mt-2">October 07, 2024</p>
          <p className="font-semibold text-lg mt-2">
            Solar energy, renewable energy, clean energy generic
          </p>
          <p className="text-sm text-gray-600 mt-2 break-words">
            Researchers discover chemical secrets of new material that could
            make solar energy far more economical.
          </p>
          <button className="text-gray-800 font-semibold px-6 py-2 bg-white border border-gray-800 mt-[50px] rounded hover:bg-hardYellow w-full sm:w-[240px] lg:w-[280px]">
            Read More
          </button>
        </div>

        {/* Blog 2 */}
        <div className="flex-1 max-w-[500px]">
          <img
            src={blog2}
            alt="Blog 2"
            className="w-full h-[250px] sm:h-[300px] object-cover rounded-md"
          />
          <p className="text-sm text-gray-500 mt-2">October 07, 2024</p>
          <p className="font-semibold text-lg mt-2">
            Use alternative energy to boost your business's sustainability.
          </p>
          <p className="text-sm text-gray-600 mt-2 break-words">
            Workplaces can now more easily commit to sustainability through
            innovative products and energy solutions.
          </p>
          <button className="text-gray-800 font-semibold px-6 py-2 bg-white border border-gray-800 mt-12 rounded hover:bg-hardYellow w-full sm:w-[240px] lg:w-[280px]">
            Read More
          </button>
        </div>
      </div>
      <div>
        <div className='flex justify-between'>
            <h3>More Topics</h3>
            <button className="text-white font-semibold px-6 py-2 bg-hardGreen mt-6 rounded hover:bg-hardYellow w-[200px] sm:w-[240px] lg:w-[280px]">
    See All Posts
  </button>
        </div>
        <div className='flex'>
            
        </div>
      </div>
    </div>
  );
};

export default Blog;
