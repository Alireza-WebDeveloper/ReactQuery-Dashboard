import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import HomePage from './Pages/Home';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClientStore from './StateManagment/Client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from './Pages/About';

const App = () => {
  return (
    <QueryClientProvider client={queryClientStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
