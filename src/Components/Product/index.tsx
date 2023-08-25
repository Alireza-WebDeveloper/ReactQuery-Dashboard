import React from 'react';
import { ProductState } from '../../Model/Product';

interface ProductProps {
  products?: ProductState[];
}

const Product: React.FC<ProductProps> = ({ products }) => {
  return (
    <div className="flex flex-col space-y-5">
      <section>
        <h1 className="text-2xl font-bold capitalize">
          List of all available products
        </h1>
      </section>
    </div>
  );
};

export default Product;
