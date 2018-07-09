
import React, { Component } from 'react'
import axios from 'axios';




export default class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      url: "",
      films:""
      
    };

    this.whatever = this.whatever.bind(this);
    this.mcTester = this.mcTester.bind(this);

  }

  whatever() {
    axios.get("https://jsonplaceholder.typicode.com/photos/4").then(response => {
        console.log(response);
        this.setState({
            title: response.data.title,
            url: response.data.thumbnailUrl,

            

        })

    })
  }

  mcTester() {
      axios.get("https://swapi.co/api/people/4").then(response => {
          console.log(response);
          this.setState({
              name: response.data.films

          })
      })
  }

 

  render() {
    return (
      <div>                
        <button onClick={this.mcTester}>Click me for Star Wars </button>        
        <h1>{this.state.films}</h1>
        <img src={this.state.films}/>
        <button onClick={this.whatever}>Click me for lauren impsum!</button>
        <h1>{this.state.title}</h1>
        <img src={this.state.url}/>               
        </div>



    )
  }
}