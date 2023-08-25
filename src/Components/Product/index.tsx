import React, { useState } from 'react';
import { ProductState } from '../../Model/Product';
import ProductTable from './ProductTable';
import Modal from '../Modal';
import CreateProduct from '../Form/CreateProduct';

interface ProductProps {
  products?: ProductState[];
}

const Product: React.FC<ProductProps> = ({ products }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onClose = () => {
    setIsOpenModal(false);
  };
  const onOpen = () => {
    setIsOpenModal(true);
  };
  return (
    <div className="flex flex-col space-y-5">
      <section>
        <h1 className="text-2xl font-bold capitalize">
          List of all available products
        </h1>
      </section>
      <ProductTable products={products} />
      <button
        onClick={onOpen}
        className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 capitalize text-xl"
      >
        create product
      </button>
      <Modal
        title="Creating a new product"
        onClose={onClose}
        isOpen={isOpenModal}
      >
        <CreateProduct onClose={onClose} />
      </Modal>
    </div>
  );
};

export default Product;
