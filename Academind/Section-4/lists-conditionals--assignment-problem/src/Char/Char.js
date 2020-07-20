import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '2px solid black'
      }
    return (
        <div style={style} onClick={props.clicked}>
            {props.char}
        </div>
    )
}

export default char;