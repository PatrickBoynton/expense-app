import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({expenses}) {

    return (
        <div className="expense-item">
            <ExpenseDate expenses={expenses}/>
            <div className="expense-item__description">
                <h2>{expenses.title}</h2>
                <span className="expense-item__price">${expenses.amount}</span>
            </div>
        </div>
    );
}

export default ExpenseItem;
