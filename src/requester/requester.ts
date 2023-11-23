import axios, { AxiosInstance } from 'axios';

export class Requester {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public async get(id?: string): Promise<any> {
    if (id) {
      const response = await this.axiosInstance.get(`/${id}`);
      return response.data;
    } else {
      const response = await this.axiosInstance.get('/');
      return response.data;
    }
  }

  public async post(data: any): Promise<any> {
    const response = await this.axiosInstance.post('/', data);
    return response.data;
  }
}
