import React from 'react';

interface UpdateProductProps {
  statusDelete: any;
  onClose(): void;
}
const UpdateProduct: React.FC<UpdateProductProps> = ({
  onClose,
  statusDelete,
}) => {
  return (
    <>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          The previous information is not available after the update
        </p>
      </div>
      <div>form...</div>
      <div className="mt-4 flex gap-4">
        <button
          disabled={statusDelete === 'loading' ? true : false}
          type="button"
          className=" capitalize inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
    </>
  );
};

export default UpdateProduct;
