import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Header-wrapper'>
        <nav>
            <ul className='Header-ul'>
                <li className='Header-li'><button className='create-button'>New Budget</button></li>
                <li className='Header-li'>ITEM 2</li>
                <li className='Header-li'>ITEM 3</li>
            </ul>
        </nav>
      </div>
    )
  }
}
