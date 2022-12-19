import axios from 'axios';

export class Requester {
  #url: string;

  constructor(url: string) {
    this.#url = url;
  }

  public async get<T>(id?: string): Promise<T> {
    try {
      const response = await axios.get<T>(this.#url + id ? `/${id}` : '');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async post<T>(data: { [name: string]: string }): Promise<T> {
    try {
      const response = await axios.post<T>(this.#url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}