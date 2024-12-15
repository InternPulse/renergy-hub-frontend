import axios from "axios";

const API_URL = "https://renergy-hub-express-backend.onrender.com/api/v1/auth/register/vendor";

export const registerVendor = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: "VENDOR";
  brandName: string,
  brandType: string,
  streetAddress: string,
  city: string,
  zipCode: string,
  taxID: string,
}) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data; // Return the response data if needed
  } catch (error: any) {
    throw error.response?.data?.message || "An error occurred during registration.";
  }
};