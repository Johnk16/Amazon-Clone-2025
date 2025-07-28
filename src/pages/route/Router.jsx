import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from '../landing/Landing'
import Auth from '../auth/Auth';
import Payment from '../payment/Payment';
import Order from '../order/Order';
import Cart from '../cart/Cart';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default Routing