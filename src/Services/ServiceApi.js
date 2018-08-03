import axios from 'axios';
import qs from 'query-string';
import Config from 'react-native-config';
import { hasToken } from '../auth';

export const API = axios.create({
  baseURL: Config.API_BASE_GATEWAY,
  timeout: 90000,
  params: {}
});

API.interceptors.request.use(async (config) => {
  const originalRequest = config;
  if (config.url !== '/token') {
    const token = qs.parse(await hasToken()).access_token;
    originalRequest.headers.common['Content-Type'] = 'application/json';
    originalRequest.headers.common['Authorization'] = `Bearer ${token}`;
    return Promise.resolve(originalRequest);
  }
    
  // if (tokenIsExpired && config.url != 'token') {
  //   return issueToken().then((token) => {
  //     originalRequest['Authorization'] = 'Bearer ' + token;
  //     return Promise.resolve(originalRequest);
  //   });
  // }
  return config;
}, (error) => Promise.reject(error));

export default API;


