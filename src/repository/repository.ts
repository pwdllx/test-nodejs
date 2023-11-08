import { IModel } from '@model';
import axios from 'axios';

export abstract class Repository<T extends IModel> {
  #requester;

  constructor() {
    const path = this.constructor.name.replace('Repository', '').toLowerCase();
    this.#requester = axios.create({
      baseURL: `${process.env.API_URL}/${path}`,
    });
  }

  public async create(model: T): Promise<T> {
    try {
      const response = await this.#requester.post('', model.serialize());
      return Promise.resolve(response.data as T);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  public async findAll(): Promise<T[]> {
    try {
      const response = await this.#requester.get('');
      return Promise.resolve(response.data as T[]);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async find(id: string): Promise<T> {
    try {
      const response = await this.#requester.get(id);
      return Promise.resolve(response.data as T);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
