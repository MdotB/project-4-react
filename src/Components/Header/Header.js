import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='Header-container'>
        <NavLink to="/" id="Header-h2" className="color-white">Dashboard</NavLink>
      </header>
    )
  }
}
