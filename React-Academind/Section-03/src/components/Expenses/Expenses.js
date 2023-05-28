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

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} onYearSelected={selectedYearHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
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
