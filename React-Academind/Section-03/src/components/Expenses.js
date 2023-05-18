import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div className='expenses'>
      <ExpenseItem
        title={props.expense.title}
        amount={props.expense.amount}
        date={props.expense.date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
