import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import './BarChart.css';

export default class BarChart extends Component {
    state = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [20, 10, 5, 2, 20, 30, 45],
        }]
      }
    }
    
  render() {
    const options = {
        maintainAspectRation: false,
        responsive: true,
        annotation: {
            label: {
                backgroundColor: 'red',
                fontFamily: 'sans-serif',
                fontSize: 10,
                fontStyle: 'bold',
                fontColor: '#fff',
                textAlign: 'center',
                xPadding: 4,
                yPadding: 4,
                cornerRadius: 4,
                position: 'top',
                enabled: true,
                content: "Threshold"
             },
             annotations: [{
                 drawTime: 'afterDatasetsDraw',
                 borderColor: 'red',
                 borderDash: [2, 2],
                 borderWidth: 2,
                 mode: 'vertical',
                 type: 'line',
                 value: 10,
                 scaleID: 'x-axis-0',
           }]
        },
        
    };
    return (
      <div className='BarChart-container'>
      <Bar
        data={this.state.data}
        options={options}
        />
      </div>
    )
  }
}
