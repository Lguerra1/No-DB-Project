import React, { Component } from 'react'
import axios from 'axios';


export default class Post extends Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            list: []
        };



        axios.get('/Api/Star').then(res => {
            console.log(res.data)
        })



        axios.post('/Api/Star').then(res => {
            console.log(res.data)
        })

    }

    render() {
        return (
            <div>
               
            </div>
        )
    }
}