import Product from '../../Components/Product';
import Error from '../../Components/Ui/Error';
import Spinner from '../../Components/Ui/Spinner';
import useGetProduct from '../../Hook/useGetProduct';

const HomePage = () => {
  const { data, status } = useGetProduct();

  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <Error />;
  console.log(data);
  return (
    <div className="grid grid-cols-1">
      {data?.length >= 1 ? (
        <Product products={data} />
      ) : (
        <p className="capitalize text-3xl text-center">
          There is no product available
        </p>
      )}
    </div>
  );
};

export default HomePage;
