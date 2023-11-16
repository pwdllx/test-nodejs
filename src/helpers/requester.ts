import axios from 'axios';

import { IModel } from '../interfaces/iModel.interface';
export class Requester {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async getAll(): Promise<IModel[]> {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  public async getOne(id: string): Promise<IModel> {
    const response = await axios.get(`${this.apiUrl}/${id}`);
    return response.data;
  }

  public async post(data: { [name: string]: string }): Promise<IModel> {
    const response = await axios.post(this.apiUrl, data);
    return response.data;
  }
}
