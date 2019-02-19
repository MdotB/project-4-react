import React, { Component } from 'react'
import Axios from 'axios'
import "./Transaction.css"

 class Transaction extends Component {
   state = {
     id: null
   }
   componentDidMount(){
     let id = this.props.match.params.transaction_id;
     this.setState({
       id: id
     })
   }
  render() {
    return (
      <div className="TransDetail-container">
        <h2 className="TransDetail-h2">Transaction Detail</h2>
        <p>{this.state.id}</p>
      </div>
    )
  }
}

export default Transaction
