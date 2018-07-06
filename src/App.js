import React, { Component } from 'react';
import './App.css';
import List from './component/list'
import axios from 'axios';

const baseUrl = "http://pokeapi.co";

class App extends Component {
  render(){
    return(
      <List />

    )
  }
}

export default App