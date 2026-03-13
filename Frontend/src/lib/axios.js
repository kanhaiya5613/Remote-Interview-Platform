import axios from "axios"
console.log(import.meta.env.VITE_API_URL)
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    
    withCredentials: true, // By adding this field browser will send the cookies to server automatically, on every single request
});

export default axiosInstance