import React from 'react';
import { useSearchParams } from 'react-router-dom';
import * as Icons from 'react-icons/md';
import useGetProduct from '../../../Hook/useGetProduct';

const Pagination = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const { limit, page, status } = useGetProduct();

  const handlePageChange = (newPage: number) => {
    searchParams.set('_page', newPage.toString());
    searchParams.set('_limit', limit.toString());
    setSearchParam(searchParams);
  };

  const isPrevButtonDisabled = status === 'loading' || page === 1;
  const isNextButtonDisabled = status === 'loading';

  return (
    <div className={`flex ${page > 1 ? 'justify-evenly' : 'justify-end'}`}>
      {page > 1 && (
        <button
          disabled={isPrevButtonDisabled}
          onClick={() => handlePageChange(page - 1)}
          className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <Icons.MdArrowBackIos size="1.4rem" />
          <span> Previous</span>
        </button>
      )}
      <button
        disabled={isNextButtonDisabled}
        onClick={() => handlePageChange(page + 1)}
        className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span>Next</span>
        <Icons.MdArrowForwardIos size="1.4rem" />
      </button>
    </div>
  );
};

export default Pagination;
