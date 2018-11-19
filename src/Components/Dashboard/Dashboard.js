import React, { Component } from 'react';
import './Dashboard.css';
import AddTransaction from '../AddTransaction/AddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import Balance from '../Balance/Balance';

class Dashboard extends Component {
  state = {
    transactions: [],
    total: 0,
    chartData: {}
  }

  componentDidMount() {
    this.getTransactions()
  }

  getTransactions = () => {
    fetch("http://localhost:4001")
    // fetch("https://warm-wave-52595.herokuapp.com/")
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions: transactions,
      total: transactions.reduce( (a, b) => {
        if (b.category === 'Income') {
          return a + b.amount;
        } else {
          return a + b.amount * -1;
        }
      }, 0)
    }));
  }

  componentWillMount() {
    this.setState(
      {
      transactions: this.state.transactions,
      total: this.state.transactions.reduce( (a, b) => {
        return a + b.amount;
      }, 0)
      },
      this.getChartData()
    )
  }
  
  getChartData = () => {
    console.log(this.state)
    this.setState({
      chartData:{
          labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
          datasets:[
            {
              label: 'Population',
              data: this.state.transactions,
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
    })
  }

  render() {
    return (
      <div className='Dash-wrapper'>
        <div className='Dashboard-container'>
        <Balance
            className='Balance-container'
            total={this.state.total}
            transactions={this.state.transactions}
          />
          <AddTransaction 
            className='AddTransaction-container' 
            transactions={this.state.transactions}
            getTransactions={this.getTransactions}
          />
          <TransactionList
            className='TransactionList-container'
            transactions={this.state.transactions}
            total={this.state.total}
            deleteTransaction={this.deleteTransaction}
          />
        </div>
      </div>
    )
  }
}

export default Dashboard;