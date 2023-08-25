import { ProductState } from '../../../Model/Product';
import Rows from './Rows';
import Cells from './Cells';
import Modal from '../../Modal';
import { useState } from 'react';
import useDeleteProduct from '../../../Hook/useDeleteProduct';
import DeleteProduct from '../../Form/DeleteProduct';
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
        <DeleteProduct
          onClose={onClose}
          handleAsyncDeleteProduct={handleAsyncDeleteProduct}
          statusDelete={statusDelete}
        />
      </Modal>
    </div>
  );
};

export default ProductTable;
