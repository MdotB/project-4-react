import React from 'react';
import './TransactionList.css';

let TransactionList = ({transactions}) => {
    const transactionList = transactions.length ? (
        transactions.map(transaction => {
            let style = {
                color: transaction.category == 'Income' ? 'green' : 'red'
            };
        
            return (
              <div className='Transaction-container list-group-item' key={transaction.id}>
                <p >{transaction.category}</p>
                <p className='TransactionList-amount' style={style}>{transaction.amount}</p>
              </div>
            )
        })
    ) : (
        <p className="center">Feed me transactions!</p>
    )
    
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