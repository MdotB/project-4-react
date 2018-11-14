import React, { Component } from 'react'
import Widget from '../Widget/Widget';
import './Dashboard.css';
import Actuals from '../Actuals/Actuals';

let dataSet = [
  {amount: -2000, category: 'Mortgage/Rent'},
  {amount: -100, category: 'Phone'},
  {amount: -400, category: 'Automobile'},
  {amount: -15, category: 'Food'},
  {amount: 5000, category: 'Income'}
]

class Dashboard extends Component {
  constructor() {
  super();
  this.state = dataSet;
  this.state.total = 0;
  }

  render() {
    return (
      <div>
        <h2 className='Dashboard-h2'>Dashboard</h2>
        <div className='Dashboard-container'>
          <Actuals className='Actuals-container' transactions={this.state} />
          {/* <Widget className='Widget2-container' />
          <Widget className='Widget3-container' /> */}
        </div>
      </div>
    )
  }
}

export default Dashboard;