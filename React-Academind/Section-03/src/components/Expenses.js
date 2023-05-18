import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

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
function Expenses(props) {
    return (
      <Card className='expenses'>
      {props.expenses.map(expense => <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>)}
      </Card>
    );
  }

export default Expenses;
