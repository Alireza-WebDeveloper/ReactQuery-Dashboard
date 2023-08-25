import { useQueryClient, useMutation } from '@tanstack/react-query';
import { asyncCreateProduct } from '../../StateManagment/Service/Product';
import { toast } from 'react-toastify';
import { toastOptions } from '../../Utils/Toast';
import { ProductState } from '../../Model/Product';

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation({
    mutationFn: (product: ProductState) => asyncCreateProduct(product),
    onSuccess: () => {
      toast.success('The update was successful', toastOptions);
      //   Revalidate Cached From Server Update
      queryClient.invalidateQueries({
        queryKey: ['product'],
      });
    },
    onError: (error: Error) => {
      toast.error(error.message, toastOptions);
    },
  });
  return { mutate, status };
};

export default useUpdateProduct;
