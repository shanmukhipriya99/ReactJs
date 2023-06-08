import React from 'react';

import './Card.css';

const Card = (props) => {
    return <div className='card'>
    <li>{`${props.username} (${props.age} years old)`}</li>
    </div>
};

export default Card;
