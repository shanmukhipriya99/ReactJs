import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {         // event object will directly be passed by react
    const personIndex = this.state.persons.findIndex(p => { //runs for every element in the array like map()
      return p.id === id;  //compares the id of the elements in the array to that of the element that we clicked
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( { persons: persons } );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //slice without parameters creates a copy of the array and passes it here
    const persons = [...this.state.persons]; // spread operator crates a new array and copies the elements into this array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {   //this syntax of defining a function allows the usage of this keyword
    const show = this.state.showPersons;
    this.setState({showPersons: !show});
  }

  render () {
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
      );
      
    }

    return (
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
