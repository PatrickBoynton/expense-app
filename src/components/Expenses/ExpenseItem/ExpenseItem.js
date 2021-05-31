import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card';

const ExpenseItem = ({ expenses }) => {
  const [title, setTitle] = useState(expenses.title);

  const handleClick = () => {
    setTitle('This was fun!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenses={expenses} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">${expenses.amount}</span>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
