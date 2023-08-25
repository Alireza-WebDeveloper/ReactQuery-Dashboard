import { useQueryClient, useMutation } from '@tanstack/react-query';
import { asyncDeleteProduct } from '../../StateManagment/Service/Product';
import { toast } from 'react-toastify';
import { toastOptions } from '../../Utils/Toast';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation({
    mutationFn: (id: number) => asyncDeleteProduct(id),
    onSuccess: () => {
      toast.success('The deletion was successful', toastOptions);
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

export default useDeleteProduct;
