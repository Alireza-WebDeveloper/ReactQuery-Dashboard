import Product from '../../Components/Product';
import Error from '../../Components/Ui/Error';
import Spinner from '../../Components/Ui/Spinner';
import useGetProduct from '../../Hook/useGetProduct';

const HomePage = () => {
  const { data, status } = useGetProduct();
  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <Error />;
  return (
    <div className="grid grid-cols-1">
      <Product products={data} />
    </div>
  );
};

export default HomePage;
