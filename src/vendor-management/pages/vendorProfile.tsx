import { useState, useEffect } from "react";
import Navbar from "../header/navigation";
import { toast } from "react-toastify";
// import { useLocation } from "react-router-dom";
import { useProductStore } from "@/products-listing/store/store";
const VendorProfile = () => {
  // const location = useLocation();
  // const { userId } = location.state || {};
  const { userId } = useProductStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    brandType: "",
    brandName: "",
    taxID: "",
    streetAddress: "",
    zipCode: "",
  });

  const [profileData, setProfileData] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://renergy-hub-express-backend.onrender.com/api/v1/users/${userId}`,
          { method: "GET" }
        );

        if (response.ok) {
          const data = await response.json();
          setFormData({
            firstName: data.data.firstName || "Default",
            lastName: data.data.lastName || "Default",
            city: data.data.city || "Default City",
            brandName: data.data.brandName || "Default Brand",
            brandType: data.data.brandType || "Default Type",
            taxID: data.data.taxID || "Default TaxID",
            streetAddress: data.data.streetAddress || "Default Street",
            zipCode: data.data.zipCode || "DefaulT zipCode",
          });

          setProfileData(data.data);
        } else {
          console.error("Failed to fetch profile data.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (userId) fetchProfile();
  }, [userId]);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  // getting the initial
  const getInitials = () => {
    const { firstName, lastName } = formData;
    const firstNameInitial = firstName.slice(0, 1).toUpperCase();
    const lastNameInitial = lastName.slice(0, 1).toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
  };

  const getBrand = () => {
    const { brandName, brandType } = formData;
    const brandNameInitials = brandName.slice(0, 1).toUpperCase();
    const brandTypeInitials = brandType.slice(0, 1).toUpperCase();
    return `${brandNameInitials}${brandTypeInitials}`;
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (!userId) {
      alert("User ID is missing");
      return;
    }
    try {
      console.log(JSON.stringify(formData));
      const response = await fetch(
        `https://renergy-hub-express-backend.onrender.com/api/v1/users/vendor/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const updateData = await response.json();
        setProfileData(updateData);
        setIsEditable(false);
        toast.success("Profile updated successfully!");
      } else {
        console.log("Failed to update");
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="p-6">
        <div className="bg-white px-4 py-2 mb-4">
          <div className="flex justify-between">
            <h1 className="text-3xl ">Vendor Profile</h1>
            <p className="hidden">
              {profileData
                ? JSON.stringify(profileData, null, 2)
                : "Loading..."}
            </p>
            <button
              className={`border-[1.5px] border-[#1C6328] text-[#0E1F0D] py-2 px-4 rounded-[6px] font-[400] ${
                isEditable ? "bg-[#2C7427] border-none text-white" : ""
              }`}
              onClick={handleEdit}
            >
              {isEditable ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>

          <p className="text-[#666666] font-400 mb-2">
            In Vendor Profile, you can manage your personal and business
            details.
          </p>
        </div>

        {/* Vendor Information */}
        <section>
          <div className="bg-white rounded-md p-4 mb-4">
            <h2 className="font-[500] text-[22px]">Vendor Information</h2>
            <div className="flex gap-6 p-4">
              <div className="bg-[#DEDEDE] py-4 px-6 rounded-full text-2xl h-[84px] flex items-center">
                {getInitials()}
              </div>
              <div className="w-full">
                <p className="flex gap-8">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="text-[#565656] font-[500] "
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="text-[#565656] font-[500]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter phone number"
                    />
                  </div>
                </p>
                <p className="flex gap-8 mt-6">
                  <div className="w-full">
                    <label
                      htmlFor="streetAddress"
                      className="text-[#565656] font-[500] "
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter business name"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="city" className="text-[#565656] font-[500]">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter City"
                    />
                  </div>
                </p>
                <div className="flex justify-end">
                  <button
                    className={`border border-[#1C6328] px-10 py-2 rounded-md text-[#0E1F0D] text-xl font-[400] mt-2 ${
                      isEditable ? "bg-[#2C7427] border-none text-white" : ""
                    }`}
                    onClick={handleFormSubmit}
                  >
                    {isEditable ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Business Information */}
          <div className="bg-white rounded-lg p-4">
            <h2 className="font-[500] text-[22px]">Business Profile</h2>
            <div className="flex gap-6 p-4">
              <div className="bg-[#DEDEDE] py-4 px-6 rounded-full text-3xl h-[84px] flex items-center">
                {getBrand()}
              </div>

              <div className="w-full">
                <p className="flex gap-8">
                  <div className="w-full">
                    <label
                      htmlFor="brandName"
                      className="text-[#565656] font-[500] "
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter business name"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="brandType"
                      className="text-[#565656] font-[500]"
                    >
                      Business Reg No
                    </label>
                    <input
                      type="tel"
                      name="brandType"
                      value={formData.brandType}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter business registration number"
                    />
                  </div>
                </p>
                <p className="flex gap-8 mt-6">
                  <div className="w-full">
                    <label
                      htmlFor="zipCode"
                      className="text-[#565656] font-[500]"
                    >
                      ZipCode
                    </label>
                    <input
                      type="tel"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter business registration number"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="taxId"
                      className="text-[#565656] font-[500]"
                    >
                      Tax ID <span className="text-[#cccccc]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="taxID"
                      value={formData.taxID}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                      placeholder="Enter business registration number"
                    />
                  </div>
                </p>
                <div className="flex justify-end " onClick={handleFormSubmit}>
                  <button className="border bg-[#2C7427] px-10 py-2 rounded-md text-white text-xl font-[400] mt-2">
                    {isEditable ? "Update Account" : "Save Account"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default VendorProfile;
