import { IModel } from '@model';
import axios, { Axios, AxiosResponse } from 'axios'

export class Requester <T extends IModel> {
    
    public async getBrands() {
        try {
            const brands = await axios.get(`http://localhost:3001/brand`)
            .then(function(response:any){
                return response.data;
            });
            return brands;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getOneBrand(id: string): Promise<AxiosResponse<any>> {
        try {
            const brand = await axios.get(`http://localhost:3001/brand/${id}`)
            .then(function(response: any){
                return response.data;
            });
            return brand;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public async createBrand(body: {}): Promise<AxiosResponse<any>> {
        try {
            const data = body;
            const newBrand = await axios.post(`http://localhost:3001/brand`, data)
            .then(function(response: any){
                return response.data;
            });
            return newBrand;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
