import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
    const handleSubmitExpense = (data) => {
        const expenseData = {
            ...data,
            // Todo: Remove this when you hook up the API.
            id: Math.round(Math.random() * 10000)
        };
        onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={ handleSubmitExpense }/>
        </div>
    );
};

export default NewExpense;
