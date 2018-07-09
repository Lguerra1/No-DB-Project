import React, { Component } from 'react';
import './App.css';
import List from './component/list';
import Stateless from './component/stateless';



class App extends Component {

  render() {


    return (

      <div>
      <List />
      <Stateless />
      </div>

    )
  }
}

export default App