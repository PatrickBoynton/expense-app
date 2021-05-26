import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({expenses}) {
    const month = expenses.date.toLocaleString("en-US", {month: "long"});
    const day = expenses.date.toLocaleString("en-US", {day: "2-digit"});
    const year = expenses.date.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{expenses.title}</h2>
                <span className="expense-item__price">${expenses.amount}</span>
            </div>
        </div>
    );
}

export default ExpenseItem;
