import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='Header-container'>
        <h2 className='Header-h2'><Link to="/">CA$H BOARD</Link></h2>
      </header>
    )
  }
}
