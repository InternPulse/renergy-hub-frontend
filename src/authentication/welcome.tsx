import welcome from "../assets/welcome.png";
import Merry1 from '../assets/merry1.png';
import Merry2 from '../assets/merry2.png';
const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col justify-between ">
      {/* Top Section */}
      <div className="flex justify-between px-4 py-1">
        <img src={Merry1} alt="merry" className="w-[13rem]" />
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>
      <div>
        <div className="flex flex-col items-center flex-grow justify-center">
          <img src={welcome} alt="welcome" />
          <p className="font-bold text-4xl mb-4">Welcome On Board!</p>
          <p className="text-sm text-gray-400 text-center mb-6 leading-relaxed">
            Ready To Shine Your World?
          </p>
          <button className="w-[20rem] px-4 bg-green-800 hover:bg-green-900 text-white py-2 rounded mt-4">
            Let's go!
          </button>
        </div>
      </div>
      <div className=" flex justify-end">
        <img src={Merry2} alt="merry" className="w-[13rem]"/>
      </div>
    </div>
  );
};

export default Welcome;
