import axios from 'axios';

export default axios.create({
  baseURL: 'https://aniriyar-backend.onrender.com',
  responseType: 'json',
});