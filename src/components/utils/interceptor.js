import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // must include /api
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        toast.error('Session expired. Please log in again.');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.href = '/login'; // temporary, can improve with navigate
      } else {
        toast.error(
          error.response?.data?.message || 'An error occurred. Please try again.'
        );
      }
    } else {
      toast.error('Network error occurred.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
