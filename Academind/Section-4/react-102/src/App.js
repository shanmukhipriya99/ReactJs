import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  nameChangedHandler = (event) => {         // event object will directly be passed by react
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      showPersons: false
    } )
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {   //this syntax of defining a function allows the usage of this keyword
    const show = this.state.showPersons;
    this.setState({showPersons: !show});
  }

  render () {
    const style = {
      backgroundColor: 'beige',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {  // map() maps all the elements of the array to the JSX code
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}/>
        })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>        
        <button style={style}
         onClick={this.togglePersonHandler}>Toggle Persons</button>     
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
