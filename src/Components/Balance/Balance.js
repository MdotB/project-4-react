import React from 'react';
import './Balance.css';

const Balance = ({total}) => {
  console.log(total)
    let style = {
        color: total > 0 ? 'green' : 'red'
    };

    return (
      <div className='Balance-container'>
        <h2 className='Balance-h2'>Balance</h2>
        <p style={style}>${ total }</p>
      </div>
    )
}

export default Balance;
