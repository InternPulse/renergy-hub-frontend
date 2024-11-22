import access_icon from '../assets/access_icon.png';
import verified_icon from '../assets/Verified_icon.png';
import lock_icon from '../assets/lock_icon.png';
import finance_icon from '../assets/finance_icon.png';
import support_icon from '../assets/support_icon.png';
import guidiance_icon from '../assets/guidiance_icon.png';

const ChooseHub = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center mt-[80px] p-6">
      <h2 className="lg:text-[56px] text-[24px] font-bold text-center">Why choose Renergy Hub</h2>
      <p className="text-center lg:w-[700px] w-[400px] my-4">
        At Renergy Hub, we are committed to making Renewable Energy simple and accessible for
        businesses and individuals with sustainability.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="w-full lg:w-[365px] h-[243px] bg-white flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5 shadow-sm">
          <img src={access_icon} alt="Access Icon" className="w-12 h-12 mb-4" />
          <p className="text-sm md:text-lg font-semibold mb-4 text-center">Streamlined Access to Renewables</p>
          <p className="text-sm text-center">Seamlessly connect with trusted renewable energy buyers and sellers, simplifying clean energy adoption.</p>
        </div>

        <div className="w-full lg:w-[365px] h-[243px] bg-white flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5 shadow-sm">
          <img src={verified_icon} alt="Verified Icon" className="w-12 h-12 mb-4" />
          <p className="text-sm md:text-lg font-semibold mb-4">Verified Quality</p>
          <p className="text-sm text-center">All products are verified to ensure quality and reliability, giving you peace of mind when investing in clean energy.</p>
        </div>

        <div className="w-full lg:w-[365px] h-[243px] bg-white flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5 shadow-sm">
          <img src={lock_icon} alt="Lock Icon" className="w-12 h-12 mb-4" />
          <p className="text-sm md:text-lg font-semibold mb-4">Secured Transactions</p>
          <p className="text-sm text-center">Enjoy secure transactions with buyer protection, ensuring your purchases are safe and reliable.</p>
        </div>

        <div className="w-full lg:w-[365px] h-[243px] bg-white flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5 shadow-sm">
          <img src={finance_icon} alt="Finance Icon" className="w-12 h-12 mb-4" />
          <p className="text-sm md:text-lg font-semibold mb-4">Flexible Financing Options</p>
          <p className="text-sm text-center">Access flexible payment plans to make renewable energy affordable for individuals and businesses alike.</p>
        </div>

        <div className="w-full lg:w-[365px] h-[243px] bg-white flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5 shadow-sm">
          <img src={support_icon} alt="Support Icon" className="w-12 h-12 mb-4" />
          <p className="text-sm md:text-lg font-semibold mb-4">Post-Purchase Support</p>
          <p className="text-sm text-center">Get ongoing support from our experts, who are here to help with installation, maintenance, and any questions you may have.</p>
        </div>

        <div className="w-full lg:w-[365px] h-[243px] bg-white flex flex-col justify-center items-center rounded-tl-[0px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[0px] p-5 shadow-sm">
          <img src={guidiance_icon} alt="Guidance Icon" className="w-12 h-12 mb-4" />
          <p className="text-sm md:text-lg font-semibold mb-4">Expert Guidance</p>
          <p className="text-sm text-center">Get expert guidance on selecting renewable energy solutions tailored to your needs and location, maximizing your investment.</p>
        </div>
      </div>
      <div className="bg-softGreen w-full p-6 sm:p-8 lg:p-14 flex flex-col justify-center items-center">
  <h3 className="text-[36px] sm:text-[40px] lg:text-[36px] font-semibold text-center">
    ACT NOW SAVE MORE
  </h3>
  <p className="text-sm sm:text-base w-[300px] sm:w-[400px] lg:w-[500px] text-center mt-4">
    Sign up today and receive a special discount on your first installation!
  </p>
  <button className="text-white font-semibold px-6 py-2 bg-hardGreen mt-6 rounded hover:bg-hardYellow w-[200px] sm:w-[240px] lg:w-[280px]">
    Get Started
  </button>
</div>

    </div>
  );
}

export default ChooseHub;
