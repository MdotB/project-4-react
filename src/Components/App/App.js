import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header className='Header-container'/>
        <Route exact path="/" 
          render={() => <Dashboard className='Dashboard-container'/>}
        />
      </div>
    );
  }
}

export default App;
