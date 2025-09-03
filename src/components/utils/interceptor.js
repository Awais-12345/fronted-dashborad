// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-option.vercel.app",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

// فقط token لگانے والا interceptor
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default axiosInstance;
