import React from 'react';
import './Balance.css';

const Balance = ({total}) => {
  console.log(total)
    let style = {
        color: total > 0 ? 'green' : 'red'
    };

    return (
      <div className='Balance-container'>
        <h2 className='Balance-h2' style={style}>${ total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
        <p className='Balance-p'>Current Balance</p>
      </div>
    )
}

export default Balance;
