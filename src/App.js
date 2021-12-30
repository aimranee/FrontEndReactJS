import './App.css';
import Section from './components/section.js';
import Details from './components/details'
import React, { Component } from 'react';
import data from "./data/data"

class App extends Component {
  state = {
    page : "home",
    id:0
  }

  setPageHandle=(e,id)=>{
    console.log("it'ok here");
    if(e.target.name==="home")
      this.setState({page:"home"})
    else{
      this.setState(
        {
          page:"details",
          id:id-1
        })
      }
    }

  render() {
    return (
      <div>
        <header><h1>Hanouti</h1></header>
        
        {this.state.page==="home"? <Section pagehandle={this.setPageHandle}/>:<Details info={data[this.state.id]} pageHandle={this.setPageHandle}/>}
          
        <footer>Powred by Javascript</footer>
      </div>
    );
  }
}

export default App;