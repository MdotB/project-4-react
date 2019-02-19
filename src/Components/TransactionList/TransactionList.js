import React from 'react';
import { Link } from 'react-router-dom';
import './TransactionList.css';


const TransactionList = ({ transactions, deleteTransaction }) => {

    const transactionList = transactions.length ? (
        transactions.reverse().map(transaction => {
            let style = {
                color: transaction.category === 'Income' ? 'green' : '#333'
            };
        
            return (
              <div className='Transaction-container list-group-item' key={transaction._id}>
                <Link to={"/" + transaction._id}>
                    <div className="transaction-data">
                        <p>{transaction.date}</p>
                        <p className="category">{transaction.category}</p>
                        <p className='transaction-amount' style={style}>${transaction.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                </Link>
                    <button className="delete" onClick={() => deleteTransaction(transaction._id)}><i className="fas fa-trash-alt"></i></button>
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