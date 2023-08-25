import { ProductState } from '../../../Model/Product';
import Rows from './Rows';
import Cells from './Cells';
import Modal from '../../Modal';
import { useState } from 'react';
import useDeleteProduct from '../../../Hook/useDeleteProduct';
interface ProductTableProps {
  products?: ProductState[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [selectProductToDelete, setSelectProductToDelete] =
    useState<ProductState>({} as ProductState);

  // Select Product To Delete
  const handleSelectProductToDelete = (product: ProductState) => {
    setSelectProductToDelete(product);
    setIsOpen(true);
  };

  // Close Modal
  const onClose = () => {
    setIsOpen(false);
    setSelectProductToDelete({} as ProductState);
  };

  // Action Delete Product (Request)
  const { mutate: mutateDelete, status: statusDelete } = useDeleteProduct();
  const handleAsyncDeleteProduct = () => {
    mutateDelete(selectProductToDelete.id);
    setIsOpen(false);
    setSelectProductToDelete({} as ProductState);
  };
  return (
    <div>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        {products && (
          <>
            <Rows products={products} />
            <Cells
              products={products}
              handleSelectProductToDelete={handleSelectProductToDelete}
            />
          </>
        )}
      </table>
      {/* Modal */}
      <Modal
        title="    Are you sure of removing the product?"
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            By deleting you no longer have access
          </p>
        </div>
        <div className="mt-4 flex gap-4">
          <button
            disabled={statusDelete === 'loading' ? true : false}
            type="button"
            className=" capitalize inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={handleAsyncDeleteProduct}
          >
            delete
          </button>
          <button
            type="button"
            className=" capitalize inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            onClick={onClose}
          >
            cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductTable;
