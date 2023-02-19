import { IModel } from './model';

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

  public serialize(){
    try {
      return JSON.stringify({title: this.#title});
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong");
    }
  }
}
