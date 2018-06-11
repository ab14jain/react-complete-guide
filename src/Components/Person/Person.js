import React, { Component } from "react";
import './Person.css';
// class Person extends Component {
//     render(){
//         return(

//         )
//     }
// }

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm a {props.name}, and I'm {props.age} years old. My lucky number is { Math.floor(Math.random() * 30) }</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;