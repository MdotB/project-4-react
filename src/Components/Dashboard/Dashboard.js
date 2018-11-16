import React, { Component } from 'react';
import './Dashboard.css';
import AddTransaction from '../AddTransaction/AddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import Balance from '../Balance/Balance';
import Chart from '../Chart/Chart';

class Dashboard extends Component {
  state = {
    transactions: [],
    total: 0
  }

  componentDidMount() {
    this.getTransactions()
  }

  getTransactions = () => {
    fetch("http://localhost:4001")
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions: transactions,
      total: transactions.reduce( (a, b) => {
        console.log(b.category)
        if (b.category === 'Income') {
          return a + b.amount;
        } else {
          return a + b.amount * -1;
        }
      }, 0)
    }));
  }

  componentWillMount() {
    this.setState({
      transactions: this.state.transactions,
      total: this.state.transactions.reduce( (a, b) => {
        return a + b.amount;
      }, 0)
    })
  }

  render() {
    return (
      <div className='Dash-wrapper'>
        <h2 className='Dashboard-h2'>Dashboard</h2>
        <div className='Dashboard-container'>
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
          <Balance
            className='Balance-container'
            total={this.state.total}
            transactions={this.state.transactions}
          />
          <Chart chartData={this.state.transactions}/>
        </div>
      </div>
    )
  }
}

export default Dashboard;