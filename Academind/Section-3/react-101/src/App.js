import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {        // can be used only if class extends to component
    persons: [
      { name: 'Shanmukhi', age: 21},
      { name: 'Stephan', age: 22}
    ]
  }

  render() {
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <button>Switch Name!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Random number generated!</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Random number generated!</Person>
      </div>
    );
  }
}

export default App;
