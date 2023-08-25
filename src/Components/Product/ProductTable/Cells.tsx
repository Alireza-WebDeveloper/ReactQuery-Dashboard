import React from 'react';
import { ProductState } from '../../../Model/Product';
import * as Icons from 'react-icons/md';
interface CellsState {
  products: ProductState[];
}
const Cells: React.FC<CellsState> = ({ products }) => {
  return (
    <tbody className="divide-y divide-gray-300">
      {products?.map((product) => (
        <tr key={product.id}>
          <td className="py-2 px-4">{product.id}</td>
          <td className="py-2 px-4">{product.name}</td>
          <td className="py-2 px-4">{product.description}</td>
          <td className="py-2 px-4">{product.year_of_creation}</td>
          <td className="py-2 px-4">{product.rating}</td>
          <td className="py-2 px-4">{product.views}</td>
          <td className="py-2 px-4">{product.country}</td>
          <td className="py-2 px-4">${product.price.toFixed(2)}</td>
          <td className="py-2 px-4">
            <section className="flex items-center gap-3 ">
              <button className="px-3 py-1.5 bg-orange-500 rounded-md capitalize hover:bg-orange-600">
                <Icons.MdEdit size="1.4rem" />
              </button>
              <button className="px-3 py-1.5 bg-red-500 rounded-md capitalize hover:bg-orange-600">
                <Icons.MdDelete size="1.4rem" />
              </button>
            </section>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Cells;
