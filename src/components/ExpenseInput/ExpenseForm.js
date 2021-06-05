import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSubmitExpense }) => {
    const [inputValue, setInputValue] = useState({ title: '', amount: 0, date: new Date() });
    const [editMode, setEditMode] = useState(false);

    const handleInput = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitExpense(inputValue);
    };

    const form = (
        <>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                           value={ inputValue.title }
                           name="title"
                           id="title"
                           onChange={ handleInput }/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number"
                           name="amount"
                           id="amount"
                           value={ inputValue.amount }
                           onChange={ handleInput }
                           min="0.00"
                           step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date"
                           name="date"
                           id="date"
                           value={ inputValue.date }
                           onChange={ handleInput }
                           min="2021-01-01"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={ () => setEditMode(false) }>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </>
    );

    const action =
        (<div style={ { textAlign: 'center' } } className="new-expense__actions">
            <button style={ {} } onClick={ () => setEditMode(true) }>Create Expense</button>
        </div>);

    return (
        <form onSubmit={ handleSubmit }>
            { editMode ? form : action }
        </form>
    );
};

export default ExpenseForm;
