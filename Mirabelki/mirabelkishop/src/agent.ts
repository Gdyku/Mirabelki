import axios, { AxiosResponse } from 'axios';
import { IProduct } from './product';

axios.defaults.baseURL = 'http://localhost:44370/api/';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody) 
};

const Products = {
    list: (): Promise<IProduct[]> => requests.get('/Products/getproducts'),
    details: (id: string) => requests.get(`/Products/${id}`),
    create: (product: IProduct) => requests.post('/Products', product),
    update: (product: IProduct) => requests.put(`/Products/${product.id}`, product),
    delete: (id: string) => requests.del(`/activities/${id}`)
}

export default {
    Products
}