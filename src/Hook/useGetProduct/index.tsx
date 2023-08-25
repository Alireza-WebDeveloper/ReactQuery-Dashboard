import { useQuery } from '@tanstack/react-query';
import { asyncGetProduct } from '../../StateManagment/Service/Product';

const useGetProduct = () => {
  const { data, status } = useQuery({
    queryKey: ['product'],
    queryFn: asyncGetProduct,
  });
  return { data, status };
};

export default useGetProduct;
