import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.5.194:80/api',
});

export default api;