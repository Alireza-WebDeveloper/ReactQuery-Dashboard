import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-3">{<Outlet />}</main>
    </>
  );
};

export default Layout;
