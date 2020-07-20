import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div >
            <input type='text' onChange={props.change} value={props.username}></input>
        </div>
        
    )
}

export default userInput;