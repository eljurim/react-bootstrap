import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeSwitcher from './ThemeSwitcher'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    );
  }
}

export default App;
