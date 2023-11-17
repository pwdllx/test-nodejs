import axios, { AxiosResponse } from 'axios';

interface ApiResponse<T> {
    data: T;
}

export class Requester {
    private baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }

    public async get<T>(endpoint: string = ''): Promise<T> {
        const url = `${this.baseUrl}/${endpoint}`;
        const reponse = await axios.get<ApiResponse<T>>(url);
        return reponse.data.data;
    }

    public async post<T>(endpoint: string, data: any): Promise<T> {
        const url = `${this.baseUrl}/${endpoint}`;
        const reponse = await axios.post<ApiResponse<T>>(url, data);
        return reponse.data.data;
    }

    public async put<T>(endpoint: string, data: any): Promise<T> {
        const url = `${this.baseUrl}/${endpoint}`;
        const reponse = await axios.put<ApiResponse<T>>(url, data);
        return reponse.data.data;
    }

    public async delete<T>(endpoint: string): Promise<T> {
        const url = `${this.baseUrl}/${endpoint}`;
        const reponse = await axios.delete<ApiResponse<T>>(url);
        return reponse.data.data;
    }
}