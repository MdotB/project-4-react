import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='Header-container'>
        <Link to="/" id="Header-h2" className="color-white">CA$H BOARD</Link>
      </header>
    )
  }
}
