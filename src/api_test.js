import React from "react";
import { useState } from 'react';

class Api extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            blogs: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:3320/blogs")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    blogs: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, blogs } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                blogs.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.title }, 
                    Full_Name: { item.body }, 
                    User_Email: { item.author } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default Api;