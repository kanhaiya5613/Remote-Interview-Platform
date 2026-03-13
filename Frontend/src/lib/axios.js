import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://remote-interview-platform-2.onrender.com/api";

console.log("API BASE:", API_BASE);

const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

export default axiosInstance;