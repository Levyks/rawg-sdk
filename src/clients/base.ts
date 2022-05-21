import axios, { AxiosInstance } from 'axios';

export default class RawgBaseClient {
  private key: string;
  private axiosInstance: AxiosInstance;

  constructor(API_KEY: string) {
    this.key = API_KEY;
    this.axiosInstance = axios.create({
      baseURL: 'https://api.rawg.io/api/',
    });
  }

  private getParams(params: unknown = {}) {
    return Object.assign({ key: this.key }, params);
  }

  protected get<T>(endpoint: string, params?: unknown): Promise<T> {
    return this.axiosInstance
      .get<T>(endpoint, {
        params: this.getParams(params),
      })
      .then((res) => {
        return res.data;
      });
  }
}
