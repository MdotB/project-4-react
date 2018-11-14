import React from 'react'
import AddTransaction from '../AddTransaction/AddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import Balance from '../Balance/Balance';

const Actuals = (props) => {
    return (
      <div>
        <AddTransaction className="AddTransaction-container" />
        <TransactionList transactions={props.transactions} className='TransactionList-container'/>
        <Balance total={40} className='Balance-container'/>
      </div>
    )
}

export default Actuals;