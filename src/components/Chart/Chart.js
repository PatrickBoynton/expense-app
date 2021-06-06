import React from 'react';
import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

const Chart = ({data, value, label}) => {
    return (
        <section className="chart">
            {data.map(point => <ChartBar key={label}
                                         value={value}
                                         maxValue={null}
                                         label={label}/> )}
        </section>
    );
};

export default Chart;
