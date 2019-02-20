import React, { Component } from 'react';
import './Dashboard.css';
import AddTransaction from '../AddTransaction/AddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import Balance from '../Balance/Balance';
import Transaction from '../Transaction/Transaction';
import Axios from "axios";
import { Route } from 'react-router-dom';

class Dashboard extends Component {
  state = {
    transactions: [],
    total: 0
  }

  componentDidMount() {
    console.log("component mounted")
    this.getTransactions()
  }

  componentWillMount() {
    this.setState({
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
      total: transactions.reduce( (a, b) => { // Add income and subtract expenses
        if (b.category === 'Income') {
          return a + b.amount;
        } else {
          return a + b.amount * -1;
        }
      }, 0)
    }));
  }
  

  // Delete transaction by id and then get transactions
  deleteTransaction = (id) => {
    // Axios.delete(`https://warm-wave-52595.herokuapp.com/delete/${id}`)
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
          {/* <Route path="/:transaction_id" component={Transaction} /> */}
          <Route path="/:transaction_id"
            render={(routerProps) => <Transaction
              className="TransDetail-container"
              transactions={this.state.transactions}
              deleteTransaction={this.deleteTransaction}
              {...routerProps}
            />}
          />
        </div>
      
    )
  }
}

export default Dashboard;