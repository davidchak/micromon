import { AxiosInstance } from "axios";
import { apiConstants } from "@features";

const { API_BASE_URL } = apiConstants;

// TODO: добавить версию к api после замены на свой api
// const http = AxiosInstance(`/${API_BASE_URL}/${API_VERSION}`);
const http = AxiosInstance(`/${API_BASE_URL}`);

// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export {
  http
}
