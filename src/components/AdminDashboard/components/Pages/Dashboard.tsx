import CenterCard from "../CenterCard/CenterCard";
import CustomizedLabelChart from "./CustomizedLabelChart";
import SimpleBarChart from "../SimpleBarChart";
import StackedAreaChart from "../StackedAreaChart";

const Dashboard = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="p-4 flex gap-2 mt-5 flex-col md:flex-row">
        {/* left CHART */}
        <div className="w-full lg:w-1/3 bg-white h-[300px]">
          <StackedAreaChart />
        </div>
        {/* center CHART */}
        <div className="w-full lg:w-1/3 bg-white h-[300px]">
          <CenterCard type="card" />
        </div>
        {/* right CHART */}
        <div className="w-full lg:w-1/3 bg-white h-[300px]">
          <SimpleBarChart />
        </div>
      </div>
      {/* Bottom CHART */}
      <div className="p-4 w-full h-[300px]">
        {" "}
        <span className="text-lg">
          Overall Profit & Revenue
        </span>
        <div className="bg-white h-full shadow-md rounded-md mt-2">
          <CustomizedLabelChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
