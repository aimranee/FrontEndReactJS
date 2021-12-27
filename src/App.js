import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Section from './components/section.js';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;