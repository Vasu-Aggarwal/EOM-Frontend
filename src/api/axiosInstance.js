import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.DEV_BACKEND_URL,
    timeout: 10000, // 10 seconds
});

// Request Interceptor for Bearer Token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for Global Error Handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      // Optional: custom error handling by status
      if (status === 401) {
        // auto-logout or redirect to login
        console.warn('Unauthorized, redirecting...');
      } else if (status === 500) {
        console.error('Server error:', error.response.data.message);
      }
    } else {
      console.error('Network error:', error.message);
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;