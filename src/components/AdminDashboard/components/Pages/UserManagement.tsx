import React, { useState } from "react";
import { FaFilter, FaCalendarAlt, FaPlus } from "react-icons/fa";

interface User {
  name: string;
  access: string;
  status: string;
  lastActive: string;
  dateAdded: string;
  account: string;
}

const UserManagement: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [users, setUsers] = useState([
    {
      name: "",
      access: "",
      status: "",
      lastActive: "",
      dateAdded: "",
      account: "",
    },
  ]); 

  const [searchTerm, setSearchTerm] = useState(""); 
  const [filterStatus, setFilterStatus] = useState(""); 

  const handleAddUserClick = () => {
    setShowTable(true);
    setUsers([
      ...users,
      {
        name: "",
        access: "",
        status: "",
        lastActive: "",
        dateAdded: "",
        account: "",
      },
    ]);
  };

  const handleInputChange = (index: number, field: keyof User, value: string) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const toggleStatus = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers[index].status =
      updatedUsers[index].status === "Active" ? "Inactive" : "Active";
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? user.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-5">
      <div className="w-full p-2 pl-5 bg-white shadow-md rounded-sm flex items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-gray-600" size={23} />
          <span className="text-gray-800 font-medium">Today</span>
        </div>

        {/* Spacer */}
        <div className="border-l border-gray-300 h-10 mx-8" />

        {/* Right Section */}
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center">
              <span className="font-bold text-lg">2500</span>
              <span className="text-sm text-gray-500 ml-2">Total vendors</span>
            </div>
          </div>
          <div className="w-[750px] flex justify-between mt-2">
            <div className="flex w-2/3 bg-green-500 h-1"></div>
            <div className="flex w-1/3 bg-orange-500 h-1"></div>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="ml-2 text-gray-800">Active users</span>
            <span className="font-bold ml-2">2000</span>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full ml-4"></div>
            <span className="ml-2 text-gray-800">Inactive users</span>
            <span className="font-bold ml-2">500</span>
          </div>
        </div>
      </div>

      {/* New Container for All Users */}
      <div className="w-full p-4 mt-4 flex items-center justify-between">
        {/* Left: All Users */}
        <span className="text-lg font-bold">All Users</span>

        {/* Right: Search Bar and Filters */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <div className="flex items-center border border-gray-300 rounded px-2 py-1">
            <FaFilter className="text-gray-600" />
            <span className="ml-1">Filters</span>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            onClick={handleAddUserClick}
            className="flex items-center bg-green-500 text-white rounded px-4 py-2"
          >
            <FaPlus className="mr-1" />
            Add User
          </button>
        </div>
      </div>

      {/* Table Section */}
      {showTable && (
        <div className="w-full p-3 bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="">
            <thead>
              <tr className="text-md">
                <th className="px-3 font-normal">Buyers' Name</th>
                <th className="px-3 font-normal">View Access</th>
                <th className="px-3 font-normal">Status</th>
                <th className="px-3 font-normal">Last Active</th>
                <th className="px-3 font-normal">Date Added</th>
                <th className="px-3 font-normal">Account</th>
                <th className="px-3 font-normal py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className=" px-4 py-2 font-light text-sm">
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                      className=""
                      placeholder="buyers name"
                    />
                  </td>
                  <td className=" px-4 py-2 flex justify-center items-center w-32">
                    <button
                      onClick={() =>
                        handleInputChange(index, "access", "Granted")
                      }
                      className={`p-1 rounded-full ${
                        user.access === "Granted"
                          ? "bg-green-500 text-white"
                          : "bg-gray-200"
                      }`}
                      title="Granted Access"
                    >
                      <span className="text-xs">✔️</span>
                    </button>
                    <button
                      onClick={() =>
                        handleInputChange(index, "access", "Denied")
                      }
                      className={`p-1 rounded-full ${
                        user.access === "Denied"
                          ? "bg-red-400 text-white"
                          : "bg-gray-200"
                      } ml-2`}
                      title="Denied Access"
                    >
                      <span className="text-xs">❌</span> 
                    </button>
                  </td>
                  <td className=" px-4 py-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                      onClick={() => toggleStatus(index)}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className=" px-4 py-2 font-light text-sm">
                    <input
                      type="text"
                      value={user.lastActive}
                      onChange={(e) =>
                        handleInputChange(index, "lastActive", e.target.value)
                      }
                      className=""
                      placeholder="last active"
                    />
                  </td>
                  <td className=" px-4 py-2 font-light text-sm">
                    <input
                      type="text"
                      value={user.dateAdded}
                      onChange={(e) =>
                        handleInputChange(index, "dateAdded", e.target.value)
                      }
                      className=""
                      placeholder="date"
                    />
                  </td>
                  <td className=" px-4 py-2 font-light text-sm">
                    <input
                      type="text"
                      value={user.account}
                      onChange={(e) =>
                        handleInputChange(index, "dateAdded", e.target.value)
                      }
                      className=""
                      placeholder="account"
                    />
                  </td>
                  <td className=" px-4 py-2 font-light text-sm">
                    <button
                      className="bg-red-500 text-white rounded px-2 py-1"
                      onClick={() => {
                        const updatedUsers = users.filter(
                          (_, i) => i !== index
                        );
                        setUsers(updatedUsers);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
