import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact Table!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <p>
          Create an HTML table of contact information (name, address, phone number) that allows a user to add and remove contacts dynamically. Keep it all on the browser, you don't have to submit to a server.
          </p>

        </p>
      </div>
    );
  }
}

export default App;
