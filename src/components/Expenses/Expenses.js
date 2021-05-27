import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({expenses}) => (
    <Card>
        <ExpenseItem expenses={expenses[0]}/>
        <ExpenseItem expenses={expenses[1]}/>
        <ExpenseItem expenses={expenses[2]}/>
    </Card>
);

export default Expenses;
