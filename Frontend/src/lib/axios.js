import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://remote-interview-platform-2.onrender.com/api";

console.log("API BASE:", API_BASE);

const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

export const setupAxiosInterceptor = (getToken) => {
  axiosInstance.interceptors.request.use(async (config) => {
    try {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Failed to get auth token:", error);
    }
    return config;
  });
};

export default axiosInstance;