import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
    const handleSubmitExpense = (data) => {
        const expenseData = {
            ...data,
            // Todo: Remove this when you hook up the API.
            id: Math.round(Math.random() * 10000)
        }
        console.log(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={handleSubmitExpense} />
        </div>
    );
};

export default NewExpense;
