import axios from 'axios';

export class Requester {
  constructor(private path: string) {}

  async post(data: { [name: string]: string }) {
    const req = await axios.post(this.path, data);
    return req.data;
  }

  async get(id?: string) {
    const req = id
      ? await axios.get(this.path)
      : await axios.get(this.path + `/${id}`);
    return req.data;
  }
}
