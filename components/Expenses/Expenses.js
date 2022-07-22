import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");
  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={FilterChangeHandler} />
      {props.expense.map((exp) => (<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />))}
    </Card>
  )
}

export default Expenses;