import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:5005/dashboard",
    headers:{
        "Content-Type": "application/json"
    }
})

export default axiosInstance
