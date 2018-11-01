import React, { Component } from 'react';
import './App.css';
import List from './component/list';
import Stateless from './component/stateless';
import Function from './component/Function';
import Post from './component/Post';


class App extends Component {

  render() {


    return (

      <div>
        <Function />
        <List />
        <Stateless />
        <Post />
      </div>

    )
  }
}

export default App