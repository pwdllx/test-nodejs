import { IModel } from '@model';
import fetch from 'node-fetch';

export abstract class Repository<T extends IModel> {
  #base_uri;

  constructor() {
    const path = this.constructor.name.replace('Repository', '').toLowerCase();
    this.#base_uri = `${process.env.API_URL}/${path}`;
  }

  public async create(model: T): Promise<T> {
    try {
      const response = await fetch(this.#base_uri, { body: model.serialize(), method: 'POST'});
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(<T>data);
      } else {
        throw new Error("Something wrong happen");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async findAll(): Promise<T[]> {
    try {
      const response = await fetch(this.#base_uri);
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(<T[]>data);
      } else {
        throw new Error("Something wrong happen");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async find(id: string): Promise<T> {
    try {
      const response = await fetch(`${this.#base_uri}/${id}`);
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(<T>data);
      } else {
        throw new Error("Something wrong happen");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
