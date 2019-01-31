import React, { Component } from 'react';
import './AddTransaction.css';
import Axios from "axios";

export default class AddTransaction extends Component {
  state = {
    _id: '',
    amount: '',
    category: '',
    date: ''
  }

  handleChangeAmount = (e) => {
    this.setState(
      {[e.target.id]: parseInt(e.target.value, 10)}
      );
  }

  handleChangeCat = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleChangeDate = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Axios.post('https://warm-wave-52595.herokuapp.com/new',{
    Axios.post('http://localhost:4001/new',{
      ...this.state
    }).then(postedTransaction => {
      console.log(postedTransaction)
      this.props.getTransactions()
    }, this.setState({
      amount: '',
      category: '',
      date: ''
    }))
  }
  
  render() {
    return (
      <div className='AddTransaction-container'>
        <h2 className='AddTransaction-h2'>Add Transaction</h2>
        <div className='AddTransaction-form-wrapper'>
        <form method='POST' onSubmit={this.handleSubmit}>
          <div>
            <input id='amount' type="number" placeholder='$' className="form-control" onChange={this.handleChangeAmount} value={this.state.amount} required/>
          </div>
          <div className="">
            <select id='category' selected="select..." onChange={this.handleChangeCat} className="custom-select" value={this.state.category} required>
              <option value="">categorize...</option>
              <option value="Automobile">Automobile</option>
              <option value="Child Care">Child Care</option>
              <option value="Food">Food</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Income">Income</option>
              <option value="Internet">Internet</option>
              <option value="Misc.">Misc.</option>
              <option value="Mortgage/Rent">Mortgage/Rent</option>
              <option value="Phone">Phone</option>
              <option value="Savings">Savings</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Taxes">Taxes</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>
          <div>
            <input id="date" type="date" onChange={this.handleChangeDate} required/>
          </div>
          <button type="submit" className="AddTransaction-btn">Add</button>
        </form>
        </div>
      </div>
    )
  }
}
