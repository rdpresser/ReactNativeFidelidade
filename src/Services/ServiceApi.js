import axios from 'axios';
import Config from 'react-native-config';

export default axios.create({
  baseURL: Config.API_BASE_GATEWAY,
  timeout: 90000,
  params: {}
});

//API.interceptors.request.use()

//export default API;
