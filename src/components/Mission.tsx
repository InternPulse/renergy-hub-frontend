import { Link } from "react-router-dom";

const Mission = () => {
    return (
      <div className="mt-[100px] px-4">
        {/* Mission and Vision Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-[30px] text-center">
          {/* Mission Card */}
          <div className="w-full lg:w-[500px] lg:h-[200px] bg-gray-100 flex flex-col justify-center items-center rounded-tl-[50px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[50px] p-5">
            <p className="text-2xl font-semibold">Mission</p>
            <p className="mt-2 text-sm">
              Empowering Nigerian communities through affordable, sustainable energy to drive economic growth.
            </p>
          </div>
          {/* Vision Card */}
          <div className="w-full lg:w-[500px] lg:h-[200px] bg-gray-100 flex flex-col justify-center items-center rounded-tl-[50px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[50px] p-5">
            <p className="text-2xl font-semibold">Vision</p>
            <p className="mt-2 text-sm">
              Leading Nigeria's transition to renewable energy, bridging urban and rural gaps.
            </p>
          </div>
        </div>
  
        {/* Statistics Section */}
        <div className="flex flex-wrap justify-center items-center gap-5 mt-[50px]">
          <div className="w-full sm:w-[300px] lg:w-[350px] h-[100px] bg-gray-100 flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5">
            <p className="text-sm">Products</p>
            <p className="text-xl font-semibold">500+</p>
          </div>
          <div className="w-full sm:w-[300px] lg:w-[350px] h-[100px] bg-gray-100 flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5">
            <p className="text-sm">Supplier</p>
            <p className="text-xl font-semibold">60+</p>
          </div>
          <div className="w-full sm:w-[300px] lg:w-[350px] h-[100px] bg-gray-100 flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5">
            <p className="text-sm">Satisfied Customers</p>
            <p className="text-xl font-semibold">90%</p>
          </div>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="flex flex-col mt-10 justify-center items-center text-center px-4">
          <p className="font-semibold">
            Ready to join the sustainable energy movement and empower your home, business, or community today!
          </p>
       <Link to='/content-section'>  <button className="text-white font-semibold px-6 py-2 bg-hardGreen mt-4 rounded hover:bg-hardYellow w-[200px]">
            Explore
          </button></Link> 
        </div>
      </div>
    );
  };
  
  export default Mission;
  