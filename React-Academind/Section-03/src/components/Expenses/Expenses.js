import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [year, setYear] = useState('2022');

  const selectedYearHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );


  return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} onYearSelected={selectedYearHandler} />
      <ExpensesList expenses={filteredExpenses} />
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
