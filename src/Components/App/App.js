import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='header-navlinks-container'>
            <NavLink to='/arguments' className='header-nav'> Arguments </NavLink>
            <NavLink to='/legends' className='header-nav'> Legends </NavLink>
            <NavLink to='/friends' className='header-nav'> Friends </NavLink>
            <NavLink to='/beachweek' className='header-nav'> BeachWeeks </NavLink>
            <NavLink to='/eurotrip' className='header-nav'> EuroTrip </NavLink>
          </div>
        </header>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
