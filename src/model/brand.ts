import { IModel, SerializeData } from './index';

export class Brand implements IModel {
  #title: string;

  constructor(title: string) {
    this.#title = title;
  }

  public get title(): string {
    return this.#title;
  }

  public set title(title: string) {
    this.#title = title.substring(0, 20);
  }

  public serialize():SerializeData{return{title: this.#title}}
}
