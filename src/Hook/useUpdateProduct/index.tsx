import { useQueryClient, useMutation } from '@tanstack/react-query';
import { asyncUpdateProduct } from '../../StateManagment/Service/Product';
import { toast } from 'react-toastify';
import { toastOptions } from '../../Utils/Toast';
import { ProductState } from '../../Model/Product';

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation({
    mutationFn: (product: ProductState) => asyncUpdateProduct(product),
    onSuccess: () => {
      toast.success('The create was successful', toastOptions);
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
