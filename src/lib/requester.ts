import { IModel } from '../interfaces/model';

export class Requester {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Request failed with status ${response.status} : ${JSON.stringify(
          errorData
        )}`
      );
    }

    return response.json();
  }

  public async get<T>(path = ''): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${path}`);
    return this.handleResponse<T>(response);
  }

  public async post<T extends { serialize: () => unknown }>(data: {
    [name: string]: string;
  }): Promise<T> {
    const response = await fetch(this.baseUrl, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    return this.handleResponse<T>(response);
  }

  public async put<T extends { serialize: () => unknown }>(
    path: string,
    data: { [name: string]: string }
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    });

    return this.handleResponse<T>(response);
  }

  public async delete<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      method: 'DELETE',
    });

    return this.handleResponse<T>(response);
  }
}
