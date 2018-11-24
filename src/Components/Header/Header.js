import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='Header-container'>
        <h2 className='Header-h2'>CA$H BOARD</h2>
        <nav>
            <ul className='Header-ul'>                
              <li className='Header-li'></li>
              <li className='Header-li'></li>
            </ul>
        </nav>
      </header>
    )
  }
}
