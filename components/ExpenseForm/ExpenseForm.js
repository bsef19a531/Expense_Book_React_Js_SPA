import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState("")
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const [enteredAmount, setAmount] = useState('');
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const [enteredDate, setDate] = useState('');
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submissionHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpense(expenseData);
        setAmount('');
        setDate('');
        setTitle('');
    }


    return (
        <form onSubmit={submissionHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} required />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;