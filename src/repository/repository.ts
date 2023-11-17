import { IModel } from '@model';
import { Requester } from '../requester/requester';

export abstract class Repository<T extends IModel> {
  #requester;

  constructor() {
    const path = this.constructor.name.replace('Repository', '').toLowerCase();
    this.#requester = new Requester();
  }

  public async create(model: T): Promise<T> {
    try {
      const data = await this.#requester.createBrand((model.serialize()));
      return Promise.resolve(<T>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async findAll(): Promise<T[]> {
    try {
      const data = await this.#requester.getBrands();
      return Promise.resolve(<T[]>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async find(id: string): Promise<T> {
    try {
      const data = await this.#requester.getOneBrand(id);
      return Promise.resolve(<T>data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
