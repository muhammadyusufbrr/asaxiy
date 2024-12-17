import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Layout from './Layout';
import toast, { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('./pages/Home/Home'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  const handelPrice = () => {
    toast.success('Successful')
  }
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
          success: {
            style: {
              background: '#28a745',
            },
          },
          error: {
            style: {
              background: '#dc3545',
            },
          },
        }}
      />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout handelPrice={()=>handelPrice()} />}>
              <Route index element={<Home handelPrice={()=>handelPrice()} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
