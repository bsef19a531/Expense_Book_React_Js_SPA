import "./ExpenseAmount.css";

const ExpenseAmount = (props) => {
    return (
        <div className="expense-amount">Rs: {props.amount}</div>
    )
}

export default ExpenseAmount;