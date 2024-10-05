import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_URL,
});

interface getParams {
  [key: string]: any;
}

class ServerClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get(params: getParams) {
    console.log('API get with params:', params);
    const config = {
      headers: {},
      params: params,
    };
    return axiosClient.get(this.endpoint, config).then((res) => res);
  }

  post(params: getParams) {
    console.log('API post with params:', params);
    const config = {
      headers: {},
    };
    return axiosClient.post(this.endpoint, params, config).then((res) => res);
  }
}

export default ServerClient;