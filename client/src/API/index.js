import axios from 'axios';

const API_URL = process.env.REACT_APP_HOST;

const api = axios.create({
   withCredentials: true,
   baseURL: API_URL
})

api.interceptors.request.use((config) => {
   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
   return config
})

api.interceptors.response.use((config) => {
   return config
}, async (error) => {
   const originalReq = error.config;

   if (error.response.status === 403 && error.config && !error.config._isRetry) {

      originalReq._isRetry = true;

      try {
         const res = await axios.get(`${API_URL}/api/auth/refresh`, { withCredentials: true });
         console.log(1);
         localStorage.setItem('token', res.data.accessToken);

         return api.request(originalReq);
      } catch (error) {
         console.log('Not auth! Error:' + error);
      }
   }
   throw error;
})

export default api
