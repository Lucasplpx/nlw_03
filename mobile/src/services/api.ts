import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.62.1.133:3333',
});

export default api;

// 38:34