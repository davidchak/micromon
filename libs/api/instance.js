import axios from 'axios';
import logger from '../logger';


const http = axios.create({
  baseURL: process.env.API_URL || '/api/v1',
});

http.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return config;
  },
  (error) => {
    logger.error(error.response ? error.response.data : error.message);
    return error.response.data;
  }
);

http.interceptors.response.use(
  (response) => { return response }, 
  (error) => {
    logger.error(error.response ? error.response.data : error.message);
    return error.response;
  }
);

export default http;
