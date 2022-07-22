import React, { useState } from 'react';
import "./ExpenseItem.css";
import "../ExpenseDate/ExpenseDate";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import ExpenseAmount from "../ExpenseAmount/ExpenseAmount";

const ExpenseItem = (props) => {

    // const [title, setTitle] = useState(props.title);

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <ExpenseAmount amount={props.amount} />
            </div>
        </Card>
    );
};


export default ExpenseItem;