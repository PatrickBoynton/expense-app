import React from "react";
import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <time>March 28, 2021</time>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <span className="expense-item__price">$249.67</span>
            </div>
        </div>
    );
}

export default ExpenseItem;
