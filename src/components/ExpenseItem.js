import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem({expenses}) {

    return (
        <Card className="expense-item">
            <ExpenseDate expenses={expenses}/>
            <div className="expense-item__description">
                <h2>{expenses.title}</h2>
                <span className="expense-item__price">${expenses.amount}</span>
            </div>
        </Card>
    );
}

export default ExpenseItem;
