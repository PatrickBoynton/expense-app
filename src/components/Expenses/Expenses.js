import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';

const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('');

    const changeYear = (event) => {
        setYear(event.target.value);
    };
    return (
        <>
            <ExpenseFilter onChangeYear={ changeYear }/>
            <Card>
                { expenses.filter(expense => expense.date.getFullYear().toString() === year).map(expense => <ExpenseItem key={expense.id}
                                                       year={ year }
                                                       expenses={ expense }/>) }
            </Card>
        </>
    );
};

export default Expenses;
