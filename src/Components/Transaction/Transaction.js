import React, { Component } from 'react'
import Axios from 'axios'
import "./Transaction.css"

 class Transaction extends Component {
  state = {
    _id: '',
    amount: '',
    category: '',
    date: ''
  }
  componentDidMount(){
    let transaction = this.props.match.params.transaction_id;
    //  Axios.get(`http://localhost:4001/${transaction}`)
     Axios.get(`https://warm-wave-52595.herokuapp.com/${transaction}`)
    .then(res => {
     this.setState({
       _id: res.data._id,
       amount: res.data.amount,
       category: res.data.category,
       date: res.data.date
     })
     console.log(res)
    })
  }
   

   componentDidUpdate(prevProps, prevState, snapshot){
     let transaction = this.props.match.params.transaction_id;
     if (transaction !== prevState._id) {
      // Axios.get(`http://localhost:4001/${transaction}`)
      Axios.get(`https://warm-wave-52595.herokuapp.com/${transaction}`)
     .then(res => {
      this.setState({
        _id: res.data._id,
        amount: res.data.amount.toFixed(2),
        category: res.data.category,
        date: res.data.date
      })
      console.log(res)
     })
     }
     console.log(this.props.transactions[this.props.transactions.length -1])
   }
   
  render() {
    const deleteTransaction = this.props.deleteTransaction
    // const transaction = this.state.transaction ? () : (return false)
    return (
      <div className="TransDetail-container">
        <h2 className="TransDetail-h2">Transaction Detail</h2>
        <div className="transaction-data">
          <p>{this.state.date}</p>
          <p>{this.state.category}</p>
          <p className="transaction-amount">${this.state.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <button className="delete" onClick={() => deleteTransaction(this.state._id)}><i className="fas fa-trash-alt"></i></button>
      </div>
    )
  }
}

export default Transaction
