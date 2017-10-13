import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './components/A';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <A n="1" />
        <A n="2" />
        <A n="3" />
      </div>
    );
  }
}

export default App;
