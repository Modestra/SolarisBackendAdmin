import axios from 'axios';

const axiosR = axios.create({
  baseURL: 'http://185.135.82.172:8000/',
  //baseURL: import.meta.env.VITE_SERVER_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosR.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = ` ${localStorage.getItem('token')}`;
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosR;
