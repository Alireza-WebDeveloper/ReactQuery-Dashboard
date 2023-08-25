import { useMutation } from '@tanstack/react-query';
import { asyncDeleteProduct } from '../../StateManagment/Service/Product';
const useDeleteProduct = () => {
  const { mutate, status } = useMutation({
    mutationKey: ['product'],
    mutationFn: (id: number) => asyncDeleteProduct(id),
  });
  return { mutate, status };
};

export default useDeleteProduct;
