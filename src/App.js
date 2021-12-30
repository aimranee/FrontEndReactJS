import './App.css';
import Section from './components/section.js';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header><h1>Hanouti</h1></header>
          <Section/>
        <footer>Powred by Javascript</footer>
      </div>
    );
  }
}

export default App;