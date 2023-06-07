import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';

function Expenses(props) {
  const [year, setYear] = useState('2022');

  const selectedYearHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );

  let expensesContent = <p>No expenses found!</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} onYearSelected={selectedYearHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;

// function Expenses(props) {
//   return (
//     <Card className='expenses'>
//       <ExpenseItem
//         title={props.expense.title}
//         amount={props.expense.amount}
//         date={props.expense.date}
//       ></ExpenseItem>
//     </Card>
//   );
// }
