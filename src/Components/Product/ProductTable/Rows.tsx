import React from 'react';
import { ProductState } from '../../../Model/Product';

interface RowsState {
  products: ProductState[];
}
const Rows: React.FC<RowsState> = ({ products }) => {
  return (
    <thead className="bg-gray-700 text-white">
      <tr>
        {products &&
          Object.keys(products[0])
            .concat('options')
            .map((title, index) => {
              return (
                <th key={index} className="py-2 px-4">
                  {title}
                </th>
              );
            })}
      </tr>
    </thead>
  );
};

export default Rows;
