import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://remote-interview-platform-2.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// Call this once in your app root to set up the interceptor
export const setupAxiosInterceptor = (getToken) => {
  axiosInstance.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};

export default axiosInstance;