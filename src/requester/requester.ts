import { IModel, SerializeData } from "@model";
import { readFile, writeFile } from "fs/promises";
const { 
  v4: uuidv4,
} = require('uuid');


export class Requester<T extends IModel> {
private _apiUrl: string
private readonly _jsonPath = process.env.RESSOURCES_PATH

  constructor(url: string) {
    this._apiUrl = url + this._jsonPath
  }
private _generateId():string{
return uuidv4() as string

}
public async post(data: SerializeData): Promise<T> {
try {
  const newId = this._generateId()
  const storedData ={id: newId, ...data, };
  await writeFile(this._apiUrl,JSON.stringify(storedData))
 return Promise.resolve(this.get(newId))
  
} catch (error) {
  throw new Error("Error in posting data");
}
}

public async getAll(): Promise<T[]> {
  try {
    const data = await readFile(this._apiUrl, 'utf-8');
   return Promise.resolve(JSON.parse(data))
    
  } catch (error) {
    throw new Error("No Data");
    
  }
}
public async get(id:string):Promise<T>{
const ressourceData = await readFile(this._apiUrl, 'utf-8')

  if(id){
    try {
      const foundData = JSON.parse(ressourceData)?.brand.find(element => element.id === id)
      return Promise.resolve(foundData)
    } catch (error) {
      throw new Error("Brand with this id not found !");
    }

}
}
}