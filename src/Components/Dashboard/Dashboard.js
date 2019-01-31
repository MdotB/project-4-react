import React, { Component } from 'react';
import './Dashboard.css';
import AddTransaction from '../AddTransaction/AddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import Balance from '../Balance/Balance';
import Axios from "axios";

class Dashboard extends Component {
  state = {
    transactions: [],
    total: 0
  }

  componentDidMount() {
    this.getTransactions()
  }

  componentWillMount() {
    this.setState({
      transactions: this.state.transactions,
      total: this.state.transactions.reduce( (a, b) => {
        return a + b.amount;
      }, 0)
      })
  }

  getTransactions = () => {
    fetch("http://localhost:4001/")
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

  deleteTransaction = (id) => {
    // Axios.post('https://warm-wave-52595.herokuapp.com/delete/:id')
    Axios.delete(`http://localhost:4001/delete/${id}`)
    .then(res => {
      console.log(res);
      this.getTransactions()
    })
    .catch(err => {
      console.log(err);
    });
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
            deleteTransaction={this.deleteTransaction}
          />
        </div>
      
    )
  }
}

export default Dashboard;