import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: 'https://backend-code-woad-delta.vercel.app',
  headers: { 'Content-Type': 'application/json' },
  timeout:10000,
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
        window.location.href = '/login';
      } else {
        toast.error(
          error.response.data.message || 'An error occurred. Please try again.'
        );
      }
    } else if (error.request) {
      toast.error('No response from server. Please try later.');
    } else {
      toast.error('Request error occurred.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
