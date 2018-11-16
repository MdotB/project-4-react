import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Header-wrapper'>
        <h1 className='Header-h1'>Cash Board</h1>
        <nav>
            <ul className='Header-ul'>                
              <li className='Header-li'></li>
              <li className='Header-li'></li>
            </ul>
        </nav>
      </div>
    )
  }
}
