import React from 'react';

const validation = (props) => {
    let output = 'Text is long enough!';
    if (props.length <=5) {
        output = 'Text is too short!';
    }
    return (
        <div>
                <p>{output}</p> 
        </div>
    )
}

export default validation;