// import React from "react";
// import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../components/ui/card";

// const ProfileInformation: React.FC = () => {
//   return (
//     <div className="w-80 lg:w-full max-w-7xl p-2 lg:mt-16">
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Profile Information</CardTitle>
//         </CardHeader>
//       </Card>

//       <div className="space-y-6">
//         {/* Profile Card */}
//         <Card>
//           <CardContent className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <Avatar className="w-20 h-20">
//                 <AvatarImage src="/src/assets/man.png" alt="Gabriel James"/>
//                 <AvatarFallback>GJ</AvatarFallback>
//               </Avatar>
//               <div>
//                 <h3 className="text-lg font-semibold">Gabriel James</h3>
//                 <p className="text-sm text-gray-500">Product Designer</p>
//                 <p className="text-sm text-gray-500">Calabar, Nigeria</p>
//               </div>
//             </div>
//             <Button variant="outline">Edit</Button>
//           </CardContent>
//         </Card>

//         {/* Personal Information Section */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Personal Information</CardTitle>
//           </CardHeader>
//           <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Input defaultValue="Gabriel" />
//             <Input defaultValue="James" />
//             <Input defaultValue="gabrieljames@gmail.com" />
//             <Input defaultValue="(+234) 806 888 8897" />
//           </CardContent>
//           <div className="p-4">
//             <Button variant="outline">Edit</Button>
//           </div>
//         </Card>

//         {/* Address Section */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Address</CardTitle>
//           </CardHeader>
//           <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Input defaultValue="Nigeria" />
//             <Input defaultValue="Calabar/Cross River State" />
//             <Input defaultValue="540222" />
//             <Input defaultValue="No9 Ola Street, Ikeja" />
//           </CardContent>
//           <div className="p-4">
//             <Button variant="outline">Edit</Button>
//           </div>
//         </Card>

//         {/* Account Information Section */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Account Information</CardTitle>
//           </CardHeader>
//           <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Input defaultValue="gabrieljames08" />
//             <Input type="password" defaultValue="**********" />
//           </CardContent>
//           <div className="p-4">
//             <Button variant="outline">Edit</Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ProfileInformation;

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
          <div>
            <p className="text-sm text-gray-600 mb-1">First Name</p>
            <Input
              value="Gabriel James"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Last Name</p>
            <Input
              value="Gabriel James"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Email Address</p>
            <Input
              value="gabrieljames@gmail.com"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Phone Number</p>
            <Input
              value="(+234) 806 888 8897"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
        </div>
      </Card>

      {/* Address Card */}
      <Card className="bg-white p-6 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium">Address</h3>
          <button
            title="Edit Personal Information"
            className="flex items-center border rounded-md p-2 gap-2 text-[10px]"
          >
            <Edit className="h-4 w-4 text-green-600" />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Country</p>
            <Input value="Nigeria" className="bg-white lg:w-80" readOnly />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">City/State</p>
            <Input
              value="Calabar/Cross River State"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Postal Code</p>
            <Input value="540222" className="bg-white lg:w-80" readOnly />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Street Address</p>
            <Input
              value="No9 ola Street, Ikeja"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
        </div>
      </Card>

      {/* Account Information Card */}
      <Card className="bg-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium">Account Information</h3>
          <button
            title="Edit Personal Information"
            className="flex items-center border rounded-md p-2 gap-2 text-[10px]"
          >
            <Edit className="h-4 w-4 text-green-600" />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Username</p>
            <Input
              value="gabrieljames08"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Password</p>
            <Input
              type="password"
              value="********"
              className="bg-white lg:w-80"
              readOnly
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileInformation;
