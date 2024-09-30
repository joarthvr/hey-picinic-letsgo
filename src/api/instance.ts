import axios, { AxiosInstance } from 'axios';
const apiRequester: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    serviceKey: import.meta.env.VITE_API_SERVICE_KEY,
    MobileOS: 'ETC',
    MobileApp: 'AppTest',
    _type: 'json',
  },
  timeout: 10000,
});

export default apiRequester;
