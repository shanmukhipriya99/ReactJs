import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <Person name='Shanmukhi' age='21' />
      </div>
    );
  }
}

export default App;
