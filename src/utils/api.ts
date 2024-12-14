import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://renergy-hub-express-backend.onrender.com/api/v1",
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
