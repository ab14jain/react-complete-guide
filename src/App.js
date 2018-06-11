import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: "Abhishek", age: 28 },
      { name: "Adarsh", age: 26 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1> 
        <Person name = "Abhishek" age="28"/> 
        <Person name = "Bashir" age="22"/>
        <Person name = "Satya" age="21">My hobby is Boxing</Person>
        <Person name = "Adarsh" age="21"/>      
      </div>      
    );
    // return React.createElement("div", {className: "App", id:"kieue2"}, "This is React")
  }
}

export default App;
