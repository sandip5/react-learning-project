import NewExpenses from "./components/Expenses/NewExpenses";
import "./components/Expenses/expenses.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Filter/ExpenseFilter";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 10, 21) },
    { id: 'e2', title: 'Cycle Insurance', amount: 40.78, date: new Date(2021, 10, 21) },
    { id: 'e3', title: 'Truck Insurance', amount: 898.81, date: new Date(2021, 10, 21) },
    { id: 'e4', title: 'Ship Insurance', amount: 5000.00, date: new Date(2021, 10, 21) }
  ];

  const addExpenseHandler = expense => {
    console.log('In App JS');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter />
        <NewExpenses title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <NewExpenses title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <NewExpenses title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <NewExpenses title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      </Card>
    </div>
  );
}

export default App;
