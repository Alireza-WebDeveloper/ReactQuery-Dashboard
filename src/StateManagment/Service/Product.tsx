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

const asyncDeleteProduct = async (id: number) => {
  try {
    const response = await BaseApi.delete(`/product/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const asyncUpdateProduct = async (product: ProductState) => {
  try {
    const response = await BaseApi.patch(`/product/${product.id}`, product);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { asyncGetProduct, asyncDeleteProduct, asyncUpdateProduct };
