import {
  FaPlus,
  FaFileExport,
  FaCalendar,
  FaChevronDown,
} from "react-icons/fa";

const OrderManagement = () => {
  return (
    <>
      <header className="flex justify-between items-center p-7">
        <h1 className="text-xl font-light">All Order Management</h1>
        <div className="flex items-center">
          <button className="flex items-center border border-gray-300 rounded px-3 py-1 mr-4">
            <FaFileExport className="mr-2" />
            <span>Export</span>
          </button>
          <button className="flex items-center bg-green-500 text-white rounded px-3 py-1">
            <FaPlus className="mr-2" />
            <span>Add Order</span>
          </button>
        </div>
      </header>

      <div className="p-7 -mt-7">
        <div className="flex flex-wrap bg-white rounded-sm justify-between items-center p-4 border-b border-gray-300">
          {/* Today Section */}
          <div className="flex items-center pr-4">
            <FaCalendar className="mr-2 text-green-500" />
            <span className="font-medium">Today</span>
          </div>

          <div className="border-l border-gray-300 h-10 mx-4" />

          {/* Total Orders Section */}
          <div className="flex flex-col items-left pr-4">
            <span>Total Orders</span>
            <span className="font-semibold">2,654</span>
          </div>

          <div className="border-l border-gray-300 h-10 mx-4" />

          {/* Pending Section */}
          <div className="flex flex-col items-left pr-4">
            <span>Pending</span>
            <span className="font-semibold">50</span>
          </div>

          <div className="border-l border-gray-300 h-10 mx-4" />

          {/* Returned Section */}
          <div className="flex flex-col items-left pr-4">
            <span>Returned</span>
            <span className="font-semibold">0</span>
          </div>

          <div className="border-l border-gray-300 h-10 mx-4" />

          {/* Cancelled Section */}
          <div className="flex flex-col items-left pr-4">
            <span>Cancelled</span>
            <span className="font-semibold">4</span>
          </div>

          <div className="border-l border-gray-300 h-10 mx-4" />

          {/* Completed Section */}
          <div className="flex flex-col items-left">
            <span>Completed</span>
            <span className="font-semibold">2,600</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {/* Filter Items */}
          {[
            "Type",
            "Status",
            "Order Date",
            "Delivery Status",
            "All Filters",
          ].map((filter) => (
            <div
              key={filter}
              className="flex items-center bg-white border border-green-500 hover:bg-green-100 p-2 rounded transition duration-200 cursor-pointer"
            >
              <span className="mr-2">{filter}</span>
              <FaChevronDown />
            </div>
          ))}
        </div>

        <div className="flex space-x-2 mt-8">
          {/* Vendor Chip */}
          <div className="bg-green-100 px-6 py-1 rounded-full">Vendors</div>

          {/* Buyer Chip */}
          <div className="bg-orange-100 px-6 py-1 rounded-full">Buyers</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white border-b mt-8">
          {/* Order Header with Arrow */}
          <div className="flex items-center cursor-pointer">
            <span className="mr-2">Order</span>
            <FaChevronDown />
          </div>

          {/* Other Headers */}
          <span className="flex-1 text-center">Vendor</span>
          <span className="flex-1 text-center">Type</span>
          <span className="flex-1 text-center">Status</span>
          <span className="flex-1 text-center">Products</span>
          <span className="flex-1 text-center">Total</span>
          <span className="flex-1 text-center">Date</span>
        </div>
      </div>
    </>
  );
};

export default OrderManagement;
