import React from 'react';
import './ChartBar.css';

const ChartBar = ({ label, maxValue, value }) => {
    let fillHeight = '0%';

    if (maxValue > 0) {
        fillHeight = Math.round(value / maxValue * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: fillHeight}}>
                </div>
                <span className="chart-bar__label">
                    { label }
                </span>
            </div>
        </div>
    );
};

export default ChartBar;
