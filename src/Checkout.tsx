import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea placeholder="Enter your address"></textarea>
        </div>
        <div className="actions">
          <Link to="/" className="continue-shopping">Continue Shopping</Link>
          <button className="place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
