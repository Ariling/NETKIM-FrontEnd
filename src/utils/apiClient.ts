import axios from 'axios';
import { SERVER_URL } from './jsonURL';

const base_url = SERVER_URL;

const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setInterceptors = () => {
  apiClient.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `${accessToken}`;
      }
      return config;
    },
    (error) => {
      console.log('Request error : ', error);
      return Promise.reject(error);
    }
  );
};

setInterceptors();

export default apiClient;
