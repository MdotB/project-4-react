import React from 'react';
import './TransactionList.css';
import Transaction from '../Transaction/Transaction';

let TransactionList = (props) => {
    console.log(props.transactions)
    let transactionList = props.transactions.map((transaction, id) => (
        <Transaction transaction={transaction} key={id} />
    ))
    return (
      <div className='TransactionList-container'>
        <h2 className="TransactionList-h2">Transactions</h2>
        <div className="TransactionList-list">
            {transactionList}
        </div>
      </div>
    )
}

export default TransactionList;