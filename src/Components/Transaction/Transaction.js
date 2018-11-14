import React from 'react';
import './Transaction.css';

const Transaction = (props) => {
    let style = {
        color: props.transaction.amount > 0 ? 'green' : 'red'
    };

    return (
      <div className='Transaction-container'>
        <p>{props.transaction.category}</p>
        <p style={style}>${props.transaction.amount.toFixed(2)}</p>
      </div>
    )
}

export default Transaction;