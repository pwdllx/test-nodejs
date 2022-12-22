import { IModel } from '../model/IModel';
import { Requester } from './requester';

export class Repository<T extends IModel> {
  private path = this.constructor.name.replace('Repository', '').toLowerCase();
  #requester = new Requester(`${process.env.API_URL}/${this.path}`);

  constructor() {}

  public async create(model: T): Promise<T> {
    try {
      const data = await this.#requester.post(model.serialize());
      return <T>data;
    } catch (error) {
      throw error;
    }
  }

  public async findAll(): Promise<T[]> {
    try {
      const data = await this.#requester.get();
      return <T[]>data;
    } catch (error) {
      throw error;
    }
  }

  public async find(id: string): Promise<T> {
    try {
      const data = await this.#requester.get(id);
      return <T>data;
    } catch (error) {
      throw error;
    }
  }
}
