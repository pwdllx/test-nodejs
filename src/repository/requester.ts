import axios from 'axios';

export class Requester {
  constructor(private path: string) {}

  async post(data: { [name: string]: string }) {
    const req = await axios.post(this.path, data);
    return req.data;
  }

  async get(id?: string) {
    const path_id = id ? `/${id}` : '';

    const req = await axios.get(this.path + path_id);
    return req.data;
  }
}
