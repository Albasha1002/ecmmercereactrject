import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Card from './customer/components/Card/Card.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx'
import { Order } from './customer/components/Order/Order.jsx';
import { OrderDetails } from './customer/components/Order/OrderDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './customer/components/Routers/CustomerRoute.jsx';




function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRoute/>}></Route>
      </Routes>
      {/* <Navigation/>
      <HomePage/> 
      <Product/>
      <ProductDetails/> */}
      {/* <Card/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
    
      
    </div>
  );
}

export default App;
