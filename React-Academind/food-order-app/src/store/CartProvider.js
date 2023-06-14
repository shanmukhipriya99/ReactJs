import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const itemToCart = (item) => {};
  const itemFromCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: itemToCart,
    removeItem: itemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
