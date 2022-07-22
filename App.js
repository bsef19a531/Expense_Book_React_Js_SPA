// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {

  const expense = [
    { title: "Car Loan", amount: 500000, date: new Date(2022, 2, 28) },
    { title: "School Fees", amount: 12320, date: new Date(2022, 5, 18) },
    { title: "Shopping", amount: 54546, date: new Date(2022, 9, 12) },
    { title: "Furniture", amount: 30000, date: new Date(2021, 5, 22) }
  ]

  const newExpenseDataHandler = (ExpenseData) => { }

  return (
    <div>
      <NewExpense newExpenseData={newExpenseDataHandler} />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
