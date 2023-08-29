import { ProductState } from '../../Model/Product';
import BaseApi from '../Base';

///  Options for Get Product

// Product By Pagination
const asyncGetProductByPagination = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<ProductState[]> => {
  try {
    const response = await BaseApi.get<ProductState[]>(
      `/product?_page=${page}&_limit=${limit}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Product By Pagination And Filter (Sort)
const asyncGetProductByFilterAndPagination = async ({
  order,
  page,
  limit,
}: {
  order: any;
  page: any;
  limit: any;
}) => {
  try {
    const response = await BaseApi.get<ProductState[]>(
      `/product?_sort=price&_order=${order}&_page=${page}&_limit=${limit}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/// Options for each product (Delete , Update , Create)

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

const asyncCreateProduct = async (product: Partial<ProductState>) => {
  try {
    const response = await BaseApi.post(`/product`, product);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export {
  asyncGetProductByPagination,
  asyncGetProductByFilterAndPagination,
  asyncDeleteProduct,
  asyncUpdateProduct,
  asyncCreateProduct,
};
