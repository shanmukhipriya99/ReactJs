import React from 'react';  

const person = (props) => {
    return (
         <div>
             <p>I'm {props.name} and I'm {props.age} years old! <br /> Random Number: {Math.floor(Math.random() * 30)} </p>
             <p>{props.children}</p>
         </div>
         
    )    
}


export default person;

