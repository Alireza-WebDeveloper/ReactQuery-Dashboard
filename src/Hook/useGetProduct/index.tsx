import { useQuery } from '@tanstack/react-query';
import {
  asyncGetProductByPagination,
  asyncGetProductByFilterAndPagination,
} from '../../StateManagment/Service/Product';
import { useSearchParams } from 'react-router-dom';

const useGetProduct = () => {
  // Fetch filter parameters from URL search params
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('_sort');
  const order = searchParams.get('_order');
  const page = Number(searchParams.get('_page')) || 1;
  const limit = Number(searchParams.get('_limit')) || 2;
  const hasFilter = Boolean(sort && order);

  // Define the query key based on filter and pagination presence
  const queryKey = hasFilter
    ? [
        'product',
        `sort:${sort}`,
        `order:${order}`,
        `page:${page}`,
        `limit:${limit}`,
      ]
    : ['product', `page:${page}`, `limit:${limit}`];

  // Define the query function based on filter presence
  const queryFn = () => {
    const fetchFunction = hasFilter
      ? asyncGetProductByFilterAndPagination
      : asyncGetProductByPagination;

    return fetchFunction({ order, page, limit });
  };

  // Use the useQuery hook to fetch data
  const { data, status } = useQuery(queryKey, queryFn);

  return { data, status, page, limit };
};

export default useGetProduct;
