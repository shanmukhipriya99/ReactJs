import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 3, 29);
  //   const expenseTitle = 'Insurance';
  //   const expenseAmount = 300;

  const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  // };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
