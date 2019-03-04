import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header/Header';
import Dashboard from '../Components/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import SideNav from '../Components/SideNav/SideNav';
import Transaction from '../Components/Transaction/Transaction';
import Axios from 'axios';

class App extends Component {

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
    // fetch("http://localhost:4001/")
    fetch("https://warm-wave-52595.herokuapp.com/")
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
  deleteTransaction = (id, routerProps) => {
    Axios.delete(`https://warm-wave-52595.herokuapp.com/delete/${id}`)
    // Axios.delete(`http://localhost:4001/delete/${id}`)
    .then(res => {
      console.log(res);
      this.getTransactions()
      routerProps.push('/dashboard')
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <Provider store={store}>
      <div className='App'>
        <Header className='Header-container'/>
        <SideNav />
        <Switch>
        <Route exact path="/dashboard"
          render={() => <Dashboard className='Dashboard-container main-container'
          getTransactions={this.getTransactions}
          transactions={this.state.transactions}
          total={this.state.total}
          />}
        />
        <Route exact path="/:transaction_id"
            render={(routerProps) => <Transaction
            className="TransDetail-container main-container"
            transactions={this.state.transactions}
            deleteTransaction={this.deleteTransaction}
            {...routerProps}
            />}
        />
        </Switch>
        
      </div>
      </Provider>
    );
  }
}

export default App;
