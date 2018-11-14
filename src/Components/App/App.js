import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header className='Header-wrapper'/>
        <Menu className='Menu-wrapper' />
        <Route exact path="/" 
          render={() => <Dashboard className='Dashboard-container'/>}
        />
        <Footer className='Footer-container' />
      </div>
    );
  }
}

export default App;
