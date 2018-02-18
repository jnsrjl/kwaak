import React, { Component } from 'react';
import './App.css';
import SightingsList from './components/SightingsList.js';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">Hello Kwaak!</header>
        <SightingsList />
      </div>
    );
  }
}

export default App;
