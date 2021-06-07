import React from 'react';
import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

const Chart = ({data}) => {
    const dataPoints =  data.map(point => point.value);
    const maxValue = Math.max(...dataPoints);

    return (
        <section  className="chart">
            {data.map(point => <ChartBar key={point.label}
                                         value={point.value}
                                         maxValue={maxValue}
                                         label={point.label}/> )}
        </section>
    );
};

export default Chart;
