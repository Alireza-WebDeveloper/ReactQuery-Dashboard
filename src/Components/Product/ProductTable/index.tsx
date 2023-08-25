import { ProductState } from '../../../Model/Product';
import Rows from './Rows';
import Cells from './Cells';
import Modal from '../../Modal';
import { useState } from 'react';
import useDeleteProduct from '../../../Hook/useDeleteProduct';
import DeleteProduct from '../../Form/DeleteProduct';
import UpdateProduct from '../../Form/UpdateProduct';
interface ProductTableProps {
  products?: ProductState[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  // State Modal
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

  // State Select Product (Update,Delete)
  const [selectProductToDelete, setSelectProductToDelete] =
    useState<ProductState>({} as ProductState);
  const [selectProductToUpdate, setSelectProductToUpdate] =
    useState<ProductState>({} as ProductState);

  // Select Product To Delete
  const handleSelectProductToDelete = (product: ProductState) => {
    setSelectProductToDelete(product);
    setIsOpenDeleteModal(true);
  };

  const handleSelectProductToUpdate = (product: ProductState) => {
    setSelectProductToUpdate(product);
    setIsOpenUpdateModal(true);
  };

  // Close Modal
  const onCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setSelectProductToDelete({} as ProductState);
  };

  const onCloseUpdateModal = () => {
    setIsOpenUpdateModal(false);
    setSelectProductToUpdate({} as ProductState);
  };

  // Action Delete Product (Request)
  const { mutate: mutateDelete, status: statusDelete } = useDeleteProduct();
  const handleAsyncDeleteProduct = () => {
    mutateDelete(selectProductToDelete.id);
    setIsOpenDeleteModal(false);
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
              handleSelectProductToUpdate={handleSelectProductToUpdate}
            />
          </>
        )}
      </table>
      {/* Modal */}
      <Modal
        title="Are you sure of removing the product?"
        isOpen={isOpenDeleteModal}
        onClose={onCloseDeleteModal}
      >
        <DeleteProduct
          onClose={onCloseDeleteModal}
          handleAsyncDeleteProduct={handleAsyncDeleteProduct}
          statusDelete={statusDelete}
        />
      </Modal>
      <Modal
        title="Are you sure of update the product?"
        isOpen={isOpenUpdateModal}
        onClose={onCloseUpdateModal}
      >
        <UpdateProduct onClose={onCloseUpdateModal} statusDelete={''} />
      </Modal>
    </div>
  );
};

export default ProductTable;
