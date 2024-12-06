import { Link } from "react-router-dom";
import logo from "../AdminDashboard/components/Assets/logo.png";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const AdminDashboard = () => {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDE MENU */}
      <div className="w-[14%] md:w-[8%] lg:w-[21%] xl:w-[19%] bg-white p-7">
        <Link
          to="/"
          className="flex items-center justify-center lg:justify-center gap-2"
        >
          <img src={logo} alt="Logo" width={97} height={97} />
        </Link>
        <Menu />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-[86%] h-[120vh] md:w-[92%] lg:w-[63%] xl:w-[81%] bg-green-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <h1>Admin Dashboard Loaded</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
