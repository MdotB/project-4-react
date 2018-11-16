import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import './Chart.css';

export default class Chart extends Component {

    state = {
      chartData: {
        labels: ['Automobile', 'Childcare', 'Food', 'Healthcare', 'Income', 'Internet', 'Misc.', 'Mortgage/Rent', 'Phone', 'Savings', 'Subscriptions', 'Taxes', 'Uncategorized', 'Utilities'],
        dataSets: [
          {
            label: 'Amount',
            data: [500, 300, 200],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ]
          }
        ]
      }
      
    }
    
  render() {
    console.log(this.props.chartData);
    return (
      <div className='Chart-container'>
      <Bar
        data={this.state.chartData}
        options={{
          title: {
            display: true,
            text: 'Allocation'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
        />
      </div>
    )
  }
}
