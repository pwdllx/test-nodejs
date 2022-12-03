import axios from 'axios';

export class Requester {
  constructor(private path: string) {}

  async post(data: { [name: string]: string }) {
    let req = await axios.post(this.path, data);
    return req.data;
  }

  async get(id?: string) {
    let add = '';
    if (id) {
      add = `/${id}`;
    }
    let req = await axios.get(this.path + add);
    return req.data;
  }
}
