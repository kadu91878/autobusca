import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:
        import.meta.env.VITE_API_PATH 
        // || "http://localhost:8000/api",
});


export default axiosInstance