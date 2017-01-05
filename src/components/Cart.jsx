import React from 'react';

const Cart = () => (
  <div className="columns">
    <div className="column col-12">
      <section className="empty">
        <i className="icon icon-cart" />
        <p className="empty-title">The shopping cart is empty.</p>
        <p className="empty-meta">Click the button to start shopping.</p>
        <button className="empty-action btn btn-primary">Browse for products</button>
      </section>
    </div>
  </div>
);

export default Cart;
