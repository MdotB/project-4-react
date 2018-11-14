import React, { Component } from 'react';
import './AddTransaction.css';

export default class AddTransaction extends Component {
  state = {
    amount: 0,
    category: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChangeAmount = (e) => {
    this.setState({
      amount: e.target.value
    });
  }

  handleChangeCat = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  render() {
    return (
      <div className='AddTransaction-container'>
        <h2 className='AddTransaction-h2'>Add Transaction</h2>
        <div>
        <form method='POST'>
          <div className="input-group mb-3">
            <input type="text" placeholder='enter amount' className="form-control" onChange={this.handleChangeAmount} aria-label="Amount (to the nearest dollar)"/>
          </div>
          <div class="input-group mb-3">
            <select value="" onChange={this.handleChangeCat} className="custom-select" id="inputGroupSelect01">
              <option value="">select...</option>
              <option value="Automobile">Automobile</option>
              <option value="Child Care">Child Care</option>
              <option value="Food">Food</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Internet">Internet</option>
              <option value="Misc.">Misc.</option>
              <option value="Mortgage/Rent">Mortgage/Rent</option>
              <option value="Phone">Phone</option>
              <option value="Savings">Savings</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Taxes">Taxes</option>
              <option value="Uncategorized">Uncategorized</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>
          <button type="submit" onSubmit={this.handleSubmit} className="btn btn-outline-primary">Add</button>
        </form>
        </div>
      </div>
    )
  }
}
