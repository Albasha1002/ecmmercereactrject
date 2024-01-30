import React from 'react'
import Navigation from '../Navigation/Navigation.jsx'
import Product from '../Product/Product'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../../pages/HomePage/HomePage'
import Footer from '../Footer/Footer'
import Card from '../Card/Card'
import ProductDetails from '../ProductDetails/ProductDetails.jsx'
import Checkout from '../Checkout/Checkout.jsx'
import { OrderDetails } from '../Order/OrderDetails.jsx'
import { Order } from '../Order/Order.jsx'

const CustomerRoute = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>

        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Card/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/orderdetails' element={<OrderDetails/>}></Route>


            {/* <Product/>
      <ProductDetails/> */}
      {/* <Card/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */} 

      
        </Routes>
        <div>
        <Footer/>
      </div>


    </div>
  )
}

export default CustomerRoute