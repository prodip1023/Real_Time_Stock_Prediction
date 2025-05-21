import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        // console.log(config);
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)
// Response Interceptor
axiosInstance.interceptors.response.use(
    function(response){
        // console.log(response);
        return response;
    },
    async function(error){
        const originalRequest = error.config
        if(error.response.status == 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try{
                const reponse = await axiosInstance.post('/token/refresh/',{refresh:refreshToken})
                localStorage.setItem('accessToken',reponse.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${reponse.data.access}`
                return axiosInstance(originalRequest)
            }catch(error){
               localStorage.removeItem('accessToken')
               localStorage.removeItem('refreshToken')
            //    window.location.href = '/login'
            }
            
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;