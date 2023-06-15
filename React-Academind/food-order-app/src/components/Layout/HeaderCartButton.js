import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const numOfCartItems = ctx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const { items } = ctx;

  const bttnClasses = `${classes.button} ${
    buttonHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setButtonHighlighted(true);

    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items.length, items]);

  return (
    <button className={bttnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
