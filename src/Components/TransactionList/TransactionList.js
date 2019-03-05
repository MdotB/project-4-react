import React from 'react';
import { NavLink } from 'react-router-dom';
import './TransactionList.css';


const TransactionList = ({ transactions }) => {

    const transactionList = transactions.length ? (
        transactions.map(transaction => {
            let style = {
                color: transaction.category === 'Income' ? 'rgb(0, 200, 0)' : '#333'
            };
            return (
              <NavLink to={"/" + transaction._id} className="Transaction-container color-charc" key={transaction._id}>
                <span>{transaction.date}</span>
                <span className="category color-charc">{transaction.category}</span>
                <span className='amount align-right color-charc' style={style}>${transaction.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
              </NavLink>
            )
        }).reverse()
    ) : (
        <div>
            <h2>No Activity Yet</h2>
        </div>
    )
    console.log(transactionList)
    return (
      <div className='TransactionList-container'>
        <h2 className="TransactionList-h2">Recent Activity</h2>
        <div className="grid-table-header color-charc bold">
            <span>Date</span>
            <span>Category</span>
            <span className='amount'>Amount</span>
        </div>
        <div id="transactions">
          {transactionList}
        </div>
            
        
      </div>
    )
}

export default TransactionList;