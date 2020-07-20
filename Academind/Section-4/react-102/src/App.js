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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Shanmukhi';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
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
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>        
        <button style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button> 
        {              
          this.state.showPersons ?
            <div>
            <Person                 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Shan!')}   // .bind is the 2nd way to pass a parameter (more preferable)
              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
            </div>  : null
        }
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
