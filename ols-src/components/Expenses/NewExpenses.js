import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './expenses.css';
import Card from '../UI/Card';

function NewExpenses(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('updated!!');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change</button>
        </Card>
    );
}

export default NewExpenses;