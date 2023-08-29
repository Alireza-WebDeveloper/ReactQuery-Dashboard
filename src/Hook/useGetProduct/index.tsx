import { useQuery } from '@tanstack/react-query';
import {
  asyncGetProductByPagination,
  asyncGetProductByFilterAndPagination,
} from '../../StateManagment/Service/Product';
import { useSearchParams } from 'react-router-dom';

const useGetProduct = () => {
  // Fetch filter parameters from URL search params
  const [searchParam] = useSearchParams();
  const sort = searchParam.get('_sort');
  const order = searchParam.get('_order');
  const page = Number(searchParam.get('_page')) || 1; // Convert to number
  const limit = Number(searchParam.get('_limit')) || 5; // Convert to number
  const hasFilter = Boolean(sort && order);
  const hasPagination = Boolean(
    searchParam.get('_page') && searchParam.get('_limit')
  );
  // Define the query key based on filter and pagination presence
  const queryKey =
    hasFilter && hasPagination
      ? [
          'product',
          `sort:${sort}`,
          `order:${order}`,
          `page:${page}`,
          `limit:${limit}`,
        ]
      : hasFilter
      ? [
          'product',
          `sort:${sort}`,
          `order:${order}`,
          `page:${page}`,
          `limit:${limit}`,
        ]
      : ['product', `page:${page}`, `limit:${limit}`];

  // Define the query function based on filter presence
  const queryFn = () =>
    hasFilter
      ? asyncGetProductByFilterAndPagination({ order, page, limit })
      : asyncGetProductByPagination({ page, limit });

  // Use the useQuery hook to fetch data
  const { data, status } = useQuery(queryKey, queryFn);

  return { data, status };
};

export default useGetProduct;
