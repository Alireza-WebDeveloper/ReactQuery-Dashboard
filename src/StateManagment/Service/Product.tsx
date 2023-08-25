import { ProductState } from '../../Model/Product';
import BaseApi from '../Base';

const asyncGetProduct = async (): Promise<ProductState[]> => {
  try {
    const response = await BaseApi.get<ProductState[]>('/product');
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { asyncGetProduct };
