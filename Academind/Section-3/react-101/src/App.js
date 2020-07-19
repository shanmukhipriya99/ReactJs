import React, { useState } from "react";  //Component is replaced
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({  //destructuring concept
    persons: [     //useState() can be used multiple times if there are more elements
      { name: "Shanmukhi", age: 21 },
      { name: "Stephan", age: 22 },
    ],
  });

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // this.state.persons[0].name = 'Shanmukhi Priya';  Wrong approach
    // this.setState({
      // setState() is a function from Component and merges the updated state with the previous version
    setPersonsState({  // doesn't merge with the previous version
      persons: [
        { name: "Shanmukhi Priya", age: 21 },
        { name: "Stephan", age: 21 },
      ],
    });
  };

  // render() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button onClick={switchNameHandler}>Switch Name!</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        {" "}
        Random number generated!
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        {" "}
        Random number generated!
      </Person>
    </div>
  );
};
// }

export default app;

// state = {        // can be used only if class extends to component
//   persons: [
//     { name: 'Shanmukhi', age: 21},
//     { name: 'Stephan', age: 22}
//   ]
// }
