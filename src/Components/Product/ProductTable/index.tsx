import { ProductState } from '../../../Model/Product';
import * as Icons from 'react-icons/md';
import Rows from './Rows';
import Cells from './Cells';
interface ProductTableProps {
  products?: ProductState[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        {products && (
          <>
            <Rows products={products} />
            <Cells products={products} />
          </>
        )}
      </table>
    </div>
  );
};

export default ProductTable;
