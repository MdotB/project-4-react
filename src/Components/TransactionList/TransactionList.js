import React from 'react';
import { NavLink } from 'react-router-dom';
import './TransactionList.css';


const TransactionList = ({ transactions, deleteTransaction }) => {

    const transactionList = transactions.length ? (
        transactions.map(transaction => {
            let style = {
                color: transaction.category === 'Income' ? 'green' : '#333'
            };
        
            return (
              <tr className='Transaction-container' key={transaction._id}>
                    <td><NavLink to={"/" + transaction._id} className="color-charc">{transaction.date}</NavLink></td>
                    <td className="category"><NavLink to={"/" + transaction._id} className="color-charc">{transaction.category}</NavLink></td>
                    <td className='align-right' style={style}><NavLink to={"/" + transaction._id} className="color-charc">${transaction.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</NavLink></td>
              </tr>
            )
        }).reverse()
    ) : (
        <tr>
            <td>No</td>
            <td>Transactions</td>
            <td>Yet</td>
        </tr>
    )
    console.log(transactionList)
    return (
      <div className='TransactionList-container'>
        <h2 className="TransactionList-h2">Transactions</h2>
        {/* <div id="table-overflow-y"> */}
        <table id="transactions">
            <thead>
                <tr className="color-white bold center">
                    <th>Date</th>
                    <th>Category</th>
                    <th className="left">Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactionList}
            </tbody>
        </table>
        {/* </div> */}
      </div>
    )
}

export default TransactionList;