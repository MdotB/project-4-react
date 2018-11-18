import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component {
  
  state = {
    chartData: this.props.chartData
  }
  
  render() {
    console.log()
    return (
      <div className='chart'>
        <Doughnut
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Spend by Category'
            },
            legend:{
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;