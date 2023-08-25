import Error from '../../Components/Ui/Error';
import Spinner from '../../Components/Ui/Spinner';
import useGetProduct from '../../Hook/useGetProduct';

const HomePage = () => {
  const { data, status } = useGetProduct();
  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <Error />;
  console.log(data);
  return <div className="flex space-x-4">home page</div>;
};

export default HomePage;
