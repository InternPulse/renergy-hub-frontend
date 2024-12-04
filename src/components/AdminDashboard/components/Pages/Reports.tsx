import React from 'react';
import { FaChartLine, FaFileAlt } from 'react-icons/fa';

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Reports & Analytics</h1>
        <p className="text-gray-600">Overview of your reports and analytics data.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Summary Cards */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <FaChartLine className="text-green-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Total Sales</h2>
            <p className="text-gray-600">$12,345</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <FaFileAlt className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Total Reports</h2>
            <p className="text-gray-600">15</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <FaChartLine className="text-red-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Pending Reports</h2>
            <p className="text-gray-600">3</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Reports</h2>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="py-2 px-4 text-left">Report Name</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Sales Report Q1</td>
              <td className="py-2 px-4">2023-01-15</td>
              <td className="py-2 px-4 text-green-500">Completed</td>
              <td className="py-2 px-4">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Inventory Report</td>
              <td className="py-2 px-4">2023-02-10</td>
              <td className="py-2 px-4 text-yellow-500">Pending</td>
              <td className="py-2 px-4">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Customer Feedback</td>
              <td className="py-2 px-4">2023-03-05</td>
              <td className="py-2 px-4 text-red-500">Rejected</td>
              <td className="py-2 px-4">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;