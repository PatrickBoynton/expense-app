import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('');

    const changeYear = (event) => {
        setYear(event.target.value);
    };
    const filter = expenses.filter(expense => expense.date.getFullYear().toString() === year).map(expense =>
        <ExpenseItem key={ expense.id }
                     year={ year }
                     expenses={ expense }/>);
    return (
        <Card>
            <ExpenseFilter onChangeYear={ changeYear }/>
            <ExpensesChart expenses={ filter }/>
            { filter.length === 0 ? <h1>There are no items for this year.</h1> : filter }
        </Card>
    );
};

export default Expenses;
