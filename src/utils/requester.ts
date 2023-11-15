import axios from 'axios';

export class Requester {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async get<T>(id: string = ''): Promise<T> {
    try {
      const response = await axios.get<T>(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async post<T>(data: any, endpoint: string = ''): Promise<T> {
    try {
      const response = await axios.post<T>(`${this.baseUrl}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
