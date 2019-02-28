import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header/Header';
import Dashboard from '../Components/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className='App'>
        <Header className='Header-container'/>
        <Route path="/"
          render={() => <Dashboard className='Dashboard-container'/>}
        />
      </div>
      </Provider>
    );
  }
}

export default App;
