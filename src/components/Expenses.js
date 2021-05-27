import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses({expenses}) {
    return (
        <Card>
            <ExpenseItem expenses={expenses[0]}/>
            <ExpenseItem expenses={expenses[1]}/>
            <ExpenseItem expenses={expenses[2]}/>
        </Card>
    );
}

export default Expenses;
