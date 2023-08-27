import { useQuery } from '@tanstack/react-query';
import {
  asyncGetProduct,
  asyncGetProductByFilter,
} from '../../StateManagment/Service/Product';
import { useSearchParams } from 'react-router-dom';

const useGetProduct = () => {
  // Get filter parameters from URL search params
  const [searchParam] = useSearchParams();
  const sort = searchParam.get('_sort');
  const order = searchParam.get('_order');
  const hasFilter = sort && order;

  // Define the query key and query function based on filter presence
  const queryKey = hasFilter ? ['product', sort, order] : ['product'];
  const queryFn = () =>
    hasFilter ? asyncGetProductByFilter(order) : asyncGetProduct();

  // Use the useQuery hook
  const { data, status, refetch } = useQuery(queryKey, queryFn);

  return { data, status, refetch };
};

export default useGetProduct;
