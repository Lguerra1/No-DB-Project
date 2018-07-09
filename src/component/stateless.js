import React, { Component } from 'react'
import axios from 'axios';

export default class Stateless extends Component {


    constructor(props){
        super(props);

        this.state ={
            url: ''
        }

        this.getStuff = this.getStuff.bind(this);

        

    };

    getStuff() {
        axios.get("https://jsonplaceholder.typicode.com/photos/5").then(response =>{
            console.log(response);
            this.setState({
                url: response.data.thumbnailUrl
            })
        })
    }


    render(){
        return(
            <div>
            <button onClick={this.getStuff}>Click on me for Img </button>
            <img src={this.state.url}/>
            

            </div>
        )
    }
}