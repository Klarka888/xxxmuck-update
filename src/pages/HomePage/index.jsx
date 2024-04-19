import './style.css';
import { Header } from '../../components/header';
import { Body } from '../../components/body';

import { ProductPage } from '../../components/ProductPage/ProductPage';

export const HomePage = () => {
  return (
  <>
 
    <div className="container">
      <h1>HomePage</h1>
      <nav>
        <Link to="/product">Product</Link>       
      </nav>
    </div>

   <Header></Header>
   <Body></Body>
   <ProductPage></ProductPage>
  </>
  );
};
