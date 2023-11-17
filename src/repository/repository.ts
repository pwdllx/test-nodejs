import { IModel } from '../model/imodel';
import { Requester } from '../requester';

export abstract class Repository<T extends IModel> {
  private readonly #requester: Requester;
  private readonly resourceEndpoint: string;

  constructor(resourceName: string) {
    this.resourceEndpoint = resourceName.toLowerCase();
    this.#requester = new Requester(`${process.env.API_URL}/${this.resourceEndpoint}`);
  }

  public async create(model: T): Promise<T> {
    try {
      const data = await this.#requester.post(this.resourceEndpoint, model.serialize());
      return Promise.resolve(data as T);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async findAll(): Promise<T[]> {
    try {
      const data = await this.#requester.get(this.resourceEndpoint);
      return Promise.resolve(data as T[]);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async find(id: string): Promise<T> {
    try {
      const data = await this.#requester.get(`${this.resourceEndpoint}/${id}`);
      return Promise.resolve(data as T);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async update(id: string, model: T): Promise<T> {
    try {
      const data = await this.#requester.put(`${this.resourceEndpoint}/${id}`, model.serialize());
      return Promise.resolve(data as T);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async remove(id: string): Promise<void> {
    try {
      await this.#requester.delete(`${this.resourceEndpoint}/${id}`);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
