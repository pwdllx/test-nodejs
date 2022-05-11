import fetch from 'node-fetch';

export class Requester {
  #url: string;

  constructor(url: string) {
    this.#url = url;
  }

  public async get(id = '') {
    try {
      const reponse = await fetch(this.#url + ( id ? ('/'+id) : '' ));
      if (!reponse.ok) {
        throw new Error(`HTTP Error : ${reponse.status}`);
      }
      const json = await reponse.json();
      return json;
    }
    catch(error) {
      console.error(`GET Error : ${error}`);
    }
  }


  public async post(data = {}) {
    try {
      const response = await fetch(this.#url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(`POST Error : ${error}`);
    }
  }
  
}
