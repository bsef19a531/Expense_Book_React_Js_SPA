import React from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {

    const handleExpenseData = (EnteredExpenseData) => {
        const ExpenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={handleExpenseData} />
        </div>
    );
};

export default NewExpense;