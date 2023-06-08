import React from 'react';

import './Card.css';

const Card = (props) => {
    return <li>{`${props.username} (${props.age} years old)`}</li>
};

export default Card;
