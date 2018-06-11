import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: "Abhishek", age: 28 },
      { name: "Adarsh", age: 26 },
      { name: "Sumit", age: 27},
      { name: "Rahul", age: 30}
    ]
  }

  nameSwitchHandler = () => {
    this.setState({
      persons:[
        { name: "Abhishek!!!!", age: 28 },
        { name: "Adarsh", age: 26 },
        { name: "Sumit", age: 27},
        { name: "Rahul", age: 30}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor : "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "16px"
    }
    return (
      <div className="App">
        <h1>React App</h1> 
        <button style={style} onClick={this.nameSwitchHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age= {this.state.persons[0].age}/> 
        <Person name = {this.state.persons[1].name} age= {this.state.persons[1].age}/>
        <Person name = {this.state.persons[2].name} age= {this.state.persons[2].age}>My hobby is Boxing</Person>
        <Person name = {this.state.persons[3].name} age= {this.state.persons[3].age}/>      
      </div>      
    );
    // return React.createElement("div", {className: "App", id:"kieue2"}, "This is React")
  }
}

export default App;
