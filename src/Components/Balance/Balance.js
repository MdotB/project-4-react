import React from 'react';
import './Balance.css';

const Balance = (props) => {
    let style = {
        color: props.total > 0 ? 'green' : 'red'
    };

    return (
      <div className='Balance-container'>
        <h2 className='Balance-h2'>Balance</h2>
        <p style={style}>${ props.total.toFixed(2) }</p>
      </div>
    )
}

export default Balance;
