export type SerializeData = { [name: string]: string }

export interface IModel {
  serialize(): SerializeData;
}

export * from './brand';
