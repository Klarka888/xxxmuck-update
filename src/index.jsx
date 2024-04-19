import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { createBrowserRouter } from 'react-router-dom';
import { ProductPage } from './components/ProductPage/ProductPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/product',
    element: <ProductPage />,
  },
]);

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
