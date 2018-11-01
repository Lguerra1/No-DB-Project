import React, { Component } from 'react'
import axios from 'axios';

export default class Stateless extends Component {


    constructor(props){
        super(props);

        this.state ={
            url: '',
            email: '',
            userName: ''
        }

        this.getStuff = this.getStuff.bind(this);
        this.handleClick = this.handleClick.bind(this);

        

    };

    handleClick(){
        axios.get("/user").then(info => {
            this.setState({
                email: info.data.email, userName: info.data.username})

        
        console.log(info)})

    }

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
            <button onClick={this.handleClick}>Click for client info</button>
            <h2>Email: {this.state.email}</h2>
            <h2>Username: {this.state.userName}</h2>
            </div>
        )
    }
}