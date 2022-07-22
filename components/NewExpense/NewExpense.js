import React from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const handleExpenseData = (EnteredExpenseData) => {

        const ExpenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }

        props.newExpenseData(ExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={handleExpenseData} />
        </div>
    );
};

export default NewExpense;