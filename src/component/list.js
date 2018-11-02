
import React, { Component } from 'react'
import axios from 'axios';

export default class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: [],
      name: "",
      sprite: [],
      back: []
    };

    this.whatever = this.whatever.bind(this);
    this.mcTester = this.mcTester.bind(this);

  }

  whatever() {
    var randomer = Math.floor((Math.random() * 900) + 1)
    axios.get("https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/" + randomer).then(response => {
      console.log(response.data)
      this.setState({
        title: response.data,
        sprite: response.data.sprites.front_default,
        back: response.data.sprites.back_default
      })

    })
  }

  mcTester() {
    var randomer = Math.floor((Math.random() * 100) + 1)
    axios.get("https://swapi.co/api/people/" + randomer).then(response => {
      console.log(response);
      this.setState({
        name: response.data

      })
    })
  }



  render() {
    return (
     
      <div>

        <button onClick={this.mcTester}>Click for a Star Wars Character </button>
        <h1>Name: {this.state.name.name}</h1>
        <h1>Height: {this.state.name.height}</h1>
        <h1>Mass: {this.state.name.mass}</h1>
        <h1>Birth Year: {this.state.name.birth_year}</h1>

        <button onClick={this.whatever}>Click for a random Pokemon</button>
        <h1>Name: {this.state.title.name}</h1>
        <h1>Height: {this.state.title.height}</h1>
        <h1>Number: {this.state.title.order}</h1>

        <div className="pokeDisplay">
          <div><img  src={this.state.sprite} /></div>
          <div><img  src={this.state.back} /></div>
        </div>

      </div>

    )
  }
}