import React, { Component } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu-wrapper'>
        <ul className='Menu-ul'>
            <li className='Menu-li'>Dashboard</li>
            <li className='Menu-li'>Tracker</li>
            <li className='Menu-li'>...</li>
            <li className='Menu-li'>...</li>
            <li className='Menu-li'>...</li>
        </ul>
        
      </div>
    )
  }
}
