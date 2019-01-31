import React, { Component } from 'react';
import './Dashboard.css';
import AddTransaction from '../AddTransaction/AddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import Balance from '../Balance/Balance';

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
      })
  }

  render() {
    return (
        <div className='Dashboard-container'>
          <Balance
            className='Balance-container'
            total={this.state.total}
            transactions={this.state.transactions}
          />
          <AddTransaction 
            className='AddTransaction-container' 
            getTransactions={this.getTransactions}
          />
          <TransactionList
            className='TransactionList-container'
            transactions={this.state.transactions}
            transactionDate={this.state.date}
            deleteTransaction={this.deleteTransaction}
          />
        </div>
      
    )
  }
}

export default Dashboard;