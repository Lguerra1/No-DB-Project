
import React, { Component } from 'react'
import axios from 'axios';




export default class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",      
      name:"",
      
    };

    this.whatever = this.whatever.bind(this);
    this.mcTester = this.mcTester.bind(this);

  }

  whatever() {
    var randomer2 = Math.floor((Math.random() * 100 ) +1)
    axios.get("https://jsonplaceholder.typicode.com/photos/" + randomer2).then(response => {
        console.log(response);
        this.setState({
            title: response.data.title,
            

            

        })

    })
  }

  mcTester() {
    var randomer = Math.floor((Math.random() * 100 ) +1)
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

        <button onClick={this.whatever}>Click for placeholder text!</button>
        <h1>{this.state.title}</h1>
        
        
                    
        </div>



    )
  }
}