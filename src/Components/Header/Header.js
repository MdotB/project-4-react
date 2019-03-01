import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='Header-container'>
        <Link to="/" id="Header-title" className="color-white">Cashboard</Link>
      </header>
    )
  }
}
