import vendor from "../../assets/vendor-images/vendor.jpeg";
import BusinessLogo from "../../assets/vendor-images/BusinessLogo.svg";
import { Plus } from "lucide-react";
import { useState } from "react";
import Navbar from "../Header/Navigation";

interface FormData {
  vendorName: string;
  email: string;
  phoneNumber: number | null;
  country: string;
  businessName: string;
  businessRegNo: string;
  taxID?: string;
  specialization: string[];
  description: string;
  logo: File | null;
  profileImage: File | null;
}

const VendorProfile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    vendorName: "",
    email: "",
    phoneNumber: null,
    country: "Nigeria",
    businessName: "",
    businessRegNo: "",
    taxID: "",
    specialization: [] as string[],
    description: "",
    logo: null,
    profileImage: null,
  });

  // specialization
  const [newSpecialization, setNewSpecialization] = useState("");

  // textarea
  // const [wordCount, setWordCount] = useState(0);

  const handleAddSpecialization = () => {
    if (
      newSpecialization.trim() &&
      !formData.specialization.includes(newSpecialization)
    ) {
      handleSpecialization(newSpecialization.trim());
      setNewSpecialization("");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : null,
    });
  };

  const handleSpecialization = (specialization: string) => {
    setFormData((prev) => ({
      ...prev,
      specialization: prev.specialization.includes(specialization)
        ? prev.specialization.filter((item) => item !== specialization)
        : [...prev.specialization, specialization],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Submit the data to your backend or API
  };

  // textarea

  // const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const text = e.target.value;
  //   const words = text.trim().split(/\s+/); // Split text by whitespace
  //   if (words.length <= 1000) {
  //     setFormData({ ...formData, description: text });
  //     setWordCount(words.length);
  //   }
  // };

  return (
    <>
      <Navbar />
      <section className="p-6">
        <div className="bg-white px-4 py-2 mb-4">
          <div className="flex justify-between">
            <h1 className="text-3xl ">Vendor Profile</h1>
            <button className="border-[1.5px] border-[#1C6328] text-[#0E1F0D] py-2 px-4 rounded-[6px] font-[400]">
              Edit Profile
            </button>
          </div>

          <p className="text-[#666666] font-400 mb-2">
            In Vendor Profile, you can manage your personal and business
            details.
          </p>
        </div>

        {/* Vendor Information */}
        <form className="bg-white rounded-md p-4 mb-4" onSubmit={handleSubmit}>
          <h2 className="font-[500] text-[22px]">Vendor Information</h2>
          <div className="flex gap-6 p-4">
            <div className="flex flex-col align-middle items-center mt-1">
              <img
                src={vendor}
                alt="vendo-image"
                className="w-[87px] h-[84px] rounded-full bg-cover"
              />
              <div className="mt-1">
                <input
                  type="file"
                  id="edit-image"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="logo-upload"
                  className="text-[#007300] underline mt-2 hover:text-[#00A100] cursor-pointer"
                >
                  Edit Image
                </label>
              </div>
            </div>

            <div className="w-full">
              <p className="flex gap-8">
                <div className="w-full">
                  <label htmlFor="name" className="text-[#565656] font-[500] ">
                    Vendors Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleInputChange}
                    className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="name" className="text-[#565656] font-[500]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber || ""}
                    onChange={handleInputChange}
                    className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                    placeholder="Enter phone number"
                  />
                </div>
              </p>
              <p className="flex gap-8 mt-6">
                <div className="w-full">
                  <label htmlFor="name" className="text-[#565656] font-[500]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="name" className="text-[#565656] font-[500]">
                    Country
                  </label>
                  <input
                    type="country"
                    id="tel"
                    name="tel"
                    className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                    placeholder="Select Country"
                  />
                </div>
              </p>
              <div className="flex justify-end">
                <button className="border border-[#1C6328] px-10 py-2 rounded-md text-[#0E1F0D] text-xl font-[400] mt-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Business Information */}
        <div className="bg-white rounded-lg p-4">
          <h2 className="font-[500] text-[22px]">Business Profile</h2>
          <div className="flex gap-6 p-4">
            <div className="flex flex-col items-center w-[110px] mt-1">
              <div className="bg-[#DEDEDE] rounded-full w-[84px] h-[84px] flex items-center">
                <img
                  src={BusinessLogo}
                  alt="vendo-image"
                  className="w-[41.98px] h-[25px] rounded-full bg-cover mx-auto"
                />
              </div>
              <div className="mt-1">
                <input
                  type="file"
                  id="logo-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="logo-upload"
                  className="text-[#007300] underline mt-2 hover:text-[#00A100] cursor-pointer"
                >
                  Upload Logo
                </label>
              </div>
            </div>

            <form action="#" className="w-full">
              <p className="flex gap-8">
                <div className="w-full">
                  <label htmlFor="name" className="text-[#565656] font-[500] ">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                    placeholder="Enter business name"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="name" className="text-[#565656] font-[500]">
                    Business Reg No
                  </label>
                  <input
                    type="tel"
                    name="businessRegNo"
                    value={formData.businessRegNo}
                    onChange={handleInputChange}
                    className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                    placeholder="Enter business registration number"
                  />
                </div>
              </p>
              <p className="flex gap-8 mt-6">
                <div className="w-full">
                  <label htmlFor="name" className="text-[#CCCCCC] font-[500]">
                    Specialization
                  </label>
                  <div className="grid grid-cols-3 gap-4 mt-1">
                    {/* Existing Specialization Buttons */}
                    <button
                      type="button"
                      onClick={() => handleSpecialization("Solar Panels")}
                      className={`border rounded-md p-2 ${
                        formData.specialization.includes("Solar Panels")
                          ? "bg-green-400"
                          : ""
                      }`}
                    >
                      Solar Panels
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSpecialization("Wind Turbines")}
                      className={`border rounded-md p-2 ${
                        formData.specialization.includes("Wind Turbines")
                          ? "bg-green-400"
                          : ""
                      }`}
                    >
                      Wind Turbines
                    </button>
                    {/* Add Button */}
                    <button
                      className="text-green-400 py-2 rounded-md flex items-center justify-center gap-3 border border-[#1C6328]"
                      onClick={handleAddSpecialization}
                    >
                      <Plus />
                      <p>Add</p>
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="name" className="text-[#565656] font-[500]">
                    Tax ID <span className="text-[#cccccc]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="taxID"
                    value={formData.taxID}
                    onChange={handleInputChange}
                    className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                    placeholder="Enter business registration number"
                  />
                </div>
              </p>
              <div className="mt-4">
                <label htmlFor="Business  Description" className="font-[500]">
                  Business Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Write about your company"
                  value={formData.description}
                  onChange={handleInputChange}
                  maxLength={10000}
                  className="border border-[#565656] rounded-lg px-2 py-2 w-full outline-none mt-1 resize-none h-[100px]"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="border bg-[#2C7427] px-10 py-2 rounded-md text-white text-xl font-[400] mt-2">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorProfile;
