import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Edit } from "lucide-react";
import Man from "../../assets/man.png";

const ProfileInformation = () => {
  return (
    <div className="w-80 lg:w-full max-w-7xl p-2 lg:mt-16 text-left">
      {/* Header Card */}
      <div className="bg-white p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold">Profile Information</h2>
      </div>

      {/* Profile Card */}
      <Card className="bg-white p-6 mb-4">
        <div className="flex lg:flex-row flex-col items-center gap-4">
          <img
            src={Man}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">Gabriel James</h3>
            <p className="text-sm text-gray-600">Product Designer</p>
            <p className="text-sm text-gray-600">Calabar, Nigeria</p>
          </div>
          <button
            title="Edit Personal Information"
            className="flex items-center border rounded-md p-2 gap-2 text-[10px] lg:ml-[43rem]"
          >
            <Edit className="h-4 w-4 text-green-600" />
            Edit
          </button>
        </div>
      </Card>

      {/* Personal Information Card */}
      <Card className="bg-white p-6 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium">Personal Information</h3>
          <button
            title="Edit Personal Information"
            className="flex items-center border rounded-md p-2 gap-2 text-[10px]"
          >
            <Edit className="h-4 w-4 text-green-600" />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">First Name:</p>
            <Input
              placeholder="Gabriel James"
              className="bg-white border-none"
            />
          </div>
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Last Name:</p>
            <Input
              placeholder="Gabriel James"
              className="bg-white border-none"
            />
          </div>
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Email Address:</p>
            <Input
              placeholder="gabrieljames@gmail.com"
              className="bg-white border-none"
            />
          </div>
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Phone Number:</p>
            <Input
              placeholder="(+234) 806 888 8897"
              className="bg-white border-none"
            />
          </div>
        </div>
      </Card>

      {/* Address Card */}
      <Card className="bg-white p-6 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium">Address:</h3>
          <button
            title="Edit Personal Information"
            className="flex items-center border rounded-md p-2 gap-2 text-[10px]"
          >
            <Edit className="h-4 w-4 text-green-600" />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Country:</p>
            <Input placeholder="Nigeria" className="bg-white border-none" />
          </div>
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">City/State:</p>
            <Input
              placeholder="Calabar/Cross River State"
              className="bg-white border-none"
            />
          </div>
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Postal Code:</p>
            <Input placeholder="540222" className="bg-white border-none" />
          </div>
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Street Address:</p>
            <Input
              placeholder="No9 ola Street, Ikeja"
              className="bg-white border-none"
            />
          </div>
        </div>
      </Card>

      {/* Account Information Card */}
      <Card className="bg-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium">Account Information:</h3>
          <button
            title="Edit Personal Information"
            className="flex items-center border rounded-md p-2 gap-2 text-[10px]"
          >
            <Edit className="h-4 w-4 text-green-600" />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Username:</p>
            <Input
              placeholder="gabrieljames08"
              className="bg-white border-none"
            />
          </div>
          <div className="border rounded-lg p-2 lg:w-80">
            <p className="text-sm text-gray-600 mb-1 pl-3">Password:</p>
            <Input
              type="password"
              placeholder="********"
              className="bg-white border-none"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileInformation;
