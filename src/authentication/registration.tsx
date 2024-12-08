import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { registerVendor } from "./api/vendorSignupapi";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state || {};

  const [formData, setFormData] = useState({
    ...initialData,
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxID: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setLoading(true);

    if (validateForm()) {
      try {
        console.log(formData);
        const response = await registerVendor({ ...formData, userType: "VENDOR" });
        const id = response.data.id; // Ensure this exists in the backend response
      navigate("/authentication/otp", { state: { id, email: formData.email } });
      } catch (err: any) {
        console.error("API Error:", err);
        setApiError(err?.message || "An error occurred during registration.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className=" flex flex-col justify-between">
      {/* Back Button and Logo */}
      <div className="flex justify-between px-4 py-2">
        <ArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="bg-green-800 w-[5rem] h-[6rem] border"></div>
      </div>
      <div className="flex flex-col items-center p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Business Information
          </h1>
          <p className="text-gray-400 text-sm">
            Please enter information about your company.
          </p>
        </div>
        <form className="w-full max-w-4xl p-6" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            General Information
          </h2>

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <label
                htmlFor="brandName"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Brand Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="brandName"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your brand name"
              />
              {errors.brandName && (
                <p className="text-red-500 text-sm">{errors.brandName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="brandType"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Brand Type <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="brandType"
                value={formData.brandType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your brand type"
              />
              {errors.brandType && (
                <p className="text-red-500 text-sm">{errors.brandType}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your street address"
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">{errors.streetAddress}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your zip code"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="taxID"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Tax ID Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="taxID"
                value={formData.taxID}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your tax ID number"
              />
              {errors.taxId && (
                <p className="text-red-500 text-sm">{errors.taxId}</p>
              )}

              
            </div>
            {apiError && (
                <p className="text-red-500 text-sm mb-4">Error: {apiError}</p>
              )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full px-12 py-2 text-white rounded-md ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-800 hover:bg-green-900"
              } transition`}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
