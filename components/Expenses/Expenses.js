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

      <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
      <ExpenseItem title={props.expense[1].title} amount={props.expense[1].amount} date={props.expense[1].date} />
      <ExpenseItem title={props.expense[2].title} amount={props.expense[2].amount} date={props.expense[2].date} />
    </Card>
  )
}

export default Expenses;