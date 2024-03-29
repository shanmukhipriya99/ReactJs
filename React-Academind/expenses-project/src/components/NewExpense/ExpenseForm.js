import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [addNewExpense, setAddNewExpense] = useState(false);

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date + 'T00:00'),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
    setAddNewExpense(false);
  };
  const addNewExpenseHandler = () => {
    setAddNewExpense(true);
  };
  let expenseForm = (
    <div>
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
    </div>
  );
  if (addNewExpense) {
    expenseForm = (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={title} onChange={titleChangeHandler} />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2023-12-31'
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={() => setAddNewExpense(false)}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  }
  return <>{expenseForm}</>;
};

export default ExpenseForm;
