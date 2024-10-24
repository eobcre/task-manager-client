import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.emanning-app.xyz',
  // baseURL: import.meta.env.VITE_LOCAL_URL,
});

interface getParams {
  [key: string]: string | number | null | { userId: string | number; username: string };
}

class ServerClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get() {
    // console.log('API get with params:', params);
    return axiosClient.get(this.endpoint).then((res) => res);
  }

  post(params: getParams) {
    // console.log('API post with params:', params);
    const config = {
      headers: {},
      params: params,
    };
    return axiosClient.post(this.endpoint, params, config).then((res) => res);
  }
}

export default ServerClient;
