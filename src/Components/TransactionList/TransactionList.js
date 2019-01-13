import React from 'react';
import './TransactionList.css';

let TransactionList = ({transactions}) => {
    const transactionList = transactions.length ? (
        transactions.reverse().map(transaction => {
            let style = {
                color: transaction.category === 'Income' ? 'green' : '#333'
            };
        
            return (
              <div className='Transaction-container list-group-item' key={transaction._id}>
                <p >{transaction.category}</p>
                <p>{transaction.date}</p>
                <p className='transaction-amount' style={style}>${transaction.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </div>
            )
        })
    ) : (
        <p className="center">Feed me transactions!</p>
    )
    console.log(transactionList)
    return (
      <div className='TransactionList-container'>
        <h2 className="TransactionList-h2">Transactions</h2>
        <div className="TransactionList-list list-group">
            {transactionList}
        </div>
      </div>
    )
}

export default TransactionList;