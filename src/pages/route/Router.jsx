import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from '../landing/Landing'
import Auth from '../auth/Auth';
import Payment from '../payment/Payment';
import Order from '../order/Order';
import Cart from '../cart/Cart';
import Result from '../result/Result';
import ProductDetail from '../productDetail/ProductDetail';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing