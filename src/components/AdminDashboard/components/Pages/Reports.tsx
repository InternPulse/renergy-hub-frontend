import { FaFileExport } from "react-icons/fa";

const Reports = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-7 ">
      <header className="mb-4 flex justify-end">
        <button className="flex items-center border border-gray-300 rounded px-4 py-2">
          <FaFileExport className="mr-2" />
          <span>Export</span>
        </button>
      </header>

      <div className="flex max-w-screen-lg">
        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Buyers Key Performance Index
          </h2>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-2 px-2 md:px-4 text-left">Name</th>
                <th className="py-2 px-2 md:px-4 text-left">Performance</th>
                <th className="py-2 px-2 md:px-4 text-left">Best Selling</th>
                <th className="py-2 px-2 md:px-4 text-left">Quantity</th>
                <th className="py-2 px-2 md:px-4 text-left">Turn Over (NGN)</th>
                <th className="py-2 px-2 md:px-4 text-left">% Increase</th>
              </tr>
            </thead>
            <tbody>

              <tr className="border-b hover:bg-gray-100">
                <td className="py-2 px-2 md:px-4">John Doe</td>
                <td className="py-2 px-2 md:px-4 text-green-500">Excellent</td>
                <td className="py-2 px-2 md:px-4">Product A</td>
                <td className="py-2 px-2 md:px-4">100</td>
                <td className="py-2 px-2 md:px-4">₦1,000,000</td>
                <td className="py-2 px-2 md:px-4 text-green-500">20%</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-2 px-2 md:px-4">Jane Smith</td>
                <td className="py-2 px-2 md:px-4 text-green-500">Good</td>
                <td className="py-2 px-2 md:px-4">Product B</td> 
                <td className="py-2 px-2 md:px-4">80</td>
                <td className="py-2 px-2 md:px-4">₦800,000</td>
                <td className="py-2 px-2 md:px-4 text-green-500">15%</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-2 px-2 md:px-4">Alice Johnson</td>
                <td className="py-2 px-2 md:px-4 text-green-500">Average</td>
                <td className="py-2 px-2 md:px-4">Product C</td>
                <td className="py-2 px-2 md:px-4">60</td>
                <td className="py-2 px-2 md:px-4">₦600,000</td>
                <td className="py-2 px-2 md:px-4 text-green-500">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-6 mt-7">
        <div className="bg-white rounded-lg shadow-md p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <button className="text-black-500 bg-gray-100 border border-gray-300 rounded px-4 py-2">Monthly</button>
          </div>
          <div className="flex-1 bg-gray-100 rounded h-64 flex items-center justify-center">
            <span className="text-gray-500">Bar Chart Placeholder</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
=          <div className="bg-gray-100 rounded h-64 flex items-center justify-center">
            <span className="text-gray-500">Line Graph Placeholder</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Reports;
