// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";


const init_expenses = [
  { title: "Car Loan", amount: 500000, date: new Date(2022, 2, 28), id: "abc" },
  { title: "School Fees", amount: 12320, date: new Date(2022, 5, 18), id: "def" },
  { title: "Shopping", amount: 54546, date: new Date(2022, 9, 12), id: "klm" },
  { title: "Furniture", amount: 30000, date: new Date(2021, 5, 22), id: "npo" }
]

function App() {

  const [allExpenses, setExpenses] = useState(init_expenses);

  const newExpenseDataHandler = (ExpenseData) => {
    setExpenses((prevExp) => { return [ExpenseData, ...prevExp] });
  }

  return (
    <div>
      <NewExpense newExpenseData={newExpenseDataHandler} />
      <Expenses expense={allExpenses} />
    </div>
  );
}

export default App;
